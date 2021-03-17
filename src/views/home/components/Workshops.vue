<template>
  <aside class="menu is-medium is-fixed-at-top is-hidden-mobile">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <p class="menu-label">Talleres</p>
        </div>
      </div>
      <div class="media-right">
        <b-button type="is-text is-info is-inverted" size="is-small">
          Ver más
        </b-button>
      </div>
    </article>
    <b-select size="is-small" v-model="query.area" expanded>
      <option value="">Todos</option>
      <option v-for="option in areas" :key="option.value" :value="option.value">
        {{ option.name }}
      </option>
    </b-select>
    <div class="mt-4">
      <ContentLoader v-if="isLoading" />
      <WorkshopItem
        v-for="workshop in workshops"
        :workshop="workshop"
        :key="workshop._id"
      />
    </div>
  </aside>
</template>

<style scoped>
  .is-fixed-at-top {
    position: -webkit-sticky;
    position: sticky;
    top: 90px;
  }
</style>

<script>
  import { getWorkshops, getWorkshopsByQuery } from "@/api/workshops";
  import WorkshopItem from "./WorkshopItem";
  import areas from "@/data-sources/areas.json";

  export default {
    name: "Workshops",
    components: { WorkshopItem },
    mounted() {
      this.getData();
    },
    data() {
      return {
        query: {
          area: "",
        },
        isLoading: false,
        workshops: [],
        areas,
      };
    },
    methods: {
      async getData() {
        this.isLoading = true;
        try {
          const response = this.isQueryEmpty()
            ? await getWorkshops()
            : await getWorkshopsByQuery(this.query);
          this.workshops = response.data.results;
        } catch (error) {
          console.log(error);
        } finally {
          this.isLoading = false;
        }
      },
      isQueryEmpty: function() {
        for (const key in this.query) {
          if (this.query[key] !== "") {
            return false;
          }
        }
        return true;
      },
    },
    watch: {
      query: {
        handler() {
          this.getData();
        },
        deep: true,
      },
    },
  };
</script>
