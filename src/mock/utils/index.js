import { isNull } from 'tennetcn-ui/lib/utils'
export function urlParam2Json(url) {
  if (url.indexOf('?') < 0 && url.indexOf('&') < 0) {
    return null
  }
  if (url.indexOf('?') >= 0) {
    url = url.split('?')[1]
  }

  const urlParams = url.split('&') || []
  const result = {}
  urlParams.forEach(item => {
    const paramMap = item.split('=')
    if (!isNull(paramMap[0])) {
      result[paramMap[0]] = decodeURI((isNull(paramMap[1]) || paramMap[1] === 'null') ? '' : paramMap[1])
    }
  })

  return result
}

export function listFilter(list, search) {
  if (isNull(list)) {
    return list
  }
  if (!isNull(search)) {
    list = list.filter(user => {
      var result = true
      Object.keys(search).forEach(item => {
        if (user.hasOwnProperty(item) && !isNull(search[item])) {
          result = ('' + (user[item] || '')).indexOf(search[item]) > -1
        }
      })
      return result
    })
  }
  return list
}
