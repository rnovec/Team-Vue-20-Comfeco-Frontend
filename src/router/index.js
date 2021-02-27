import Vue from "vue";
import VueRouter from "vue-router";
import Auth from "../layouts/auth.vue";
import Default from "../layouts/default.vue";
import { userIsLoggedIn } from "@/services/auth";

Vue.use(VueRouter);

const routes = [
  {
    path: "/auth",
    name: "Login",
    redirect: "/sign-in",
    component: Auth,
    children: [
      {
        path: "/sign-in",
        name: "SignIn",
        component: () => import("../views/auth/SignIn.vue"),
        children: [],
        meta: {
          title: "Iniciar sesión",
        },
      },
      {
        path: "/sign-up",
        name: "SignUp",
        component: () => import("../views/auth/SignUp.vue"),
        children: [],
        meta: {
          title: "Registrarse",
        },
      },
      {
        path: "/password-recovery",
        name: "PasswordRecovery",
        component: () => import("../views/auth/PasswordRecovery.vue"),
        children: [],
        meta: {
          title: "Recuperar contraseña",
        },
      },
    ],
  },
  {
    path: "/",
    name: "Default",
    redirect: "/home",
    component: Default,
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("../views/home/index.vue"),
      },
      {
        path: "/profile",
        name: "Profile",
        component: () => import("../views/profile/index.vue"),
      },
    ],
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "hash",
  routes,
});

router.beforeEach((to, from, next) => {
  if (
    to.matched.some(record => record.meta.requiresAuth) &&
    !userIsLoggedIn()
  ) {
    next("/sign-in");
  }
  next();
});

export default router;
