<template>
  <div>
    <h1 class="title is-5">
      Reasignar contraseña
    </h1>
    <h2 class="subtitle is-6">
      Te enviaremos un correo electrónico con un enlace privado para que
      reasignes tu contraseña. Este enlace será por una hora.
    </h2>
    <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
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
  </div>
</template>

<script>
  export default {
    name: "LoginForm",
    data() {
      return {
        loading: false,
        email: "",
      };
    },
    methods: {
      async submit() {
        this.loading = true;
        try {
          await this.resetPassword(this.email);
        } catch (error) {
          this.$snackbar(error.message);
        } finally {
          this.loading = false;
        }
      },
    },
  };
</script>
