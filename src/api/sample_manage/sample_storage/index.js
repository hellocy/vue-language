import request from '@/utils/Request'

// 样品管理-样品库存-样品库存-获取主列表数据
const getList = data => {
    return request({
        url: '/sample/stock/query',
        method: 'post',
        data
    })
}

// 样品管理-样品库存-样品库存-查看日志
const viewLog = data => {
    return request({
        url: '/sample/log/query',
        method: 'post',
        data
    })
}

// 样品管理-样品库存-样品库存-应在库存-实际库存
const stockDetail = data => {
    return request({
        url: 'sample/stock/detail',
        method: 'post',
        data
    })
}
// 样品管理-样品库存-样品库存-sku详情
const skuDetail = data => {
    return request({
        url: 'sample/sku/detail',
        method: 'post',
        data
    })
}
export default {
    getList,
    viewLog,
    stockDetail,
    skuDetail
}
