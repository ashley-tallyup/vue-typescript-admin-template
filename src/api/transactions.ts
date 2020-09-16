import request from '@/vue-typescript-admin-template/src/utils/request'

export const getTransactions = (params: any) =>
  request({
    url: '/transactions',
    method: 'get',
    params
  })
