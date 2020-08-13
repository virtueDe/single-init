import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Layouts from "@/layouts/index.vue"
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/home/index.vue"),
    // children: [
    //   {
    //     path: "/home",
    //     name: "Home",
    //     component: () => import("@/views/home/index.vue")
    //   }
    // ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
