import request from '@/utils/Request'

// 面料管理-版料出库-出库领用申请-获取主列表数据
const getList = (data) => {
    return request({
        url: '/material/stockOut/query',
        method: 'post',
        data
    })
}

// 面料管理-版料出库-出库领用申请-新增/修改的保存
const save = (data) => {
    return request({
        url: '/material/stockOut/add',
        method: 'post',
        data
    })
}

// 面料管理-版料出库-出库领用申请-获取出库详情
const getDetail = (data) => {
    return request({
        url: '/material/stockOut/byBindId/query',
        method: 'post',
        data
    })
}

// 面料管理-版料出库-出库领用申请-删除
const deleteRows = (data) => {
    return request({
        url: '/material/stockOut/delete',
        method: 'post',
        data
    })
}

export default {
    getList,
    save,
    getDetail,
    deleteRows
}
