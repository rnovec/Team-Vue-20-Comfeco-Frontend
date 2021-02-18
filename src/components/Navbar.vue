<template>
  <b-navbar fixed-top centered shadow>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="../assets/logo.png" width="112" height="28" />
      </b-navbar-item>
    </template>
    <template v-if="loguedUser" #start>
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

    <template #end
      ><b-navbar-dropdown v-if="loguedUser">
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
        <b-navbar-item href="#">
          Mi Cuenta
        </b-navbar-item>
        <b-navbar-item @click="logout">
          Salir
        </b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-item tag="div">
        <div class="buttons">
          <router-link
            tag="a"
            to="/sign-in"
            class="button is-primary is-small"
            v-if="$route.name === 'PasswordRecovery'"
          >
            <strong>Iniciar sesión</strong>
          </router-link>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
