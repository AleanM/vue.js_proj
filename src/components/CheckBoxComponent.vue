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
      <SummComponent />
    </div>
  </div>
    
  </template>
  
  <script>
import SummComponent from './SummComponent.vue';

export default {
  components:{
    SummComponent,
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
      handler: 'calculateTotalSum', // Вызываем метод при изменении selectedOptions
      deep: true // Следим за изменениями вложенных объектов в selectedOptions
    }
  },
  methods: {
    handleSubmit(event) {
      event.preventDefault();
      if (this.selectedOptions.length === 0) {
        // Показываем сообщение пользователю
        return;
      }

      const selectedOptionsData = this.selectedOptions.map(index => {
        const option = this.options[index];
        return {
          label: option.label,
          value: (this.receivedData * option.percent) / 100,
        };
      });

      this.$store.dispatch('setSelectedOptions', selectedOptionsData);
      this.$router.push('/info');
    },
    
    calculatePercentage(percent) {
      const sum = (this.receivedData * percent) / 100;
      return sum
    },calculateTotalSum() {
      let totalSum = 0;

      this.selectedOptions.forEach(index => {
        const option = this.options[index];
        const sum = (this.receivedData * option.percent) / 100;
        totalSum += sum;
      });

      this.$store.dispatch('setTotalSum', totalSum);
    }
  }
};
</script>
  
  <style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* Предотвращаем появление вертикального скролла */
}
.received-data::after{
  content: "₸";
}
.income-container{
  font-weight: bolder;
  font-size: 30px;

}
.checkbox-container {
  min-height: 50%; /* Задаем минимальную высоту для контейнера */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}

.for-sum {
  min-height: 10%;

}


  .error-message {
  color: red;
  margin-top: 5px;
}
  

.ref-to-main {
  position: absolute;
  top: 20px;
  margin-top: 10px;
  left: 20px;
  display: flex;
  align-items: center;
}

.arrow-icon {
  font-size: 30px;
  font-weight: bolder;
  margin-right: 5px;
}

.return-link {
  color: black;
  font-size: 24px;
  text-decoration: none;
  font-weight: bold;
}

.pay-btn{
  padding: 10px 20px;
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bolder;
  cursor: pointer;
  border-radius: 10px;
  font-size: 16px;
  width: 700px;
  height: 70px;
  -webkit-transition-duration: 0.4s; 
  transition-duration: 0.4s;
}

.pay-btn:hover{
  background-color: whitesmoke;
    color: black;
    font-weight: bolder;
    border: 3px solid #000000;
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
  