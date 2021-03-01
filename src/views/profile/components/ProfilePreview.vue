<template>
  <div class="card">
    <div class="is-flex is-justify-content-flex-end mt-2 mr-3">
      <RouterLink
        to="/edit-profile"
        tag="a"
        class="is-flex mt-2 is-justify-content-center"
      >
        <small>Editar perfil</small>
        <b-icon icon="account-edit" />
      </RouterLink>
    </div>
    <div class="card-image is-flex is-justify-content-center">
      <figure class="image is-128x128 my-2">
        <img class="is-rounded" :src="photoUrl" alt="Foto de Perfil" />
      </figure>
    </div>
    <div class="card-content has-text-centered">
      <h1 class="title is-6 is-block">
        {{ currentUser.displayName }}
      </h1>
      <h2 class="subtitle is-7 is-block">
        {{ userInfo.area }}
      </h2>
      <div v-if="userInfo.biography" class="content">
        <p>
          {{ userInfo.biography }}
        </p>
      </div>
    </div>
    <div class="card-footer p-3 is-justify-content-center">
      <a
        target="_blank"
        title="facebook"
        :href="facebookReferral"
        v-if="facebookReferral"
      >
        <b-icon class="ml-2" type="is-facebook" icon="facebook" />
      </a>
      <a
        target="_blank"
        title="twitter"
        :href="twitterReferral"
        v-if="twitterReferral"
      >
        <b-icon class="ml-2" type="is-twitter" icon="twitter" />
      </a>
      <a
        target="_blank"
        title="github"
        :href="githubReferral"
        v-if="githubReferral"
      >
        <b-icon class="ml-2" type="is-dark" icon="github-circle" />
      </a>
      <a
        target="_blank"
        title="linkedin"
        :href="linkedInReferral"
        v-if="linkedInReferral"
      >
        <b-icon class="ml-2" type="is-linkedin" icon="linkedin" />
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfilePreview",
    async mounted() {
      this.userInfo = await this.getUserInfo();
      this.photoUrl = this.avatarURL;
    },
    data() {
      return {
        photoUrl: "",
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
