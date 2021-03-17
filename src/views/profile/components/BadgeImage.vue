<template>
  <img
    :src="require('@/assets/badges/' + imageUrl)"
    :alt="`Insignia '${title}'`"
    :title="title"
    :class="{ 'badge-gray': !unlocked }"
  />
</template>

<style scoped>
  .badge-gray {
    filter: grayscale(100%);
    border-radius: 15px;
  }
</style>
<script>
  export default {
    props: {
      title: {
        type: String,
        default: "Comfeco",
      },
      imageUrl: {
        type: String,
        default: "social.png",
      },
      unlocked: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>
