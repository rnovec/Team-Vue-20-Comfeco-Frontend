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
          <InterestedEvents v-model="state" />
        </div>
      </div>
    </div>
    <Badges v-if="state === 'Badges'" />
    <Groups v-if="state === 'Groups'" />
    <Events v-if="state === 'Events'" />
  </div>
</template>

<script>
  import Activity from "./components/Activity";
  import ProfileTabs from "./components/ProfileTabs";
  import ProfilePreview from "./components/ProfilePreview";
  import InterestedEvents from "./components/InterestedEvents";
  import Events from "./events";
  import Badges from "./badges";
  import Groups from "./groups";
  import { getEventsByQuery } from "@/api/events";
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
        const res = await getEventsByQuery(this.listQuery);
        this.Events = res.data.results;
        this.isLoading = false;
      },
    },
  };
</script>
