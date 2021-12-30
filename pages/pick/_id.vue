<template>
  <div>
    <p class="text-black">hello: pick {{ this.$route.params.id }}</p>
  </div>
</template>
<script>
export default {
  name: 'PickIdPage',
  mounted() {
    this.$adobeFonts(document)
  },
  validate({ params }) {
    // TODO: 00001とか数値じゃないやつを検証できるようにする
    const isNum = /^[1-9][0-9]{0,5}$/.test(params.id)
    if (!isNum) return false
    // console.info('true')
    const num = Number(params.id)
    // console.log(1 >= num && num <= 1024)
    return num >= 1 && num <= 1024
  },
}
</script>
