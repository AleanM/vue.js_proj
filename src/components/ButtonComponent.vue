<template>
    <div class="center-button-container">
    <button class="center-button" @click="openModal">Открыть модальное окно</button>
  </div>
  </template>
  
  <script>
  export default {
    methods: {
      openModal() {
        this.$emit('open');
      }
    }
  };
  </script>

<style scoped>
.center-button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Высота 100% видимого окна */
}

.center-button {
  padding: 10px 20px;
}
</style>