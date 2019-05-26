<template>
  <div>
    <tc-block style="padding:5px;">
      <tc-table :data="data.list" :columns="columns" />
    </tc-block>
  </div>
</template>

<script>
import userService from '@/api/basic/user'
export default {
  data() {
    return {
      columns: [{name: 'usNm', text: '姓名', width: 200},
        {name: 'gnd', text: '性别', width: 100},
        {name: 'uassAccNo', text: '账号', width: 200},
        {name: 'usrMblPh', text: '电话', width: 200},
        {name: 'rmrk', text: '备注'}],
      data: {
        list: []
      }
    }
  },
  created() {
    this.loadData()
  },
  methods: {
    loadData() {
      userService.list().then(result => {
        this.data.list = result.users
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>