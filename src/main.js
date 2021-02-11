import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VuePapaParse from "vue-papa-parse";
import VueCarousel from "vue-carousel";
import Spinner from "vue-simple-spinner";
import VueSimpleAlert from "vue-simple-alert";

Vue.use(VuePapaParse);
Vue.use(VueCarousel);
Vue.use(VueSimpleAlert);
Vue.use(Spinner);


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
