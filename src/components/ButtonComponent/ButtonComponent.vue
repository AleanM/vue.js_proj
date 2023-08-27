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

<style src="./ButtonComponent.styles.css"></style>