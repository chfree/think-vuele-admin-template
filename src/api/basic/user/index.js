import request from '@/components/util/http/request'
import userApiPath from './api-path'

function list(search) {
  return new Promise(function(resolve, reject) {
    request.get(userApiPath.list, Object.assign({}, search), response => {
      resolve(response.data.arguments)
    })
  })
}

function save(user) {
  return new Promise(function(resolve, reject) {
    request.post(userApiPath.save, user, response => {
      resolve(response.data.arguments)
    })
  })
}

const userService = {
  list,
  save
}

export default userService
