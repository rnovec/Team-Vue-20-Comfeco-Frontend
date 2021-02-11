<template>
  <div class="home">
    <h1>Si estás viendo esto estás logeado</h1>
    <p>Nickname: {{ loguedUser.displayName }}</p>
    <p>Email: {{ loguedUser.email }}</p>
    <button @click="signOut">boton de prueba para cerrar sesión</button>
  </div>
</template>

<script>
  import store, { logout } from "@/store";

  export default {
    name: "Home",
    computed: {
      loguedUser() {
        return store.user;
      },
    },
    methods: {
      signOut: function() {
        logout().then(() => this.$router.push("/sign-in"));
      },
    },
  };
</script>
