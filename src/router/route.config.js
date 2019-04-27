import login from '@/views/pages/login'
import layoutMain from '@/views/pages/layout'
import main from '@/views/pages/main'
import menuRoute from './menu.route'

const mainRoute = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/main',
    name: 'main',
    component: layoutMain,
    children: [
      {
        path: 'index',
        name: 'mainIndex',
        component: main
      }
    ]
  }
]

const megreRoute = function() {
  let route = []
  route = route.concat(mainRoute).concat(menuRoute)
  console.log(route)
  return route
}

export default megreRoute()
