import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/calendar",
    name: "calendar",
    component: () =>
      import("../views/CalendarView.vue"),
  },
  {
    path: "/concert-detail/:id",
    name: "concert-detail",
    component: () =>
      import("../views/ConcertDetailView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
