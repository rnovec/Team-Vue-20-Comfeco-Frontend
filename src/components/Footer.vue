<template>
  <footer class="footer is-fixed-bottom custom-footer">
    <div class="columns">
      <div class="column has-text-centered mb-1">
        <router-link tag="a" class="" to="/home">
          <img src="../assets/logo3.png" width="75" height="40" />
        </router-link>
      </div>
      <div class="columns has-text-centered copyr flex">
        <p>
          <strong>Copyright © 2021 Todos los Derechos son Reservados</strong> by
          <a href="https://www.comfeco.com/">COMFECO</a>
        </p>
      </div>
      <div class="column has-text-centered">
        <p class="inline mb-2">Siguenos en nuestras redes</p>
        <div>
          <a href=""
            ><img
              src="../assets/facebook_icon-icons.com_59205.svg"
              alt=""
              width="40"
              height="40"
          /></a>
          <a href=""
            ><img
              src="../assets/discord_101785.svg"
              alt=""
              width="40"
              height="40"
          /></a>
          <a href=""
            ><img
              src="../assets/youtube_47003.png"
              alt=""
              width="40"
              height="40"
          /></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
  .copyr {
    align-items: center;
  }

  .custom-footer {
    padding: 1em !important;
  }
</style>
