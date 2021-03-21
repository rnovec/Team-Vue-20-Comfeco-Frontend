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
                <strong>{{ groups.length }}</strong> grupos
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
                <b-dropdown
                  v-model="listQuery.lang"
                  :max-height="500"
                  scrollable
                  append-to-body
                  position="is-bottom-left"
                  aria-role="list"
                >
                  <button
                    class="button is-primary is-rounded is-outlined is-small"
                    slot="trigger"
                    slot-scope="{ active }"
                  >
                    <span>{{
                      listQuery.lang || "Selecciona una tecnología"
                    }}</span>
                    <b-icon :icon="active ? 'menu-up' : 'menu-down'"></b-icon>
                  </button>
                  <b-dropdown-item
                    v-for="item in technologies.data"
                    :key="item.name"
                    :value="item.name"
                    aria-item="listitem"
                  >
                    <div class="media" :style="{ color: item.color }">
                      <div class="media-left">
                        <figure class="image is-16x16">
                          <img
                            class="is-rounded"
                            :src="technology(item.image)"
                          />
                        </figure>
                      </div>
                      <div class="media-content">
                        <h3>{{ item.name }}</h3>
                      </div>
                    </div>
                  </b-dropdown-item>
                </b-dropdown>
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
          <div class="column" v-if="!groups.length">
            <div class="content pt-6 has-text-grey has-text-centered">
              <template>
                <p>
                  <b-icon icon="emoticon-sad" size="is-large" />
                </p>
                <p>No se encontraron grupos&hellip;</p>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { getGroupsByQuery } from "@/api/groups";
  import groupMixin from "@/mixins/groups";
  import sourcesMixin from "@/mixins/sources";
  import MyGroupCard from "./components/MyGroupCard";
  import GroupCard from "./components/GroupCard";
  import GroupSkeleton from "./components/GroupSkeleton";

  export default {
    components: {
      MyGroupCard,
      GroupCard,
      GroupSkeleton,
    },
    mixins: [groupMixin, sourcesMixin],
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
        this.total = res.total;
        this.groups = res.results;
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
