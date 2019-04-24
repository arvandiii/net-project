import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const users = [
  {},
  { name: "ali", role: "admin" },
  { name: "reza", role: "teacher" },
  { name: "melika", role: "student" },
  { name: "gholi", role: "staff" }
];

export const store = new Vuex.Store({
  state: {
    user: users[2]
  },
  getters: {
    user: state => {
      return state.user;
    }
  },
  mutations: {
    changeUser(state) {}
  }
});
