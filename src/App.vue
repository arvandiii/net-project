<template>
  <div>
    <component :is="dynamicHeader"></component>
    <router-view></router-view>
    user: {{user.name}} {{user.role}}
    <button @click="changeUser">Change user</button>
  </div>
</template>

<script>
import AdminHeader from "./components/Header/AdminHeader.vue";
import StudentStaffTeacherHeader from "./components/Header/StudentStaffTeacherHeader.vue";
import GuestHeader from "./components/Header/GuestHeader.vue";

export default {
  data() {
    return {};
  },
  methods: {
    changeUser() {
      this.$store.commit("changeUser");
    }
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    dynamicHeader() {
      const user = this.$store.state.user;
      switch (user.role) {
        case "admin":
          return "app-admin-header";
        case "student":
          return "app-student-staff-teacher-header";
        case "staff":
          return "app-student-staff-teacher-header";
        case "teacher":
          return "app-student-staff-teacher-header";
        default:
          return "app-guest-header";
      }
    }
  },
  components: {
    "app-admin-header": AdminHeader,
    "app-student-staff-teacher-header": StudentStaffTeacherHeader,
    "app-guest-header": GuestHeader
  }
};
</script>

<style>
</style>
