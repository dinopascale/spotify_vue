<template lang="pug">
    a(class="login" v-bind:href="authLink") Login    
</template>

<script>
import API from "../../services/api/Endpoints.js";

export default {
  data() {
    return {
      authLink: null
    };
  },
  mounted() {
    this.authLink = API.getAuthHref();
  }
};
</script>

<style lang="scss" scoped>
.login {
  font-size: 1.6rem;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 4px;
  border-radius: 0.8rem;
  color: #fff;
  display: block;
  width: 50%;
  max-width: 200px;
  margin: 0 auto;
  padding: 1.2rem;
  background: #42b883;

  @media only screen and (max-width: 640px) {
    font-size: 1.4rem;
  }
}
</style>

