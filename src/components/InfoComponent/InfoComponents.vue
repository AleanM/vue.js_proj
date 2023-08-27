<template>
    <div class="page-container">
        <div class="title">
        <h3>Спасибо!</h3>
        <h3>Налоги успешно оплачены!</h3>
        <div class="success"></div>
    </div>
    <div class="info-container">
        <div class="info">
            <div class="info-section">
                <h4>Имя</h4>
                <h4>{{ formData.name }}</h4>
            </div>
            <div class="info-section">
                <h4>Фамилия</h4>
                <h4>{{ formData.lastName }}</h4>
            </div>
            <div class="info-section">
                <h4>ИИН</h4>
                <h4>{{ formData.iin }}</h4>
            </div>
            <div class="info-section">
                <h4>Режим налогообложения</h4>
                <h4>{{ formData.selectedOption }}</h4>
            </div>
            <div class="info-section">
                <h4>Ваш доход за полгода</h4>
                <h4>{{ formData.income }}₸</h4>
            </div>
            <div class="info-section">
                <ul class="no-bullets">
                    <li class="nalogs-info" v-for="option in selectedOptions" :key="option.label">
                        <span class="tax-name">{{ option.label }}</span>
                        <span class="tax-amount">{{ option.value }}₸</span>
                    </li>
                </ul>
            </div>
            <div class="info-section">
                    <h4 >Итого оплачено за полугодие</h4>
                    <h4 >{{ totalSum }}₸</h4>
            </div>
            <div class="info-section">
                    <router-link to="/" class="return-link">
                  Вернуться на главную
                </router-link>
            </div>
         </div>
       </div>
    </div>
</template>

<script>
export default {
    computed: {
    formData() {
      return this.$store.state.formData; 
    }, selectedOptions() {
      return this.$store.state.selectedOptions; 
    },totalSum() {
      return this.$store.state.totalSum;
   },
  }
}
</script>
<style src="./InfoComponent.styles.css">
</style>
