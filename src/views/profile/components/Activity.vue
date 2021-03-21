<template>
  <div>
    <div class="is-flex is-justify-content-space-between mb-3">
      <h1 class="title is-6">Actividad</h1>
    </div>
    <article class="media box" v-for="activity in activities" :key="activity">
      <div class="media-content">
        <div class="content">
          <p>
            Te has unido al evento <b>{{ activity }}</b>
          </p>
        </div>
      </div>
      <div class="media-right">
        <b-icon icon="calendar-check"></b-icon>
      </div>
    </article>
    <article class="media box" v-if="!activities.length">
      <div class="media-content">
        <div class="content">
          <p>
            No hay actividad reciente&hellip;
          </p>
        </div>
      </div>
      <div class="media-right">
        <b-icon icon="emoticon-sad"></b-icon>
      </div>
    </article>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activities: [],
      };
    },
  };
</script>
