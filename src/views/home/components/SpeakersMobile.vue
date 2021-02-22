<template>
  <b-carousel class="is-hidden-desktop mb-4">
    <b-carousel-item
      class="is-flex is-justify-content-center"
      v-for="(sponsor, i) in sponsors.data"
      :key="i"
    >
      <figure class="image is-128x128 mx-4">
        <img class="is-rounded" :src="img(sponsor.name_image)" />
      </figure>
    </b-carousel-item>
  </b-carousel>
</template>

<script>
  import sponsors from "@/data-sources/sponsors.json";

  export default {
    data() {
      return {
        sponsors,
      };
    },
    methods: {
      img(data) {
        return require(`@/assets/sponsors/${data}`);
      },
    },
  };
</script>
