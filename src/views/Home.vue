<template>
  <div class="home">
    <h1>Si estás viendo esto estás logeado</h1>
    <p>Nickname: {{ user.displayName }}</p>
    <p>Email: {{ user.email }}</p>
    <button @click="signOut">boton de prueba para cerrar sesión</button>
  </div>
</template>

<script>
  import * as fb from "@/firebaseconfig";

  export default {
    name: "Home",
    mounted() {
      const { displayName, email } = fb.auth.currentUser;
      this.user = { displayName, email };
    },
    data() {
      return {
        user: {},
      };
    },
    methods: {
      signOut: function() {
        fb.auth.signOut().then(() => this.$router.push("/login"));
      },
    },
  };
</script>
