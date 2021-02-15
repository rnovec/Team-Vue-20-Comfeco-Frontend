import { SnackbarProgrammatic as Snackbar } from "buefy";
import auth, {
  setUser,
  signIn,
  signUp,
  passwordRecovery,
  signOut,
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
        async login(email, password) {
          await signIn(email, password);
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

    Vue.prototype.$snackbar = function(message) {
      Snackbar.open({
        duration: 5000,
        message,
        type: "is-danger",
        position: "is-bottom-left",
        actionText: "Undo",
        queue: false,
      });
    };
  },
};
