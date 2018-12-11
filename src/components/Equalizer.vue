<template lang="pug">
    .equilizer
        .bar-container
            each val in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
                .bar()
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@mixin delay-anim-bars($bars) {
  @for $i from 1 through $bars {
    .bar:nth-child(#{$i}) {
      animation-delay: -((random(10) + 20) / 10) + s;
      @if ($i % 2 == 0) {
        background: #42b883;
      } @else {
        background: #35495e;
      }
    }
  }
}

.equilizer {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0) rotate(180deg);
}

.bar-container {
  display: flex;
  height: 100%;
  overflow-x: hidden;
}

.bar {
  width: 40px;
  margin: 0 1%;
  animation: equalize 4s 0s infinite;
}

@include delay-anim-bars(20);

@keyframes equalize {
  0% {
    height: 60px;
  }
  4% {
    height: 50px;
  }
  8% {
    height: 40px;
  }
  12% {
    height: 30px;
  }
  16% {
    height: 20px;
  }
  20% {
    height: 30px;
  }
  24% {
    height: 40px;
  }
  28% {
    height: 10px;
  }
  32% {
    height: 40px;
  }
  36% {
    height: 60px;
  }
  40% {
    height: 20px;
  }
  44% {
    height: 40px;
  }
  48% {
    height: 70px;
  }
  52% {
    height: 30px;
  }
  56% {
    height: 10px;
  }
  60% {
    height: 30px;
  }
  64% {
    height: 50px;
  }
  68% {
    height: 60px;
  }
  72% {
    height: 70px;
  }
  76% {
    height: 80px;
  }
  80% {
    height: 70px;
  }
  84% {
    height: 60px;
  }
  88% {
    height: 50px;
  }
  92% {
    height: 60px;
  }
  96% {
    height: 70px;
  }
  100% {
    height: 80px;
  }
}
</style>
