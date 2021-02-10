import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import { auth } from "@/firebaseconfig";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/home",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  const userIsLoggedIn = !!auth.currentUser;
  if (to.matched.some(record => record.meta.requiresAuth) && !userIsLoggedIn) {
    next("/login");
  }
  next();
});

export default router;
