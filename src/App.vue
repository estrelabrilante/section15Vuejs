<template>
  <base-container v-if="isAuth" title="Vuex">
    <favorite-value></favorite-value>
    <the-counter></the-counter>
    <button @click="addOne">Add 1 Mul 2</button>
    <the-change-counter></the-change-counter>
  </base-container>
  <base-container title="User Authentication">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import TheChangeCounter from './components/TheChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    TheChangeCounter,
    FavoriteValue,
    UserAuth,
  },

  methods: {
    addOne() {
      // this.$store.state.counter++;
      // Mutations
      // this.$store.commit('increment');
      // Actions dispatch
      this.$store.dispatch('numbers/incrementAction');
    },
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
