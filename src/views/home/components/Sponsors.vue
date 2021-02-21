<template>
  <carousel
    autoplay
    navigationEnabled
    class="is-hidden-touch"
    :perPageCustom="[
      [480, 1],
      [768, 10],
    ]"
  >
    <slide v-for="i in items" :key="i.id">
      <figure class="image is-64x64 mx-4">
        <img class="is-rounded" :src="img(i.name_image)" />
      </figure>
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import sponsors from "@/data-sources/sponsors.json";

export default {
  components: { Carousel, Slide },
  computed: {
    items() {
      return sponsors.data.map((item) => {
        return item;
      });
    },
  },
  methods: {
    img(data) {
      return require(`@/assets/sponsors/${data}`);
    },
  },
};
</script>
