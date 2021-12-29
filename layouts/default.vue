<template>
  <div>
    <Nuxt />
  </div>
</template>
<style>
html {
  visibility: hidden;
}
html.wf-active {
  visibility: visible;
}
body {
  font-family: 'source-han-sans-japanese', 游ゴシック, 'Yu Gothic', 游ゴシック体,
    YuGothic, 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', 'Meiryo UI',
    メイリオ, Meiryo, sans-serif;
} /* purgecss start ignore */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
/* purgecss end ignore */
</style>
