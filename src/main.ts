import { createApp } from 'vue';
import './styles.css';
import router from './router';
import App from './App.vue';
import Page from './components/Page.vue';

const app = createApp(App);
app.use(router);
app.component('page', Page);
app.mount('#app');
