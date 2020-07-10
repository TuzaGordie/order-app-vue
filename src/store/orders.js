// import router from '../router';
import Vue from 'vue';
// eslint-disable-next-line import/no-cycle
import HTTP from '../http';

export default {
  namespaced: true,
  state: {
    orders: [],
    currentOrder: null,
    newOrderName: null,
  },
  actions: {
    saveOrder({ commit }, order) {
      return HTTP().patch(`orders/${order.id}`, order)
        .then(() => {
          commit('unsetEditMode', order);
        });
    },
    deleteOrder({ commit }, order) {
      return HTTP().delete(`orders/${order.id}`)
        .then(() => {
          commit('removeOrder', order);
        });
    },
    fetchOrders({ commit }) {
      return HTTP().get('/orders')
        .then(({ data }) => {
          commit('setOrders', data);
        });
    },
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
    setCurrentOrder(state, order) {
      state.currentOrder = order;
    },
    setNewOrderName(state, name) {
      state.newOrderName = name;
    },
    appendOrder(state, order) {
      state.orders.push(order);
    },
    setOrders(state, orders) {
      state.orders = orders;
    },
    setOrderName(state, { order, name }) {
      order.name = name;
    },
    setEditMode(state, order) {
      Vue.set(order, 'isEditMode', true);
    },
    unsetEditMode(state, order) {
      Vue.set(order, 'isEditMode', false);
    },
    removeOrder(state, order) {
      state.orders.splice(state.orders.indexOf(order), 1);
    },
  },
};
