<template lang="pug">
    form(class="search-container" @submit.prevent)
        input(type="text" class="search" placeholder="Search Artist, Track, Playlist or Album Name" v-model="query" @focus="$emit('readyToType')")/
        button(type="submit" class="search-btn" @click="search(query)")
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      query: null
    };
  },
  methods: {
    ...mapActions({
      search: "TRY_SEARCH"
    })
  }
};
</script>

<style lang="scss" scoped>
.search-container {
  height: 100%;
  margin: 0 auto;
  padding: 0 1.8rem;
  display: flex;
  flex-flow: row wrap;

  @media only screen and (max-width: 640px) {
    flex: 1 0 100%;
  }
}

.search {
  display: inline-block;
  padding: 1rem 0;
  font-size: 2rem;
  font-weight: 700;
  flex: 0 0 90%;
  background: transparent;
  border: none;
  outline: none;
  @media only screen and (max-width: 640px) {
    flex: 0 0 100%;
    font-size: 1.4rem;
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
}
</style>
