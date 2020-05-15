<template>
  <section class="section">
    <ImageViewer />
    <Log />
    <FilePicker />
  </section>
</template>

<script>
import FilePicker from "../Viewer/FilePicker.vue";
import Log from "../Viewer/Log.vue";
import ImageViewer from "../Viewer/ImageViewer.vue";

export default {
  components: {
    FilePicker,
    Log,
    ImageViewer,
  }
};
</script>

<style scoped>
.section {
  padding: 0rem 0rem 0rem 0rem;
}
</style>