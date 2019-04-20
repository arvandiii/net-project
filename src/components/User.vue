<template>
  <div>
    <h1>The user component</h1>
    <p>Im a user {{name}}</p>
    <button @click="changeMyName">Change My Name</button>
    <hr>
    <div class="columns">
      <div class="column">
        <app-user-detail :name="name" @nameWasReset="name = $event"></app-user-detail>
      </div>
      <div class="column">
        <app-user-edit></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";
export default {
  data: function() {
    return { name: "alireza" };
  },
  components: {
    "app-user-detail": UserDetail,
    "app-user-edit": UserEdit
  },
  methods: {
    changeMyName() {
      this.name = "gholi";
    }
  }
};
</script>
