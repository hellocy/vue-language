import request from '@/utils/Request'

// 面料企划-面料效果确认-获取主列表数据
const getList = (data) => {
    return request({
        url: '/fabric/confirm/query',
        method: 'post',
        data
    })
}

// 面料企划-面料效果确认-效果确认
const confirm = (data) => {
    return request({
        url: '/fabric/confirm/complete',
        method: 'post',
        data
    })
}

// 面料企划-面料效果确认-退回
const repulse = (data) => {
    return request({
        url: '/fabric/confirm/repulse',
        method: 'post',
        data
    })
}

export default {
    getList,
    confirm,
    repulse
}
