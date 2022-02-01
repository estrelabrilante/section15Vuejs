<template>
  <base-container title="Vuex">
    <favorite-value></favorite-value>
    <the-counter></the-counter>
    <button @click="addOne">Add 1 Mul 2</button>
    <the-change-counter></the-change-counter>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import TheChangeCounter from './components/TheChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    TheChangeCounter,
    FavoriteValue,
  },

  methods: {
    addOne() {
      // this.$store.state.counter++;
      this.$store.commit('increment');
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
