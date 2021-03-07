<template>
  <nav class="tabs is-boxed is-fullwidth">
    <div class="container">
      <ul>
        <li
          v-for="tab in tabs"
          :key="tab.name"
          :class="{ 'is-active has-text-black': value === tab.name }"
        >
          <a @click="innerValue = tab.name"
            ><b-icon :icon="tab.icon"></b-icon> {{ tab.label }}</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  import inputMixin from "@/mixins/input";

  export default {
    mixins: [inputMixin],
    data() {
      return {
        tabs: [
          {
            label: "Perfil",
            name: "Profile",
            icon: "account",
          },
          {
            label: "Insignias",
            name: "Insignias",
            icon: "certificate",
          },
          {
            label: "Grupos",
            name: "Groups",
            icon: "account-multiple",
          },
          {
            label: "Eventos",
            name: "Events",
            icon: "calendar",
          },
        ],
      };
    },
  };
</script>
