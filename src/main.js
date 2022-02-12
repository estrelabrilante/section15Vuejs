import { createApp } from 'vue';
import store from './store.js';
import App from './App.vue';

const app = createApp(App);
// connecting app to store
app.use(store);
app.mount('#app');
