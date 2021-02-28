<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body"></div>
      <div class="hero-foot">
        <ProfileTabs v-model="state" @input="changeValue" />
      </div>
    </section>
    <div class="mt-4 container is-fluid">
      <!-- Start Top Header -->
      <div class="columns">
        <div class="column is-half">
          <span style="cursor: pointer" @click="goBack">
            <b-icon pack="fas" icon="arrow-left" size="is-medium" />
          </span>
        </div>
        <div class="column">
          <p class="title is-5 is-align-content-baseline">
            Editar Perfil
          </p>
        </div>
      </div>
      <!-- End Top Header -->
      <!-- Start Edit Form -->
      <div class="mt-2 container card p-4 pt-5 mb-6">
        <form @submit.prevent="handleSubmit">
          <div class="columns">
            <div class="column">
              <div class="is-flex is-flex-direction-column">
                <div class="mb-2 card-image is-flex is-justify-content-center">
                  <figure class="image my-2">
                    <img :src="userInfo.photoUrl" alt="Foto de Perfil" />
                  </figure>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  @change="handleImageUpload"
                />
                <div class="mt-5 is-flex-is-flex-direction-column">
                  <b-field label="Perfil de GitHub" class="mb-5">
                    <!-- A falta de un icono de github... -->
                    <b-input
                      type="text"
                      icon="google"
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
                  <b-field label="Nick">
                    <b-input
                      type="text"
                      icon="account"
                      placeholder="Nick"
                      v-model="userInfo.nick"
                    ></b-input>
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Email">
                    <b-input
                      type="email"
                      icon="email"
                      placeholder="Email"
                      v-model="userInfo.email"
                    ></b-input>
                  </b-field>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <b-field label="Contraseña">
                    <b-input
                      type="password"
                      icon="lock"
                      v-model="userInfo.password"
                      password-reveal
                    ></b-input>
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Repetir contraseña">
                    <b-input
                      type="password"
                      icon="lock"
                      v-model="userInfo.passwordRepeat"
                      password-reveal
                    ></b-input>
                  </b-field>
                </div>
              </div>
              <div class="columns">
                <div class="column is-one-third">
                  <b-field label="Genero">
                    <b-input
                      type="text"
                      icon="account"
                      v-model="form.gender"
                      placeholder="Genero"
                    ></b-input>
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
                    <b-input
                      type="text"
                      icon="flag"
                      v-model="form.country"
                      placeholder="Pais"
                    ></b-input>
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
                >
                  Guardar
                </b-button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <!-- End Edit Form -->
    </div>
  </div>
</template>

<script>
  import ProfileTabs from "./../profile/components/ProfileTabs";
  import auth from "@/services/auth";
  import { Firebase, usersCollection } from "@/firebaseconfig";
  export default {
    name: "index",
    components: {
      ProfileTabs,
    },
    async mounted() {
      const result = await usersCollection
        .where("userId", "==", auth.user.uid)
        .get();
      const data = result.docs.length === 0 ? {} : result.docs[0].data();
      this.form = {
        gender: data.gender ?? "",
        birthday: data.birthday ?? "",
        country: data.country ?? "",
        area: data.area ?? "Frontend",
        biography: data.biography ?? "",
        ghprofile: data.ghprofile ?? "",
        twprofile: data.twprofile ?? "",
        fbprofile: data.fbprofile ?? "",
        lnprofile: data.lnprofile ?? "",
      };
    },
    data() {
      return {
        state: "Profile",
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
      handleSubmit: async function() {
        this.loading = true;
        let canSubmit = true;

        // Lo primero es verificar si el usuario quiere cambiar su contraseña
        // Si quiere hacerlo, entonces hay que verificar que todo esté en orden antes de proseguir con lo demás
        // Si no quiere hacerlo, no debe ser impedimento para actualizar los demás datos
        if (
          this.userInfo.password !== "" ||
          this.userInfo.passwordRepeat !== ""
        ) {
          if (this.userInfo.password !== this.userInfo.passwordRepeat) {
            this.$buefy.snackbar.open({
              message: "Las contraseñas deben ser iguales!",
              type: "is-danger",
              position: "is-top",
              actionText: "Reintentar",
              indefinite: true,
            });
            this.loading = false;
            canSubmit = false;
          } else {
            await auth.user.updatePassword(this.userInfo.password);
          }
        }

        if (canSubmit) {
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

          // Fin de sección
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

          await this.$router.push("/profile");
          location.reload();
          this.loading = false;
        }
      },
    },
  };
</script>

<style scoped></style>
