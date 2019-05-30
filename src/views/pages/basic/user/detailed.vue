<template>
  <div>
    <tc-form :model="userModel" size="small" label-width="80px">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="姓名">
            <el-input v-model="userModel.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="账号">
            <el-input v-model="userModel.account"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="性别">
            <el-input v-model="userModel.sex"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <tc-fixed-bottom style="text-align:center;line-height:30px;">
        <tc-button type="think" size="small">保存</tc-button>
        <tc-button type="think" size="small" @click="resetForm">重置</tc-button>
      </tc-fixed-bottom>
    </tc-form>
  </div>
</template>

<script>
import userModel from './assist/user.model'
export default {
  mixins: [userModel],
  data() {
    return {

    }
  },
  methods: {
    resetForm() {
      this.resetModel()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>