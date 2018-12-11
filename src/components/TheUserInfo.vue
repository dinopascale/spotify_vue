<template lang="pug">
    .user-info-container
        p(class="greet") Hi, {{userInfo.info.display_name}}
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["userInfo"])
};
</script>

<style lang="scss" scoped>
.user-info-container {
  padding: 0.6rem;
  background: #42b883;
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.greet {
  font-size: 1.8rem;
  font-weight: 700;
}
</style>
