import Vue from "vue";
import * as fb from "@/services/firebaseconfig";

const state = Vue.observable({
  user: fb.auth.currentUser,
});

export const setUser = () => {
  state.user = {}; // dummy user reset
  state.user = fb.auth.currentUser;
};

export const userIsLoggedIn = () => {
  return fb.auth.currentUser;
};

export const getUserProfile = async () => {
  const result = await fb.usersCollection
    .where("userId", "==", state.user.uid)
    .get();
  const data = result.docs.length === 0 ? {} : result.docs[0].data();
  return {
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
};

/**
 * Update user info, profile and avatar
 * @param {Object} userInfo
 * @param {Object} profileInfo
 * @param {File} profilePhotoFile
 */
export const updateUserProfile = async (
  userInfo,
  profileInfo,
  profilePhotoFile
) => {
  // Lo primero es verificar si el usuario quiere cambiar su contraseña
  // Si quiere hacerlo, entonces hay que verificar que todo esté en orden antes de proseguir con lo demás
  // Si no quiere hacerlo, no debe ser impedimento para actualizar los demás datos
  if (userInfo.password && userInfo.passwordRepeat) {
    await state.user.updatePassword(userInfo.password);
  }

  if (profilePhotoFile) {
    const ref = `profilePictures/${state.user.uid}.jpg`;
    const storageRef = fb.Firebase.storage().ref(ref);
    await storageRef.put(profilePhotoFile);
    const url = await storageRef.getDownloadURL();
    await state.user.updateProfile({
      photoURL: url,
    });
  }

  await state.user.updateProfile({
    displayName: userInfo.nick,
  });

  await state.user.updateEmail(userInfo.email);

  const result = await fb.usersCollection
    .where("userId", "==", state.user.uid)
    .get();

  if (result.docs.length !== 0) {
    await fb.usersCollection.doc(result.docs[0].id).set(
      {
        ...profileInfo,
      },
      { merge: true }
    );
  } else {
    await fb.usersCollection.add({
      userId: state.user.uid,
      ...profileInfo,
    });
  }
};

/**
 * User login
 * @param {String} email
 * @param {String} password
 */
export const signIn = async (email, password, rememberMe = false) => {
  const user = await fb.auth.signInWithEmailAndPassword(email, password);
  // El usuario ha iniciado sesión con éxito
  // Este es el token de autenticacion
  const idToken = await fb.auth.currentUser.getIdToken();
  // Este es el refresh token
  setUser();
  console.log(idToken, user.refreshToken);

  // TODO: persist session
  fb.Firebase.auth().setPersistence(
    rememberMe
      ? fb.firebase.auth.Auth.Persistence.LOCAL
      : fb.firebase.auth.Auth.Persistence.SESSION
  );
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

/**
 * Login with Social Networks
 * @param {String} service `facebook` or `google`
 */
export const socialLogin = async service => {
  let provider = null;

  if (service === "facebook") {
    provider = new fb.Firebase.auth.FacebookAuthProvider();
  }

  if (service === "google") {
    provider = new fb.Firebase.auth.GoogleAuthProvider();
  }

  fb.Firebase.auth().languageCode = "es";
  const result = await fb.Firebase.auth().signInWithPopup(provider);

  // get valid tokens
  const idToken = await fb.auth.currentUser.getIdToken();
  console.log(idToken, result.user.refreshToken);
  setUser();
};

export const signOut = async () => {
  await fb.auth.signOut();
};

export const passwordRecovery = async email => {
  await fb.auth.sendPasswordResetEmail(email);
};

export default state;
