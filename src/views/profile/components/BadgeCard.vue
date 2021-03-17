<template>
  <div class="card has-text-centered">
    <div class="is-flex mt-4 is-justify-content-center">
      <figure class="image is-96x96">
        <BadgeImage
          :unlocked="earnedBadges.indexOf(data.id) !== -1"
          :imageUrl="data.logo"
        />
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
        <h5>{{ data.title }}</h5>
        <h6>Descripción</h6>
        <p class="is-size-7">
          {{ data.description }}
        </p>
        <hr />
        <h6 class="">¿Como ganarla?</h6>
        <p class="is-size-7">
          {{ data.win }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import BadgeImage from "./BadgeImage";

  export default {
    props: {
      data: Object,
    },
    components: {
      BadgeImage,
    },
  };
</script>
