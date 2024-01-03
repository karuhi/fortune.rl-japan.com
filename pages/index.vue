<template>
  <div class="container">
    <div class="flex items-center justify-center h-screen w-screen flex-wrap">
      <div class="flex justify-center w-full">
        <img
          src="@/static/assets/logo.png"
          class="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-md xl:max-w-screen-md"
        />
      </div>
      <nuxt-link
        class="flex items-center justify-center btn text-white inline-block py-2 px-5 rounded-full text-3xl"
        to="/pick"
        @click="pickAnalysis"
      >
        おみくじを引く
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  mounted() {
    this.$adobeFonts(document)
    location.href = "https://rl-japan.com/special/fortune"
  },
  methods: {
    pickAnalysis() {
      this.$gtag('event', 'omikuzi_pick', {
        event_category: 'omukuzi_count',
        event_action: 'click',
        event_label: this.banner.url,
        value: 1,
      })
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

.btn {
  background: #e9433b;
}
.btn:hover {
  background: #bb1d15;
}
</style>
