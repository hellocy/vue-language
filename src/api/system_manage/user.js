import request from '@/utils/Request'

// 系统管理-系统用户-获取用户列表数据
const api = (data) => {
    return request({
        url: '/v1/user',
        method: 'post',
        data
    })
}

export default {
    api
}
