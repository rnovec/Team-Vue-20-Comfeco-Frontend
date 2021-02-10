<template>
  <section class="hero is-light is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="column is-8 is-offset-2">
          <LoginForm />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  // @ is an alias to /src
  import LoginForm from "@/components/LoginForm.vue";

  export default {
    name: "Home",
    components: {
      LoginForm,
    },
  };
</script>
