<template>
  <div>
    <AuthNav />
    <form class="mt-2" @submit.prevent="submit">
      <b-field label="Correo electrónico">
        <b-input
          type="email"
          icon="email"
          v-model="email"
          placeholder="somebody@example.com"
          required
        ></b-input>
      </b-field>
      <b-field label="Contraseña">
        <b-input
          type="password"
          v-model="password"
          password-reveal
          icon="lock"
          required
        >
        </b-input>
      </b-field>
      <b-field>
        <router-link tag="a" to="password-recovery">
          <small>¿Olvidaste tu contraseña?</small>
        </router-link>
      </b-field>
      <b-field class="has-text-centered">
        <b-checkbox size="is-small">
          Mantenerme conectado
        </b-checkbox>
      </b-field>

      <b-button
        type="is-primary"
        expanded
        fullwidth
        native-type="submit"
        :loading="loading"
      >
        Ingresar
      </b-button>
      <br />
      <SocialButtons />
      <br />
    </form>
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
