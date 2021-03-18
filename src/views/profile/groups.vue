<template>
  <div class="container section">
    <div class="has-text-centered">
      <h1 class="title">Grupos</h1>
    </div>
    <div class="columns mt-4">
      <div class="column is-3">
        <MyGroupCard @leave="leaveGroup" />
      </div>
      <div class="column is-9 mb-3">
        <!-- Main container -->
        <nav class="level">
          <!-- Left side -->
          <div class="level-left">
            <div class="level-item">
              <p class="subtitle is-5">
                <strong>{{ total }}</strong> grupos
              </p>
            </div>
            <div class="level-item">
              <b-field grouped group-multiline>
                <b-input
                  size="is-small"
                  rounded
                  placeholder="Search...."
                  v-model="listQuery.search"
                  icon="magnify"
                  expanded
                >
                </b-input>
                <b-select
                  v-model="listQuery.lang"
                  size="is-small"
                  placeholder="Selecciona un lenguaje"
                  expanded
                >
                  <option value="Javascript">Javascript</option>
                  <option value="Vue">Vue</option>
                  <option value="Typescript">Typescript</option>
                  <option value="Python">Python</option>
                </b-select>
              </b-field>
            </div>
          </div>

          <!-- Right side -->
          <div class="level-right">
            <p class="level-item">
              <b-button
                @click="listQuery = {}"
                outlined
                rounded
                icon-left="close-circle"
                type="is-primary"
                size="is-small"
                >Limpiar filtros</b-button
              >
            </p>
          </div>
        </nav>
        <div class="columns is-multiline">
          <div
            v-show="isLoading"
            class="column is-one-quarter"
            v-for="_ in 12"
            :key="_"
          >
            <GroupSkeleton />
          </div>
          <div
            class="column is-one-quarter"
            v-for="group in groups"
            :key="group._id"
          >
            <GroupCard :data="group" @join="joinToGroup" @leave="leaveGroup" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { getGroupsByQuery } from "@/api/groups";
  import groupMixin from "@/mixins/groups";
  import MyGroupCard from "./components/MyGroupCard";
  import GroupCard from "./components/GroupCard";
  import GroupSkeleton from "./components/GroupSkeleton";

  export default {
    components: {
      MyGroupCard,
      GroupCard,
      GroupSkeleton,
    },
    mixins: [groupMixin],
    data() {
      return {
        groups: [],
        total: 0,
        isLoading: false,
        listQuery: {
          search: "",
          lang: null,
          limit: 12,
          offset: 0,
        },
      };
    },
    mounted() {
      this.getData();
    },
    methods: {
      async getData() {
        this.isLoading = true;
        const res = await getGroupsByQuery(this.listQuery);
        this.total = res.data.total;
        this.groups = res.data.results;
        this.isLoading = false;
      },
    },
    watch: {
      listQuery: {
        handler() {
          this.getData();
        },
        deep: true,
      },
    },
  };
</script>
