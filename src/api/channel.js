import request from '@/utils/request'

export const getchannelAPI = () => {
  return request({
    url: '/v1_0/user/channels'
  })
}
