<template>
  <!-- <button @click="addOne">Add 10 Mul 2</button> -->
  <button @click="incrementAction">Add 1</button>
  <button
    @click="
      increaseAction({
        value: 11,
      })
    "
  >
    Add 11
  </button>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    // namespacing
    ...mapActions('numbers', ['incrementAction', 'increaseAction']),

    // addOne() {
    // this.$store.state.counter++;

    // mutation name: increase
    // this.$store.commit('increase', { value: 10 });
    // this.$store.commit({
    //   type: 'increase',
    //   value: 10,
    // });

    // Actions name: increaseAction
    // this.$store.dispatch({
    //   type: 'increaseAction',
    //   value: 10,
    // });

    // },
  },
};
</script>
