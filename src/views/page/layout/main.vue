<template>
  <div>
    <topbar />
    <router-view />
  </div>
</template>

<script>
import topbar from './topbar'
export default {
  components: {topbar}
}
</script>

<style lang="scss" scoped>

</style>