import axios from '@/router/axios';

// 查询
export const userQuery = () => {
  return axios({
    url: '/api/user/userList',
    method: 'get',
    params: {},
  })
}
// 新增
export const userAdd = (param) => {
  return axios({
    url: 'api/user/insert/data',
    method: 'post',
    data: param,
  })
}
// 编辑
export const userEdit = (param) => {
  return axios({
    url: '/api/user/userUpdate',
    method: 'post',
    data: param,
  })
}
// 删除
export const userDelete = (param) => {
  return axios({
    url: 'api/user/delete/data',
    method: 'get',
    params: {
      ids: param
    },
  })
}
