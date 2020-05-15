<template>
  <section class="section">
    <Log />
    <FilePicker />
  </section>
</template>

<script>
import FilePicker from "../Viewer/FilePicker.vue";
import Log from "../Viewer/Log.vue";

export default {
  components: {
    FilePicker,
    Log,
  }
};
</script>

<style scoped>
.section {
  padding: 0rem 0rem 0rem 0rem;
}
</style>