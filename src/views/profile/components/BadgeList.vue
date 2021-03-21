<template>
  <div class="notification">
    <h1 class="title is-6 is-block">Insignias</h1>
    <carousel
      :pagination-enabled="false"
      :perPageCustom="[
        [320, 3],
        [480, 4],
      ]"
    >
      <slide v-for="item in badges" :key="item.id">
        <BadgeImage
          :unlocked="earnedBadges.includes(item.id)"
          :title="item.title"
          :imageUrl="item.logo"
        />
      </slide>
    </carousel>
  </div>
</template>

<script>
  import { Carousel, Slide } from "vue-carousel";
  import BadgeImage from "./BadgeImage";
  import badges from "@/data-sources/badges.json";

  export default {
    components: {
      Carousel,
      Slide,
      BadgeImage,
    },
    data() {
      return {
        badges,
      };
    },
  };
</script>
