<template>
  <div>
    <FileNotification />
    <b-navbar>
      <template slot="start">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">Home</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/viewer' }">Viewer</b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item 
          href="https://unccdis.zulipchat.com/"
          target="_blank"
        >
          <img src="img/zulip_logo.png">
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
import FileNotification from '../components/Viewer/FileNotification.vue';
export default {
  components: {
    FileNotification
  }
};
</script>
