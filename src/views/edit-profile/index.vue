<template>
  <div class="section">
    <!-- Start Top Header -->
    <div class="columns">
      <div class="column is-one-third">
        <b-tooltip label="Regresar a Mi Perfil" position="is-right">
          <span style="cursor: pointer" @click="goBack">
            <b-icon pack="fas" icon="arrow-left" size="is-medium" />
          </span>
        </b-tooltip>
      </div>
      <div class="column has-text-centered is-one-third">
        <p class="title is-4 is-align-content-baseline">
          Editar Perfil
        </p>
      </div>
    </div>
    <!-- End Top Header -->
    <!-- Start Edit Form -->
    <div class="box mt-2 container p-4 pt-5 mb-6">
      <ProfileUpdateForm />
      <hr />
      <PasswordUpdateForm />
    </div>
    <!-- End Edit Form -->
  </div>
</template>

<script>
  import ProfileUpdateForm from "./components/ProfileUpdateForm";
  import PasswordUpdateForm from "./components/PasswordUpdateForm";

  export default {
    name: "index",
    components: {
      ProfileUpdateForm,
      PasswordUpdateForm,
    },
    methods: {
      goBack: function() {
        this.$router.push("/profile");
      },
    },
  };
</script>

<style scoped>
  .box {
    max-width: 700px;
  }
</style>
