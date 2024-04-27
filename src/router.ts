import { createRouter, createWebHistory } from 'vue-router';
import Overview from './pages/Overview.vue';
import Details from './pages/Details.vue';
import ShowOverview from './components/ShowOverview/ShowOverview.vue';
import ShowDetails from './components/ShowDetails/ShowDetails.vue';
import SearchOverview from './components/SearchOverview/SearchOverview.vue';
import Search from './pages/Search.vue';

const routes = [
  { path: '/', component: Overview, children: [{ path: '', component: ShowOverview }] },
  { path: '/show/:id', component: Details, children: [{ path: '', component: ShowDetails, name: 'show' }] },
  { path: '/search/:query', component: Search, children: [{ path: '', component: SearchOverview, name: 'search' }] },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
