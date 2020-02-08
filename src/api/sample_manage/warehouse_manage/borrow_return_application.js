import request from '@/utils/Request'

// 样品管理-出入库管理-借还样申请-获取主列表数据
const getList = (data) => {
    return request({
        url: '/sample/borrow/query',
        method: 'post',
        data
    })
}

// 样品管理-出入库管理-借还样申请-批量还样
const rebackUpdate = (data) => {
    return request({
        url: '/sample/batch/reback/update',
        method: 'post',
        data
    })
}

// 样品管理-出入库管理-借还样申请-批量借样
const batchBorrowUpdate = (data) => {
    return request({
        url: '/sample/batch/borrow/update',
        method: 'post',
        data
    })
}

// 样品管理-出入库管理-借还样申请-单个还样
const rebackBorrowUpdate = (data) => {
    return request({
        url: '/sample/reback/borrow/update',
        method: 'post',
        data
    })
}

// 样品管理-出入库管理-借还样申请-调拨
const bringUpdate = (data) => {
    return request({
        url: '/sample/batch/transfer/update',
        method: 'post',
        data
    })
}

// 样品管理-出入库管理-借还样申请-单个驳回
const rejectBorrowUpdate = (data) => {
    return request({
        url: '/sample/reject/borrow/update',
        method: 'post',
        data
    })
}

export default {
    getList,
    rebackUpdate,
    bringUpdate,
    batchBorrowUpdate,
    rebackBorrowUpdate,
    rejectBorrowUpdate
}
