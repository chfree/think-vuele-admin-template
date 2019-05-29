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
            <tc-button type="primary" size="small" icon="el-icon-search">查询</tc-button>
            <tc-button type="primary" size="small" icon="el-icon-search">重置</tc-button>
          </el-col>
        </el-row>
      </tc-form>
    </tc-block>
    <tc-block style="margin-bottom:5px;">
      <div style="margin-bottom:10px;">
        <el-button-group>
          <el-button type="primary" size="small" icon="el-icon-edit-outline">新增</el-button>
          <el-button type="primary" size="small" icon="el-icon-edit-outline">编辑</el-button>
          <el-button type="primary" size="small" icon="el-icon-edit-outline">查看</el-button>
          <el-button type="primary" size="small" icon="el-icon-edit-outline">分配角色</el-button>
        </el-button-group>
      </div>
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
      },
      searchForm: {
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