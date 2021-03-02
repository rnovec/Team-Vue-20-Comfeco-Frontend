<template>
  <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
    <h1 class="title is-4">Cambiar contraseña</h1>
    <h2 class="subtitle is-6">
      Si te registraste con usuario y contraseña puedes actulizarla en el
      siguiente formulario
    </h2>
    <InputWithValidation
      horizontal
      rules="min:8"
      type="password"
      name="password"
      label="Nueva contraseña"
      placeholder="Contraseña"
      password-reveal
      icon="lock"
      v-model="userInfo.password"
    />
    <InputWithValidation
      :rules="`${userInfo.password ? 'required|' : ''}confirmed:password`"
      horizontal
      name="confirmation"
      type="password"
      label="Repetir contraseña"
      placeholder="Repetir contraseña"
      password-reveal
      icon="lock"
      v-model="userInfo.passwordRepeat"
    />
    <b-field horizontal class="mt-5">
      <b-button
        type="is-success"
        native-type="submit"
        outlined
        :loading="loading"
        @click="handleSubmit(submit)"
      >
        Cambiar contraseña
      </b-button>
    </b-field>
  </ValidationObserver>
</template>

<script>
  export default {
    name: "ProfileUpdateForm",
    data() {
      return {
        loading: false,
        userInfo: {
          password: "",
          passwordRepeat: "",
        },
      };
    },
    methods: {
      submit: async function() {
        this.loading = true;
        await this.updateProfile(
          this.userInfo,
          this.form,
          this.profilePhotoFile
        );
        this.$snackbar("Perfil actualizado correctamente!", {
          type: "is-success",
          position: "is-bottom-right",
          queue: false,
        });
        this.loading = false;
      },
    },
  };
</script>
