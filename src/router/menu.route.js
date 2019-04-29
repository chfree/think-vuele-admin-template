import { loadPage } from './route.load'
const menus = [
  {
    name: 'layout',
    title: '个人中心',
    icon: 'table',
    path: '/personCenter',
    redirect: '/system/personCenter',
    component: loadPage('layout/index')
  },
  {
    name: 'setting',
    title: '配置中心',
    icon: 'table',
    path: '/setting',
    component: loadPage('layout/index'),
    children: [{
      name: 'mysetting',
      title: '我的配置',
      icon: 'table',
      path: 'mysetting',
      component: loadPage('setting/mysetting/index')
    }]
  },
  {
    name: 'component',
    title: '组件库',
    icon: 'table',
    path: '/component',
    component: loadPage('layout/index'),
    children: [{
      name: 'fontawesome',
      title: 'fontawesome',
      icon: 'table',
      path: 'fontawesome',
      component: loadPage('component/fontawesome/index')
    }]
  },
  {
    name: 'test1',
    title: '菜单1',
    icon: 'table',
    path: '/test1',
    component: loadPage('layout/index'),
    children: [{
      name: 'test1-1',
      title: '菜单1-1',
      icon: 'table',
      path: 'test1-1',
      component: loadPage('layout/empty.layout'),
      children: [{
        name: 'test1-1-1',
        title: '菜单1-1-1',
        icon: 'table',
        path: 'test1-1-1',
        component: loadPage('test/test1-1-1')
      }, {
        name: 'test1-1-2',
        title: '菜单1-1-2',
        icon: 'table',
        path: 'test1-1-2',
        component: loadPage('test/test1-1-2')
      }]
    }, {
      name: 'test1-2',
      title: '菜单1-2',
      icon: 'table',
      path: 'test1-2',
      component: loadPage('test/test1-2')
    }]
  },
  {
    name: 'system',
    title: '系统管理',
    icon: 'example',
    path: '/system',
    component: loadPage('layout/index'),
    children: [
      {
        name: 'personCenterIndex',
        title: '个人中心',
        icon: 'table',
        path: 'personCenter',
        hidden: true,
        component: loadPage('main/index')
      },
      {
        name: 'dept',
        title: '部门管理',
        icon: 'table',
        path: 'dept',
        component: loadPage('basic/dept/index')
      },
      {
        name: 'user',
        title: '用户管理',
        icon: 'table',
        path: 'user',
        component: loadPage('basic/user/index')
      },
      {
        name: 'role',
        title: '角色管理',
        icon: 'table',
        path: 'role',
        component: loadPage('basic/role/index')
      }]
  }
]
export default menus
