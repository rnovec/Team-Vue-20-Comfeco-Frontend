<template>
  <carousel
    autoplay
    :autoplayTimeout="5000"
    loop
    :perPageCustom="[
      [320, 2],
      [480, 2],
      [768, 3],
      [1199, 4],
    ]"
  >
    <slide v-for="speaker in speakers.data" :key="speaker.id">
      <div class="card mx-1">
        <div class="card-image">
          <figure class="image is-1by1">
            <img :src="img(speaker.name_image)" :alt="speaker.name" />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content framework-icon">
              <figure class="avatar image is-32x32">
                <img
                  class="is-rounded"
                  :src="technology(speaker.technology_avatar)"
                  :alt="speaker.technology_avatar"
                />
              </figure>
              <p class="title is-7 mt-2">{{ speaker.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </slide>
  </carousel>
</template>

<script>
  import { Carousel, Slide } from "vue-carousel";
  import speakers from "@/data-sources/speakers.json";

  export default {
    components: { Carousel, Slide },
    data() {
      return {
        speakers,
      };
    },
    methods: {
      img(data) {
        return require(`@/assets/speakers/${data}`);
      },
      technology(data) {
        return require(`@/assets/speakers/technology/${data}`);
      },
    },
  };
</script>

<style scoped>
  .avatar {
    position: absolute;
    margin-top: -50px;
  }
  .avatar img {
    background: #fff;
    border-radius: 50%;
  }
  .framework-icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .card-content {
    padding: 1rem 0.5rem;
  }
</style>
