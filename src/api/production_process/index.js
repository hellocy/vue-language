/**
 * 采购协同模块
 */
import request from '@/utils/Request'

// 面料批色审核列表
const getfabricColorAudit = data => {
    return request({
        url: '/cooperation/fabricapprovecoloraudit/list/query',
        method: 'post',
        data
    })
}
// 面料批色审核详情
const getfabricColorAuditDetail = data => {
    return request({
        url: '/cooperation/fabricapprovecoloraudit/detail',
        method: 'post',
        data
    })
}

// 面料批色审核
const updateFabricColorAudit = data => {
    return request({
        url: '/cooperation/fabricapprovecoloraudit/update',
        method: 'post',
        data
    })
}

// 面料采购审核
const getMaterialBuyingAudit = data => {
    return request({
        url: '/cooperation/fabricpurchaseaudit/list/query',
        method: 'post',
        data
    })
}
// 更新面料采购审核
const updateMaterialBuyingAudit = data => {
    return request({
        url: '/cooperation/fabricpurchaseaudit/update',
        method: 'post',
        data
    })
}

// 工艺审核列表
const getCarftAudit = data => {
    return request({
        url: '/cooperation/fabricsecondarycraftaudit/list/query',
        method: 'post',
        data
    })
}

// 更新工艺审核
const updateCarftAudit = data => {
    return request({
        url: '/cooperation/fabricsecondarycraftaudit/update',
        method: 'post',
        data
    })
}

export default {
    getfabricColorAudit,
    getfabricColorAuditDetail,
    updateFabricColorAudit,
    getMaterialBuyingAudit,
    updateMaterialBuyingAudit,
    getCarftAudit,
    updateCarftAudit
}
