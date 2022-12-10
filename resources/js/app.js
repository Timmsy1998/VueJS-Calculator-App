import './bootstrap';

import { createApp } from 'vue';
import router from './router';
import App from './layouts/app.vue';

createApp(App).use(router).mount('#app');
