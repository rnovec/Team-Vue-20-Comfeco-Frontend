<template>
  <carousel
    autoplay
    class="is-hidden-touch"
    :perPageCustom="[
      [480, 1],
      [768, 3],
    ]"
  >
    <slide v-for="_ in 10" :key="_">
      <div class="card mx-2">
        <div class="card-image">
          <figure class="image is-1by1">
            <img
              src="https://www.comfeco.com/images/sponsors/sponsor-fernando_herrera.webp"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-6">John Smith</p>
              <p class="subtitle is-7">@johnsmith</p>
            </div>
          </div>
        </div>
      </div>
    </slide>
  </carousel>
</template>

<script>
  import { Carousel, Slide } from "vue-carousel";

  export default {
    components: { Carousel, Slide },
  };
</script>
