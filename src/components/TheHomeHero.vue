<template lang="pug">
    div(:class="isFocused ? 'title-container focused' : 'title-container'")
        h1(class="title" v-if="!loggedIn") Vue spotify
        TheLoginButton(v-if="!loggedIn")/
        TheSearchInput(v-else @readyToType='setFocus')
</template>

<script>
import TheLoginButton from './theHomeHero/TheLoginButton'
import TheSearchInput from './theHomeHero/TheSearchInput'

export default {
    props: ['loggedIn'],
    data () {
        return {
            isFocused: false
        }
    },
    methods: {
        setFocus () {
            this.isFocused = true
        }
    },
    components: {TheLoginButton, TheSearchInput}
}
</script>

<style lang="scss" scoped>
.title-container {
  width: 444px;
  position: absolute;
  top: 18%;
  left: 50%;
  transform: translateX(-50%);
  transition: top 0.4s ease-in;

  &.focused {
    top: 5%;
  }
}

.title {
  flex: 1 0 100%;
  margin: 3.8rem 0;
  font-size: 7.2rem;
  text-align: center;
  color: #333;
  opacity: 1;
  letter-spacing: 9px;
  text-transform: uppercase;
  transition: opacity 0.4s ease-in;

  &.focused {
    margin: 0;
    opacity: 0;
    font-size: 0;
  }
}
</style>
