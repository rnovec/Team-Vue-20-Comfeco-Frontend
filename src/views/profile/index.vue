<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body"></div>
      <div class="hero-foot">
        <ProfileTabs v-model="state" />
      </div>
    </section>
    <Profile v-if="state === 'Profile'" @action="handleAction" />
    <Badges v-else-if="state === 'Badges'" />
    <Groups v-else-if="state === 'Groups'" />
    <Events v-else-if="state === 'Events'" />
  </div>
</template>

<script>
  import ProfileTabs from "./components/ProfileTabs";
  import Profile from "./profile";
  import Badges from "./badges";
  import Groups from "./groups";
  import Events from "./events";

  export default {
    components: {
      ProfileTabs,
      Profile,
      Badges,
      Groups,
      Events,
    },
    data() {
      return {
        state: "Profile",
      };
    },
    methods: {
      handleAction(action) {
        switch (action) {
          case "show-more-events":
            this.state = "Events";
            break;
          default:
            break;
        }
      },
    },
  };
</script>
