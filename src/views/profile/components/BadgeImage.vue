<template>
  <img
    :src="require('@/assets/badges/' + imageUrl)"
    alt="Badge"
    class="badge-gray"
  />
</template>

<style scoped>
  .badge-gray {
    filter: grayscale(100%);
    border-radius: 15px;
  }
  .badgeWin {
    background: green;
  }
</style>
<script>
  export default {
    props: {
      imageUrl: {
        type: String,
        default: "social.png",
      },
    },
  };
</script>
