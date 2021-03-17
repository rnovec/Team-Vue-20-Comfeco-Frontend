<template>
  <div class="columns has-text-centered card">
    <div v-for="item in items" :key="item.id" class="column">
      <div class="is-flex mt-4 is-justify-content-center">
        <figure class="image is-96x96">
          <BadgeImage v-bind:imageUrl="item.logo" />
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <h5>{{ item.title }}</h5>
          <h6>Descripción</h6>
          <p class="is-size-7">
            {{ item.description }}
            {{ item.logo }}
          </p>
          <hr />
          <h6 class="">¿Como ganarla?</h6>
          <p class="is-size-7">
            {{ item.win }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BadgeImage from "./BadgeImage";
  import badges from "@/data-sources/badges.json";

  export default {
    components: {
      BadgeImage,
    },
    // Creo un método llamado 'items' y obtengo los datos con el método map()
    computed: {
      items() {
        return badges.map(item => {
          return item;
        });
      },
    },
  };
</script>
