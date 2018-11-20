<template lang="pug">
    Home/
</template>

<script>
import Home from './views/Home'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  font-size: 62.5%;
  font-family: 'Life Savers', cursive;
}

body,
html {
  width: 100vw;
  height: 100vh;
  margin: 0;
  overflow-x: hidden;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
