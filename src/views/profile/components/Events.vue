<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        <small>Eventos de tu interés</small>
      </p>
      <a
        class="card-header-icon"
        aria-label="more options"
        @click="innerValue = Eventos"
      >
        <small>Ver más</small>
      </a>
    </header>
    <div class="box card mb-2" v-for="item in items" :key="item.id">
      <div class="card-image">
        <figure class="image">
          <img :src="item.src" alt="Placeholder image" />
        </figure>
      </div>
      <footer class="card-footer">
        <a :href="item.href" class="card-footer-item" target="_blank"
          >Más información</a
        >
      </footer>
    </div>
  </div>
</template>
<script>
  import communities from "@/data-sources/events.json";
  import inputMixin from "@/mixins/input";

  export default {
    mixins: [inputMixin],

    // Creo un método llamado 'items' y obtengo los datos con el método map()
    computed: {
      items() {
        return communities.map(item => {
          return item;
        });
      },
    },
  };
</script>
