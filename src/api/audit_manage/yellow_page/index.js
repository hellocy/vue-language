import request from '@/utils/Request'

// 面料企划-面料基础档案-获取主列表数据
const getList = (data) => {
    return request({
        url: '/v1/user',
        method: 'post',
        data
    })
}

// 面料企划-面料基础档案-获取详情
const getDetail = (data) => {
    return request({
        url: '/v1/user',
        method: 'post',
        data
    })
}

export default {
    getList,
    getDetail
}
