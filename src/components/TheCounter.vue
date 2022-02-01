<template>
  <h2>The Counter page</h2>
  <!-- <h3>{{ counter }}</h3> -->
  <h3>{{ finalCounter }}</h3>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    // GetterName
    ...mapGetters('numbers', ['finalCounter']),
    // counter() {
    //   //   return this.$store.state.counter;
    //   return this.$store.getters.finalCounter;
    // },
  },
};
</script>
