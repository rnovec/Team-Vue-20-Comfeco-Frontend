<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        <small>Eventos de tu interés</small>
      </p>
      <a
        class="card-header-icon"
        aria-label="more options"
        @click="showMoreClick"
      >
        <small>Ver más</small>
      </a>
    </header>
    <div class="m-2" v-for="event in events" :key="event.id">
      <EventCard :data="event" :show-join-button="false" />
    </div>
  </div>
</template>
<script>
  import events from "@/data-sources/events.json";
  import inputMixin from "@/mixins/input";
  import EventCard from "./EventCard";

  export default {
    mixins: [inputMixin],
    components: {
      EventCard,
    },

    data() {
      return {
        events,
      };
    },
    methods: {
      showMoreClick() {
        this.$emit("show-more");
      },
    },
  };
</script>
