import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { defineRule } from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';
import { setLocale } from '@vee-validate/i18n';
import ptBr from '@vee-validate/i18n/dist/locale/pt_BR.json';
import { configure } from 'vee-validate';
import { localize } from '@vee-validate/i18n';
import Notifications from '@kyvg/vue3-notification';

configure({
    generateMessage: localize({
      ptBr,
    }),
  });
defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
setLocale('ptBr');

const app = createApp(App);
app.use(router);
app.use(Notifications);
app.mount('#app');

