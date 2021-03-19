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
            v-for="event in events"
            :key="event._id"
          >
            <div
              :unlock="earnedEvens.indexOf(event.id) !== -1"
              :class="[unlock ? '' : 'display-none']"
            >
              <h3>{{ event.title }}</h3>
              <p>{{ event.description }}</p>
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

  import { getEventsByQuery } from "@/api/events";
  import eventMixin from "@/mixins/events";

  export default {
    components: {
      Carousel,
      Slide,
      BadgeImage,
    },
    data() {
      return {
        badges,
        events: [],
        listQuery: {
          search: "",
          lang: null,
          limit: 12,
          offset: 0,
        },
      };
    },
    mixins: [eventMixin],
    mounted() {
      this.getData();
    },
    methods: {
      async getData() {
        this.isLoading = true;
        const res = await getEventsByQuery(this.listQuery);
        this.total = res.data.total;
        this.events = res.data.results;
        this.isLoading = false;
      },
    },
    watch: {
      listQuery: {
        handler() {
          this.getData();
        },
        deep: true,
      },
    },
  };
</script>
<style>
  .display-none {
    display: none;
  }
</style>
