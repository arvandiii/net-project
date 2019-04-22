<template>
  <div>
    <h1 class="title">we are in User component</h1>
    <hr>
    <button @click="navigateToHome" class="button is-link">Go to home</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToHome() {
      this.$router.push("/");
    }
  }
};
</script>
