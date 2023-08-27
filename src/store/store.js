import { createStore } from 'vuex';


export default createStore({
  state: {
    income: null,
    totalSum: 0,
    selectedOptions: [],
    formData: {},

  },
  mutations: {

    SET_SELECTED_OPTIONS(state, selectedOptions) {
      state.selectedOptions = selectedOptions;
    },
    setIncome(state, payload) {
      state.income = payload;
    },
    setTotalSum(state, totalSum) {
      state.totalSum = totalSum;
    },
    updateFormData(state, formData) {
      state.formData = formData; 
    },
  },
  actions: {
    setSelectedOptions({ commit }, selectedOptions) {
      commit('SET_SELECTED_OPTIONS', selectedOptions);
    },
    incomeData({ commit }, newData) {
      commit('setIncome', newData);
    },setTotalSum({ commit }, totalSum) {
      commit('setTotalSum', totalSum);
    },
  }
});
