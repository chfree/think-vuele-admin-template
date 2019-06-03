/**
 * 测试用，尽可能包含更多的信息，便于测试到更多的组件展示
 */
import moment from 'moment'
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
        birthday: moment().subtract(20, 'years').toDate(),
        age: 20,
        professional: null,
        workUnit: null,
        height: null,
        weight: null,
        qq: null,
        wechat: null,
        photo: null,
        mac: null,
        ip: null,
        department: null,
        roles: null,
        remark: null
      }
    }
  },
  watch: {
    'userModel.birthday': function(newVal, oldVal) {
      this.userModel.age = moment().diff(moment(newVal), 'year')
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
