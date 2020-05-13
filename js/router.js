import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/views/Home.vue';
import Viewer from './components/views/Viewer.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/Home',
    components: Home
  },
  {
    path: '/Viewer',
    components: Viewer 
  }
]

const router = new VueRouter({
  routes
})

export default router;