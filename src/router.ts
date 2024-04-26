import { createRouter, createWebHistory } from 'vue-router';
import Overview from './pages/Overview.vue';
import Details from './pages/Details.vue';

const routes = [
  { path: '/', component: Overview, children: [{ path: '', component: MovieOverview }] },
  { path: '/', component: Details, children: [{ path: '', component: MovieDetail }] },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
