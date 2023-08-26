import { createApp } from 'vue';
import App from './App.vue';
import router from './routes/router'; // Пример импорта маршрутизатора

createApp(App)
  .use(router) // Убедитесь, что вы используете маршрутизатор
  .mount('#app');