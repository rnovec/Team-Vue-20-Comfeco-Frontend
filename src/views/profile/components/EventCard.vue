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
    <div class="card-content">
      <div class="content">
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
        v-if="currentEvent.id === data._id"
        @click="leaveEvent"
        >Abandonar</a
      >
      <a class="card-footer-item" v-else @click="joinToevent">Participar</a>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      data: Object,
    },
    methods: {
      async joinToevent() {
        const events = {
          id: this.data._id,
          name: this.data.title,
          role: "Participante",
        };
        console.log(this.data);
        // update user profile without UserInfo
        await this.updateProfile(null, { events });
        this.$swal.fire({
          icon: "success",
          title: "Se ha unido al evento!",
          showConfirmButton: false,
          timer: 1500,
        });
      },
    },
  };
</script>
