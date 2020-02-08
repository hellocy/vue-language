import request from '@/utils/Request'

// 面料企划-面料公共接口-查询面料基础数据
const getBaseData = (data) => {
    return request({
        url: '/fabric/base/query',
        method: 'post',
        data
    })
}
// 面料企划-面料公共接口-查询面料基础数据（以供应商为维度）
const getSupplierBaseData = (data) => {
    return request({
        url: '/fabric/base/supplier/query',
        method: 'post',
        data
    })
}
// 面料企划-面料公共接口-根据面料编码和供应商编码查询库存
const getStorageQty = (data) => {
    return request({
        url: '/material/stockCollectStock/query',
        method: 'post',
        data
    })
}
// 面料企划-面料公共接口-sku
const getSku = (data) => {
    return request({
        url: '/sample/developInfoSku/query',
        method: 'post',
        data
    })
}

export default {
    getBaseData,
    getSupplierBaseData,
    getStorageQty,
    getSku
}
