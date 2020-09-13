import request from '@/utils/Request'

// 推荐企业、供需、展会-推荐企业-获取企业列表数据
const api = (data) => {
    return request({
        url: '/v1/recommendlist',
        method: 'post',
        data
    })
}

export default {
    api
}
