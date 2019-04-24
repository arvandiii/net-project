<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-centered">Profile</h3>

          <br>

          <form>
            <div class="field">
              <label class="label">New Email</label>
              <div class="control">
                <input class="input" type="email" placeholder="Your Email">
              </div>
            </div>
            <button class="button is-success is-fullwidth">Update Email</button>
          </form>

          <br>

          <form>
            <div class="field">
              <label class="label">New Password</label>
              <div class="control">
                <input class="input" type="password" placeholder="Your Password">
              </div>
            </div>
            <button class="button is-success is-fullwidth">Update Password</button>
          </form>

          <br>
          <form>
            <div class="field">
              <label class="label">Role</label>
              <div class="select">
                <select disabled>
                  <option>Admin</option>
                  <option>Teacher</option>
                  <option>Staff</option>
                  <option>Student</option>
                </select>
              </div>
            </div>
          </form>
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
