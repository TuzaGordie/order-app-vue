import HTTP from '../http/index';

export default {
  namespaced: true,
  state: {
    registerEmail: 'ninja@mail.com',
    registerPassword: 'world',
    token: null,
  },
  actions: {
    register({ commit, state }) {
      return HTTP().post('/auth/register', {
        email: state.registerEmail,
        password: state.registerPassword,
      })
        .then(({ data }) => {
          commit('setToken', data.token);
        });
    },
  },
  mutations: {
    setRegisterEmail(state, email) {
      state.registerEmail = email;
    },
    setRegisterPassword(state, password) {
      state.registerPassword = password;
    },
  },
};
