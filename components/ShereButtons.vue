<template>
  <div class="stickyShereArea">
    シェア&nbsp;<i class="fa fa-share-square"></i><br />
    <b-button type="neutral" @click.prevent="pageShere('twitter')">
      <img src="@/static/assets/Twitter_Logo_White.png" /> </b-button
    ><br />
    <b-button class="mt-2" type="neutral" @click.prevent="pageShere('link')">
      <i class="fa fa-share-alt"></i>
    </b-button>
    <modal
      ref="modals"
      :show.sync="isOpen"
      gradient="primary"
      modal-classes="modal-danger modal-dialog-centered"
    >
      <div class="p-3 text-center">
        <i class="fa fa-clipboard fa-2x"></i>
        <h4 class="heading mt-4">クリップボードにコピーしました。</h4>
        <b-input
          v-if="ShereUrl != undefined"
          type="text"
          ref="cliparea"
          v-model="ShereUrl"
        />
        <p>
          共有したいサービスで、ペーストするとリンクを表示でき、カードを表示することができます。
        </p>
      </div>

      <template slot="footer">
        <base-button
          type="link"
          text-color="white"
          class="ml-auto"
          @click="isOpen = false"
        >
          閉じる
        </base-button>
      </template>
    </modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ShereButtons',
  data() {
    return {
      isOpen: false,
      ShereUrl: undefined,
    }
  },
  computed: {
    ...mapGetters('modules/user', ['user']),
  },
  mounted: function () {
    this.ShereUrl =
      'https://rlcards.web.app/s/' +
      (location.pathname.split('/')[1] == 'editor'
        ? this.user.cid
        : this.$route.params.id)
  },
  methods: {
    selectText: function () {
      var textarea = this.$refs.cliparea
      textarea.select()
      document.execCommand('copy')
    },
    pageShere: function (platform) {
      if (platform == 'twitter') {
        const stext = encodeURIComponent(
          'RLCardsでプロフィールを共有しました🎉\nRLCards - ロケットリーグプロフィールカード作成サービス'
        )
        const stag = encodeURIComponent(
          'ロケットリーグ,ロケットリーグ自己紹介カード,app_rlcards'
        )
        const url = encodeURIComponent(this.ShereUrl)
        const resultUrl =
          'https://twitter.com/intent/tweet?text=' +
          stext +
          '&hashtags=' +
          stag +
          '&url=' +
          url
        location.href = resultUrl
      } else if (platform == 'link') {
        this.isOpen = true
        if (navigator.share) {
          console.log('[WebShereAPI] 対応')
          navigator.share({
            title: document.querySelector('title').textContent,
            text: document
              .querySelector('meta[name="description"]')
              .getAttribute('content'),
            url: this.ShereUrl,
          })
        }
        //サポートしていない場合の処理
        else {
          console.log('[WebShereAPI] 未対応')
          setTimeout(this.selectText, 500)
        }
      }
    },
  },
}
</script>

<style scoped>
.stickyShereArea {
  position: fixed;
  right: 0;
  top: 50%;
  background-color: white;
  border-radius: 8px 0 0 8px;
  padding: 8px;
}
.stickyShereArea .btn img {
  width: 24px;
  height: 24px;
}
.stickyShereArea .btn i {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
}
</style>
