import { SnackbarProgrammatic as Snackbar } from "buefy";
import auth, {
  setUser,
  getUserProfile,
  updateUserProfile,
  signIn,
  signUp,
  signOut,
  socialLogin,
  passwordRecovery,
} from "@/services/auth";

export default {
  install(Vue, options) {
    Vue.mixin({
      mounted() {
        setUser();
      },
      computed: {
        currentUser() {
          return auth.user;
        },
        avatarURL() {
          return (
            auth.user.photoURL ??
            `https://avatars.dicebear.com/4.5/api/identicon/${auth.user.displayName}.svg`
          );
        },
      },
      methods: {
        async socialSignIn(service) {
          await socialLogin(service);
          this.$router.push("/home");
        },
        async login(form) {
          const { email, password, rememberMe } = form;
          await signIn(email, password, rememberMe);
          this.$router.push("/home");
        },
        async getUserInfo() {
          const userInfo = await getUserProfile();
          return userInfo;
        },
        async updateProfile(userInfo, profileInfo, profilePhotoFile) {
          await updateUserProfile(userInfo, profileInfo, profilePhotoFile);
        },
        async register(form) {
          await signUp(form);
          this.$router.push("/home");
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
