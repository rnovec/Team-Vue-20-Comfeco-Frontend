<template>
  <section class="hero is-light is-fullheight">
    <div class="hero-body" style="justify-content: center;">
      <div class="box" style="max-width: 400px;">
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

  p.subtitle {
    padding-top: 1rem;
  }
</style>
