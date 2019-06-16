import apiBase from '@/api/api-base'

const apiVer = apiBase.version.v1
const prefix = apiVer + '/basic'
const userApiPath = {
  list: prefix + '/user/list',
  save: prefix + '/user/save'
}

export default userApiPath
