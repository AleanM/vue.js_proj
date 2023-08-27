<template>
    <div class="input-container">
      <div class="input-group">
        <label class="input-label">Имя:</label>
        <input class="text-input" v-model="nameValue" placeholder="Имя">
      </div>
      <div class="input-group">
        <label class="input-label">Фамилия:</label>
        <input class="text-input" v-model="lastNameValue" placeholder="Фамилия">
      </div>
    </div>
    <div class="selected-input">
      <div class="input-group centered">
        <label class="input-label">Режим налогооблажения:</label>
        <select class="dropdown larger-dropdown" v-model="selectedOption">
          <option value="Упрощённый">Упрощённый</option>
          <option value="Общеустановленный">Общеустановленный</option>
        </select>
      </div>
    </div>
    <div class="input-document">
       <div class="input-group">
         <label class="input-label">ИИН:</label>
         <input class="text-input larger-dropdown" v-model="iinValue" @input="validateNumber" placeholder="ИИН" maxlength="12" minlength="12">
       </div>
    </div>
    <div class="input-income">
       <div class="input-group">
         <label class="input-label">Ваш доход за полгода:</label>
         <input class="text-input larger-dropdown" v-model="incomeValue" @input="validateNumber" v-bind:incomeValue="someValue" placeholder="Доход" min="1" max="150000000">
       </div>
    </div>
    <div class="submit-class">
      <button class="submit-btn" @click="sendData">Рассчитать</button>
    </div>
  </template>
  
  <script>


  export default {

    data() {
      return {
        nameValue: '',
        lastNameValue: '',
        selectedOption: 'Общеустановленный',
        iinValue: '',
        incomeValue: ''
      };
    }, 
  methods: {
    validateNumber() {
      this.iinValue = this.iinValue.replace(/\D/g, ''); 
    },sendData() {
      const validIIN = this.iinValue.length === 12;
      const validIncome = this.incomeValue > 0 && this.incomeValue <= 150000000;
      const validName = this.nameValue.trim().length > 0;
      const validLastName = this.lastNameValue.trim().length > 0;

      const isValidData = validIIN && validIncome && validName && validLastName;


      if (isValidData) {
        this.$store.dispatch('incomeData', this.incomeValue);
        this.$store.commit('updateFormData', {
          name: this.nameValue,
          lastName: this.lastNameValue,
          selectedOption: this.selectedOption,
          iin: this.iinValue,
          income: this.incomeValue
        });
        this.$router.push('/nalog');
      } else {
        if (!validName) {
          alert('Введите имя');
        } else if (!validLastName) {
          alert('Введите фамилию');
        } else if (!validIIN) {
          alert('ИИН должен состоять из 12 цифр');
        } else {
          alert('Доход должен быть больше 0 и не превышать 150000000');
        }
      }
    },
  }
  };
  </script>
  
  <style src="./InputComponent.styles.css">
  </style>
  