<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-centered">Sign in</h3>

          <br>

          <form>
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input class="input" type="email" placeholder="Your Email">
              </div>
            </div>

            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input class="input" type="password" placeholder="Your Password">
              </div>
            </div>

            <div class="field">
              <div class="control">
                <label class="checkbox">
                  <input type="checkbox">
                  Remember me
                </label>
              </div>
            </div>

            <br>

            <button class="button is-link is-fullwidth">Login</button>
          </form>

          <br>

          <p class="has-text-centered">
            Don't have an account?
            <router-link tag="a" to="/register">Sign up here</router-link>.
            <br>Forgot your password?
            <router-link tag="a" to="/">Reset password</router-link>.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>
