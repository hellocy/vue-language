import request from '@/utils/Request'

// 采购协同-复版管理-打版单号详情
const getDetails = data => {
    return request({
        url: '/reproofing/detail/query',
        method: 'post',
        data
    })
}
// 采购协同-复版管理-供应商
const getSuppliers = data => {
    return request({
        url: '/supply/capacity/query',
        method: 'post',
        data
    })
}
// 采购协同-复版管理-供应商管理员
const getSuppliersWarden = data => {
    return request({
        url: '/supply/capacity/manager/query',
        method: 'post',
        data
    })
}

// 采购协同-we借样类品
const getWeSamples = data => {
    return request({
        url: '/we/borrowsample/applytype/query',
        method: 'post',
        data
    })
}

// 采购协同-we类品仓库
const getWeWarehouse = data => {
    return request({
        url: '/we/borrowsample/warehouse/query',
        method: 'post',
        data
    })
}

// 采购协同-we样品仓库
const applyWESample = data => {
    return request({
        url: '/we/borrowsample/apply/add',
        method: 'post',
        data
    })
}

// 采购协同-we样品库存
const getWESampleStock = data => {
    return request({
        url: '/borrowsample/stock/query',
        method: 'post',
        data
    })
}

// 采购协同-we运费类型
const getFreighType = data => {
    return request({
        url: '/we/getPayTypeList/query',
        method: 'post',
        data
    })
}

// 采购协同-we样品领取方式
const getCollectType = data => {
    return request({
        url: '/we/getReceiveMethodList/query',
        method: 'post',
        data
    })
}
// 采购协同-plm借样申请
const applyPLMSample = data => {
    return request({
        url: '/plm/borrowsample/apply/add',
        method: 'post',
        data
    })
}

export default {
    getDetails,
    getSuppliers,
    getSuppliersWarden,
    getWeSamples,
    getWeWarehouse,
    applyWESample,
    getWESampleStock,
    getFreighType,
    getCollectType,
    applyPLMSample
}
