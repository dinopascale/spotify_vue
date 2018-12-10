<template lang="pug">
    .callback callback
</template>

<script>
import { store } from "../store/index.js";

export default {
  async beforeRouteEnter(to, from, next) {
    await store.dispatch("GET_USERINFO");
    next(vm => {
      vm.$router.push({ name: "Home", params: { loggedIn: true } });
    });
  }
};
</script>

