<template>
  <section>
    <div class="notification">
      <h1 class="title is-6 is-block">Insignias</h1>
      <nav class="level is-mobile">
        <div class="level-item" v-for="item in badges" :key="item.id">
          <figure class="image is-64x64">
            <BadgeImage
              :unlocked="earnedBadges.indexOf(item.id) !== -1"
              :title="item.title"
              :imageUrl="item.logo"
            />
          </figure>
        </div>
      </nav>
    </div>
    <div class="is-flex is-justify-content-space-between mb-3">
      <h1 class="title is-6">Actividad</h1>
    </div>
    <article class="media box">
      <div class="media-content">
        <div class="content">
          <p>Te has unido al evento Community Fest and Code</p>
        </div>
      </div>
      <div class="media-right">
        <b-icon icon="calendar-check"></b-icon>
      </div>
    </article>
  </section>
</template>

<script>
  import BadgeImage from "./BadgeImage";
  import badges from "@/data-sources/badges.json";

  export default {
    components: {
      BadgeImage,
    },
    data() {
      return {
        badges,
      };
    },
  };
</script>
