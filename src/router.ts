import { createRouter, createWebHistory } from 'vue-router';
import Overview from '@/pages/Overview.vue';
import Details from '@/pages/Details.vue';
import ShowOverview from '@/components/ShowOverview/ShowOverview.vue';
import ShowDetails from '@/components/ShowDetails/ShowDetails.vue';
import SearchOverview from '@/components/SearchOverview/SearchOverview.vue';
import Search from '@/pages/Search.vue';

const routes = [
  {
    path: '/',
    component: Overview,
    children: [{ path: '', component: ShowOverview, name: 'home' }],
  },
  {
    path: '/show/:id',
    component: Details,
    children: [{ path: '', component: ShowDetails, name: 'show' }],
  },
  {
    path: '/search/:query',
    component: Search,
    children: [{ path: '', component: SearchOverview, name: 'search' }],
  },
  { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
});

export default router;
