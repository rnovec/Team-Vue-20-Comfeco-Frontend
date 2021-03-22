<template>
  <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
    <div class="is-flex is-flex-direction-column">
      <div class="mb-2 card-image is-flex is-justify-content-center">
        <figure class="image is-128x128 my-2 outer">
          <img
            class="is-rounded is-128x128"
            :src="[newAvatar ? newAvatar : avatarURL]"
            alt="Foto de Perfil"
          />
          <label
            for="avatar"
            class="inner is-flex is-justify-content-center is-align-items-center"
          >
            <b-icon icon="camera"></b-icon>
          </label>
        </figure>
        <input
          id="avatar"
          style="display: none"
          type="file"
          accept="image/*"
          @change="handleImageUpload"
        />
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <InputWithValidation
          icon="account"
          rules="required"
          name="nick"
          label="Nick"
          placeholder="comfeco98"
          message="comfeco98"
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
        <b-field label="Genero" message="Selecciona un género">
          <b-select icon="gender-male-female" v-model="form.gender" expanded>
            <option value="">Selecciona una opción</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Prefiero no decirlo">Prefiero no decirlo</option>
          </b-select>
        </b-field>
      </div>
      <div class="column">
        <b-field
          label="Fecha de nacimiento"
          message="Indica tu fecha de nacimiento"
        >
          <b-input
            type="date"
            icon="calendar"
            v-model="form.birthday"
          ></b-input>
        </b-field>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <b-field label="País / Región" message="Selecciona tu país de origen">
          <b-autocomplete
            icon="flag"
            :data="filteredCountries"
            v-model="form.country"
            clearable
            placeholder="ej. México"
            field="name"
            open-on-focus
            @select="option => (selected = option)"
          >
            <template v-slot="props">
              <div class="media">
                <div class="media-left">
                  <img
                    width="32"
                    :src="
                      `https://raw.githubusercontent.com/hampusborgos/country-flags/master/svg/${props.option.code.toLowerCase()}.svg`
                    "
                  />
                </div>
                <div class="media-content">
                  {{ props.option.name }} ({{ props.option.code }})
                </div>
              </div>
            </template>
            <template #empty>No results found</template>
          </b-autocomplete>
        </b-field>
      </div>
      <div class="column">
        <b-field
          label="Área de Conocimiento"
          message="Selecciona el área con el que te identificas"
        >
          <b-select v-model="form.area" expanded>
            <option
              v-for="option in areas"
              :key="option.value"
              :value="option.value"
            >
              {{ option.name }}
            </option>
          </b-select>
        </b-field>
      </div>
    </div>
    <b-field label="Biografia">
      <b-input
        type="textarea"
        v-model="form.biography"
        placeholder="Acerca de mi..."
      ></b-input>
    </b-field>
    <div class="columns">
      <b-field class="column" label="GitHub" message="Tu usuario de Github">
        <b-input
          type="text"
          icon="github-circle"
          placeholder="@ghuser"
          v-model="form.ghprofile"
        ></b-input>
      </b-field>
      <b-field class="column" label="Twitter" message="Tu usuario de Twitter">
        <b-input
          type="text"
          icon="twitter"
          placeholder="@twuser"
          v-model="form.twprofile"
        ></b-input>
      </b-field>
    </div>
    <div class="columns">
      <b-field class="column" label="Facebook" message="Tu usuario de Facebook">
        <b-input
          type="text"
          icon="facebook"
          placeholder="@fbuser"
          v-model="form.fbprofile"
        ></b-input>
      </b-field>
      <b-field class="column" label="LinkedIn" message="Tu usuario de LinkedIn">
        <b-input
          type="text"
          icon="linkedin"
          placeholder="@lnuser"
          v-model="form.lnprofile"
        ></b-input>
      </b-field>
    </div>

    <b-field>
      <b-button
        type="is-success"
        native-type="submit"
        outlined
        :loading="loading"
        @click="handleSubmit(submit)"
      >
        Actualizar perfil
      </b-button>
    </b-field>
  </ValidationObserver>
</template>

<script>
  import countries from "@/data-sources/countries.json";
  import areas from "@/data-sources/areas.json";

  export default {
    name: "ProfileUpdateForm",
    async mounted() {
      this.form = await this.getUserInfo();
      this.userInfo.photoUrl = this.avatarURL;
      this.userInfo.nick = this.currentUser.displayName;
      this.userInfo.email = this.currentUser.email;
      this.countries = countries;
      this.areas = areas;
    },
    data() {
      return {
        loading: false,
        // Este objeto retendrá el objeto File de la foto que suba el usuario
        profilePhotoFile: null,
        // El objeto user info retiene la información que se recolecta del user de firebase
        userInfo: {
          photoUrl: "",
          nick: "",
          email: "",
        },
        // El objeto form retendrá la información del usuario del usersCollection
        form: {},
        countries: [],
        areas: [],
        selected: null,
        newAvatar: null,
      };
    },
    computed: {
      filteredCountries() {
        return this.countries.filter(option => {
          return (
            option.name
              .toString()
              .toLowerCase()
              .indexOf(this.form.country.toLowerCase()) >= 0
          );
        });
      },
    },
    methods: {
      handleImageUpload: function(event) {
        const fileReader = new FileReader();
        this.profilePhotoFile = event.target.files[0];
        fileReader.readAsDataURL(this.profilePhotoFile);
        fileReader.onload = () => {
          this.newAvatar = this.userInfo.photoUrl = fileReader.result;
        };
      },
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
        // Añadiendo insignia si el perfil esta completo
        this.updateBadges("sociable", this.form);
      },
    },
  };
</script>

<style scoped>
  .outer {
    margin: auto;
    border-radius: 100%;
    position: relative;
  }

  .inner {
    background-color: #fff;
    width: 45px;
    height: 45px;
    border-radius: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .inner:hover {
    background-color: #ccc;
  }
</style>
