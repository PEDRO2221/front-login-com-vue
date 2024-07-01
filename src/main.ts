import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { defineRule } from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';
defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
import { setLocale } from '@vee-validate/i18n';
import ptBr from '@vee-validate/i18n/dist/locale/pt_BR.json';
import { configure } from 'vee-validate';
import { localize } from '@vee-validate/i18n';
configure({
    generateMessage: localize({
      ptBr,
    }),
  });
setLocale('ptBr')

const app = createApp(App);

app.use(router);
app.mount('#app');
