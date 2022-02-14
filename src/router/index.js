import Router from "vue-router";
import Vue from "vue";

Vue.use(Router);

const ROUTES = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/index",
    name: "index",
    component: () => import("@/views/Index"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login"),
  },
  {
    path: "/error",
    name: "error",
    component: () => import("@/views/Error"),
  },
];

export default new Router({
  mode: "hash",
  routes: ROUTES,
});
