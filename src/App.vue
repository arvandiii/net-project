<template>
  <div>
    <app-header></app-header>
    <app-servers></app-servers>
    <app-server-details></app-server-details>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Servers from "./components/Servers";
import ServerDetails from "./components/ServerDetails";
export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-servers": Servers,
    "app-server-details": ServerDetails
  }
};
</script>

<style lang="scss">
</style>
