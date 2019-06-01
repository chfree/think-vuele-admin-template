/**
 * 测试用，尽可能包含更多的信息，便于测试到更多的组件展示
 */
export default {
  data() {
    return {
      emptyModel: {},
      userModel: {
        id: null,
        name: null,
        sex: '01',
        account: null,
        mobile: null,
        phone: null,
        email: null,
        hobby: [],
        nation: null,
        province: null,
        city: null,
        county: null,
        education: null,
        birthday: null,
        age: null,
        professional: null,
        workUnit: null,
        height: null,
        weight: null,
        qq: null,
        wechat: null,
        photo: null,
        mac: null,
        ip: null,
        department: [],
        roles: [],
        remark: null
      }
    }
  },
  created() {
    this.emptyModel = Object.assign({}, this.userModel)
  },
  methods: {
    resetModel() {
      this.userModel = Object.assign(this.userModel, this.emptyModel)
    }
  }
}
