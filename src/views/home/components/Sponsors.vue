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
    <slide v-for="_ in 20" :key="_">
      <figure class="image is-64x64 mx-4">
        <img
          class="is-rounded"
          src="https://www.comfeco.com/images/sponsors/sponsor-tekkitv.webp"
        />
      </figure>
    </slide>
  </carousel>
</template>

<script>
  import { Carousel, Slide } from "vue-carousel";

  export default {
    components: { Carousel, Slide },
  };
</script>
