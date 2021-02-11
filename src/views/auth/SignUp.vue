<template>
  <form class="mt-2" @submit.prevent="submit">
    <b-field label="Nick" icon-right="email">
      <b-input
        icon="account"
        v-model="nickname"
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
        v-model="email"
        placeholder="somebody@example.com"
        required
      ></b-input>
    </b-field>
    <b-field label="Contraseña">
      <b-input
        type="password"
        name="password"
        v-model="password"
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
        v-model="confirmPassword"
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
        nickname: "",
        password: "",
        confirmPassword: "",
      };
    },
    components: {
      SocialButtons,
    },
    methods: {
      submit() {
        this.loading = true;
        if (this.password.length >= 8) {
          if (this.password === this.confirmPassword) {
            fb.auth
              .createUserWithEmailAndPassword(this.email, this.password)
              .then(async user => {
                // El usuario se ha registrado correctamente
                // Este es el token de autenticacion
                const idToken = await fb.auth.currentUser.getIdToken();
                // Este es el refresh token
                const { refreshToken } = user.user;
                console.log(idToken);
                console.log(refreshToken);
                await fb.auth.currentUser.updateProfile({
                  displayName: this.nickname,
                });
                this.loading = false;
                this.$router.push("/home");
              })
              .catch(error => {
                this.loading = false;
                const { message } = error;
                this.fireErrorAlert(message);
              });
          } else {
            this.loading = false;
            this.fireErrorAlert(
              "Las contraseñas de confirmación no coinciden. Por favor, revise"
            );
          }
        } else {
          this.loading = false;
          this.fireErrorAlert("La contraseña proporcionada es muy corta");
        }
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
