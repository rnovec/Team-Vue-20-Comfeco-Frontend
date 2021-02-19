<template>
  <div>
    <AuthNav />
    <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
      <InputWithValidation
        icon="account"
        rules="required"
        name="nick"
        placeholder="Nick"
        v-model="form.nickname"
      />
      <InputWithValidation
        icon="email"
        rules="required|email"
        type="email"
        name="email"
        placeholder="Correo electrónico"
        v-model="form.email"
      />
      <InputWithValidation
        rules="required|min:8"
        type="password"
        name="password"
        placeholder="Contraseña"
        password-reveal
        icon="lock"
        v-model="form.password"
      />
      <InputWithValidation
        rules="required|confirmed:password"
        name="confirmation"
        type="password"
        placeholder="Confirmar contraseña"
        password-reveal
        icon="lock"
        v-model="form.confirmation"
      />
      <b-button
        type="is-primary"
        expanded
        fullwidth
        @click="handleSubmit(submit)"
        :loading="loading"
      >
        Crear una cuenta
      </b-button>
    </ValidationObserver>
    <social-buttons class="mt-4">
      O regístrate usando
    </social-buttons>
    <TermsAndConditions class="mt-4" />
  </div>
</template>

<script>
  import { AuthNav, SocialButtons, TermsAndConditions } from "./components";

  export default {
    name: "LoginForm",
    data() {
      return {
        loading: false,
        form: {
          email: "",
          nickname: "",
          password: "",
          confirmation: "",
        },
      };
    },
    components: { AuthNav, SocialButtons, TermsAndConditions },
    methods: {
      async submit() {
        this.loading = true;
        try {
          await this.register(this.form);
        } catch (error) {
          console.log(error.toString());
          this.$snackbar(
            "Algo ha salido mal, por favor revisa que tus credenciales sean las correctas"
          );
        } finally {
          this.loading = false;
        }
      },
    },
  };
</script>
