<template>
  <nav class="navbar is-fixed-bottom is-hidden-tablet">
    <div class="navbar-brand is-flex is-justify-content-space-around">
      <router-link
        v-for="item in menuList"
        :key="item.name"
        tag="a"
        class="navbar-item"
        :to="item.to"
      >
        <b-icon
          pack="fa"
          :type="{ 'is-primary': $route.name === item.name }"
          :icon="item.icon"
        ></b-icon>
      </router-link>
    </div>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        menuList: [
          {
            name: "Home",
            icon: "home",
            to: "/home",
          },
          {
            name: "Comunidades",
            icon: "users",
            to: "/home",
          },
          {
            name: "Talleres",
            icon: "laptop",
            to: "/home",
          },
          {
            name: "Profile",
            icon: "user",
            to: "/profile",
          },
        ],
      };
    },
  };
</script>
