<template>
  <div>
    <tc-block title="搜索" style="margin-bottom:5px;">
      <tc-form size="small" label-width="100px">
        <el-row>
          <el-col :span="8">
            <tc-form-item label="用户姓名:">
              <tc-input v-model="searchForm.usrNm"></tc-input>
            </tc-form-item>
          </el-col>
          <el-col :span="8">
            <tc-form-item label="账号:">
              <tc-input v-model="searchForm.empeIdLandNm"></tc-input>
            </tc-form-item>
          </el-col>
          <el-col :span="8">
            <tc-form-item label="电话:">
              <tc-input v-model="searchForm.empeIdLandNm"></tc-input>
            </tc-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24" style="text-align:center">
            <tc-button type="think" size="small" icon="el-icon-search">查询</tc-button>
            <tc-button type="think" size="small" icon="el-icon-search">重置</tc-button>
          </el-col>
        </el-row>
      </tc-form>
    </tc-block>
    <tc-block>
      <div style="margin-bottom:10px;">
        <tc-button-group>
          <tc-button type="think" size="small" icon="el-icon-edit-outline" @click="addData">新增</tc-button>
          <tc-button type="think" size="small" icon="el-icon-edit-outline">编辑</tc-button>
          <tc-button type="think" size="small" icon="el-icon-edit-outline">查看</tc-button>
          <tc-button type="think" size="small" icon="el-icon-edit-outline">分配角色</tc-button>
        </tc-button-group>
      </div>
      <tc-table :data="data.list" :columns="columns" />
    </tc-block>
    <div>
      <tc-dialog :title="userDetailedForm.title" :visible.sync="userDetailedForm.show" width="60%" height="60%">
        <detailed />
      </tc-dialog>
    </div>
  </div>
</template>

<script>
import userService from '@/api/basic/user'
import detailed from './detailed'
export default {
  components: {detailed},
  data() {
    return {
      columns: [{name: 'usNm', text: '姓名', width: 200},
        {name: 'gnd', text: '性别', width: 100},
        {name: 'uassAccNo', text: '账号', width: 200},
        {name: 'usrMblPh', text: '电话', width: 200},
        {name: 'rmrk', text: '备注'}],
      data: {
        list: []
      },
      searchForm: {
      },
      userDetailedForm: {
        title: '用户详情',
        show: false
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
    },
    addData() {
      this.userDetailedForm.show = true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>