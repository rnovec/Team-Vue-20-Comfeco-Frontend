<template>
  <div class="card">
    <div class="is-flex mt-4 is-justify-content-center">
      <figure class="image is-96x96">
        <BadgeImage />
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
        <h5>Sociable</h5>
        <h6>Descripción</h6>
        <p class="is-size-7">
          Purus semper eget duis at tellus at urna condimentum mattis. Non
          blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae
          semper quis.
        </p>
        <hr />
        <h6 class="">¿Como ganarla?</h6>
        <p class="is-size-7">
          Purus semper eget duis at tellus at urna condimentum mattis. Non
          blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae
          semper quis.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import BadgeImage from "./BadgeImage";
  export default {
    components: {
      BadgeImage,
    },
  };
</script>
