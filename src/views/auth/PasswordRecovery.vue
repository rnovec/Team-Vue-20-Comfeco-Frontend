<template>
  <form class="mt-2" @submit.prevent="handleFormSubmit">
    <div class="columns">
      <div class="column">
        <b-field>
          <b-input
            type="email"
            icon="email"
            v-model="email"
            placeholder="Correo electrónico"
            required
          ></b-input>
        </b-field>
      </div>
    </div>
    <b-button
      type="is-primary"
      expanded
      fullwidth
      native-type="submit"
      :loading="loading"
    >
      Enviar enlace
    </b-button>
  </form>
</template>

<script>
  import * as fb from "@/firebaseconfig";
  export default {
    name: "LoginForm",
    data() {
      return {
        loading: false,
        email: "",
      };
    },
    methods: {
      handleFormSubmit: function() {
        this.loading = true;
        fb.auth
          .sendPasswordResetEmail(this.email)
          .then(() => {
            this.loading = false;
            this.fireSuccessAlert("El correo se ha enviado a su cuenta");
          })
          .catch(error => {
            this.loading = false;
            this.fireErrorAlert(
              `El correo no pudo ser enviado, causa del error: ${error.message}`
            );
          });
      },
      fireErrorAlert: function(text) {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text,
        });
      },
      fireSuccessAlert: function(text) {
        this.$swal({
          icon: "success",
          title: "¡Enhorabuena!",
          text,
        });
      },
    },
    computed: {
      isRegistering: function() {
        return this.state === "register";
      },
      isLogin: function() {
        return this.state === "login";
      },
      isPasswordRecovery: function() {
        return this.state === "recovery";
      },
    },
  };
</script>
