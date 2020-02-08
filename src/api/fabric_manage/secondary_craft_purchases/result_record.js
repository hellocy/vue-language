import request from '@/utils/Request'

// 面料管理-二次工艺采购-结果登记-获取列表
const getList = (data) => {
    return request({
        url: '/craft/complete/query',
        method: 'post',
        data
    })
}

// 面料管理-二次工艺采购-结果登记-开发接收
const accept = (data) => {
    return request({
        url: '/fabric/accept/accept',
        method: 'post',
        data
    })
}

// 面料管理-二次工艺采购-结果登记-查询面料基础数据
const getBaseData = (data) => {
    return request({
        url: '/fabric/base/query',
        method: 'post',
        data
    })
}

// 面料管理-二次工艺采购-结果登记-开发已有
const already = (data) => {
    return request({
        url: '/fabric/accept/already',
        method: 'post',
        data
    })
}

// 面料管理-二次工艺采购-结果登记-审核查询
const auditFabricApply = (data) => {
    return request({
        url: '/craft/apply/audit/query',
        method: 'post',
        data
    })
}

// 面料管理-二次工艺采购-结果登记-退回
const repulse = (data) => {
    return request({
        url: '/craft/complete/repulse',
        method: 'post',
        data
    })
}
// 面料管理-二次工艺采购-结果登记-完成登记
const complete = (data) => {
    return request({
        url: '/craft/complete',
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
    complete
}
