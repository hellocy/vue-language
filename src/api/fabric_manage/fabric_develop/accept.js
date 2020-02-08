import request from '@/utils/Request'

// 面料企划-面料开发接收-获取主列表数据
const getList = (data) => {
    return request({
        url: '/fabric/accept/query',
        method: 'post',
        data
    })
}

// 面料企划-面料开发接收-开发接收
const accept = (data) => {
    return request({
        url: '/fabric/accept/accept',
        method: 'post',
        data
    })
}

// 面料企划-面料开发接收-查询面料基础数据
const getBaseData = (data) => {
    return request({
        url: '/fabric/base/query',
        method: 'post',
        data
    })
}

// 面料企划-面料开发接收-开发已有
const already = (data) => {
    return request({
        url: '/fabric/accept/already',
        method: 'post',
        data
    })
}

// 面料企划-面料开发接收-审核查询
const auditFabricApply = (data) => {
    return request({
        url: '/fabric/develop/audit/query',
        method: 'post',
        data
    })
}

// 面料企划-面料开发接收-退回
const repulse = (data) => {
    return request({
        url: '/fabric/accept/repulse',
        method: 'post',
        data
    })
}

// 面料企划-面料开发接收-查询开发员
const getFabricApply = (data) => {
    return request({
        url: '/fabric/develop/user/query',
        method: 'post',
        data
    })
}

export default {
    getList,
    accept,
    getBaseData,
    already,
    repulse,
    auditFabricApply,
    getFabricApply
}
