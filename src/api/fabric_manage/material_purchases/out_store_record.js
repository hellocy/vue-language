import request from '@/utils/Request'

// 面料管理-版料采购-出库登记-获取主列表数据
const getList = (data) => {
    return request({
        url: '/material/stockOut/query',
        method: 'post',
        data
    })
}

// 面料管理-版料采购-提交出库
const update = (data) => {
    return request({
        url: '/material/stockOut/update',
        method: 'post',
        data
    })
}

// 面料管理-版料采购-根据sku查询板料出库信息
const getStockOutInfo = (data) => {
    return request({
        url: '/material/stockOut/bySku/query',
        method: 'post',
        data
    })
}

// 面料管理-版料采购-查询领用人
const getReceiptor = (data) => {
    return request({
        url: '/sys/user/byUsernameOrName/query',
        method: 'post',
        data
    })
}

export default {
    getList,
    update,
    getStockOutInfo,
    getReceiptor
}
