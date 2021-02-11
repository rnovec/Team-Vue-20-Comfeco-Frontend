<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <router-link tag="a" class="navbar-item" to="/home">
          <img src="../assets/logo.png" width="112" height="28" />
        </router-link>
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-start"></div>
        <div class="navbar-end" v-if="$route.name === 'PasswordRecovery'">
          <div class="navbar-item">
            <div class="buttons">
              <router-link
                tag="a"
                to="/sign-in"
                class="button is-small is-primary"
                >Iniciar sesión</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
