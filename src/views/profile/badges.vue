<template>
  <div class="container section has-text-centered">
    <h1 class="title">Mis Insignias</h1>
    <div class="columns mb-4">
      <div v-for="item in badges" :key="item.id" class="column">
        <BadgeCard :data="item" />
      </div>
    </div>
  </div>
</template>

<script>
  import BadgeCard from "./components/BadgeCard";
  import badges from "@/data-sources/badges.json";

  export default {
    components: {
      BadgeCard,
    },
    data() {
      return {
        badges,
      };
    },
  };
</script>
