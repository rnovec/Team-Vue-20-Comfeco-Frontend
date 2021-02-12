<template>
  <div class="has-text-centered">
    <small class="has-text-weight-bold">
      <slot>También puedes iniciar con tus redes</slot>
    </small>
    <b-button class="mt-4" expanded type="is-link" icon-left="facebook">
      Ingresar con Facebook
    </b-button>
    <b-button class="mt-2" expanded type="is-google" icon-left="google">
      Ingresar con Google
    </b-button>
  </div>
</template>
