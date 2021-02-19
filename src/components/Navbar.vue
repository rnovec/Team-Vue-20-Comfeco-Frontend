<template>
  <b-navbar fixed-top centered shadow>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="../assets/logo.png" width="112" height="28" />
      </b-navbar-item>
    </template>
    <template v-if="loguedUser || $route.name === 'Home'" #start>
      <b-navbar-item href="#">
        Inicio
      </b-navbar-item>
      <b-navbar-item href="#">
        Comunidades
      </b-navbar-item>
      <b-navbar-item href="#">
        Talleres
      </b-navbar-item>
      <b-navbar-item href="#">
        Creadores de contenido
      </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-item v-if="loguedUser">
        <b-icon class="has-update-mark" icon="bell"> </b-icon>
      </b-navbar-item>
      <b-navbar-dropdown boxed v-if="loguedUser">
        <template #label>
          <div class="media">
            <div class="media-left">
              <figure class="image is-rounded is-32x32">
                <img
                  class="is-rounded"
                  src="https://avatars.dicebear.com/4.5/api/gridy/.svg"
                />
              </figure>
            </div>
            <div class="media-content">
              <div class="content mt-1">
                {{ loguedUser.displayName }}
              </div>
            </div>
          </div>
        </template>
        <b-navbar-item>
          <b-icon icon="account"> </b-icon>
          <span>Mi Cuenta</span>
        </b-navbar-item>
        <hr class="dropdown-divider" />
        <b-navbar-item
          aria-role="menuitem"
          class="has-text-danger"
          @click="logout"
        >
          <b-icon icon="logout"></b-icon>
          <span>Salir</span>
        </b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-item
        v-else-if="$route.name !== 'SignIn' && $route.name !== 'SignUp'"
        tag="div"
      >
        <div class="buttons">
          <router-link tag="a" to="/sign-in" class="button is-primary">
            <strong>Iniciar sesión</strong>
          </router-link>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<style>
  .icon.has-update-mark {
    position: relative;
  }
  .icon.has-update-mark:after {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    position: absolute;
    top: 1px;
    right: 1px;
    background-color: red;
    border-radius: 290486px;
  }
</style>
