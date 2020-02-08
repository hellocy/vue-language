import request from '@/utils/Request'

// 样品管理-样品库存-样品库存-获取主列表数据
const getList = (data) => {
    return request({
        url: '/sample/base/query',
        method: 'post',
        data
    })
}

// 样品管理-出入库管理-出入库登记-入库登记
const inUpdate = (data) => {
    return request({
        url: '/sample/in/update',
        method: 'post',
        data
    })
}
// 样品管理-出入库管理-出入库登记-出库登记
const outUpdate = (data) => {
    return request({
        url: '/sample/out/update',
        method: 'post',
        data
    })
}

// 样品管理-出入库管理-出入库登记-提交
const add = (data) => {
    return request({
        url: '/sample/base/add',
        method: 'post',
        data
    })
}

// 样品管理-出入库管理-出入库登记-驳回
const reject = (data) => {
    return request({
        url: '/sample/reject/update',
        method: 'post',
        data
    })
}

// 样品管理-出入库管理-出入库登记-批量导出
const exportData = (data) => {
    return request({
        url: '/sample/base/export',
        method: 'post',
        data
    })
}

export default {
    getList,
    inUpdate,
    add,
    reject,
    outUpdate,
    exportData
}
