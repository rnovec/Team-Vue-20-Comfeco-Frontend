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
          <InterestedEvents />
        </div>
      </div>
    </div>
    <div
      class="container section has-text-centered"
      v-if="state === 'Insignias'"
    >
      <h1 class="title">Mis Insignias</h1>
      <div>
        <div>
          <BadgeCard />
        </div>
      </div>
    </div>
    <Groups v-if="state === 'Groups'" />
    <Events v-if="state === 'Events'" />
  </div>
</template>

<script>
  import Activity from "./components/Activity";
  import ProfileTabs from "./components/ProfileTabs";
  import ProfilePreview from "./components/ProfilePreview";
  import BadgeCard from "./components/BadgeCard";
  import InterestedEvents from "./components/InterestedEvents";
  import Groups from "./groups";
  import Events from "./events";

  export default {
    components: {
      Activity,
      ProfileTabs,
      ProfilePreview,
      Events,
      BadgeCard,
      InterestedEvents,
      Groups,
    },
    data() {
      return {
        state: "Profile",
      };
    },
  };
</script>
