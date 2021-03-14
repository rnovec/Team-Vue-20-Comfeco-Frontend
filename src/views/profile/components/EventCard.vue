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
      <a class="card-footer-item" target="_blank" :href="data.referral"
        >Más info</a
      >
      <a class="card-footer-item">Participar</a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      data: Object,
    },
  };
</script>
