import request from '@/utils/Request'

// 采购协同-复版管理-查询生产打版看板列表数据
const getList = (data) => {
    return request({
        url: '/reproofing/list/query',
        method: 'post',
        data
    })
}
// 采购协同-复版管理-查询无需打版列表数据
const getNoNeedList = (data) => {
    return request({
        url: '/reproofing/non/list/query',
        method: 'post',
        data
    })
}
// 采购协同-复版管理-查询供应商打版列表数据
const getSupplierList = (data) => {
    return request({
        url: '/reproofing/supplier/list/query',
        method: 'post',
        data
    })
}
// 采购协同-复版管理-查询现货转打版列表数据
const getPresentList = (data) => {
    return request({
        url: '/reproofing/chg/list/query',
        method: 'post',
        data
    })
}

// 采购协同-复版管理-查询问题版列表数据
const getWrongList = (data) => {
    return request({
        url: '/reproofing/problem/query',
        method: 'post',
        data
    })
}

// 采购协同-复版管理-生产打版看板-根据SKU查询商品编码、颜色、图片等信息（添加产品时用）
const getSkuInfo = (data) => {
    return request({
        url: '/reproofing/product/one/add',
        method: 'post',
        data
    })
}

// 采购协同-复版管理-生产打版看板-添加产品
const productAdd = (data) => {
    return request({
        url: '/reproofing/product/add',
        method: 'post',
        data
    })
}

// 采购协同-复版管理-生产打版看板-查询打版供应商
const getSupplier = (data) => {
    return request({
        url: '/supply/capacity/base/query',
        method: 'post',
        data
    })
}

// 采购协同-复版管理-生产打版看板-查询计划生产员
const getPlanUsers = (data) => {
    return request({
        url: '/reproofing/planuser/query',
        method: 'post',
        data
    })
}

// 采购协同-复版管理-生产打版看板-查询打板跟单员
const getTraceUsers = (data) => {
    return request({
        url: '/reproofing/traceuser/query',
        method: 'post',
        data
    })
}

// 采购协同-复版管理-生产打版看板-发起打版
const beginPattern = (data) => {
    return request({
        url: '/reproofing/submit/add',
        method: 'post',
        data
    })
}

// 采购协同-复版管理-生产打版看板-打版作废
const patternDestroy = (data) => {
    return request({
        url: '/reproofing/invalid/update',
        method: 'post',
        data
    })
}

// 采购协同-复版管理-问题版处理-打版作废
const problemDestroy = (data) => {
    return request({
        url: '/reproofing/probleminvalid/update',
        method: 'post',
        data
    })
}

// 采购协同-复版管理-生产打版看板-查询复版状态
const queryStatus = (data) => {
    return request({
        url: '/reproofing/status/query',
        method: 'post',
        data
    })
}

// 采购协同-复版管理-生产打版看板-查询供货关系信息
const queryProdRelation = (data) => {
    return request({
        url: '/supplier/relation/query',
        method: 'post',
        data
    })
}

// 采购协同-复版管理-生产打版看板-查询供货关系历史记录
const queryRelationHistory = (data) => {
    return request({
        url: '/supplier/relation/history/query',
        method: 'post',
        data
    })
}

// 采购协同-复版管理-生产打版看板-提交供货关系申请
const submitProdRelation = (data) => {
    return request({
        url: '/supplier/relation/add',
        method: 'post',
        data
    })
}

// 采购协同-复版管理-生产打版看板-问题版重新打版
const rePattern = (data) => {
    return request({
        url: '/reproofing/again/add',
        method: 'post',
        data
    })
}

// 采购协同-复版管理-生产打版看板-换供应商打版
const chgsupplier = (data) => {
    return request({
        url: '/reproofing/chgsupplier/add',
        method: 'post',
        data
    })
}

// 采购协同-复版管理-生产打版看板-公司收版
const receivePattern = (data) => {
    return request({
        url: '/reproofing/companyCollect/update',
        method: 'post',
        data
    })
}

// 采购协同-复版管理-生产打版看板-还版
const returnPattern = (data) => {
    return request({
        url: '/reproofing/companyReturn/update',
        method: 'post',
        data
    })
}

// 采购协同-复版管理-生产打版看板-查询批样申请界面基础信息和历史记录
const getAgreePattern = (data) => {
    return request({
        url: '/approval/sample/baisc/query',
        method: 'post',
        data
    })
}

// 采购协同-复版管理-生产打版看板-批版提交
const submitAgreePattern = (data) => {
    return request({
        url: '/approval/sample/apply/add',
        method: 'post',
        data
    })
}

// 采购协同-复版管理-生产打版看板-出库领用申请保存
const recipientsAppSave = (data) => {
    return request({
        url: '/reproofing/stockOut/add',
        method: 'post',
        data
    })
}

// 采购协同-复版管理-生产打版看板-打版提交（提交版房打版）
const submitToPatternRoom = (data) => {
    return request({
        url: '/reproofing/proofing/submit',
        method: 'post',
        data
    })
}

// 采购协同-复版管理-生产打版看板-获取同款同色SKU
const getSameSku = (data) => {
    return request({
        url: '/reproofing/proofing/getSameSky',
        method: 'post',
        data
    })
}

// 采购协同-复版管理-生产打版看板-全部-列表保存
const saveList = (data) => {
    return request({
        url: '/reproofing/add',
        method: 'post',
        data
    })
}

// 采购协同-复版管理-生产打版看板-全部-换供应商打版-根据产品编码获取产品信息
const getSupplierSkuInfo = (data) => {
    return request({
        url: '/reproofing/one/sku/query',
        method: 'post',
        data
    })
}

// 采购协同-复版管理-生产打版看板-全部-换供应商打版-提交
const supplierPatternSubmit = (data) => {
    return request({
        url: '/reproofing/provider/proofing/submit',
        method: 'post',
        data
    })
}

// 采购协同-复版管理-无需打版的提交
const noNeedPatternSubmit = (data) => {
    return request({
        url: '/reproofing/non/borrow/sample/submit',
        method: 'post',
        data
    })
}

// 采购协同-复版管理-无需打版的提交
const getImgPdmLink = (data) => {
    return request({
        url: '/reproofing/sku/pdm/detail',
        method: 'post',
        data
    })
}

export default {
    getList,
    getNoNeedList,
    getSupplierList,
    getPresentList,
    getWrongList,
    getSkuInfo,
    productAdd,
    getSupplier,
    getPlanUsers,
    getTraceUsers,
    beginPattern,
    patternDestroy,
    queryStatus,
    queryProdRelation,
    queryRelationHistory,
    submitProdRelation,
    rePattern,
    chgsupplier,
    receivePattern,
    returnPattern,
    getAgreePattern,
    submitAgreePattern,
    recipientsAppSave,
    submitToPatternRoom,
    problemDestroy,
    getSameSku,
    saveList,
    getSupplierSkuInfo,
    supplierPatternSubmit,
    noNeedPatternSubmit,
    getImgPdmLink
}
