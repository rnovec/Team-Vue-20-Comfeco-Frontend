<template>
  <section>
    <div class="notification">
      <h1 class="title is-6 is-block">
        Insignias
      </h1>
      <nav class="level is-mobile">
        <div class="level-item" v-for="item in badge" :key="item">
          <figure class="image is-64x64">
            <BadgeImage :imageUrl="item.logo" />
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
          <p>
            Te has unido al evento Community Fest and Code
          </p>
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
  export default {
    components: {
      BadgeImage,
    },
    badge: [],
    created: function() {
      const badgeDB = JSON.parse(localStorage.getItem("badgesWin"));
      if (badgeDB === null) {
        this.badge = [];
      } else {
        this.badge = badgeDB;
      }
    },
  };
</script>
