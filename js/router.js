import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/views/Home.vue';
import ViewerPage from './components/views/Viewer.vue';
import Ass1 from './components/views/Ass1.vue';

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
  },
  {
    path: '/assign1',
    name: 'Assign1',
    component: Ass1
  }
]

const router = new VueRouter({
  routes
})

export default router;