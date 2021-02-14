<template>
  <div>
    <AuthNav />
    <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
      <InputWithValidation
        icon="account"
        rules="required"
        name="nick"
        label="Nick"
        placeholder="my-awesome-nickname"
        v-model="form.nick"
      />
      <InputWithValidation
        icon="email"
        rules="required|email"
        type="email"
        name="email"
        label="Correo electrónico"
        placeholder="somebody@example.com"
        v-model="form.email"
      />
      <InputWithValidation
        rules="required|min:8"
        type="password"
        name="password"
        label="Contraseña"
        password-reveal
        icon="lock"
        v-model="form.password"
      />
      <InputWithValidation
        rules="required|confirmed:password"
        name="confirmation"
        type="password"
        label="Confirmar contraseña"
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
          this.$snackbar(error.toString());
        } finally {
          this.loading = false;
        }
      },
    },
  };
</script>
