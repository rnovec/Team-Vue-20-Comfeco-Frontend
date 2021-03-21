<template>
  <div class="container section">
    <div class="columns mt-4">
      <div class="column is-3">
        <ProfilePreview />
      </div>
      <div class="column is-6 mb-3">
        <section>
          <BadgeList />
          <Activity :activities="activities" />
        </section>
      </div>
      <div class="column is-3 is-hidden-touch">
        <InterestedEvents @show-more="onAction('show-more-events')" />
      </div>
    </div>
  </div>
</template>

<script>
  import { getEventById } from "@/api/events";
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
    data() {
      return {
        currentEventData: {},
        activities: [],
      };
    },
    methods: {
      onAction(action) {
        this.$emit("action", action);
      },
      async getCurrentEvent() {
        if (this.currentEvent) {
          const data = await getEventById(this.currentEvent);
          this.currentEventData = data;
          this.activities = [data];
        }
      },
    },
    watch: {
      currentEvent(val) {
        if (val) {
          this.getCurrentEvent();
        }
      },
    },
  };
</script>
