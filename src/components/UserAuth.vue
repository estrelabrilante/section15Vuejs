<template>
  <button v-if="!isAuth" @click="logIn">Log In</button>
  <button v-if="isAuth" @click="logOut">Log Out</button>
</template>
<script>
export default {
  methods: {
    logIn() {
      this.$store.dispatch('logInAction');
    },
    logOut() {
      this.$store.dispatch('logOutAction');
    },
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    },
  },
};
</script>
