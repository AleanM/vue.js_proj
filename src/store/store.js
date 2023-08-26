import { createStore } from 'vuex';


export default createStore({
  state: {
    data: null,
    totalSum: 0
  },
  mutations: {
    setData(state, payload) {
      state.data = payload;
    },
    setTotalSum(state, totalSum) {
      state.totalSum = totalSum;
    },
  },
  actions: {
    updateData({ commit }, newData) {
      commit('setData', newData);
    },setTotalSum({ commit }, totalSum) {
      commit('setTotalSum', totalSum);
    },
  }
});
