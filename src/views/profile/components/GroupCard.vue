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
      <a class="card-footer-item">Unirse</a>
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
