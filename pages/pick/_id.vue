<template>
  <div class="container">
    <div class="flex items-start justify-center h-screen w-screen flex-wrap">
      <div class="flex mt-16 justify-center w-full">
        <img src="@/static/assets/logo.png" class="p-5 max-h-40" />
      </div>
      <div class="flex justify-center w-full flex-wrap">
        <div class="flex justify-center w-full text-xl p-5">
          <div class="rounded p-2 text-white colored">
            第{{ this.$route.params.id }}番
          </div>
        </div>
        <img
          class="p-5 max-h-60 h-full"
          :src="require(`@/static/cards/${this.$route.params.id}.jpeg`)"
        />
      </div>
      <div class="flex justify-center w-full flex-wrap">
        <div class="flex items-center justify-center w-full">
          <div class="rounded-full bg-white p-2 m-5">
            <img class="inline max-h-12" src="@/static/assets/tweetfor.png" />
          </div>
        </div>

        <div class="flex items-center justify-center w-full">
          <div
            class="rounded text-xl text-white btn py-2 px-10 m-5 cursor-pointer"
            @click="sharePage('twitter')"
          >
            <img
              class="inline max-h-8 mr-2"
              src="@/static/assets/Twitter_Logo_White.png"
            />
            ツイートする
          </div>
        </div>
        <div
          class="rounded text-xl text-black bg-white hover:bg-slate-200 py-2 px-10 m-4 cursor-pointer"
          @click="sharePage('link')"
        >
          <img class="inline max-h-8 mr-2" src="@/static/assets/share.svg" />
          シェアする
        </div>
        <div class="flex items-center justify-center w-full flex-wrap m-4">
          <label
            class="text-slate-400 text-sm font-bold mb-2 w-full text-center"
            for="shareurl"
          >
            シェア用URL
          </label>
          <input
            class="shadow appearance-none max-w-full xs:max-w-xs sm:max-w-sm border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="https://fortune.rl-japan.com/pick/***"
            v-if="ShareUrl != undefined"
            id="shareurl"
            type="text"
            ref="cliparea"
            v-model="ShareUrl"
          />
          <span class="block text-slate-400 text-sm font-bold mb-2">{{
            isCopyCompleted ? 'コピーしました✅' : ''
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PickIdPage',
  head() {
    return {
      meta: [
        {
          hid: 'og:image',
          property: 'og:image',
          content: `https://fortune.rl-japan.com/cards/${this.$route.params.id}.jpeg`,
        },
      ],
    }
  },
  mounted() {
    this.$adobeFonts(document)
    this.ShareUrl = 'https://fortune.rl-japan.com/pick/' + this.$route.params.id
  },
  data() {
    return {
      ShareUrl: undefined,
      isCopyCompleted: false,
    }
  },
  validate({ params }) {
    // 数値かつ1~1024の範囲の数字に制限する
    const isNum = /^[1-9][0-9]{0,5}$/.test(params.id)
    if (!isNum) return false
    const num = Number(params.id)
    return num >= 1 && num <= 1024
  },
  methods: {
    selectText: function () {
      var textarea = this.$refs.cliparea
      textarea.select()
      document.execCommand('copy')
      this.isCopyCompleted = true
      setTimeout(() => {
        this.isCopyCompleted = false
      }, 5000)
    },
    sharePage(platform) {
      if (platform == 'twitter') {
        const stext = encodeURIComponent(
          '#新春ロケリみくじ でおみくじを引きました！⛩✨\n\n新しい年も、#ロケットリーグ とともに！今年の運勢は？ロケリみくじで今年の運勢を占おう！\n'
        )
        const stag = encodeURIComponent('ロケットリーグ,RL_Japan')
        const url = encodeURIComponent(this.ShareUrl)
        const via = encodeURIComponent('RL_Japan')
        const resultUrl = `https://twitter.com/intent/tweet?text=${stext}&hashtags=${stag}&url=${url}&via=${via}`
        location.href = resultUrl
      } else if (platform == 'link') {
        this.isOpen = true
        if (navigator.share) {
          console.log('[WebShareAPI] 対応')
          navigator.share({
            title: document.querySelector('title').textContent,
            text: document
              .querySelector('meta[name="description"]')
              .getAttribute('content'),
            url: this.ShareUrl,
          })
        }
        //サポートしていない場合の処理
        else {
          console.log('[WebShareAPI] 未対応')
          setTimeout(this.selectText, 500)
        }
      }
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
  overflow-x: hidden;
  overflow-y: auto;
}
.btn {
  background: #00acee;
}

.btn:hover {
  background: #0084b4;
}
.colored {
  background: #e9433b;
}
</style>
