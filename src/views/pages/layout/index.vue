<template>
  <div>
    <topbar />
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import topbar from './topbar'
import sidebar from './sidebar'
export default {
  components: {topbar, sidebar}
}
</script>

<style lang="scss" scoped>

</style>