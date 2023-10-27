import { createApp } from 'vue';
import { createPinia } from 'pinia';

import router from '@/router';
import components from '@/components/UI';

import App from '@/App.vue';

const pinia = createPinia();

const app = createApp(App);

for (const component in components) {
    app.component(component, components[component]);
}

app.use(pinia);
app.use(router);
app.mount('#app');

import '@/assets/styles/base.scss';
