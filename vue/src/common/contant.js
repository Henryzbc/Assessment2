// 菜单
export const menu = [
  {
    icon: 'el-icon-setting',
    title: 'User information',
    url: '/myInfo',
    keepAlive: true,
    children: [
      {
        icon: 'el-icon-tickets',
        title: 'User information',
        url: '/userManage/userManage',
        keepAlive: true,
      },
    ],
  },
  {
    icon: 'el-icon-setting',
    title: 'Travel package',
    url: '/orderManage',
    keepAlive: true,
    children: [
      {
        icon: 'el-icon-tickets',
        title: 'Travel package',
        url: '/myInfo/order',
        keepAlive: true,
      },
    ],
  },
]
// 菜单
export const menu0 = [
  {
    path: '/userManage/userManage',
    name: 'User information',
    component: () => import('@/views/userManage/userManage'),
    meta: {
      keepAlive: true,
    }
  },
  {
    path: '/myInfo/order',
    name: 'Travel package',
    component: () => import('@/views/myInfo/order'),
    meta: {
      keepAlive: true,
    }
  }
]