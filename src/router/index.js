import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Finance from "../views/Finance.vue";
import Inventory from "../views/Inventory.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Finance",
    name: "Finance",
    component: Finance
  },
  {
    path: "/Inventory",
    name: "Inventory",
    component: Inventory
  },
  {
    path: "/VehiclePage/:carMake/:carModel/:stockNumber",
    name: "VehiclePage",
    props: true,
    component: () =>
      import ('../views/VehiclePage.vue')
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  base: process.env.BASE_URL,
  routes
});

export default router;
