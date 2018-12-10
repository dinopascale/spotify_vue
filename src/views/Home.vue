<template lang="pug">
    section.container
        TheHomeHero(v-bind:loggedIn="loggedIn")/
        TheUserInfo(v-if="loggedIn")
        Equalizer/
</template>

<script>
import TheHomeHero from "../components/TheHomeHero";
import Equalizer from "../components/Equalizer";
import TheUserInfo from "../components/TheUserInfo";

export default {
  name: "Home",
  props: ["loggedIn"],
  components: { Equalizer, TheHomeHero, TheUserInfo }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  padding: 1.8rem;
  position: relative;
}

.test {
  font-size: 7.2rem;
}
</style>
