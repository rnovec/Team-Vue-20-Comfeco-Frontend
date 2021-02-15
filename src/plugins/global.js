import { SnackbarProgrammatic as Snackbar } from "buefy";
import auth, {
  setUser,
  signIn,
  signUp,
  signOut,
  socialLogin,
  passwordRecovery,
} from "../store/auth";

export default {
  install(Vue, options) {
    Vue.mixin({
      mounted() {
        setUser();
      },
      computed: {
        loguedUser() {
          return auth.user;
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
