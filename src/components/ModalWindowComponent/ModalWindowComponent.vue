<template>
  
    <div
      class="modal-window"
      @click="closeModal"
      @mousedown="handleMouseDown"
      @mousemove="handleMouseMove"
      @mouseup="handleMouseUp"
    >

      <div class="modal-content" @click.stop>
        <div class="top-bar"></div>
        <button class="close-button" @click="closeModal">×</button>
        <slot></slot>
        
      </div>
    </div>
  </template>
  
  <script>


  export default {
    created() {
    this.$router.push('/');
  },
    data() {
      return {
        isDragging: false,
        startX: 0,
        startY: 0,
        translateX: 0,
        translateY: 0,
      };
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },
      handleMouseDown(event) {
        this.isDragging = true;
        this.startX = event.clientX;
        this.startY = event.clientY;
      },
      handleMouseMove(event) {
        if (this.isDragging) {
          this.translateX = event.clientX - this.startX;
          this.translateY = event.clientY - this.startY;
        }
      },
      handleMouseUp() {
        if (this.isDragging) {
          const threshold = 50; 
          if (Math.abs(this.translateY) > threshold) {
            this.closeModal();
          }
  
          this.isDragging = false;
          this.startX = 0;
          this.startY = 0;
          this.translateX = 0;
          this.translateY = 0;
        }
      },
    },
  };
  </script>
  
  <style src="./ModalWindowComponent.styles.css">
 
  </style>
  