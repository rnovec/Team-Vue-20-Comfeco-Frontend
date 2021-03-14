<template>
  <div class="container section">
    <div class="has-text-centered">
      <h1 class="title">Eventos activos</h1>
    </div>
    <div class="columns is-multiline mt-4">
      <div class="column is-one-third" v-for="event in events" :key="event._id">
        <EventCard :data="event" />
      </div>
    </div>
  </div>
</template>
<script>
  import { getEventsByQuery } from "@/api/events";
  import EventCard from "./components/EventCard";

  export default {
    components: {
      EventCard,
    },
    data() {
      return {
        events: [],
        total: 0,
        isLoading: false,
        listQuery: {
          search: "",
          lang: null,
          limit: 12,
          offset: 0,
        },
      };
    },
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
