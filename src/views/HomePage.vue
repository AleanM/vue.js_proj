<template>
    <div>
      <ButtonComponent @click="openModal" />
      <ModalWindow  v-if="isModalOpen" @close="closeModal">
        <TextTitleComponent />
        <InputComponent @submit="handleFormSubmit" />
      </ModalWindow >
    </div>
  </template>
  
  <script>
  import ButtonComponent from '../components/ButtonComponent.vue';
  import ModalWindow from '../components/ModalWindow.vue';
  import TextTitleComponent from '../components/TextTitleComponent.vue';
  import InputComponent from '../components/InputComponent.vue';
  

  export default {
    components: {
      ModalWindow,
      ButtonComponent,
      TextTitleComponent,
      InputComponent
    },
    data() {
      return {
        isModalOpen: false,
      };
    },

    methods: {
      openModal() {
        this.isModalOpen = true;
      },
      closeModal() {
        this.isModalOpen = false;
      },
      handleFormSubmit(formData) {
        // В этом методе вы можете обработать полученные данные от формы
        console.log(formData);
      }
    }
  };
  </script>
