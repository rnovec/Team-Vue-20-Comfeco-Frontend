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
<<<<<<< HEAD
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
=======
      <a class="card-footer-item" target="_blank" :href="data.referral"
        >Más info</a
      >
      <a class="card-footer-item">Participar</a>
    </div>
  </div>
</template>

>>>>>>> ec934e965f34835da778efc3aac76382d02f558f
<script>
  export default {
    props: {
      data: Object,
    },
<<<<<<< HEAD
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
=======
>>>>>>> ec934e965f34835da778efc3aac76382d02f558f
  };
</script>
