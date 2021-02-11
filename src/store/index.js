import Vue from "vue";
import * as fb from "@/firebaseconfig";

const state = Vue.observable({
  user: fb.auth.currentUser,
  isLoggedIn: false,
});

/**
 * User login
 * @param {String} email
 * @param {String} password
 */
export const signIn = async (email, password) => {
  const user = await fb.auth.signInWithEmailAndPassword(email, password);
  // El usuario ha iniciado sesión con éxito
  // Este es el token de autenticacion
  const idToken = await fb.auth.currentUser.getIdToken();
  // Este es el refresh token
  state.isLoggedIn = true;
  console.log(idToken, user.refreshToken);
};

/**
 * User Register
 * @param {Object} form
 */
export const signUp = async form => {
  const { email, nickname, password } = form;
  const user = await fb.auth.createUserWithEmailAndPassword(email, password);

  // El usuario se ha registrado correctamente
  // establecemos nickname
  await fb.auth.currentUser.updateProfile({
    displayName: nickname,
  });

  const idToken = await fb.auth.currentUser.getIdToken();
  console.log(idToken, user.refreshToken);
  state.isLoggedIn = true;
};

export const logout = async () => {
  await fb.auth.signOut();
};

export const passwordRecovery = async email => {
  await fb.auth.sendPasswordResetEmail(email);
};

export default state;
