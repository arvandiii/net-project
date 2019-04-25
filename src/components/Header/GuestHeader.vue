<template>
  <nav class="navbar is-info" role="navigation">
    <div class="navbar-menu">
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </a>
      </div>
      
      <div class="navbar-start">
        <router-link tag="a" to="/" class="navbar-item">Home</router-link>
      </div>

      <div class="navbar-end">
        <div class="buttons">
          <router-link tag="a" to="/login" class="button is-dark">
            <strong>Log in</strong>
          </router-link>
          <router-link tag="a" to="/register" class="button is-light">
            <strong>Sign up</strong>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$store.getters.user;
    }
  }
};
</script>

<style>
</style>