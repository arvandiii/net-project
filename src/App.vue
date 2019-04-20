<template>
  <section class="section">
    <app-user></app-user>
  </section>
</template>

<script>
import User from "./components/User.vue";
export default {
  components: {
    "app-user": User
  }
};
</script>

<style lang="scss">
</style>
