<template>
  <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
    <h1 class="title is-4">Cambiar contraseña</h1>
    <h2 class="subtitle is-6">
      Si te registraste con usuario y contraseña puedes actualizarla en el
      siguiente formulario
    </h2>
    <InputWithValidation
      horizontal
      rules="required|min:8"
      type="password"
      name="password"
      label="Nueva contraseña"
      placeholder="***********"
      message="Utilice 8 o más carácteres con una combinación de letras, números y símbolos"
      password-reveal
      icon="lock"
      v-model="form.password"
    />
    <InputWithValidation
      :rules="`${form.password ? 'required|' : ''}confirmed:password`"
      horizontal
      name="confirmation"
      type="password"
      label="Repetir contraseña"
      placeholder="***********"
      message="Repita la nueva contraseña"
      password-reveal
      icon="lock"
      v-model="form.passwordRepeat"
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
        form: {
          password: "",
          passwordRepeat: "",
        },
      };
    },
    methods: {
      submit: async function() {
        this.loading = true;
        await this.updatePassword(this.form.password, this.form.passwordRepeat);
        this.$snackbar("Contraseña actualizada correctamente!", {
          type: "is-success",
          position: "is-bottom-right",
          queue: false,
        });
        this.loading = false;
      },
    },
  };
</script>
