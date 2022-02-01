<template>
  <button @click="addOne">Add 1</button>
</template>
<script>
export default {
  methods: {
    addOne() {
      // this.$store.state.counter++;
      // mutation name: increase
      // this.$store.commit('increase', { value: 10 });
      this.$store.commit({
        type: 'increase',
        value: 10,
      });
    },
  },
};
</script>
