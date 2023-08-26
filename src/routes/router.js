import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue'; // Пример импорта компонента
import NalogPage from '@/views/NalogPage.vue'
import InfoPage from '@/views/InfoPage.vue'

const routes = [
  {
    path: '/',
    component: HomePage
  }, {
    path: '/nalog',
    component: NalogPage
  },{
    path: '/info',
    component: InfoPage
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;