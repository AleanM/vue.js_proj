<template>
  <div>
    <ButtonComponent @click="openModal" />
    <ModalWindow  v-if="isModalOpen" @close="closeModal">
      <p>Содержимое модального окна</p>
    </ModalWindow >
  </div>
</template>

<script>
import ButtonComponent from './components/ButtonComponent.vue';
import ModalWindow from './components/ModalWindow.vue';

export default {
  components: {
    ModalWindow,
    ButtonComponent
  },
  data() {
    return {
      isModalOpen: false
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
