import { createApp } from 'vue';
import App from './App.vue';
import router from './routes/router';
import store from './store/store'; // Пример импорта маршрутизатора


createApp(App)
  .use(router) // Убедитесь, что вы используете маршрутизатор
  .use(store)
  .mount('#app');