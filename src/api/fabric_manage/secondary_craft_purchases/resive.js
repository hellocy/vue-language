import request from '@/utils/Request'

// 面料管理-版料采购-获取主列表数据
const getList = (data) => {
    return request({
        url: '/craft/apply/accept/query',
        method: 'post',
        data
    })
}

// 面料管理-二次工艺采购-二次工艺接收-获取工艺采购员
const purchaseDeveloper = (data) => {
    return request({
        url: '/craft/apply/develop/user/query',
        method: 'post',
        data
    })
}

// 面料管理-二次工艺采购-二次工艺接收-退回
const repulse = (data) => {
    return request({
        url: '/craft/apply/repulse',
        method: 'post',
        data
    })
}
// 面料管理-版料采购-开发接收
const accept = (data) => {
    return request({
        url: '/craft/apply/accept',
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

// 面料管理-版料采购-审核查询
const auditCraftApply = (data) => {
    return request({
        url: '/craft/apply/audit/query',
        method: 'post',
        data
    })
}

export default {
    getList,
    accept,
    getBaseData,
    repulse,
    auditCraftApply,
    purchaseDeveloper
}
