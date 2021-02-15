<template>
  <div class="has-text-centered">
    <small class="has-text-weight-bold">
      <slot>También puedes iniciar con tus redes</slot>
    </small>
    <b-button
      class="mt-4"
      expanded
      type="is-link"
      icon-left="facebook"
      @click="handleSocialLogin('facebook')"
    >
      Ingresar con Facebook
    </b-button>
    <b-button
      class="mt-2"
      expanded
      type="is-google"
      icon-left="google"
      @click="handleSocialLogin('google')"
    >
      Ingresar con Google
    </b-button>
  </div>
</template>
<script>
  export default {
    methods: {
      async handleSocialLogin(service) {
        try {
          await this.socialSignIn(service);
        } catch (error) {
          this.$snackbar(error.toString());
        }
      },
    },
  };
</script>
