import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue'; // Пример импорта компонента
import NalogPage from '@/views/NalogPage.vue'
import FinishPage from '@/views/FinishPage.vue'

const routes = [
  {
    path: '/',
    component: HomePage
  }, {
    path: '/nalog',
    component: NalogPage
  },{
    path: '/finish',
    component: FinishPage
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;