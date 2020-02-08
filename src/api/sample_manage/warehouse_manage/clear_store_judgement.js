import request from '@/utils/Request'

// 样品管理-出入库管理-清仓判断-主列表数据
const getList = (data) => {
    return request({
        url: '/sample/clearance/query',
        method: 'post',
        data
    })
}

// 样品管理-出入库管理-清仓判断-批量清仓，批量调拨
const batchClearanceUpdate = (data) => {
    return request({
        url: '/sample/clearance/update',
        method: 'post',
        data
    })
}

export default {
    getList,
    batchClearanceUpdate
}
