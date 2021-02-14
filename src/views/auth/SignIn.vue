<template>
  <div>
    <AuthNav />
    <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
      <InputWithValidation
        rules="required|email"
        type="email"
        name="email"
        label="Correo electrónico"
        placeholder="somebody@example.com"
        v-model="email"
      />
      <InputWithValidation
        rules="required"
        type="password"
        name="password"
        label="Contraseña"
        password-reveal
        icon="lock"
        v-model="password"
      />
      <b-field>
        <router-link
          tag="a"
          to="password-recovery"
          class="button is-primary is-text is-small is-inverted"
        >
          <small>¿Olvidaste tu contraseña?</small>
        </router-link>
        <b-checkbox size="is-small">
          <small>Mantenerme conectado</small>
        </b-checkbox>
      </b-field>
      <b-button
        type="is-primary"
        expanded
        fullwidth
        @click="handleSubmit(submit)"
        :loading="loading"
      >
        Ingresar
      </b-button>
      <SocialButtons class="mt-4" />
    </ValidationObserver>
  </div>
</template>

<script>
  import { AuthNav, SocialButtons } from "./components";

  export default {
    name: "LoginForm",
    data() {
      return {
        loading: false,
        email: "",
        password: "",
      };
    },
    components: {
      AuthNav,
      SocialButtons,
    },
    methods: {
      async submit() {
        this.loading = true;
        try {
          await this.login(this.email, this.password);
        } catch (error) {
          this.$snackbar(error.toString());
        } finally {
          this.loading = false;
        }
      },
    },
  };
</script>
