<template>
  <section class="section">
    <app-result></app-result>
    <hr>
    <app-counter></app-counter>
  </section>
</template>

<script>
import Counter from "./components/Counter.vue";
import Result from "./components/Result.vue";
export default {
  data() {
    return {};
  },
  components: {
    "app-counter": Counter,
    "app-result": Result
  }
};
</script>

<style lang="scss" >
</style>
