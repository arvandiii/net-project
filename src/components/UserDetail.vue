<template>
  <div>
    <h1>Detail</h1>
    <p>name: {{name}}</p>
    <button @click="resetName">reset name</button>
  </div>
</template>

<script>
export default {
  props: ["name"],
  methods: {
    resetName() {
      this.name = "salammmmmm";
      this.$emit("nameWasReset", this.name);
    }
  }
};
</script>
