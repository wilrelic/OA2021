import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Finance from "../views/Finance.vue";
import Inventory from "../views/Inventory.vue";
import Warranty from "../views/Warranty.vue";
import Careers from "../views/Careers.vue";
import Locations from "../views/Locations.vue";
import Contact from "../views/Contact.vue";

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
    path: "/Warranty",
    name: "Warranty",
    component: Warranty
  },
  {
    path: "/Careers",
    name: "Careers",
    component: Careers
  },
  {
    path: "/Locations",
    name: "Locations",
    component: Locations
  },
  {
    path: "/Contact",
    name: "Contact",
    component: Contact
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
