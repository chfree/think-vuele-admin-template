import mock from 'mockjs'
import userApiPath from '@/api/basic/user/api-path'
import moment from 'moment'
import { urlParam2Json, listFilter } from './utils'

var addList = []

function getAllUser() {
  var users = [
    {
      id: '01',
      name: '张三',
      sex: '01',
      account: 'zhangsan',
      mobile: '18912345678',
      phone: '02712345678',
      email: '123256085@qq.com',
      hobby: '写bug,调bug',
      nation: '01',
      province: '430000',
      city: '430100',
      county: '430111',
      education: '01',
      birthday: moment().subtract(20, 'years').toDate(),
      age: 20,
      professional: '计算机',
      workUnit: '自由职业者',
      height: '178',
      weight: '74',
      qq: '123256085',
      wechat: '***',
      photo: null,
      mac: null,
      ip: null,
      department: null,
      roles: null,
      remark: '测试数据'
    },
    {
      id: '02',
      name: '李思',
      sex: '02',
      account: 'lisi',
      mobile: '18898765432',
      phone: '01087654321',
      email: '79763939@qq.com',
      hobby: '写bug,调bug',
      nation: '01',
      province: '420000',
      city: '420100',
      county: '420111',
      education: '01',
      birthday: moment().subtract(20, 'years').toDate(),
      age: 20,
      professional: '计算机',
      workUnit: '自由职业者',
      height: '178',
      weight: '74',
      qq: '123256085',
      wechat: '***',
      photo: null,
      mac: null,
      ip: null,
      department: null,
      roles: null,
      remark: '测试数据'
    }
  ]
  if (addList.length <= 0) {
    randomUser()
  }
  return addList.concat(users)
}

function randomUser() {
  const random = mock.Random
  for (var i = 0; i < 10; i++) {
    addList.push({
      id: random.guid(),
      name: random.cname(),
      sex: '0' + random.integer(1, 2),
      account: random.name(),
      mobile: random.natural(10000000000, 99999999999),
      phone: random.natural(10000000000, 99999999999),
      email: random.email(),
      hobby: random.csentence(2) + ',' + random.csentence(2),
      nation: '01',
      province: '420000',
      city: '420100',
      county: '420111',
      education: '01',
      birthday: moment(random.date()).subtract(20, 'years').toDate(),
      age: 20,
      professional: '计算机',
      workUnit: '自由职业者',
      height: '178',
      weight: '74',
      qq: '123256085',
      wechat: '***',
      photo: null,
      mac: null,
      ip: null,
      department: null,
      roles: null,
      remark: random.ctitle(5, 12)
    })
  }
}

function getUser(search) {
  var users = getAllUser()

  users = listFilter(users, search)
  return {
    arguments: {
      users: users
    }
  }
}

function saveUser(user) {
  addList.push(user)
  return {
    arguments: {
      ok: true
    }
  }
}

mock.mock(RegExp(userApiPath.list + '.*'), 'get', (options) => {
  var search = urlParam2Json(options.url)
  const users = getUser(search)
  return users
})

mock.mock(userApiPath.save, 'post', (options) => {
  const user = Object.assign(urlParam2Json(options.body), {id: mock.Random.guid()})

  return mock.mock(saveUser(user))
})
