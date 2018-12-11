<template lang="pug">
    .grid(v-if="isSearched")
        GridElement(v-for="(section, name) in getAllResults" :section="section" :name="name")
</template>

<script>
import { mapGetters } from "vuex";

import GridElement from "./TheGrid/GridElement";

export default {
  components: { GridElement },
  computed: {
    ...mapGetters(["isSearched", "getAllResults", "getSingleResult"])
  }
};
</script>

<style lang="scss" scoped>
.grid {
  flex: 1 0 100%;
  height: calc(100% - 70px);
  display: flex;
  flex-flow: row wrap;
}
li {
  font-size: 1.8rem;
}
</style>
