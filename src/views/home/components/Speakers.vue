<template>
  <carousel
    autoplay
    :autoplayTimeout="5000"
    loop
    class="is-hidden-touch"
    :perPageCustom="[
      [480, 1],
      [768, 4],
    ]"
  >
    <slide v-for="i in items" :key="i.id">
      <div class="card mx-1">
        <div class="card-image">
          <figure class="image is-1by1">
            <img
              :src="img(i.name_image)"
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
                  :src="technology(i.technology_avatar)"
                />
              </figure>
              <p class="title is-7 mt-2">{{i.name}}</p>
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
  computed: {
    items() {
      return speakers.data.map((item) => {
        return item;
      });
    },
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
