<template>
  <div class="has-text-centered">
    <small class="has-text-weight-bold">
      <slot>También puedes iniciar con tus redes</slot>
    </small>
    <b-button
      class="mt-4"
      expanded
      type="is-link"
      icon-left="facebook"
      @click="facebook"
    >
      Ingresar con Facebook
    </b-button>
    <b-button
      class="mt-2"
      expanded
      type="is-google"
      icon-left="google"
      @click="google"
    >
      Ingresar con Google
    </b-button>
  </div>
</template>
<script>
import { Firebase, db } from "@/firebaseconfig.js";
import router from "@/router";
export default {
  data() {
    return {};
  },
  methods: {
    facebook() {
      const provider = new Firebase.auth.FacebookAuthProvider();
      this.ingresar(provider);
    },
    google() {
      const provider = new Firebase.auth.GoogleAuthProvider();
      this.ingresar(provider);
    },
    async ingresar(provider) {
      Firebase.auth().languageCode = "es";
      try {
        const result = await Firebase.auth().signInWithPopup(provider);
        const user = result.user;
        console.log(user);

        //Contruir usuario
        const usuario = {
          nombre: user.displayName,
          email: user.email,
          uid: user.uid,
          foto: user.photoURL,
        };

        //Guardar en Firestore
        await db.collection("usuarios").doc(usuario.uid).set(usuario);
        router.push({ name: "Home" });
      } catch (error) {
        this.$snackbar(error.toString());
      }
    },
  },
};
</script>
