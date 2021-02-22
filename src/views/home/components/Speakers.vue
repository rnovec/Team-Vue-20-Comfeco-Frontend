<template>
  <carousel
    autoplay
    :perPageCustom="[
      [240, 2],
      [480, 3],
      [768, 4],
    ]"
  >
    <slide v-for="_ in 10" :key="_">
      <div class="card mx-1">
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
              <figure class="avatar image is-32x32">
                <img
                  class="is-rounded"
                  src="https://www.comfeco.com/icons/vue-icon.svg"
                />
              </figure>
              <p class="title is-7 mt-2">John Smith</p>
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

<style>
  .avatar {
    position: relative;
    margin-top: -40px;
    margin-left: 30%;
  }
  .avatar img {
    background: #fff;
    border-radius: 50%;
  }
</style>
