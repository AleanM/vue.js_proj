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
          <option value="select1">Упрощённый</option>
          <option value="select2">Общеустановленный</option>
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
    <div class="submit-button">
      <button class="submit-btn" @click="sendData">Рассчитать</button>
    </div>
  </template>
  
  <script>


  export default {

    data() {
      return {
        nameValue: '',
        lastNameValue: '',
        selectedOption: 'select1',
        iinValue: '',
        incomeValue: ''
      };
    }, 
  methods: {
    validateNumber() {
      this.iinValue = this.iinValue.replace(/\D/g, ''); // Убираем все, кроме цифр
    },sendData() {
       this.$store.dispatch('updateData', this.incomeValue);
      this.$router.push('/nalog'); // Передаем данные через событие 'submit'
    }
  }
  };
  </script>
  
  <style scoped>
  .input-container {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  
  .input-group {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 20px;
    padding:10px
  }
  
  .input-document{
    display: flex;
    justify-content: center;
    margin-left: 15px; /* Выравнивание элементов по центру */
    margin-top: 10px;
  }

  .input-income{
    display: flex;
    justify-content: center;
    margin-left: 15px; /* Выравнивание элементов по центру */
    margin-top: 20px;
  }

  .selected-input {
    display: flex;
    justify-content: center;
    margin-left: 15px; /* Выравнивание элементов по центру */
    margin-top: 10px; 
    padding: 10px;/* Отступ сверху */
  }
  
  .centered {
    text-align: center; /* Выравнивание текста по центру */
  }
  
  .input-label {
    font-weight: bolder;
    font-size: 16px;
    margin-left: 4px;
    margin-bottom: 10px;
    
  }
  
  .text-input, .dropdown {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .larger-dropdown {
    width: 60vh;
    padding: 10px; /* Увеличиваем ширину выпадающего списка */
  }

  .submit-button {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.submit-btn {
  padding: 10px 20px;
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bolder;
  cursor: pointer;
  border-radius: 10px;
  font-size: 16px;
  width:63vh;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
}

.submit-btn:hover{
    background-color: whitesmoke; /* Green */
    color: black;
    font-weight: bolder;
    border: 3px solid #000000;
}
  </style>
  