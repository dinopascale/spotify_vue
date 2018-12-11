<template lang="pug">
    section(:class="loggedIn ? 'container logged' : 'container'")
        div(:class="loggedIn ? 'topbar logged' : 'topbar'")
            TheHomeHero(v-bind:loggedIn="loggedIn")/
            TheUserInfo(v-if="loggedIn")
        TheGrid(v-if="loggedIn")/
        Equalizer/
</template>

<script>
import TheHomeHero from "../components/TheHomeHero";
import Equalizer from "../components/Equalizer";
import TheUserInfo from "../components/TheUserInfo";
import TheGrid from "../components/TheGrid";

export default {
  name: "Home",
  props: ["loggedIn"],
  components: { Equalizer, TheHomeHero, TheUserInfo, TheGrid }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  min-height: 100%;
  border: 4px solid #42b883;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;

  &.logged {
    align-items: flex-start;
    justify-content: flex-start;
  }
}

.topbar {
  display: flex;
  justify-content: center;
  width: 100%;

  &.logged {
    background: #f1f1f1;
    border-bottom: 4px solid #42b883;
    justify-content: space-between;
  }
}
</style>
