import { createApp } from 'vue';
import { VueQueryPlugin } from '@tanstack/vue-query'
import './styles.css';
import router from './router';
import App from './App.vue';
import Page from './components/Page.vue';

const app = createApp(App);
app.use(router);
app.use(VueQueryPlugin);
app.component('page', Page);
app.mount('#app');
