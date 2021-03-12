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
                    src="data:image/png;base64,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"
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
            <tr v-for="member in members" :key="member.uid">
              <td class="level is-mobile">
                <div class="level-left">
                  <article class="media">
                    <figure class="media-left">
                      <p class="image is-rounded is-32x32">
                        <img
                          :src="
                            member.photoURL || defaultAvatar(member.displayName)
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
          </tbody>
        </table>
      </div>
    </div>
    <footer v-if="currentGroup.id" class="card-footer">
      <a href="#" class="card-footer-item has-text-danger" @click="leaveGroup"
        >Abandonar</a
      >
      <a href="#" class="card-footer-item has-text-info">Ir a chat</a>
    </footer>
  </div>
</template>

<script>
  import { getUsersByGroup } from "@/api/users";
  export default {
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
          this.members = data.data.users;
        }
      },
      async leaveGroup() {
        if (this.currentGroup.id) {
          this.$swal
            .fire({
              title: "¿Estas seguro de abandonar tu grupo?",
              text: "¡Esta acción es irreversible!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Si, abandonar!",
              cancelButtonText: "Cancelar",
            })
            .then(async result => {
              if (result.isConfirmed) {
                await this.updateProfile(null, { group: null });
                this.members = [];
              }
            });
        }
      },
    },
    watch: {
      currentGroup: {
        handler() {
          this.getMembers();
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
