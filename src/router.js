import Dashboard from "./components/Dashboard/index.vue";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import Profile from "./components/Profile.vue";

export const routes = [
  { path: "/", component: Home },
  { path: "/Dashboard", component: Dashboard },
  { path: "/Profile", component: Profile },
  { path: "/login", component: Login },
  { path: "/register", component: Register }
];
