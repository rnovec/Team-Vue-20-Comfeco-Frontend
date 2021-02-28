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
        <div class="column is-3 is-hidden-touch">
          <ProfilePreview />
        </div>
        <div class="column is-6 mb-3">
          <ProfilePreview class="is-hidden-desktop" />
          <Activity v-if="state === 'Perfil'" />
        </div>
        <div class="column is-3 is-hidden-touch">
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
        state: "Perfil",
      };
    },
    methods: {
      changeValue(val) {
        console.log(val);
      },
    },
  };
</script>
