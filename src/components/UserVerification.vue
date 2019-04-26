<template>
  <section class="section">
    <div class="container">
      <div class="column is-8 is-offset-2">
        <h1 class="title">Verify users</h1>
        <div class="box" v-for="(newUser, index) in newUsers" :key="index">
          <div class="columns">
            <div class="column">
              <p class="heading">Mail</p>
              <p class="title is-4">{{newUser.mail}}</p>
            </div>
            <div class="column">
              <p class="heading">Role</p>
              <p class="title is-4">{{newUser.role}}</p>
            </div>
            <div class="column">
              <div class="buttons has-addons is-centered">
                <span class="button is-large is-success">Verify</span>
                <span class="button is-large is-danger">Deny</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      newUsers: [
        { mail: "aliakbari@sbu.ac.ir", role: "teacher" },
        { mail: "shameli@sbu.ac.ir", role: "teacher" },
        { mail: "amini@sbu.ac.ir", role: "staff" }
      ]
    };
  },
  computed: {}
};
</script>

<style>
</style>
