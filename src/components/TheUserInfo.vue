<template lang="pug">
    h1 Hi, {{userInfo.info.display_name}}
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["userInfo"])
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 7.2rem;
}
</style>
