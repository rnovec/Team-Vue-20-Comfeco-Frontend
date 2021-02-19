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
    <b-select size="is-small" v-model="filter" expanded>
      <option value="Todos">Todos</option>
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
  import WorkshopItem from "@/components/WorkshopItem";
  import { WorkShopService } from "@/services/workshop-service";

  export default {
    name: "Workshops",
    components: { WorkshopItem },
    mounted() {
      WorkShopService.getWorkshops().then(response => {
        this.response = [...response.data];
        this.workshops = [...this.response];
      });
    },
    data() {
      return {
        filter: "Todos",
        response: [],
        workshops: [],
      };
    },
    watch: {
      filter: function() {
        if (this.filter !== "Todos") {
          this.workshops = this.response.filter(
            workshop => workshop.area === this.filter
          );
        } else {
          this.workshops = [...this.response];
        }
      },
    },
  };
</script>
