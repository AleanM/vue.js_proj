<template>
    <div>
      <ButtonComponent @click="openModal" />
      <ModalWindowComponent  v-if="isModalOpen" @close="closeModal">
        <TextTitleComponent />
        <InputComponent @submit="handleFormSubmit" />
      </ModalWindowComponent >
    </div>
  </template>
  
  <script>
  import ButtonComponent from '@/components/ButtonComponent/ButtonComponent.vue';
  import ModalWindowComponent from '@/components/ModalWindowComponent/ModalWindowComponent.vue';
  import TextTitleComponent from '@/components/TextTitleComponent/TextTitleComponent.vue';
  import InputComponent from '@/components/InputComponent/InputComponent.vue';
  

  export default {
    components: {
      ModalWindowComponent,
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
      }
    }
  };
  </script>
