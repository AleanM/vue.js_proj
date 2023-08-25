<template>
  
 

    <button class="center-button" @click="openModal">Налоговый вычет</button>

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

.center-button {
  margin-top: 50vh;
  padding: 10px 20px;
  background-color: white;
  color: black;
  border: 2px solid black;
  border-radius: 7px;
}
</style>
