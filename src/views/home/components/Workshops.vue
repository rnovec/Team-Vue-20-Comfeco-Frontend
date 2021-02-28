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
      <option value="Frontend">Frontend</option>
      <option value="Backend">Backend</option>
      <option value="Devops">Devops</option>
      <option value="Video Game Developers">Video Game Developers</option>
      <option value="UI/UX">UI/UX</option>
      <option value="Database Developer">Database Developer</option>
      <option value="Cloud Computing">Cloud Computing</option>
    </b-select>
    <div class="mt-4">
      <WorkshopItem
        v-for="workshop in workshops"
        :workshop="workshop"
        :key="workshop.id"
      />
    </div>
  </aside>
</template>

<script>
  import WorkshopItem from "./WorkshopItem";
  import { getWorkshops, getWorkshopsByQuery } from "@/api/workshops";

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
        workshops: [],
      };
    },
    methods: {
      async getData() {
        const response = this.isQueryEmpty()
          ? await getWorkshops()
          : await getWorkshopsByQuery(this.query);
        this.workshops = [...response.data];
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
