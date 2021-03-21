<template>
  <div class="container section">
    <div class="columns mt-4">
      <div class="column is-3">
        <ProfilePreview />
      </div>
      <div class="column is-6 mb-3">
        <section>
          <BadgeList />
          <Activity />
        </section>
      </div>
      <div class="column is-3 is-hidden-touch">
        <InterestedEvents @show-more="onAction('show-more-events')" />
      </div>
    </div>
  </div>
</template>

<script>
  import BadgeList from "./components/BadgeList";
  import Activity from "./components/Activity";
  import ProfilePreview from "./components/ProfilePreview";
  import InterestedEvents from "./components/InterestedEvents";

  export default {
    components: {
      BadgeList,
      Activity,
      ProfilePreview,
      InterestedEvents,
    },
    methods: {
      onAction(action) {
        this.$emit("action", action);
      },
    },
  };
</script>
