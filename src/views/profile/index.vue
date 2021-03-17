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
        <div class="column is-3 is-hidden-touch">
          <ProfilePreview />
        </div>
        <div class="column is-6 mb-3">
          <ProfilePreview class="is-hidden-desktop" />
          <Activity />
        </div>
        <div class="column is-3 is-hidden-touch">
          <Events v-model="state" @input="changeValue" />
        </div>
      </div>
    </div>
    <div
      class="container section has-text-centered"
      v-if="state === 'Insignias'"
    >
      <h1 class="title">Mis Insignias</h1>
      <div class="columns has-text-centered">
        <div v-for="_ in 4" :key="_" class="column is-3">
          <BadgeCard />
        </div>
      </div>
    </div>
    <Groups v-if="state === 'Groups'" />
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
  </div>
</template>

<script>
  import Activity from "./components/Activity";
  import ProfileTabs from "./components/ProfileTabs";
  import ProfilePreview from "./components/ProfilePreview";
  import Events from "./components/Events";
  import BadgeCard from "./components/BadgeCard";
  import Groups from "./groups";
  import EventCard from "./components/EventCard";
  import { getEvents } from "@/api/events";
  export default {
    components: {
      Activity,
      ProfileTabs,
      ProfilePreview,
      Events,
      BadgeCard,
      Groups,
      EventCard,
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
