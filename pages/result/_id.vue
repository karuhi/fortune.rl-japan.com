<template>
  <div></div>
</template>
<script>
export default {
  validate({ params }) {
    // TODO: 00001とか数値じゃないやつを検証できるようにする
    const isNum = /^[1-9][0-9]{0,5}$/.test(params.id)
    if (!isNum) return false
    console.log()
    const num = Number(params.id)
    return num < 33334
  },
}
</script>
