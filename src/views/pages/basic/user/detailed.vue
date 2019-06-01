<template>
  <div>
    <tc-form :model="userModel" size="small" label-width="70px">
      <div style="padding:10px;">
        <el-row :gutter="layout.gutter">
          <el-col :span="8">
            <el-form-item label="姓名">
              <tc-input v-model="userModel.name"></tc-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="账号">
              <tc-input v-model="userModel.account"></tc-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="性别">
              <el-radio-group v-model="userModel.sex" size="small">
                <el-radio-button label="01">男</el-radio-button>
                <el-radio-button label="02">女</el-radio-button>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="layout.gutter">
          <el-col :span="8">
            <el-form-item label="手机号">
              <tc-input v-model="userModel.mobile"></tc-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="办公电话">
              <tc-input v-model="userModel.phone"></tc-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="邮箱地址">
              <tc-input v-model="userModel.email"></tc-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="layout.gutter">
          <el-col :span="8">
            <el-form-item label="爱好">
              <tc-input v-model="userModel.hobby"></tc-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="生日">
              <tc-date-picker v-model="userModel.birthday" size="small"></tc-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="年龄">
              <tc-input v-model="userModel.age"></tc-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="layout.gutter">
          <el-col :span="8">
            <el-form-item label="学历">
              <tc-input v-model="userModel.education"></tc-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="专业">
              <tc-input v-model="userModel.professional"></tc-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="工作单位">
              <tc-input v-model="userModel.workUnit"></tc-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="layout.gutter">
          <el-col :span="8">
            <el-form-item label="国家">
              <tc-input v-model="userModel.nation"></tc-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="身高">
              <tc-input v-model="userModel.height">
                 <template slot="append">厘米</template>
              </tc-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="体重">
              <tc-input v-model="userModel.weight">
                <template slot="append">千克</template>
              </tc-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="layout.gutter">
          <el-col :span="8">
            <el-form-item label="省份">
              <tc-input v-model="userModel.province"></tc-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="城市">
              <tc-input v-model="userModel.city"></tc-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="区县">
              <tc-input v-model="userModel.county"></tc-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="layout.gutter">
          <el-col :span="8">
            <el-form-item label="QQ">
              <tc-input v-model="userModel.qq"></tc-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="微信">
              <tc-input v-model="userModel.wechat"></tc-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="mac地址">
              <tc-input v-model="userModel.mac"></tc-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="layout.gutter">
          <el-col :span="8">
            <el-form-item label="ip地址">
              <tc-input v-model="userModel.ip"></tc-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="部门">
              <tc-input v-model="userModel.department"></tc-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="角色">
              <tc-input v-model="userModel.roles"></tc-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="layout.gutter">
          <el-col :span="24">
            <el-form-item label="备注">
              <tc-input type="textarea" v-model="userModel.remark" />
            </el-form-item>
          </el-col>
        </el-row>
      </div>
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
      layout: {
        gutter: 20
      }
    }
  },
  methods: {
    resetForm() {
      this.resetModel()
    }
  }
}
</script>

<style lang="scss">
.el-date-picker__header{
  margin: 6px;
}
.el-picker-panel__content{
  margin: 8px;
  width: auto !important;
}
.el-date-table{
  th {
    padding: 3px !important;
  }
  td {
    padding: 3px 0px !important;
  }
}
</style>