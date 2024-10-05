// 基础路由
export default [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/login/login'),
    meta: {
      keepAlive: false,
      isTab: false,
      isAuth: false
    },
    // beforeEnter: (to, from) => {
    //   console.log('beforeEnter---'+to)
    //   console.log('beforeEnter---'+from)
    // }
  },
  {
    path: '/register',
    name: '注册',
    component: () => import('@/views/register/register'),
    beforeEnter: (to, from, next) => {
      console.log(to)
      console.log(from)
      next()
    },
    meta: {
      keepAlive: false,
      isTab: false,
      isAuth: false
    }
  },
  {
    path: '/home',
    name: '主页',
    component: () => import('@/views/home/home'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  }
]
