import request from '@/utils/Request'

// 面料管理-版料采购-获取主列表数据
const getList = (data) => {
    return request({
        url: '/material/apply/query',
        method: 'post',
        data
    })
}

// 面料管理-版料采购-开发接收
const accept = (data) => {
    return request({
        url: '/fabric/accept/accept',
        method: 'post',
        data
    })
}

// 面料管理-版料采购-查询面料基础数据
const getBaseData = (data) => {
    return request({
        url: '/fabric/base/query',
        method: 'post',
        data
    })
}

// 面料管理-版料采购-开发已有
const already = (data) => {
    return request({
        url: '/fabric/accept/already',
        method: 'post',
        data
    })
}

// 面料管理-版料采购-审核查询
const auditFabricApply = (data) => {
    return request({
        url: '/fabric/develop/audit/query',
        method: 'post',
        data
    })
}

// 面料管理-版料采购-退回
const repulse = (data) => {
    return request({
        url: '/fabric/accept/repulse',
        method: 'post',
        data
    })
}

// 面料管理-版料采购-查询开发员
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
