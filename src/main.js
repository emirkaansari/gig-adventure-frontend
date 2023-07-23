/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import { createI18n } from 'vue-i18n';
import messages from './messages.json';
import store from './store/store';

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

const i18n = createI18n({
  locale: 'en',
  messages,
});

registerPlugins(app)

app.use(i18n)
app.use(store)
app.mount('#app')
