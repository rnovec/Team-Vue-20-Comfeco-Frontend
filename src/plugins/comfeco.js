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
        currentEvent() {
          return state.profile.event ?? null;
        },
        earnedBadges() {
          return state.profile.badges ?? [];
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
          const {
            gender,
            birthday,
            country,
            area,
            biography,
            ghprofile,
            twprofile,
            fbprofile,
            lnprofile,
          } = await getUserProfile();
          return {
            gender,
            birthday,
            country,
            area,
            biography,
            ghprofile,
            twprofile,
            fbprofile,
            lnprofile,
          };
        },
        async updateProfile(userInfo, profileInfo, profilePhotoFile) {
          await updateUserProfile(userInfo, profileInfo, profilePhotoFile);
          setUser();
        },
        async updatePassword(password, passwordRepeat) {
          await updateUserPassword(password, passwordRepeat);
        },
        async updateBadges(badge, data) {
          const socialBadgeID = 1;
          const friendlyBadgeID = 2;
          switch (badge) {
            case "sociable":
              if (data) {
                let isProfileComplete = true;
                for (const key of Object.keys(data)) {
                  if (data[key] === "" || data[key] === null) {
                    isProfileComplete = false;
                  }
                }
                if (
                  isProfileComplete &&
                  state.profile.badges.indexOf(socialBadgeID) === -1
                ) {
                  await updateUserProfile(null, {
                    badges: [...state.profile.badges, socialBadgeID],
                  });
                  setUser();
                  this.$swal.fire(
                    "Buen trabajo!",
                    "Haz completado tu perfil!",
                    "success"
                  );
                }
              }
              break;
            case "friendly":
              if (!this.currentGroup.id) {
                await updateUserProfile(null, {
                  badges: [...state.profile.badges, friendlyBadgeID],
                });
                setUser();
                this.$swal.fire(
                  "Bien hecho!",
                  "Te haz unido a un grupo!",
                  "success"
                );
              }
              break;
            default:
              break;
          }
        },
        async resetPassword(email) {
          await passwordRecovery(email);
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
