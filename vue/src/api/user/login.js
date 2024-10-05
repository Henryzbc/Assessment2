import axios from '@/router/axios';

export const getYZM = (param) => {
  return axios({
    url: '/api/common/getInfo',
    method: 'get',
    params: {},
  })
}
export const login = (param) => {
  return axios({
    url: '/api/user/login',
    method: 'get',
    params: {
      ...param
    },
  })
}

export const getMenu = (param) => {
  return axios({
    url: '/product/user/queryUser',
    method: 'get',
    params: {
      id: param
    },
  })
}

export const logout = (param) => {
  return axios({
    url: 'api/user/logout',
    method: 'get',
    params: {
      ...param
    },
  })
}

export const register = (param) => {
  return axios({
    url: '/api/user/register',
    method: 'post',
    data: param,
  })
}

export const resetPassword = (param) => {
  return axios({
    url: 'api/user/reset/password',
    method: 'post',
    data: param,
  })
}
