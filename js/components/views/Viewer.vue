<template>
  <div class="upload">
    <FilePicker />
  </div>
</template>

<script>
import FilePicker from "../Viewer/FilePicker.vue";

export default {
  components: {
    FilePicker
  }
};
</script>

<style scoped>
.upload {
  width: 100%;
  display: block;
}
</style>