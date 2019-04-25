<template>
  <div>
    <component :is="dynamicHeader"></component>
  </div>
</template>

<script>
import AdminHeader from "./AdminHeader.vue";
import StudentStaffTeacherHeader from "./StudentStaffTeacherHeader.vue";
import GuestHeader from "./GuestHeader.vue";

export default {
  computed: {
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
