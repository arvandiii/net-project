<template>
  <div>
    <component :is="dynamicDashboard"></component>
  </div>
</template>

<script>
import StudentDashboard from "./StudentDashboard.vue";
import StaffDashboard from "./StaffDashboard.vue";
import AdminDashboard from "./AdminDashboard.vue";

export default {
  computed: {
    dynamicDashboard() {
      const user = this.$store.state.user;
      switch (user.role) {
        case "admin":
          return "app-admin-dashboard";
        case "student":
          return "app-student-dashboard";
        case "staff":
          return "app-staff-dashboard";
        default:
          return null;
      }
    }
  },
  components: {
    "app-student-dashboard": StudentDashboard,
    "app-staff-dashboard": StaffDashboard,
    "app-admin-dashboard": AdminDashboard
  }
};
</script>

<style>
</style>
