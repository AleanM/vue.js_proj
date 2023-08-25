<template>
    <div
      class="modal-window"
      @click="closeModal"
      @mousedown="handleMouseDown"
      @mousemove="handleMouseMove"
      @mouseup="handleMouseUp"
    >
      <div class="modal-content" @click.stop>
        <button class="close-button" @click="closeModal">×</button>
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
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
          // Determine the threshold for closing the modal
          const threshold = 100; // Adjust this value as needed
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
  
  <style scoped>
  .modal-window {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    position: relative;
    background-color: white;
    width: 600px;
    height: 600px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    align-items: flex-end;
    transform: translate(var(--translate-x, 0px), var(--translate-y, 0px));
    transition: transform 0.2s ease-in-out;
  }
  
  .modal-content.swiping {
    transition: transform 0.2s ease-in-out;
  }
  
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
  }
  </style>
  