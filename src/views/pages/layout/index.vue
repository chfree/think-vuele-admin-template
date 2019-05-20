<template>
  <div>
    <topbar />
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <div style="height:29px;line-height:29px;;border-bottom:1px solid #e6e6e6;">
        当位置:{{pathLocation}}
      </div>
      <app-main />
    </div>
  </div>
</template>

<script>
import topbar from './topbar'
import sidebar from './sidebar'
import appMain from './app-main'
export default {
  components: {topbar, sidebar, appMain},
  computed: {
    pathLocation: function() {
      console.log(this.$route)
      var pathLocal = []
      Array.from(this.$route.matched).forEach(route => {
        pathLocal.push(Object.assign({}, route.meta).title)
      })
      return pathLocal.join('>')
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

</style>