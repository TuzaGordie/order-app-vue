// import router from '../router';
// eslint-disable-next-line import/no-cycle
import HTTP from '../http';

export default {
  namespaced: true,
  state: {
    orders: [],
    newOrderName: null,
  },
  actions: {
    createOrder({ commit, state }) {
      return HTTP().post('/orders', {
        name: state.newOrderName,
      })
        .then(({ data }) => {
          commit('appendOrder', data);
          commit('setNewOrderName', null);
        });
    },
  },
  getters: {

  },
  mutations: {
    setNewOrderName(state, name) {
      state.newOrderName = name;
    },
    appendOrder(state, order) {
      state.orders.push(order);
    },
  },
};
