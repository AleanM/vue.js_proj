import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue'; // Пример импорта компонента
import NalogPage from '@/views/NalogPage.vue'

const routes = [
  {
    path: '/',
    component: HomePage
  }, {
    path: '/nalog',
    component: NalogPage
  },
  // Другие маршруты...
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;