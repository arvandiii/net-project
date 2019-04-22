import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import "./assets/sass/main.scss";
import { store } from "./store/store";
import { routes } from "./router";

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  routes
});

new Vue({
  el: "#app",
  store,
  router,
  render: h => h(App)
});
