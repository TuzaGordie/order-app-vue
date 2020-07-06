/* eslint-disable import/no-cycle */
// import createPersistedState from 'vuex-persistedstate';
import Vue from 'vue';
import Vuex from 'vuex';
import authentication from './authentication';
import orders from './orders';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    baseUrl: '/api',
  },
  modules: {
    authentication,
    orders,
  },
  mutations: {
  },
  actions: {
  },
  plugins: [
    // createPersistedState(),
  ],
});
