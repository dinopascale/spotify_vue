<template lang="pug">
    router-view
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
* {
  box-sizing: border-box;
  font-size: 62.5%;
  font-family: "Life Savers", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body,
html {
  width: 100vw;
  height: 100vh;
  margin: 0;
  overflow-x: hidden;
}

body {
  padding: 1.8rem;
}
</style>
