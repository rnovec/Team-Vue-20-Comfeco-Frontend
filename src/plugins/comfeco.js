import { SnackbarProgrammatic as Snackbar } from "buefy";
import {
  signIn,
  signUp,
  signOut,
  socialLogin,
  passwordRecovery,
} from "@/api/auth";
import state, {
  setUser,
  getUserProfile,
  updateUserProfile,
  updateUserPassword,
} from "@/api/users";
import ContentLoader from "@/components/ContentLoader";

export default {
  install(Vue, options) {
    Vue.mixin({
      mounted() {
        setUser();
      },
      computed: {
        currentUser() {
          return state.user;
        },
        avatarURL() {
          return (
            state.user.photoURL ??
            `https://avatars.dicebear.com/4.5/api/identicon/${state.user.displayName}.svg`
          );
        },
      },
      methods: {
        async socialSignIn(service) {
          await socialLogin(service);
          setUser();
          this.$router.push("/home");
        },
        async login(form) {
          const { email, password, rememberMe } = form;
          await signIn(email, password, rememberMe);
          setUser();
          this.$router.push("/home");
        },
        async getUserInfo() {
          const userInfo = await getUserProfile();
          return userInfo;
        },
        async updateProfile(userInfo, profileInfo, profilePhotoFile) {
          await updateUserProfile(userInfo, profileInfo, profilePhotoFile);
          setUser();
        },
        async register(form) {
          await signUp(form);
          setUser();
          this.$router.push("/home");
        },
        async updatePassword(password, passwordRepeat) {
          await updateUserPassword(password, passwordRepeat);
        },
        async resetPassword(email) {
          await passwordRecovery(email);
        },
        async logout() {
          await signOut();
          this.$router.push("/sign-in");
        },
      },
    });

    // Register global components
    Vue.component("ContentLoader", ContentLoader);

    Vue.prototype.$snackbar = function(
      message,
      options = {
        type: "is-danger",
      }
    ) {
      Snackbar.open({
        message,
        duration: 5000,
        position: "is-bottom-left",
        queue: false,
        ...options,
      });
    };
  },
};
