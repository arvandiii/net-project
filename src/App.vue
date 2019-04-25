<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
    user: {{user.name}} {{user.role}}
    <button @click="changeUser">Change user</button>
  </div>
</template>

<script>
import Header from "./components/Header/index.vue";

export default {
  data() {
    return {};
  },
  methods: {
    changeUser() {
      this.$store.commit("changeUser");
    }
  },
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  components: {
    "app-header": Header
  }
};
</script>

<style>
</style>
