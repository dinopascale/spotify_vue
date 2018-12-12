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

  @media only screen and (max-width: 640px) {
    flex: 1 0 100%;
    justify-content: center;
  }
}
.greet {
  font-size: 1.8rem;
  font-weight: 700;

  @media only screen and (max-width: 640px) {
    margin: 0;
  }
}
</style>
