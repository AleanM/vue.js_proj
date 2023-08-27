<template>
  <div class="page-container">
    <div class="ref-to-main">
      <router-link to="/" class="return-link">
        <i class="arrow-icon">&lt;</i> Заплатить налоги за ИП
      </router-link>
    </div>
    <div class="income-container">
   
    <p class="received-data">Ваш доход за полугодие: {{ receivedData }}</p>

    </div>
    <div class="checkbox-container">
      <form @submit="handleSubmit">
        <label v-for="(option, index) in options" :key="index" class="checkbox-label">
        <input type="checkbox" v-model="selectedOptions" :value="index" />
        <div class="checkbox-custom"></div>
        <span class="option-sum">{{ calculatePercentage(option.percent) }}</span>
        <span class="option-label">{{ option.label }}</span>
        <span class="option-description">{{ option.description }}</span>
      </label>
        <button class="pay-btn" type="submit" :disabled="selectedOptions.length === 0">Оплатить</button>
        <p v-if="selectedOptions.length === 0" class="error-message">Выберите хотя бы одну опцию</p>
      </form>
    </div>
    <div class="for-sum">
      <SumComponent />
    </div>
  </div>
    
  </template>
  
  <script>
import SumComponent from '@/components/SumComponent/SumComponent.vue';


export default {
  components:{
    SumComponent,
  },
  computed: {

    receivedData() {
      return this.$store.state.income;
    }
  }, 
  data() {
    return {
      selectedOptions: [],
      options: [
        {
          percent: 3,
          label: 'ИПН',
          description: '(3% от дохода)',
        },
        {
          percent: 3.5,
          label: 'СО',
          description: '(3,5% от дохода, но не меньше 5000)',
        },
        {
          percent: 10,
          label: 'ОПВ',
          description: '(10% от дохода)',
        },
        {
          percent: 5,
          label: 'ВОСМС',
          description: '(5% от дохода)',
        },
      ],
    };
    
  },
  watch: {
    selectedOptions: {
      handler: 'calculateTotalSum', 
      deep: true
    }
  },
  methods: { 

    handleSubmit(event) {
      event.preventDefault();
      if (this.selectedOptions.length === 0) {
        return;
      }

      const selectedOptionsData = this.selectedOptions.map(index => {
        const option = this.options[index];
        return {
          label: option.label,
          value: Math.floor((this.receivedData * option.percent) / 100),
        };
      });
  
      this.$store.dispatch('setSelectedOptions', selectedOptionsData);
      this.$router.push('/info');
    },
    
    calculatePercentage(percent) {
      const sum = Math.floor((this.receivedData * percent) / 100);
      return sum
    },calculateTotalSum() {
      let totalSum = 0;

      this.selectedOptions.forEach(index => {
        const option = this.options[index];
        const sum = Math.floor((this.receivedData * option.percent) / 100);
        totalSum += sum;
      });

      this.$store.dispatch('setTotalSum', totalSum);
    }
  }
};
</script>
  
<style src="./CheckboxComponent.styles.css"></style>