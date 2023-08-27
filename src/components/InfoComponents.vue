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
        </div>
       </div>
       <div class="ref-to-main">
      <router-link to="/" class="return-link">
        Вернуться на главную
      </router-link>
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
<style>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
}

.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.ref-to-main {
  margin-top: 40px;
  text-align: center; 
  font-size: 25px;
  font-weight: bolder;
}

.info-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-weight: bolder;
    width: 500px;
    padding: 10px;
}

.info h4 {
    margin: 10px 0;
}

.info-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    font-size: 25px;
    width: 100%; 
}

.no-bullets {
    list-style-type: none;
    padding-left: 0;
    width: 100%;
}


.nalogs-info {
    font-weight: bolder;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.tax-name {
    flex: 1;
    text-align: left;
}

.tax-amount {
    text-align: right;
}


.return-link {
  color: black;
  text-decoration: none; 
}

.success {
    width: 60px;
    height: 60px;
    border: 2px solid #000;
    border-radius: 50%; 
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    margin-left: 20px;
    background-color: #000;
}

.success::before {
    content: '\2713';
    color: white;
}

</style>
