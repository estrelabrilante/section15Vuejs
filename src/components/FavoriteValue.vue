<template>
  <h2>Favorite Page Value till reach 100</h2>
  <h3>{{ counter }}</h3>
</template>
<script>
export default {
  computed: {
    counter() {
      //   return this.$store.state.counter;
      //   multiply by 2
      //   return this.$store.getters.finalCounter;
      // return this.$store.getters.normalizedCounter;
      return this.$store.getters['numbers/normalizedCounter'];
    },
  },
};
</script>
