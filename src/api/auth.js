import * as fb from "@/services/firebaseconfig";

export const userIsLoggedIn = () => {
  return fb.auth.currentUser;
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
  console.log(idToken, user.refreshToken);

  // persist session
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
};

export const signOut = async () => {
  await fb.auth.signOut();
};

export const passwordRecovery = async email => {
  await fb.auth.sendPasswordResetEmail(email);
};
