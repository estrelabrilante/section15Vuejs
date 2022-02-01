import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
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
});
const app = createApp(App);
// connecting app to store
app.use(store);
app.mount('#app');
