import { createStore } from 'vuex';

const counterModule = {
  namespaced: true,
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 1;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
  actions: {
    incrementAction(context) {
      context.commit('increment');
      // setTimeout(function () {
      //   context.commit('increment');
      // }, 2000);
    },
    increaseAction(context, payload) {
      context.commit('increase', payload);
      console.log(context);
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizedCounter(_, getters) {
      const finalValue = getters.finalCounter;
      if (finalValue < 0) {
        return 0;
      }
      if (finalValue > 100) {
        return 100;
      }
      return finalValue;
    },
  },
};

const store = createStore({
  modules: {
    numbers: counterModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    setAuth(state, payload) {
      state.isLoggedIn = state.isLoggedIn + payload.isAuth;
    },
  },
  actions: {
    // actions can use same name as mutations

    logInAction(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logOutAction(context) {
      context.commit('setAuth', { isAuth: false });
    },
  },
  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
});
export default store;
