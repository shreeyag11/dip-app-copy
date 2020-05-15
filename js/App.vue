<template>
  <div>
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

//TODO: Drag and drop for the whole page
//TODO: zulip logo
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";
@import "~bulma-pageloader";

@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>

