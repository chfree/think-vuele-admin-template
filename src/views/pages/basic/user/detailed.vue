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
              <tc-radio-group v-model="userModel.sex" :providers="providers.sexProviders" size="small" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="layout.gutter">
          <el-col :span="8">
            <el-form-item label="手机号">
              <tc-input-phone v-model="userModel.mobile" valid-type="mobile"></tc-input-phone>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="办公电话">
              <tc-input v-model="userModel.phone" valid-type="phone"></tc-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="邮箱地址">
              <tc-input v-model="userModel.email"></tc-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="layout.gutter">
          <el-col :span="24">
            <el-form-item label="爱好">
              <tc-input-tag v-model="userModel.hobby" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="layout.gutter">
          <el-col :span="8">
            <el-form-item label="生日">
              <tc-date-picker v-model="userModel.birthday" size="small"></tc-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="年龄">
              <tc-input :readonly="true" v-model="userModel.age"></tc-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="微信">
              <tc-input v-model="userModel.wechat"></tc-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="layout.gutter">
          <el-col :span="8">
            <el-form-item label="学历">
              <tc-select v-model="userModel.education" :providers="providers.eduProviders" />
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
              <tc-select v-model="userModel.nation" clearable filterable :providers="providers.nations"></tc-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="身高">
              <tc-input v-model="userModel.height" regular-type="decimalTwo">
                 <template slot="append">厘米</template>
              </tc-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="体重">
              <tc-input v-model="userModel.weight" regular-type="decimalTwo">
                <template slot="append">千克</template>
              </tc-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="layout.gutter">
          <el-col :span="8">
            <el-form-item label="省份">
              <tc-select v-model="userModel.province" clearable filterable :providers="providers.provinces"></tc-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="城市">
              <tc-select v-model="userModel.city" clearable filterable :providers="providers.citys"></tc-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="区县">
              <tc-select v-model="userModel.county" clearable filterable :providers="providers.countys"></tc-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="layout.gutter">
          <el-col :span="8">
            <el-form-item label="QQ">
              <tc-input v-model="userModel.qq" regular-type="qq"></tc-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="mac地址">
              <tc-input v-model="userModel.mac"></tc-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="ip地址">
              <tc-input v-model="userModel.ip"></tc-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="layout.gutter">
          <el-col :span="24">
            <el-form-item label="部门">
              <tc-input v-model="userModel.department" :readonly="true">
                <tc-button slot="append" icon="el-icon-search"></tc-button>
              </tc-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="layout.gutter">
          <el-col :span="24">
            <el-form-item label="角色">
              <tc-input v-model="userModel.roles" :readonly="true">
                <tc-button slot="append" icon="el-icon-search"></tc-button>
              </tc-input>
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
        <tc-button type="think" size="small" @click="saveForm">保存</tc-button>
        <tc-button type="think" size="small" @click="resetForm">重置</tc-button>
      </tc-fixed-bottom>
    </tc-form>
  </div>
</template>

<script>
import userModel from './assist/user.model'
import userProviders from './assist/user.providers'
import userService from '@/api/basic/user'

export default {
  mixins: [userModel, userProviders],
  props: {
    model: { type: Object, default: null }
  },
  data() {
    return {
      layout: {
        gutter: 20
      }
    }
  },
  mounted() {
    this.userModel = Object.assign(this.userModel, this.model)
  },
  watch: {
    model: function(val) {
      this.userModel = Object.assign(this.userModel, val)
    }
  },
  methods: {
    resetForm() {
      this.resetModel()
    },
    saveForm() {
      userService.save(this.userModel).then(result => {
        if (result.ok) {
          this.resetForm()
          this.$parent.hide()
          this.$message.success('添加成功')
          this.$emit('userSaveSuccess')
        }
      })
    }
  }
}
</script>

<style lang="scss">

</style>