<template>
  <div class="container is-flex p-2 mb-2">
    <div class="my-4 mx-2">
      <b-icon
        :type="{ 'is-success': iconState === 'check' }"
        pack="fas"
        :icon="iconState"
        size="is-medium"
      />
    </div>
    <div class="ml-5">
      <p class="is-size-7 has-text-weight-bold">{{ workshop.title }}</p>
      <p class="is-size-7 mt-1">{{ workshop.date | parseDate }}</p>
      <p class="is-size-7 mt-2">
        <b>By</b> <a :href="workshop.referral">{{ workshop.organizer }}</a>
      </p>
    </div>
  </div>
</template>

<script>
  import { DateTime } from "luxon";
  export default {
    name: "WorkshopItem",
    props: {
      workshop: {
        type: Object,
        required: true,
      },
    },
    computed: {
      iconState: function() {
        return DateTime.now().valueOf() >
          DateTime.fromISO(this.workshop.date).valueOf()
          ? "check"
          : "ellipsis-h";
      },
    },
    filters: {
      parseDate: function(dateTime) {
        const date = DateTime.fromISO(dateTime);
        const [hour, minute] = [
          date.hour,
          date.minute > 10 ? date.minute : "0" + date.minute,
        ];
        const timeIndicative = hour >= 12 ? "pm" : "am";
        return `${hour}:${minute}${timeIndicative}`;
      },
    },
  };
</script>

<style scoped>
  .container {
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
    border-radius: 0.3em;
    transition: all linear 0.1s;
  }

  .container:hover {
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.3);
    transform: scale(1.02);
  }
</style>
