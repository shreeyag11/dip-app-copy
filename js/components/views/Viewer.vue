<template>
<<<<<<< HEAD
  <section class="section is-full"
    @drop="dropHandler"
    @dragover="dragOverHandler"
    >
    <ImageViewer />
=======
  <section class="section">
>>>>>>> parent of e80a4a2... ImageViewer done
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
<<<<<<< HEAD
    ImageViewer,
  },
  methods: {
    dropHandler(ev) {
      // Prevent default behavior (Prevent file from being opened)
      ev.preventDefault();

      if (ev.dataTransfer.items) {
        // Use DataTransferItemList interface to access the file(s)
        for (let i = 0; i < ev.dataTransfer.items.length; i += 1) {
          // If dropped items aren't files, reject them
          if (ev.dataTransfer.items[i].kind === 'file') {
            const file = ev.dataTransfer.items[i].getAsFile();
            this.$store.dispatch('PARSE_FILE', {
              file,
              type: this.pageName,
            });
          }
        }
      } else {
        // Use DataTransfer interface to access the file(s)
        for (let i = 0; i < ev.dataTransfer.files.length; i += 1) {
          console.log(
            `2. ... file[${i}].name = ${ev.dataTransfer.files[i].name}`,
          );
        }
      }
    },
    dragOverHandler(ev) {
      // Prevent default behavior (Prevent file from being opened)
      ev.preventDefault();
    },
=======
>>>>>>> parent of e80a4a2... ImageViewer done
  }
};
</script>

<style scoped>
.section {
  padding: 0rem 0rem 0rem 0rem;
}
</style>