import './bootstrap';

import { createApp } from 'vue';

import app from './components/app.vue';

import router from './router/index';

import i18n from "./i18n";

createApp(app).use(router).use(i18n).mount('#app');