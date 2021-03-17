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
        currentGroup() {
          return state.profile.group ?? {};
        },
        avatarURL() {
          return (
            state.user.photoURL ?? this.defaultAvatar(state.user.displayName)
          );
        },
      },
      methods: {
        defaultAvatar(displayName) {
          return `https://avatars.dicebear.com/4.5/api/identicon/${displayName}.svg`;
        },
        async socialSignIn(service, scope) {
          await socialLogin(service, scope);
          setUser();
          this.$router.push("/home");
        },
        async login(form) {
          const { email, password, rememberMe } = form;
          await signIn(email, password, rememberMe);
          setUser();
          this.$router.push("/home");
        },
        async register(form) {
          await signUp(form);
          setUser();
          this.$router.push("/home");
        },
        async logout() {
          await signOut();
          this.$router.push("/sign-in");
        },
        async getUserInfo() {
          const userInfo = await getUserProfile();
          return userInfo;
        },
        async updateProfile(userInfo, profileInfo, profilePhotoFile) {
          await updateUserProfile(userInfo, profileInfo, profilePhotoFile);
          setUser();
        },
        async updatePassword(password, passwordRepeat) {
          await updateUserPassword(password, passwordRepeat);
        },
        async resetPassword(email) {
          await passwordRecovery(email);
        },
        async leaveGroup() {
          if (this.currentGroup.id) {
            this.$swal
              .fire({
                title: "¿Estas seguro de abandonar tu grupo?",
                text: "¡Esta acción es irreversible!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si, abandonar!",
                cancelButtonText: "Cancelar",
              })
              .then(async result => {
                if (result.isConfirmed) {
                  await this.updateProfile(null, { group: null });
                }
              });
          }
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
