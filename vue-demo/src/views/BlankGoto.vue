<template>
    <iframe v-bind:src="url"
            frameborder="0"
            scrolling="auto" width="100%" height="100%"></iframe>
</template>

<script>
    export default {
        name: "BlankGoto",
      data () {
          return {
              url: ''
          }
      },
        methods: {
            initData: function () {
                this.url=decodeURIComponent(this.$route.query.gotoUrl)
                // console.log(decodeURIComponent(this.$route.query.gotoUrl))
            }
        },
        created() {
          // console.log('BlankGoto.........')
            this.initData()

      },
        watch: {
            // 如果路由有变化，会再次执行该方法
            "$route": "initData"
        }
    }
</script>

<style scoped>

</style>
