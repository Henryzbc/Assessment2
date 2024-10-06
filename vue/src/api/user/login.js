import axios from '@/router/axios';

export const login = (param) => {
  return axios({
    url: '/api/user/login',
    method: 'get',
    params: {
      ...param
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
