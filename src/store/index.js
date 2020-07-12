/* eslint-disable import/no-cycle */
// import createPersistedState from 'vuex-persistedstate';
import Vue from 'vue';
import Vuex from 'vuex';
import authentication from './authentication';
import orders from './orders';
import items from './items';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    baseUrl: 'https://simple-order-api.herokuapp.com/',
  },
  modules: {
    authentication,
    orders,
    items,
  },
  mutations: {
  },
  actions: {
  },
  plugins: [
    // createPersistedState(),
  ],
});
