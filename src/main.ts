import { createApp } from 'vue';
import App from './App.vue';

// Import styles
import './styles/global.scss';

// Import plugins
import vuetify from './plugins/vuetify';
import router from './plugins/router';
import i18n from './plugins/i18n';

const app = createApp(App);
app.use(vuetify);
app.use(router);
app.use(i18n);
app.mount('#app');
