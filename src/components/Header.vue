<template>
  <nav class="navbar is-info" role="navigation" aria-label="main navigation">
    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link tag="a" to="/" class="navbar-item">Home</router-link>
        <router-link tag="a" to="/dashboard" class="navbar-item">Dashboard</router-link>
        <router-link tag="a" to="/profile" class="navbar-item">Profile</router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons" v-if="user">
            <a class="button is-dark">
              <strong>Log out</strong>
            </a>
          </div>
          <div class="buttons" v-else>
            <router-link tag="a" to="/login" class="button is-dark">
              <strong>Log in</strong>
            </router-link>
            <router-link tag="a" to="/register" class="button is-light">
              <strong>Sign up</strong>
            </router-link>
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
