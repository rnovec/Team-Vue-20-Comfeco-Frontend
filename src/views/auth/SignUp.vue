<template>
  <div>
    <AuthNav />
    <form class="mt-2" @submit.prevent="submit">
      <b-field label="Nick" icon-right="email">
        <b-input
          icon="account"
          v-model="form.nickname"
          name="nick"
          placeholder="my-awesome-nickname"
          required
        ></b-input>
      </b-field>
      <b-field label="Correo electrónico">
        <b-input
          type="email"
          icon="email"
          name="email"
          v-model="form.email"
          placeholder="somebody@example.com"
          required
        ></b-input>
      </b-field>
      <b-field label="Contraseña">
        <b-input
          type="password"
          name="password"
          v-model="form.password"
          password-reveal
          icon="lock"
          required
        >
        </b-input>
      </b-field>
      <b-field label="Confirmar contraseña">
        <b-input
          type="password"
          name="confirm"
          v-model="form.confirmPassword"
          password-reveal
          icon="lock-open"
          required
        >
        </b-input>
      </b-field>
      <b-button
        type="is-primary"
        expanded
        fullwidth
        native-type="submit"
        :loading="loading"
      >
        Crear una cuenta
      </b-button>
      <br />
      <SocialButtons />
    </form>
  </div>
</template>

<script>
  import { signUp } from "@/store";
  import { AuthNav, SocialButtons } from "./components";

  export default {
    name: "LoginForm",
    data() {
      return {
        loading: false,
        form: {
          email: "",
          nickname: "",
          password: "",
          confirmPassword: "",
        },
      };
    },
    components: {
      AuthNav,
      SocialButtons,
    },
    methods: {
      async submit() {
        this.loading = true;
        if (this.form.password.length >= 8) {
          if (this.form.password === this.form.confirmPassword) {
            try {
              await signUp(this.form);
              this.$router.push("/home");
            } catch (error) {
              this.$snackbar(error.toString());
            } finally {
              this.loading = false;
            }
          } else {
            this.loading = false;
            this.$snackbar(
              "Las contraseñas de confirmación no coinciden. Por favor, revise"
            );
          }
        } else {
          this.loading = false;
          this.$snackbar("La contraseña proporcionada es muy corta");
        }
      },
    },
  };
</script>
