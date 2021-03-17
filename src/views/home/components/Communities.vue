<template>
  <aside class="card group-card is-fixed-at-top">
    <header class="card-header">
      <p class="card-header-title">
        Comunidades
      </p>
      <a class="card-header-icon" aria-label="more options">
        <small>Ver más</small>
      </a>
    </header>
    <div class="card-table">
      <div class="content">
        <table class="table is-fullwidth is-striped tableFixHead">
          <tbody>
            <tr v-for="item in items" :key="item.id">
              <td class="level is-mobile">
                <div class="level-left">
                  <article class="media">
                    <figure class="media-left">
                      <p class="image is-rounded is-32x32">
                        <img :src="item.img" class="is-rounded" />
                      </p>
                    </figure>
                    <div class="media-content">
                      <div class="content">
                        <p class="is-size-7">
                          <small
                            ><strong>{{ item.name }}</strong></small
                          >
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
                <small class="level-right">
                  <b-button type="is-primary" outlined size="is-small" rounded
                    >Unirme</b-button
                  >
                </small>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </aside>
</template>

<style scoped>
  .is-fixed-at-top {
    position: -webkit-sticky;
    position: sticky;
    top: 20px;
  }
  .media-content {
    max-width: 150px;
  }
  .content figure {
    margin-left: 0.2em;
    margin-right: 0.3em;
    margin-bottom: 0.5em;
    text-align: center;
  }
</style>

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
