<template>
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
</template>

<script>
  import * as fb from "@/firebaseconfig";
  import SocialButtons from "./components/SocialButtons";

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
      SocialButtons,
    },
    methods: {
      submit() {
        this.loading = true;
        fb.auth
          .signInWithEmailAndPassword(this.email, this.password)
          .then(async user => {
            // El usuario ha iniciado sesión con éxito
            // Este es el token de autenticacion
            const idToken = await fb.auth.currentUser.getIdToken();
            // Este es el refresh token
            const { refreshToken } = user.user;
            console.log(idToken);
            console.log(refreshToken);
            this.loading = false;
            this.$router.push("/home");
          })
          .catch(error => {
            this.loading = false;
            const { message } = error;
            this.fireErrorAlert(message);
          });
      },
      fireErrorAlert(text) {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text,
        });
      },
      fireSuccessAlert(text) {
        this.$swal({
          icon: "success",
          title: "¡Enhorabuena!",
          text,
        });
      },
    },
  };
</script>
