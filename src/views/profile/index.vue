<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body"></div>
      <div class="hero-foot">
        <ProfileTabs v-model="state" />
      </div>
    </section>
    <div class="container section" v-if="state === 'Profile'">
      <div class="columns mt-4">
        <div class="column is-3">
          <ProfilePreview />
        </div>
        <div class="column is-6 mb-3">
          <Activity />
        </div>
        <div class="column is-3 is-hidden-touch">
          <InterestedEvents />
        </div>
      </div>
    </div>
    <Badges v-if="state === 'Badges'" />
    <Groups v-if="state === 'Groups'" />
<<<<<<< HEAD
    <div class="container section" v-if="state === 'Events'">
      <div class="has-text-centered">
        <h1 class="title">Eventos activos</h1>
      </div>
      <div class="columns is-multiline mt-4">
        <div
          class="column is-one-third"
          v-for="event in Events"
          :key="event._id"
        >
          <EventCard :data="event" />
        </div>
      </div>
    </div>
=======
    <Events v-if="state === 'Events'" />
>>>>>>> ec934e965f34835da778efc3aac76382d02f558f
  </div>
</template>

<script>
  import Activity from "./components/Activity";
  import ProfileTabs from "./components/ProfileTabs";
  import ProfilePreview from "./components/ProfilePreview";
  import InterestedEvents from "./components/InterestedEvents";
  import Badges from "./badges";
  import Groups from "./groups";
<<<<<<< HEAD
  import EventCard from "./components/EventCard";
  import { getEvents } from "@/api/events";
=======
  import Events from "./events";

>>>>>>> ec934e965f34835da778efc3aac76382d02f558f
  export default {
    components: {
      Activity,
      ProfileTabs,
      ProfilePreview,
      InterestedEvents,
      Events,
      Badges,
      Groups,
    },
    data() {
      return {
        state: "Profile",
        Events: [],
      };
    },
    mounted() {
      this.getData();
    },
    methods: {
      async getData() {
        this.isLoading = true;
        const res = await getEvents(this.listQuery);
        this.Events = res.data.results;
        this.isLoading = false;
      },
    },
  };
</script>
