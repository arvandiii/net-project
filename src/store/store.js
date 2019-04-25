import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let userIndex = 0;
const users = [
  { name: null, role: "guest" },
  { name: "ali", role: "admin" },
  { name: "reza", role: "teacher" },
  { name: "melika", role: "student" },
  { name: "gholi", role: "staff" }
];

export const store = new Vuex.Store({
  state: {
    user: users[userIndex]
  },
  getters: {
    user: state => {
      return state.user;
    }
  },
  mutations: {
    changeUser(state) {
      userIndex++;
      if (userIndex >= users.length) {
        userIndex = 0;
      }
      state.user = users[userIndex];
    }
  }
});
