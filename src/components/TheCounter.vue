<template>
  <h2>The Counter page</h2>
  <h3>{{ counter }}</h3>
</template>
<script>
export default {
  computed: {
    counter() {
      //   return this.$store.state.counter;
      return this.$store.getters.finalCounter;
    },
  },
};
</script>
