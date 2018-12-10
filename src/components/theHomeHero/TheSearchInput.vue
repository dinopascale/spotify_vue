<template lang="pug">
    form(class="search-container" @submit.prevent)
        input(type="text" class="search" placeholder="Search Artist, Track or Album Name" v-model="query" @focus="$emit('readyToType')")/
        button(type="submit" class="search-btn" @click="callApi")
            font-awesome-icon(icon="search")
</template>

<script>
import API from "../../services/api/Endpoints.js";

export default {
  data() {
    return {
      query: null
    };
  },
  methods: {
    async callApi() {
      const response = await API.searchSpotify(this.query);
      console.log(response.data);
    }
  }
};
</script>

<style lang="scss" scoped>
.search-container {
  width: 444px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  transition: transform 0.4s 0.2s ease-in;
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
