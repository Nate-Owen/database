 branch: main
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './assets/css/global.css';
import { createPinia } from 'pinia';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(ElementPlus);
app.use(createPinia());

app.mount('#app');