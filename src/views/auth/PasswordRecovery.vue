<template>
  <div>
    <h1 class="title is-5">
      Reasignar contraseña
    </h1>
    <h2 class="subtitle is-6">
      Te enviaremos un correo electrónico con un enlace privado para que
      reasignes tu contraseña. Este enlace será por una hora.
    </h2>
    <ValidationObserver
      v-if="!resetEmailSent"
      ref="observer"
      v-slot="{ handleSubmit }"
    >
      <InputWithValidation
        icon="email"
        rules="required|email"
        type="email"
        name="email"
        placeholder="Correo electrónico"
        v-model="email"
      />
      <b-button
        type="is-primary"
        expanded
        fullwidth
        @click="handleSubmit(submit)"
        :loading="loading"
      >
        Enviar enlace
      </b-button>
    </ValidationObserver>
    <template v-else>
      <b-message type="is-warning">
        Revise su bandeja de entrada para conocer los siguientes pasos. Si no
        recibe un correo electrónico y no está en su carpeta de correo no
        deseado, esto podría significar que se registró con una dirección
        diferente.
      </b-message>
      <div class="buttons is-flex is-justify-content-center">
        <b-button tag="router-link" to="/sign-in" type="is-text" outlined>
          Iniciar sesión
        </b-button>
        <b-button tag="router-link" to="/sign-up" type="is-text" outlined>
          Registrarse
        </b-button>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    name: "LoginForm",
    data() {
      return {
        loading: false,
        email: "",
        resetEmailSent: false,
      };
    },
    methods: {
      async submit() {
        this.loading = true;
        try {
          await this.resetPassword(this.email);
          this.$snackbar("¡El correo fue enviado correctamente!", {
            type: "is-success",
          });
          this.resetEmailSent = true;
          this.email = "";
          this.$refs.observer.reset();
        } catch (error) {
          this.$snackbar(error.message);
        } finally {
          this.loading = false;
        }
      },
    },
  };
</script>
