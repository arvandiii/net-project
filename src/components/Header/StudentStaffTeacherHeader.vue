<template>
  <nav class="navbar is-info" role="navigation">
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </a>
    </div>

    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link tag="a" to="/" class="navbar-item">Home</router-link>
        <router-link tag="a" to="/dashboard" class="navbar-item">Dashboard</router-link>
        <router-link tag="a" to="/profile" class="navbar-item">Profile</router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-dark">
              <strong>Log out</strong>
            </a>
          </div>
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