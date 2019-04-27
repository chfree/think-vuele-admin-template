import { loadPage } from './route.load'
const menus = [
  {
    name: 'layout',
    title: '个人中心',
    icon: 'table',
    path: '/personCenter',
    redirect: '/personCenter/personCenter',
    component: loadPage('layout/index'),
    children: [
      {
        name: 'personCenterIndex',
        title: '个人中心',
        icon: 'table',
        path: 'personCenter',
        component: loadPage('main/index')
      }
    ]
  },
  {
    name: 'system',
    title: '系统管理',
    icon: 'example',
    path: '/system',
    component: loadPage('layout/index'),
    children: [
      {
        name: 'dept',
        title: '部门管理`',
        icon: 'table',
        path: 'dept',
        component: loadPage('setting/dept/index')
      },
      {
        name: 'user',
        title: '用户管理',
        icon: 'table',
        path: 'user',
        component: loadPage('setting/user/index')
      },
      {
        name: 'role',
        title: '角色管理',
        icon: 'table',
        path: 'role',
        component: loadPage('setting/role/index')
      }]
  }
]
export default menus
