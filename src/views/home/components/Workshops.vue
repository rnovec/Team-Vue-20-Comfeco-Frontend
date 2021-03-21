<template>
  <div class="card is-fixed-at-top ">
    <header class="card-header">
      <p class="card-header-title">
        Talleres
      </p>
      <a class="card-header-icon" aria-label="more options">
        <small>Ver más</small>
      </a>
    </header>
    <div class="card-body p-2">
      <b-select size="is-small" v-model="query.area" expanded>
        <option value="">Todos</option>
        <option
          v-for="option in areas"
          :key="option.value"
          :value="option.value"
        >
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
    </div>
  </div>
</template>

<style scoped>
  .is-fixed-at-top {
    position: -webkit-sticky;
    position: sticky;
    top: 90px;
  }
  .card-body {
    height: 350px;
    overflow-y: scroll;
  }
</style>

<script>
  import { getWorkshops, getWorkshopsByQuery } from "@/api/workshops";
  import ContentLoader from "@/components/ContentLoader";
  import WorkshopItem from "./WorkshopItem";
  import areas from "@/data-sources/areas.json";

  export default {
    name: "Workshops",
    components: { ContentLoader, WorkshopItem },
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
          const data = this.isQueryEmpty()
            ? await getWorkshops()
            : await getWorkshopsByQuery(this.query);
          this.workshops = data.results;
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
