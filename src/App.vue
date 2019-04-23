<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

const roles = ["admin", "teacher", "student", "staff"];

export default {
  data() {
    return {
      user: {
        role: ""
      }
    };
  },
  components: { "app-header": Header }
};
</script>

<style>
</style>
