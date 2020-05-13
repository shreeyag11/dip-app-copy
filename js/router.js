import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/views/Home.vue';
import ViewerPage from './components/views/Viewer.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/viewer',
    name: 'Viewer',
    component: ViewerPage
  }
]

const router = new VueRouter({
  routes
})

export default router;