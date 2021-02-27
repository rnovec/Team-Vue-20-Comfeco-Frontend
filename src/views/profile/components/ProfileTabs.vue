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
            ><b-icon :icon="tab.icon"></b-icon> {{ tab.name }}</a
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
            name: "Profile",
            icon: "account",
          },
          {
            name: "Insignias",
            icon: "certificate",
          },
          {
            name: "Groups",
            icon: "account-multiple",
          },
          {
            name: "Events",
            icon: "calendar",
          },
        ],
      };
    },
  };
</script>
