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
        <b class="tag mb-4">{{ data.lang }}</b>
        <h5>{{ data.name }}</h5>
        <p class="is-size-7">
          {{ data.description }}
        </p>
      </div>
    </div>
    <div class="card-footer">
      <a
        class="card-footer-item has-text-danger"
        v-if="currentGroup.id === data.id"
        @click="leaveGroup"
        >Abandonar</a
      >
      <a class="card-footer-item" v-else @click="joinToGroup">Unirse</a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      data: Object,
    },
    methods: {
      async joinToGroup() {
        const group = {
          id: this.data.id,
          name: this.data.name,
          role: "Participante",
        };

        // update user profile without UserInfo
        await this.updateProfile(null, { group });
        this.$swal.fire({
          icon: "success",
          title: "Se ha unido al grupo!",
          showConfirmButton: false,
          timer: 1500,
        });
      },
    },
  };
</script>
