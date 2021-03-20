<template>
  <div class="container section">
    <div class="has-text-centered">
      <h1 class="title">Eventos activos</h1>
    </div>
    <div class="columns is-multiline mt-4">
      <div
        v-show="isLoading"
        class="column is-one-third"
        v-for="_ in 12"
        :key="_"
      >
        <EventSkeleton />
      </div>
      <div class="column is-one-third" v-for="event in events" :key="event._id">
        <EventCard
          :data="event"
          :myActiviti="activity"
          @join="joinToEvent"
          @leave="leaveEvent"
          @newActivity="addActivity"
        />
      </div>
    </div>
  </div>
</template>
<script>
  import { getEventsByQuery } from "@/api/events";
  import eventMixin from "@/mixins/events";
  import EventCard from "./components/EventCard";
  import EventSkeleton from "./components/EventSkeleton";

  export default {
    components: {
      EventCard,
      EventSkeleton,
    },
    mixins: [eventMixin],
    data() {
      return {
        events: [],
        activities: [],
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
      // Añadir evento inscrito a Activities
      addActivity(newActivity) {
        this.activities.push(newActivity);
        localStorage.setItem("activitiess", JSON.stringify(this.activities));
      },
    },
    created: function() {
      const datosDB = JSON.parse.localStorage.getItem("activitiess");
      if (datosDB == null) {
        this.activities = [];
      } else {
        this.activities = datosDB;
      }
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
