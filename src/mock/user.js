import mock from 'mockjs'
import userApiPath from '@/api/basic/user/api-path'

function getAllUser() {
  var users = [
    { pkId: '1', usNm: '小明', uassAccNo: 'xiaoming', gnd: 1, usrMblPh: '15888888888', rmrk: '' },
    { pkId: '2', usNm: '小强', uassAccNo: 'xiaoqiang', gnd: 2, usrMblPh: '15666666666', rmrk: '' }
  ]
  return {
    arguments: {
      users: users
    }
  }
}
mock.mock(userApiPath.list, 'get', getAllUser())
