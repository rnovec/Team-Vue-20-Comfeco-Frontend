<template>
  <div class="column has-text-centered">
    <div id="nav">
      <router-link
        tag="a"
        exact-active-class="is-primary has-text-weight-bold"
        class="button is-text is-inverted"
        to="/sign-in"
      >
        Iniciar sesión
      </router-link>
      <router-link
        tag="a"
        exact-active-class="is-primary has-text-weight-bold"
        class="button is-text is-inverted"
        to="/sign-up"
      >
        Regístrate
      </router-link>
    </div>
  </div>
</template>
