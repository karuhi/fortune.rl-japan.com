<template>
  <div>
    <div
      class="fixed right-0 bottom-0 bg-gray-100 p-2 transition-all rounded-lg m-5 sm:max-w-screen-sm md:max-w-screen-sm lg:max-w-screen-sm xl:max-w-screen-sm"
      v-show="isShow"
    >
      <div class="flex items-center justify-around px-3 py-2">
        <div>
          <strong class="font-bold">ロケリみくじで今年の運勢を占おう！</strong>
          <!--<p class="text-sm">
            新しい年も、ロケットリーグとともに！今年の運勢は？ロケリみくじで今年の運勢を占おう！
          </p>-->
        </div>
        <div class="text-sm text-center relative">
          <nuxt-link
            class="colored block min-w-full text-white rounded-md px-5 py-1"
            to="/"
          >
            占う
          </nuxt-link>
        </div>
      </div>
    </div>
    <!-- BTN -->
    <button
      class="fixed right-5 bottom-2 uppercase text-sm px-4 py-3 colored text-white rounded-full"
      v-show="!isShow"
      @click="isShow = !isShow"
    >
      あなたの運勢も占いませんか？
    </button>
  </div>
</template>
<script>
export default {
  props: ['isShow'],
}
</script>
<style scoped>
.colored {
  background: #e9433b;
}
</style>
