<template lang="pug">
    form(v-bind:class="isFocused ? 'search-container focused' : 'search-container'")
        h1(v-bind:class="isFocused ? 'form-title focused' : 'form-title'") Vue spotify
        input(type="text" v-bind:class="isFocused ? 'search focused' : 'search'" placeholder="Search Artist, Track or Album Name" v-on:focus="onFocus")/
        button(type="submit" class="search-btn" v-if="!isFocused")
            font-awesome-icon(icon="search")
</template>

<script>
export default {
    data () {
        return {
            isFocused: false
        }
    },
    methods: {
        onFocus() {
            this.isFocused = true
        }
    }
}
</script>

<style lang="scss" scoped>
.search-container {
  width: 444px;
  display: flex;
  flex-flow: row wrap;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -30%);
  transition: transform 0.4s 0.2s ease-in;

  &.focused {
    transform: translate(-50%, -160%);
  }
}

.form-title {
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
    opacity: 0;
  }
}
.search {
  display: inline-block;
  padding: 1rem 0;
  font-size: 2rem;
  font-weight: 700;
  flex: 0 0 90%;
  border: none;
  outline: none;
  border-bottom: 2px solid #000;
  transition: all 0.4s ease-in-out;

  &.focused {
    flex: 0 0 100%;
  }
}

.search-btn {
  background: none;
  flex: 0 0 10%;
  border: none;
  outline: none;
  padding: 0;
  cursor: pointer;
  font-size: 1.6rem;
  border-bottom: 2px solid #000;
}
</style>
