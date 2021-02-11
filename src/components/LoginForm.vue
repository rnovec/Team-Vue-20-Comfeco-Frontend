<template>
  <div class="box">
    <div class="column has-text-centered">
      <div id="nav">
        <p
          class="is-inline is-bold has-text-grey-dark"
          style="cursor: pointer"
          :class="{ 'active-state': isLogin }"
          role="button"
          @click="changeState('login')"
        >
          Iniciar Sesión
        </p>
        |
        <p
          class="is-inline is-bold has-text-grey-dark"
          style="cursor: pointer"
          :class="{ 'active-state': isRegistering }"
          role="button"
          @click="changeState('register')"
        >
          Regístrate
        </p>
        |
        <p
          class="is-inline is-bold has-text-grey-dark"
          style="cursor: pointer"
          :class="{ 'active-state': isPasswordRecovery }"
          role="button"
          @click="changeState('recovery')"
        >
          Recuperar cuenta
        </p>
      </div>
    </div>
    <form class="mt-2" @submit.prevent="handleFormSubmit">
      <div class="columns">
        <div class="column" v-if="isRegistering">
          <b-field label="Nick" icon-right="email">
            <b-input
              icon="account"
              v-model="nickname"
              placeholder="my-awesome-nickname"
              required
            ></b-input>
          </b-field>
        </div>
        <div class="column">
          <b-field label="Correo electrónico">
            <b-input
              type="email"
              icon="email"
              v-model="email"
              placeholder="somebody@example.com"
              required
            ></b-input>
          </b-field>
        </div>
      </div>
      <div class="columns">
        <div class="column" v-if="!isPasswordRecovery">
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
        </div>
        <div class="column" v-if="isRegistering">
          <b-field label="Confirmar contraseña">
            <b-input
              type="password"
              v-model="confirmPassword"
              password-reveal
              icon="lock-open"
              required
            >
            </b-input>
          </b-field>
        </div>
      </div>
      <b-field v-if="!isPasswordRecovery">
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
        {{ isPasswordRecovery ? "Recuperar cuenta" : "Ingresar" }}
      </b-button>
      <br />
      <div class="has-text-centered">
        <small>
          Tambien puedes iniciar con tus redes
        </small>
        <br />
        <br />
        <b-button size="is-small" type="is-link" icon-left="facebook">
          Ingresar con Facebook
        </b-button>
        &nbsp;
        <b-button size="is-small" icon-left="google">
          Ingresar con Google
        </b-button>
      </div>
    </form>
  </div>
</template>

<script>
  import * as fb from "../firebaseconfig";
  export default {
    name: "LoginForm",
    data() {
      return {
        state: "register", // login, register, recovery
        loading: false,
        email: "",
        nickname: "",
        password: "",
        confirmPassword: "",
      };
    },
    methods: {
      changeState: function(state) {
        this.state = state;
      },
      handleFormSubmit: function() {
        this.loading = true;
        if (this.isPasswordRecovery) {
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
        } else {
          if (this.password.length >= 8) {
            if (this.isLogin) {
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
            } else if (this.isRegistering) {
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
            }
          } else {
            this.loading = false;
            this.fireErrorAlert("La contraseña proporcionada es muy corta");
          }
        }
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

<style scoped>
  .hero.is-success {
    background: #f2f6fa;
  }
  .hero .nav,
  .hero.is-success .nav {
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  p {
    font-weight: 700;
  }
  p.subtitle {
    padding-top: 1rem;
  }

  .has-text-black {
    color: black;
  }

  .active-state {
    color: #42b983 !important;
  }
</style>
