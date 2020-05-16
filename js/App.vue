<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    NavBar
  }
};
<<<<<<< HEAD

//TODO: Drag and drop for the whole page
=======
>>>>>>> parent of e80a4a2... ImageViewer done
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";
@import "~bulma-pageloader";

@import "~bulma";
@import "~buefy/src/scss/buefy";

#app {
  display: flex;
  flex-flow: column;
  height: 100%;
}

body {
  height: 100%;
  width: 100%;
  position: absolute;
}
</style>

