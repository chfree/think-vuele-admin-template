import { loadPage } from './route.load'
const menus = [
  {
    name: 'layout',
    path: '/personCenter',
    meta: {
      title: '个人中心',
      icon: 'table'
    },
    redirect: '/system/personCenter',
    component: loadPage('layout/index')
  },
  {
    name: 'setting',
    meta: {
      title: '配置中心',
      icon: 'table'
    },
    path: '/setting',
    component: loadPage('layout/index'),
    children: [{
      name: 'mysetting',
      path: 'mysetting',
      meta: {
        title: '我的配置',
        icon: 'table'
      },
      component: loadPage('setting/mysetting/index')
    }]
  },
  {
    name: 'component',
    path: '/component',
    meta: {
      title: '组件库',
      icon: 'table'
    },
    component: loadPage('layout/index'),
    children: [{
      name: 'fontawesome',
      path: 'fontawesome',
      meta: {
        title: 'fontawesome',
        icon: 'table'
      },
      component: loadPage('component/fontawesome/index')
    }, {
      name: 'remixicon',
      path: 'remixicon',
      meta: {
        title: 'remixicon',
        icon: 'table'
      },
      component: loadPage('component/remixicon/index')
    }]
  },
  {
    name: 'test1',
    path: '/test1',
    meta: {
      title: '菜单1',
      icon: 'table'
    },
    component: loadPage('layout/index'),
    children: [{
      name: 'test1-1',
      path: 'test1-1',
      meta: {
        title: '菜单1-1',
        icon: 'table'
      },
      component: loadPage('layout/empty.layout'),
      children: [{
        name: 'test1-1-1',
        path: 'test1-1-1',
        meta: {
          title: '菜单1-1-1',
          icon: 'table'
        },
        component: loadPage('test/test1-1-1')
      }, {
        name: 'test1-1-2',
        path: 'test1-1-2',
        meta: {
          title: '菜单1-1-2',
          icon: 'table'
        },
        component: loadPage('test/test1-1-2')
      }]
    }, {
      name: 'test1-2',
      path: 'test1-2',
      meta: {
        title: '菜单1-2',
        icon: 'table'
      },
      component: loadPage('test/test1-2')
    }]
  },
  {
    name: 'system',
    title: '系统管理',
    icon: 'example',
    path: '/system',
    meta: {
      title: '系统管理',
      icon: 'table'
    },
    component: loadPage('layout/index'),
    children: [
      {
        name: 'personCenterIndex',
        path: 'personCenter',
        meta: {
          title: '个人中心',
          icon: 'table'
        },
        hidden: true,
        component: loadPage('main/index')
      },
      {
        name: 'dept',
        title: '部门管理',
        icon: 'table',
        path: 'dept',
        meta: {
          title: '部门管理',
          icon: 'table'
        },
        component: loadPage('basic/dept/index')
      },
      {
        name: 'user',
        path: 'user',
        meta: {
          title: '用户管理',
          icon: 'table'
        },
        component: loadPage('basic/user/index')
      },
      {
        name: 'role',
        path: 'role',
        meta: {
          title: '角色管理',
          icon: 'table'
        },
        component: loadPage('basic/role/index')
      }]
  }
]
export default menus
