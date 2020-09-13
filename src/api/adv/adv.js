import request from '@/utils/Request'

// 广告
const api = (data) => {
    return request({
        url: '/v1/advertisement',
        method: 'post',
        data
    })
}

export default {
    api
}
