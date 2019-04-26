<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      mode="vertical"
      background-color="#2079cf"
      text-color="#fff"
      active-text-color="#fff"
    >
      <sidebar-item v-for="route in menus" :key="route.key" :item="route" :base-path="route.path"/>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import sidebarItem from './sidebar-item'

export default {
  components: { sidebarItem },
  data: () => ({
  }),
  computed: {
    ...mapGetters([
      'sidebar',
      'menus'
    ]),
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
