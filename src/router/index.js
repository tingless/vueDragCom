import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Example",
    component: () => import("views/Example")
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
