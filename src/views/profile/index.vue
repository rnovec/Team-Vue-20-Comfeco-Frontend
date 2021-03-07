<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body"></div>
      <div class="hero-foot">
        <ProfileTabs v-model="state" @input="changeValue" />
      </div>
    </section>
    <div class="container section" v-if="state === 'Profile'">
      <div class="columns mt-4">
        <div class="column is-3 is-hidden-touch">
          <ProfilePreview />
        </div>
        <div class="column is-6 mb-3">
          <ProfilePreview class="is-hidden-desktop" />
          <Activity />
        </div>
        <div class="column is-3 is-hidden-touch">
          <Events v-model="state" @input="changeValue" />
        </div>
      </div>
    </div>
    <div
      class="container section has-text-centered"
      v-if="state === 'Insignias'"
    >
      <h1 class="title">Mis Insignias</h1>
      <div class="columns has-text-centered">
        <div v-for="_ in 4" :key="_" class="column is-3">
          <BadgeCard />
        </div>
      </div>
    </div>
    <div class="container section" v-if="state === 'Groups'">
      <div class="has-text-centered">
        <h1 class="title">Grupos</h1>
      </div>
      <div class="columns mt-4">
        <div class="column is-3">
          <MyGroupCard />
        </div>
        <div class="column is-9 mb-3">
          <b-field grouped group-multiline>
            <b-input
              size="is-small"
              rounded
              placeholder="Search...."
              icon="magnify"
              expanded
            >
            </b-input>
            <b-select size="is-small" placeholder="Select an option" expanded>
              <option value="Javascript">Javascript</option>
              <option value="Vue">Vue</option>
              <option value="Vue">Typescript</option>
            </b-select>
          </b-field>
          <div class="columns is-multiline">
            <div class="column is-one-quarter" v-for="_ in 10" :key="_">
              <GroupCard />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container section" v-if="state === 'Events'">
      <div class="has-text-centered">
        <h1 class="title">Eventos activos</h1>
      </div>
      <div class="columns is-multiline mt-4">
        <div class="column is-one-third" v-for="_ in 10" :key="_">
          <EventCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Activity from "./components/Activity";
  import ProfileTabs from "./components/ProfileTabs";
  import ProfilePreview from "./components/ProfilePreview";
  import Events from "./components/Events";
  import BadgeCard from "./components/BadgeCard";
  import MyGroupCard from "./components/MyGroupCard";
  import GroupCard from "./components/GroupCard";
  import EventCard from "./components/EventCard";

  export default {
    components: {
      Activity,
      ProfileTabs,
      ProfilePreview,
      Events,
      BadgeCard,
      MyGroupCard,
      GroupCard,
      EventCard,
    },
    data() {
      return {
        state: "Profile",
      };
    },
    methods: {
      changeValue(val) {
        console.log(val);
      },
    },
  };
</script>
