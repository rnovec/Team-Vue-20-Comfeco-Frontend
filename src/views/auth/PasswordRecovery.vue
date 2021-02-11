<template>
  <div>
    <h1 class="title is-5">
      Reasignar contraseña
    </h1>
    <h2 class="subtitle is-7">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
      quod alias dolores reiciendis animi maxime esse laborum porro nulla, hic
      saepe inventore exercitationem numquam tempore dolor.
    </h2>
    <form class="mt-2" @submit.prevent="submit">
      <div class="columns">
        <div class="column">
          <b-field>
            <b-input
              type="email"
              icon="email"
              name="email"
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
