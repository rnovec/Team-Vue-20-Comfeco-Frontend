<template>
  <section class="hero is-light is-fullheight">
    <div class="hero-body" style="justify-content: center;">
      <div class="box">
        <div class="column has-text-centered">
          <div id="nav">
            <router-link
              tag="a"
              class="is-inline is-bold has-text-grey-dark"
              role="button"
              to="/sign-in"
            >
              Iniciar sesión
            </router-link>
            |
            <router-link
              tag="a"
              class="is-inline is-bold has-text-grey-dark"
              role="button"
              to="/sign-up"
            >
              Regístrate
            </router-link>
          </div>
        </div>
        <router-view />
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "AuthLayout",
  };
</script>

<style>
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
