<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img
          :src="data.banner"
          alt="Placeholder image"
          data-target="modal-image2"
        />
      </figure>
    </div>
    <div class="card-content" v-if="data.title">
      <h1 class="title is-6">{{ data.title }}</h1>
      <div class="content" v-if="data.description">
        <p>
          {{ data.description }}
        </p>
      </div>
    </div>
    <div class="card-footer">
      <a class="card-footer-item" :href="data.referral" target="_blanck"
        >Más info</a
      >
      <a
        class="card-footer-item has-text-danger"
        v-if="currentEvents.indexOf(data._id) !== -1"
        @click="onEventLeave"
        >Abandonar</a
      >
      <a
        class="card-footer-item"
        v-else-if="showJoinButton"
        @click="onEventJoin"
        >Participar</a
      >
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activity: {},
      };
    },
    props: {
      data: Object,
      showJoinButton: {
        type: Boolean,
        default: true,
      },
    },
    methods: {
      onEventJoin() {
        this.$emit("join", this.data._id);
        this.$emit("newActivity", this.myActiviti);
      },
      onEventLeave() {
        this.$emit("leave", this.data._id);
      },
      // Se genera un objeto para ser pasado a actividad por medio de newActivity
      myActiviti() {
        this.activity = {
          id: this.data._id,
          title: this.data.title,
          description: this.data.description,
        };
        return this.activity;
      },
    },
  };
</script>
