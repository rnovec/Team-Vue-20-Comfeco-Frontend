<template>
  <section>
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
            :unlocked="earnedBadges.indexOf(item.id) !== -1"
            :title="item.title"
            :imageUrl="item.logo"
          />
        </slide>
      </carousel>
    </div>
    <div class="is-flex is-justify-content-space-between mb-3">
      <h1 class="title is-6">Actividad</h1>
    </div>
    <article class="media box">
      <div class="media-content">
        <div class="content">
          <p>Te has unido a estos eventos</p>
          <div
            class="column is-one-third"
            v-for="activity in activities"
            :key="activity"
          >
            <div>
              <h3>{{ activity.title }}</h3>
              <p>{{ activity.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="media-right">
        <b-icon icon="calendar-check"></b-icon>
      </div>
    </article>
  </section>
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
        activities: [],
      };
    },
    created: function() {
      const datosDB = JSON.parse.localStorage.getItem("activities");
      if (datosDB == null) {
        this.activities = [];
      } else {
        this.activities = datosDB;
      }
    },
  };
</script>
