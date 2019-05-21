<template>
  <div>
    <h1>user</h1>
    <tc-button @click="test">test</tc-button>
  </div>
</template>

<script>
import userService from '@/api/basic/user'
export default {
  data() {
    return {
    }
  },
  methods: {
    test() {
      console.log(userService)
      userService.list().then(result => {
        console.log(result)
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>