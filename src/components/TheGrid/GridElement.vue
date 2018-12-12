<template lang="pug">
    .grid-element
        h6.section-title {{interpunct}}
        .element-list(v-if="section")
            .element(v-for="item in section.items")
                a(:href="item.external_urls.spotify" target="_blank")
                    img(v-if="item.images && item.images.length > 0" :src="item.images[1] ? item.images[1].url : item.images[0].url")/
                    img(v-else src="https://pngimage.net/wp-content/uploads/2018/06/no-user-image-png.png")
                p.name {{item.name}}
</template>

<script>
export default {
  props: ["section", "name"],
  computed: {
    interpunct: function() {
      let newString = "";
      for (let i = 0; i < this.name.length; i++) {
        newString += this.name[i] + "\u00B7";
      }
      return newString;
    }
  }
};
</script>

<style lang="scss" scoped>
.grid-element {
  flex: 0 0 50%;
  padding: 0.8rem;

  &:nth-child(1) {
    border-right: 4px solid #42b883;
    border-bottom: 4px solid #42b883;
  }

  &:nth-child(2) {
    border-bottom: 4px solid #42b883;
  }

  &:nth-child(3) {
    border-right: 4px solid #42b883;
  }

  @media only screen and (max-width: 640px) {
    flex: 0 0 100%;
    &:nth-child(1) {
      border-right: none;
      border-bottom: 4px solid #42b883;
    }
    &:nth-child(3) {
      border-right: none;
      border-bottom: 4px solid #42b883;
    }
  }
}

.section-title {
  width: 100%;
  font-size: 1.6rem;
  margin: 0;
  padding: 0.6rem;
  background: #42b883;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 6px;

  @media only screen and (max-width: 640px) {
    text-align: center;
  }
}

.element-list {
  height: calc(100% - 1.6rem);
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: baseline;
  padding: 1.6rem 0;
}

.element {
  flex: 0 0 35%;
  text-align: center;
  margin: 0.6rem 0;

  img {
    width: 100%;
    max-width: 125px;
    border-radius: 0.8rem;
  }

  .name {
    font-size: 1.6rem;
    font-weight: 700;
    margin: 0.8rem 0;
  }
}
</style>
