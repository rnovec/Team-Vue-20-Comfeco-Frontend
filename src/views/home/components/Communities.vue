<template>
  <aside class="menu is-medium is-fixed-at-top is-hidden-mobile">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <p class="menu-label">Comunidades</p>
        </div>
      </div>
      <div class="media-right">
        <b-button type="is-text is-info is-inverted" size="is-small">
          Ver más
        </b-button>
      </div>
    </article>

    <ul class="menu-list">
      <li
        class="has-text-light is-right m-t-10"
        v-for="item in items"
        :key="item.id"
      >
        <article class="media">
          <figure class="media-left">
            <p class="image is-rounded is-32x32">
              <img class="is-rounded" :src="item.img" />
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p class="title is-7">{{ item.name }}</p>
            </div>
          </div>
          <div class="media-right">
            <a
              class="button is-small is-rounded is-primary is-outlined"
              target="_blank"
              :href="item.fanpage"
              >Unirme</a
            >
          </div>
        </article>
      </li>
    </ul>
  </aside>
</template>
<script>
  import communities from "@/data-sources/communities.json";

  export default {
    props: {
      msg: String,
    },

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
