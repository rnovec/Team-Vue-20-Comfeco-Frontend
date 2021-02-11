import Vue from "vue";
import * as fb from "@/firebaseconfig";

const state = Vue.observable({
  user: fb.auth.currentUser,
});

export const basic = (key, value) => {
  state[key] = value;
};

export const setUser = () => {
  state.user = fb.auth.currentUser;
};

export const userIsLoggedIn = () => {
  return fb.auth.currentUser;
};

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
  setUser();
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
  setUser();
};

export const signOut = async () => {
  await fb.auth.signOut();
};

export const passwordRecovery = async email => {
  await fb.auth.sendPasswordResetEmail(email);
};

export default state;
