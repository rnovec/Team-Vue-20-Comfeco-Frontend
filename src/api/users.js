import Vue from "vue";
import * as fb from "@/services/firebaseconfig";

const state = Vue.observable({
  user: fb.auth.currentUser,
});

export const setUser = () => {
  state.user = {}; // dummy user reset
  state.user = fb.auth.currentUser;
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

export const isProfileComplete = profile => {
  let completed = false;
  for (const key of Object.keys(profile)) {
    completed = profile[key].trim() === "";
  }
  return !!completed;
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

  console.log(isProfileComplete(profileInfo));

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

export const updateUserPassword = async (password, passwordRepeat) => {
  if (password && passwordRepeat) {
    await state.user.updatePassword(password);
  }
};

export default state;
