import request from '@/utils/Request'

// 面料管理-版料采购-获取主列表数据
const getList = (data) => {
    return request({
        url: '/material/apply/query',
        method: 'post',
        data
    })
}

// 面料管理-版料采购-根据面料编码获取版料详情
const getMaterialFabricInfo = (data) => {
    return request({
        url: '/materialFabricInfo/query',
        method: 'post',
        data
    })
}

// 面料管理-版料采购-新增和修改的保存
const save = (data) => {
    return request({
        url: '/material/apply/add',
        method: 'post',
        data
    })
}

// 面料管理-版料采购-删除记录
const deleteRecord = (data) => {
    return request({
        url: '/material/apply/delete',
        method: 'post',
        data
    })
}

// 面料管理-版料采购-根据ID查询明细
const getDetail = (data) => {
    return request({
        url: '/materialDetail/apply/query',
        method: 'post',
        data
    })
}

// 面料管理-版料采购-根据供应商查询现有库存
const getcurrentStorageQty = (data) => {
    return request({
        url: '/materialDetail/apply/query',
        method: 'post',
        data
    })
}

// 面料管理-版料采购-根据供应商查询对应色号
const getSupplierColors = (data) => {
    return request({
        url: '/fabric/color/edit',
        method: 'post',
        data
    })
}

// 面料管理-版料采购-保存维护的供应商色号
const saveSupplierColors = (data) => {
    return request({
        url: '/fabric/color/update',
        method: 'post',
        data
    })
}

export default {
    getList,
    getMaterialFabricInfo,
    save,
    deleteRecord,
    getDetail,
    getcurrentStorageQty,
    getSupplierColors,
    saveSupplierColors
}
