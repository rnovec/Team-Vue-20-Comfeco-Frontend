<template>
  <div class="home">
    <h1>Si estás viendo esto estás logeado</h1>
    <p>Nickname: {{ loguedUser.displayName }}</p>
    <p>Email: {{ loguedUser.email }}</p>
    <button @click="logout">boton de prueba para cerrar sesión</button>
  </div>
</template>

<script>
  export default {
    name: "Home",
  };
</script>
