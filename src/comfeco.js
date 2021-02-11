import { SnackbarProgrammatic as Snackbar } from "buefy";

export default {
  install(Vue, options) {
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
