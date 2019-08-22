import { isEmpty } from 'tennetcn-ui/lib/utils'
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
    if (!isEmpty(paramMap[0])) {
      result[paramMap[0]] = decodeURI((isEmpty(paramMap[1]) || paramMap[1] === 'null') ? '' : paramMap[1])
    }
  })

  return result
}

export function listFilter(list, search) {
  if (isEmpty(list)) {
    return list
  }
  if (!isEmpty(search)) {
    list = list.filter(user => {
      var result = true
      Object.keys(search).forEach(item => {
        if (user.hasOwnProperty(item) && !isEmpty(search[item])) {
          result = ('' + (user[item] || '')).indexOf(search[item]) > -1
        }
      })
      return result
    })
  }
  return list
}
