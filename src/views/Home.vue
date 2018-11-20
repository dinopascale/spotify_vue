<template lang="pug">
    section.container
        TheSearchInput/
        Equalizer/
</template>

<script>
import TheSearchInput from '../components/TheSearchInput'
import Equalizer from '../components/Equalizer'

export default {
    name: 'Home',
    data () {

    },
    components: { TheSearchInput, Equalizer }    
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  padding: 1.8rem;
  position: relative;
}
</style>
