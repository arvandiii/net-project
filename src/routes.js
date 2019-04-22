import A from "./components/A.vue";
import B from "./components/B.vue";
import Home from "./components/Home.vue";

export const routes = [
  { path: "", component: Home },
  { path: "/A", component: A },
  { path: "/B", component: B }
];
