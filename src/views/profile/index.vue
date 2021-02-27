<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body"></div>
      <div class="hero-foot">
        <ProfileTabs v-model="state" @input="changeValue" />
      </div>
    </section>
    <div class="container">
      <div class="columns mt-4">
        <div class="column is-3 is-hidden-mobile">
          <ProfilePreview />
        </div>
        <div class="column is-6 mb-3">
          <Activity v-if="state === 'Profile'" />
        </div>
        <div class="column is-3 is-hidden-mobile">
          <Events />
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

  export default {
    components: { Activity, ProfileTabs, ProfilePreview, Events },
    data() {
      return {
        state: "Profile",
      };
    },
    methods: {
      changeValue(val) {
        console.log(val);
      },
    },
  };
</script>
