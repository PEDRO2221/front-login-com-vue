import { createRouter, createWebHistory } from 'vue-router';
import LoginComponent from '@/components/Login.vue';
import Recuperacao from '@/components/Recuperacao.vue';



const routes = [
  {path : '/password',
    name:'Recuperacao',
     component: Recuperacao },

  {
    path: '/',
    name: 'LoginComponent',
    component: LoginComponent
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
