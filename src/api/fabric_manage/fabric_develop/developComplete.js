import request from '@/utils/Request'

// 面料企划-面料开发完成-获取主列表数据
const getList = (data) => {
    return request({
        url: '/fabric/complete/query',
        method: 'post',
        data
    })
}

// 面料企划-面料开发完成-开发完成
const complete = (data) => {
    return request({
        url: '/fabric/complete',
        method: 'post',
        data
    })
}

// 面料企划-面料开发完成-退回
const repulse = (data) => {
    return request({
        url: '/fabric/complete/repulse',
        method: 'post',
        data
    })
}

export default {
    getList,
    complete,
    repulse
}
