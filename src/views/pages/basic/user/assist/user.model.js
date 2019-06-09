/**
 * 测试用，尽可能包含更多的信息，便于测试到更多的组件展示
 */
import moment from 'moment'
import { nations, provinces, citys, countys } from './procites.data'
export default {
  data() {
    return {
      providers: {
        nations: nations,
        provinces: [],
        citys: [],
        areas: []
      },
      emptyModel: {},
      userModel: {
        id: null,
        name: null,
        sex: '01',
        account: null,
        mobile: null,
        phone: null,
        email: null,
        hobby: null,
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
    },
    'userModel.nation': function(newVal) {
      this.providers.provinces = provinces.filter(item=>item.pid === newVal)
      this.userModel.province = null

      this.providers.citys = []
      this.userModel.city = null

      this.providers.countys = []
      this.userModel.county = null
    },
    'userModel.province': function(newVal) {
      this.providers.citys = citys.filter(item=>item.pid === newVal)
      this.userModel.city = null

      this.providers.countys = []
      this.userModel.county = null
    },
    'userModel.city': function(newVal) {
      this.providers.countys = countys.filter(item=>item.pid === newVal)
      this.userModel.county = null
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
