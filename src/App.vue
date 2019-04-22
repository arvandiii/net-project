<template>
  <section class="section">
    <app-header></app-header>
    <hr>
    <router-view></router-view>
  </section>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  data() {
    return {};
  },
  components: {
    "app-header": Header
  }
};
</script>

<style lang="scss" >
</style>
