<template>
    <div>
        {{ receivedData }}
    </div>
    <div class="checkbox-container">
      <form @submit="handleSubmit">
        <label class="checkbox-label">
          <input type="checkbox" v-model="selectedOptions" value="option1" />
          <div class="checkbox-custom"></div>
          <span class="option-sum">70 000</span>
          <span class="option-label">ИПН</span>
          <span class="option-description">(3% от дохода)</span>
        </label>
        <label class="checkbox-label">
          <input type="checkbox" v-model="selectedOptions" value="option2" />
          <div class="checkbox-custom"></div>
          <span class="option-sum">5 000</span>
          <span class="option-label">СО</span>
          <span class="option-description">(3,5% от дохода, но не меньше 5000)</span>
        </label>
        <label class="checkbox-label">
          <input type="checkbox" v-model="selectedOptions" value="option3" />
          <div class="checkbox-custom"></div>
          <span class="option-sum">13 000</span>
          <span class="option-label">ОПВ</span>
          <span class="option-description">(10% от дохода)</span>
        </label>
        <label class="checkbox-label">
          <input type="checkbox" v-model="selectedOptions" value="option4" />
          <div class="checkbox-custom"></div>
          <span class="option-sum">40 000</span>
          <span class="option-label">ВОСМС</span>
          <span class="option-description">(5% от дохода)</span>
        </label>
        <button type="submit" :disabled="selectedOptions.length === 0">Оплатить</button>
      <p v-if="selectedOptions.length === 0" class="error-message">Выберите хотя бы одну опцию</p>
      </form>
    </div>
  </template>
  
  <script>

export default {
   
  data() {
    return {
      selectedOptions: [],

    };
  },
  computed: {
    receivedData() {
      return this.$store.state.data;
    }
  },
  methods: {
    handleSubmit(event) {
      event.preventDefault();
      if (this.selectedOptions.length === 0) {
        // Показываем сообщение пользователю
        return;
      }
      console.log(this.selectedOptions);
    }
  }
};
</script>
  
  <style scoped>
  .checkbox-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  .error-message {
  color: red;
  margin-top: 5px;
}
  
  .checkbox-label {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    cursor: pointer;
    position: relative;
    border: 2px solid black;
    border-radius: 20px; /* Делаем круглые углы */
    margin-bottom: 10px;
    width: 700px;
    overflow: hidden;
    height: 150px;
  }

  .option-sum{
    font-weight: bolder;
    font-size: 25px;
  }

  .option-sum::after {
  content: "₸";
}

  .option-label {
  position: absolute;
  top: 20px;
  font-weight: bolder;
  font-size: 25px;
  right: 0;
  transform: translate(-10px, -10px); /* Добавляем смещение */
}

.option-description {
  position: absolute;
  top: 25px; /* Расположим по вертикали на 50% */
  transform: translateY(50%); /* Сдвигаем вниз на половину высоты */
  right: 10px;
  opacity: 0.5; /* Прозрачность */
}

  
  .checkbox-label input[type="checkbox"] {
    display: none;
  }
  
  .checkbox-custom {
    width: 25px;
    height: 25px;
    border: 2px solid #000;
    border-radius: 50%; /* Делаем круглые чекбоксы */
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    margin-left: 20px;
    opacity: 0.3;
    transition: opacity 0.3s ease-in-out; /* Плавное изменение прозрачности */
  }
  
  .checkbox-label input[type="checkbox"]:checked + .checkbox-custom {
    background-color: #000;
    border-color: #000;
    opacity: 0.8; /* Сделать непрозрачным, когда выбран */
  }
  
  .checkbox-label input[type="checkbox"]:checked + .checkbox-custom::after {
    content: '\2713'; /* Unicode символ галочки */
    color: white;
  }
  </style>
  