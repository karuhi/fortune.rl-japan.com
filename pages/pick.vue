<template>
  <div class="container">
    <div class="flex items-center justify-center h-screen w-screen flex-wrap">
      <div class="omikuzi sm:max-h-96 md:max-h-96 lg:max-h-96 xl:max-h-96 w-48">
        &nbsp;
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  mounted() {
    this.$adobeFonts(document)
    const fortuneNumbers = [
      this.getRandomInt(0, 3),
      this.getRandomInt(0, 3),
      this.getRandomInt(0, 3),
      this.getRandomInt(0, 3),
      this.getRandomInt(0, 3),
    ]
    setTimeout(() => {
      this.$router.push('/result/' + fortuneNumbers.join(''))
    }, 3000)
  },
  methods: {
    getRandomInt(min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
  },
}
</script>

<style scoped>
.container {
  min-width: 100vw;
  min-height: 100vh;
  max-width: 100vw;
  max-height: 100vh;

  background-repeat: no-repeat;
  background-position: center;
  background-image: url('@/static/assets/bg.jpg');
  background-size: cover;
}
.omikuzi {
  animation: rumble 0.7s linear infinite;

  width: 100%;
  height: 100%;
  max-height: 90vh;
  max-width: 100vw;

  background-repeat: no-repeat;
  background-position: center;
  background-image: url('@/static/assets/omikuzi-hako.png');
  background-size: contain;
}

@keyframes rumble {
  0% {
    transform: translate(0);
  }
  25% {
    transform: translate(2px) rotate(5deg);
  }
  50% {
    transform: translate(0, 0);
  }
  75% {
    transform: translate(-2px) rotate(-5deg);
  }
  100% {
    transform: translate(0);
  }
}
</style>
