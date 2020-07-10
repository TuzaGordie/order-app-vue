// import router from '../router';
import Vue from 'vue';
// eslint-disable-next-line import/no-cycle
import HTTP from '../http';

export default {
  namespaced: true,
  state: {
    items: [],
    newItemTitle: null,
  },
  actions: {
    saveItem({ commit }, item) {
      return HTTP().patch(`items/${item.id}`, item)
        .then(() => {
          commit('unsetEditMode', item);
        });
    },
    deleteItem({ commit }, item) {
      return HTTP().delete(`items/${item.id}`)
        .then(() => {
          commit('removeItem', item);
        });
    },
    fetchItemsForOrder({ commit }, order) {
      return HTTP().get(`orders/${order.id}/items`)
        .then(({ data }) => {
          commit('setItems', data);
        });
    },
    createItem({ commit, state, rootState }) {
      return HTTP().post(`/orders/${rootState.orders.currentOrder.id}/items`, {
        title: state.newItemTitle,
      })
        .then(({ data }) => {
          commit('appendItem', data);
          commit('setNewItemTitle', null);
        });
    },
  },
  getters: {
  },
  mutations: {
    setItems(state, items) {
      state.items = items;
    },
    setNewItemTitle(state, newItemTitle) {
      state.newItemTitle = newItemTitle;
    },
    appendItem(state, item) {
      state.items.push(item);
    },
    setItemTitle(state, { item, title }) {
      item.title = title;
    },
    setEditMode(state, item) {
      Vue.set(item, 'isEditMode', true);
    },
    unsetEditMode(state, item) {
      Vue.set(item, 'isEditMode', false);
    },
    removeItem(state, item) {
      state.items.splice(state.items.indexOf(item), 1);
    },
  },
};
