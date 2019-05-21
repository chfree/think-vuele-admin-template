import request from '@/components/util/http/request'
import userApiPath from './api-path'

function list() {
  return new Promise(function(resolve, reject) {
    request.get(userApiPath.list, {}, response => {
      resolve(response.data.arguments)
    })
  })
}

const userService = {
  list: list
}

export default userService
