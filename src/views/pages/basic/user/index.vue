<template>
  <div>
    <tc-block title="搜索" style="margin-bottom:5px;">
      <tc-form size="small" label-width="100px">
        <el-row>
          <el-col :span="8">
            <tc-form-item label="用户姓名:">
              <tc-input v-model="searchForm.name" name="name"></tc-input>
            </tc-form-item>
          </el-col>
          <el-col :span="8">
            <tc-form-item label="账号:">
              <tc-input v-model="searchForm.account" name="account"></tc-input>
            </tc-form-item>
          </el-col>
          <el-col :span="8">
            <tc-form-item label="电话:">
              <tc-input v-model="searchForm.mobile" name="mobile"></tc-input>
            </tc-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24" style="text-align:center">
            <tc-button type="think" size="small" icon="el-icon-search" id="userSearch" @click="userSearch">查询</tc-button>
            <tc-button type="think" size="small" icon="el-icon-search" id="resetUserSearch" @click="resetUserSearch">重置</tc-button>
          </el-col>
        </el-row>
      </tc-form>
    </tc-block>
    <tc-block>
      <div style="margin-bottom:10px;">
        <tc-button-group>
          <tc-button type="think" size="small" icon="el-icon-edit-outline" id="addData" @click="addData">新增</tc-button>
          <tc-button ref="editData" type="think" size="small" icon="el-icon-edit-outline" @click="editData">编辑</tc-button>
          <tc-button type="think" size="small" icon="el-icon-edit-outline">查看</tc-button>
          <tc-button type="think" size="small" icon="el-icon-edit-outline">分配角色</tc-button>
        </tc-button-group>
      </div>
      <tc-table ref="userTable" :data="data.list" :columns="columns" />
    </tc-block>
    <div>
      <tc-dialog :title="userDetailedForm.title" :visible.sync="userDetailedForm.show" width="70%" height="80%">
        <detailed :model="userDetailedForm.model" @userSaveSuccess="userSaveSuccess" />
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
      columns: [{name: 'name', text: '姓名', width: 200},
        {name: 'sex', text: '性别', width: 100},
        {name: 'account', text: '账号', width: 200},
        {name: 'mobile', text: '电话', width: 200},
        {name: 'remark', text: '备注'}],
      data: {
        list: []
      },
      emptySearchForm: {},
      searchForm: {
        name: null,
        mobile: null,
        account: null
      },
      userDetailedForm: {
        title: '用户详情',
        show: false,
        model: null
      }
    }
  },
  created() {
    this.emptySearchForm = Object.assign({}, this.searchForm)
    this.loadData()
  },
  mounted() {
  },
  methods: {
    loadData() {
      userService.list(this.searchForm).then(result => {
        this.data.list = result.users
      })
    },
    addData() {
      this.userDetailedForm.show = true
      this.userDetailedForm.model = null
    },
    userSearch() {
      this.loadData()
    },
    resetUserSearch() {
      this.searchForm = Object.assign({}, this.emptySearchForm)
    },
    userSaveSuccess() {
      this.userSearch()
    },
    editData() {
      const currentRow = this.$refs.userTable.getCurrentRow()
      console.log(currentRow, 'currentRow')
      if (currentRow !== null) {
        this.userDetailedForm.show = true
        this.userDetailedForm.model = currentRow
      } else {
        this.$message.warning('必须选中一条数据')
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>