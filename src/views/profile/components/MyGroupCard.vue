<template>
  <div class="card group-card">
    <header class="card-header">
      <p class="card-header-title">
        Mi Grupo
      </p>
      <a class="card-header-icon" aria-label="more options">
        <small>Ver grupo</small>
      </a>
    </header>
    <div
      class="card-table"
      :style="`${!currentGroup.id || 'overflow-y: scroll;'}`"
    >
      <div class="content">
        <table class="table is-fullwidth is-striped tableFixHead">
          <thead v-if="currentGroup.id">
            <th class="level is-mobile">
              <div class="level-left">
                {{ currentGroup.name }}
              </div>
              <div class="level-left">
                <p class="image is-rounded is-32x32">
                  <img
                    :src="techImage(currentGroup.lang)"
                    :alt="currentGroup.lang"
                    :title="'Este grupo utiliza ' + currentGroup.lang"
                    class="is-rounded"
                  />
                </p>
              </div>
            </th>
          </thead>
          <tbody>
            <tr v-if="!currentGroup.id">
              <div class="content pt-6 has-text-grey has-text-centered">
                <template>
                  <p>
                    <b-icon icon="emoticon-sad" size="is-large" />
                  </p>
                  <p>Aún no haces parte de ningún grupo&hellip;</p>
                </template>
              </div>
            </tr>
            <template v-else>
              <tr v-for="member in members" :key="member.uid">
                <td class="level is-mobile">
                  <div class="level-left">
                    <article class="media">
                      <figure class="media-left">
                        <p class="image is-rounded is-32x32">
                          <img
                            :src="
                              member.photoURL ||
                                defaultAvatar(member.displayName)
                            "
                            class="is-rounded"
                          />
                        </p>
                      </figure>
                      <div class="media-content">
                        <div class="content">
                          <p class="is-size-7">
                            <strong
                              ><small>{{ member.displayName }}</small></strong
                            >
                            <br />
                            <small>Avanzado</small>
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                  <small class="level-right tag">Integrante</small>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
    <footer v-if="currentGroup.id" class="card-footer">
      <a class="card-footer-item has-text-danger" @click="onGroupLeave"
        >Abandonar</a
      >
      <a class="card-footer-item has-text-info">Ir a chat</a>
    </footer>
  </div>
</template>

<script>
  import { getUsersByGroup } from "@/api/users";
  import sourcesMixin from "@/mixins/sources";

  export default {
    mixins: [sourcesMixin],
    data() {
      return {
        members: [],
      };
    },
    async mounted() {
      this.getMembers();
    },
    methods: {
      async getMembers() {
        if (this.currentGroup.id) {
          const data = await getUsersByGroup();
          this.members = data.users;
        }
      },
      onGroupLeave() {
        this.$emit("leave", this.currentGroup.id);
      },
    },
    watch: {
      currentGroup: {
        handler() {
          this.getMembers();

          if (!this.currentGroup.id) {
            this.members = [];
          }
        },
        deep: true,
      },
    },
  };
</script>

<style scoped>
  .group-card .card-table {
    height: 250px;
  }
  .tableFixHead {
    overflow-y: auto;
    height: 100px;
  }
  .tableFixHead thead th {
    position: sticky;
    top: 0;
  }
  .media-content {
    max-width: 100px;
  }
  .content figure {
    margin-left: 0.2em;
    margin-right: 0.3em;
    margin-bottom: 0.5em;
    text-align: center;
  }
</style>
