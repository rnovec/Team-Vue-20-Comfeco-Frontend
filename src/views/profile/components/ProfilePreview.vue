<template>
  <div class="card">
    <div class="is-flex is-justify-content-flex-end mt-2 mr-3">
      <RouterLink
        to="/edit-profile"
        tag="a"
        class="is-flex is-justify-content-center"
      >
        Editar
        <b-icon pack="fas" icon="cog" />
      </RouterLink>
    </div>
    <div class="card-image is-flex is-justify-content-center">
      <figure class="image my-2">
        <img :src="photoUrl" alt="Foto de Perfil" />
      </figure>
    </div>
    <div class="card-content has-text-centered">
      <h1 class="title is-6 is-block">
        {{ loguedUser.displayName }}
      </h1>
      <h2 class="subtitle is-7 is-block">
        {{ userInfo.area }}
      </h2>
      <div class="content">
        <p>
          {{ userInfo.biography }}
        </p>
      </div>
    </div>
    <div class="card-footer p-3 is-justify-content-center">
      <a :href="facebookReferral" v-if="facebookReferral">
        <b-icon icon="facebook" />
      </a>
      <a :href="twitterReferral" v-if="twitterReferral">
        <b-icon icon="twitter" />
      </a>
      <a :href="githubReferral" v-if="githubReferral">
        <b-icon pack="fas" icon="code-branch" />
      </a>
      <a :href="linkedInReferral" v-if="linkedInReferral">
        <b-icon icon="linkedin" />
      </a>
    </div>
  </div>
</template>

<script>
  import auth from "@/services/auth";
  import { usersCollection } from "@/firebaseconfig";
  export default {
    name: "ProfilePreview",
    async mounted() {
      const result = await usersCollection
        .where("userId", "==", auth.user.uid)
        .get();
      const data = result.docs.length === 0 ? {} : result.docs[0].data();
      this.userInfo = {
        area: data.area ?? "Frontend",
        biography: data.biography ?? "Tu increíble descripción!",
        ghprofile: data.ghprofile ?? "",
        twprofile: data.twprofile ?? "",
        fbprofile: data.fbprofile ?? "",
        lnprofile: data.lnprofile ?? "",
      };
    },
    data() {
      return {
        photoUrl: auth.user.photoURL ?? "https://placehold.it/128x128",
        userInfo: {},
      };
    },
    computed: {
      facebookReferral: function() {
        if (this.userInfo.fbprofile) {
          return `https://facebook.com/${this.userInfo.fbprofile}`;
        }
        return null;
      },
      twitterReferral: function() {
        if (this.userInfo.twprofile) {
          return `https://twitter.com/${this.userInfo.twprofile}`;
        }
        return null;
      },
      githubReferral: function() {
        if (this.userInfo.ghprofile) {
          return `https://github.com/${this.userInfo.ghprofile}`;
        }
        return null;
      },
      linkedInReferral: function() {
        if (this.userInfo.lnprofile) {
          return `https://linkedin.com/in/${this.userInfo.lnprofile}`;
        }
        return null;
      },
    },
  };
</script>
