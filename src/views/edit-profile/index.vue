<template>
  <div>
    <div class="mt-4 container is-fluid">
      <!-- Start Top Header -->
      <div class="columns">
        <div class="column is-half">
          <b-tooltip label="Regresar a Mi Perfil" position="is-right">
            <span style="cursor: pointer" @click="goBack">
              <b-icon pack="fas" icon="arrow-left" size="is-medium" />
            </span>
          </b-tooltip>
        </div>
        <div class="column">
          <p class="title is-4 is-align-content-baseline">
            Editar Perfil
          </p>
        </div>
      </div>
      <!-- End Top Header -->
      <!-- Start Edit Form -->
      <div class="mt-2 container is-fluid card p-4 pt-5 mb-6">
        <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
          <div class="columns">
            <div class="column">
              <div class="is-flex is-flex-direction-column">
                <div class="mb-2 card-image is-flex is-justify-content-center">
                  <figure class="image is-128x128 my-2">
                    <img
                      class="is-rounded"
                      :src="avatarURL"
                      alt="Foto de Perfil"
                    />
                  </figure>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  @change="handleImageUpload"
                />
                <div class="mt-5 is-flex-is-flex-direction-column">
                  <b-field label="Perfil de GitHub" class="mb-5">
                    <b-input
                      type="text"
                      icon="github-circle"
                      placeholder="@ghuser"
                      v-model="form.ghprofile"
                    ></b-input>
                  </b-field>
                  <b-field label="Perfil de Twitter" class="mb  -5">
                    <b-input
                      type="text"
                      icon="twitter"
                      placeholder="@twuser"
                      v-model="form.twprofile"
                    ></b-input>
                  </b-field>
                  <b-field label="Perfil de Facebook" class="mb-5">
                    <b-input
                      type="text"
                      icon="facebook"
                      placeholder="@fbuser"
                      v-model="form.fbprofile"
                    ></b-input>
                  </b-field>
                  <b-field label="Perfil de LinkedIn">
                    <b-input
                      type="text"
                      icon="linkedin"
                      placeholder="@lnuser"
                      v-model="form.lnprofile"
                    ></b-input>
                  </b-field>
                </div>
              </div>
            </div>
            <div class="column is-two-thirds">
              <div class="columns">
                <div class="column">
                  <InputWithValidation
                    icon="account"
                    rules="required"
                    name="nick"
                    label="Nick"
                    placeholder="Nickname"
                    v-model="userInfo.nick"
                  />
                </div>
                <div class="column">
                  <InputWithValidation
                    icon="email"
                    rules="required|email"
                    type="email"
                    name="email"
                    label="Correo electrónico"
                    placeholder="Correo electrónico"
                    v-model="userInfo.email"
                  />
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <InputWithValidation
                    rules="min:8"
                    type="password"
                    name="password"
                    label="Contraseña"
                    placeholder="Contraseña"
                    password-reveal
                    icon="lock"
                    v-model="userInfo.password"
                  />
                </div>
                <div class="column">
                  <InputWithValidation
                    :rules="
                      `${
                        userInfo.password ? 'required|' : ''
                      }confirmed:password`
                    "
                    name="confirmation"
                    type="password"
                    label="Repetir contraseña"
                    placeholder="Repetir contraseña"
                    password-reveal
                    icon="lock"
                    v-model="form.passwordRepeat"
                  />
                </div>
              </div>
              <div class="columns">
                <div class="column is-one-third">
                  <b-field label="Genero">
                    <b-select
                      icon="gender-male-female"
                      v-model="form.gender"
                      expanded
                    >
                      <option value="Masculino">Masculino</option>
                      <option value="Femenino">Femenino</option>
                      <option value="Prefiero no decirlo">
                        Prefiero no decirlo
                      </option>
                    </b-select>
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Fecha de nacimiento">
                    <b-input
                      type="date"
                      icon="calendar"
                      v-model="form.birthday"
                    ></b-input>
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Pais">
                    <b-select icon="flag" v-model="form.country" expanded>
                      <option
                        v-for="(country, i) in countries"
                        :key="country.code + i"
                        :value="country.name"
                      >
                        {{ country.name }}
                      </option>
                    </b-select>
                  </b-field>
                </div>
              </div>
              <b-field label="Área de Conocimiento">
                <b-select v-model="form.area" expanded>
                  <option value="Frontend">Frontend</option>
                  <option value="Backend">Backend</option>
                  <option value="Devops">Devops</option>
                  <option value="Video Game Developers">
                    Video Game Developers
                  </option>
                  <option value="UI/UX">UI/UX</option>
                  <option value="Database Developer">Database Developer</option>
                  <option value="Cloud Computing">Cloud Computing</option>
                </b-select>
              </b-field>
              <b-field label="Biografia">
                <b-input
                  type="textarea"
                  v-model="form.biography"
                  placeholder="Acerca de mi..."
                ></b-input>
              </b-field>
              <div class="mt-5">
                <b-button
                  type="is-success"
                  native-type="submit"
                  outlined
                  expanded
                  :loading="loading"
                  @click="handleSubmit(submit)"
                >
                  Guardar
                </b-button>
              </div>
            </div>
          </div>
        </ValidationObserver>
      </div>
      <!-- End Edit Form -->
    </div>
  </div>
</template>

<script>
  import auth from "@/services/auth";
  import { Firebase, usersCollection } from "@/firebaseconfig";
  import * as countries from "@/data-sources/countries.json";
  export default {
    name: "index",
    async mounted() {
      this.form = await this.getUserInfo();
      this.countries = countries.default;
    },
    data() {
      return {
        loading: false,
        // Este objeto retendrá el objeto File de la foto que suba el usuario
        profilePhotoFile: undefined,
        // El objeto user info retiene la información que se recolecta del user de firebase
        userInfo: {
          photoUrl: auth.user.photoURL ?? "https://placehold.it/1920x1080",
          nick: auth.user.displayName ?? "",
          email: auth.user.email ?? "",
          password: "",
          passwordRepeat: "",
        },
        // El objeto form retendrá la información del usuario del usersCollection
        form: {},
        countries: [],
      };
    },
    methods: {
      changeValue(val) {
        console.log(val);
      },
      goBack: function() {
        this.$router.push("/profile");
      },
      handleImageUpload: function(event) {
        const fileReader = new FileReader();
        fileReader.onload = () => {
          this.userInfo.photoUrl = fileReader.result;
        };
        this.profilePhotoFile = event.target.files[0];
        fileReader.readAsDataURL(this.profilePhotoFile);
      },
      submit: async function() {
        this.loading = true;

        // Lo primero es verificar si el usuario quiere cambiar su contraseña
        // Si quiere hacerlo, entonces hay que verificar que todo esté en orden antes de proseguir con lo demás
        // Si no quiere hacerlo, no debe ser impedimento para actualizar los demás datos
        if (
          this.userInfo.password !== "" ||
          this.userInfo.passwordRepeat !== ""
        ) {
          await auth.user.updatePassword(this.userInfo.password);
        }

        if (this.profilePhotoFile) {
          const ref = `profilePictures/${auth.user.uid}.jpg`;
          const storageRef = Firebase.storage().ref(ref);
          await storageRef.put(this.profilePhotoFile);
          const url = await storageRef.getDownloadURL();
          await auth.user.updateProfile({
            photoURL: url,
          });
        }

        await auth.user.updateProfile({
          displayName: this.userInfo.nick,
        });

        await auth.user.updateEmail(this.userInfo.email);

        const result = await usersCollection
          .where("userId", "==", auth.user.uid)
          .get();

        if (result.docs.length !== 0) {
          await usersCollection.doc(result.docs[0].id).set(
            {
              ...this.form,
            },
            { merge: true }
          );
        } else {
          await usersCollection.add({
            userId: auth.user.uid,
            ...this.form,
          });
        }
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

<style scoped></style>
