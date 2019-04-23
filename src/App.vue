<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
    user: {{user}}
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  components: { "app-header": Header }
};
</script>

<style>
</style>
