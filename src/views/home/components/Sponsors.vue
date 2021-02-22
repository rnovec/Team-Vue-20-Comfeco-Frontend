<template>
  <carousel
    navigationEnabled
    class=""
    :perPageCustom="[
      [200, 3],
      [480, 3],
      [768, 10],
    ]"
  >
    <slide v-for="sponsor in sponsors.data" :key="sponsor.id">
      <figure class="image is-64x64 mx-4">
        <img class="is-rounded" :src="img(sponsor.name_image)" />
      </figure>
    </slide>
  </carousel>
</template>

<script>
  import { Carousel, Slide } from "vue-carousel";
  import sponsors from "@/data-sources/sponsors.json";

  export default {
    data() {
      return {
        sponsors,
      };
    },
    components: { Carousel, Slide },
    methods: {
      img(data) {
        return require(`@/assets/sponsors/${data}`);
      },
    },
  };
</script>
