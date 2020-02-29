import request from '@/utils/Request'

// 面料企划-面料基础档案-获取主列表数据
const getList = (data) => {
    return request({
        url: '/fabric/base/query',
        method: 'post',
        data
    })
}

// 面料企划-面料基础档案-获取详情
const getDetail = (data) => {
    return request({
        url: '/fabric/base/edit',
        method: 'post',
        data
    })
}

// 面料企划-面料基础档案-新增
const add = (data) => {
    return request({
        url: '/fabric/base/add',
        method: 'post',
        data
    })
}

// 面料企划-面料基础档案-编辑保存
const edit = (data) => {
    return request({
        url: '/fabric/base/update',
        method: 'post',
        data
    })
}

// 面料企划-面料基础档案-删除
const deleteRows = (data) => {
    return request({
        url: '/fabric/base/delete',
        method: 'post',
        data
    })
}

// 面料企划-面料基础档案-图片删除
const deleteImage = (data) => {
    return request({
        url: '/fabric/base/image/delete',
        method: 'post',
        data
    })
}

// 面料企划-面料基础档案-检查品名是否重复
const checkExist = (data) => {
    return request({
        url: '/fabric/base/check/name/query',
        method: 'post',
        data
    })
}

// 面料企划-面料基础档案-删除货源清单
const deleteSupplier = (data) => {
    return request({
        url: '/fabric/supplier/delete',
        method: 'post',
        data
    })
}

// 面料企划-面料基础档案-删除颜色
const deleteColor = (data) => {
    return request({
        url: '/fabric/color/delete',
        method: 'post',
        data
    })
}

// 面料企划-面料基础档案-面料实际价格计算
const getActurePrice = (data) => {
    return request({
        url: '/fabric/count/price/query',
        method: 'post',
        data
    })
}

// 面料企划-面料基础档案-启用
const enable = (data) => {
    return request({
        url: '/fabric/base/enable',
        method: 'post',
        data
    })
}

// 面料企划-面料基础档案-禁用
const disabled = (data) => {
    return request({
        url: '/fabric/base/delete',
        method: 'post',
        data
    })
}

export default {
    getList,
    getDetail,
    add,
    edit,
    deleteRows,
    deleteImage,
    checkExist,
    deleteSupplier,
    deleteColor,
    getActurePrice,
    enable,
    disabled
}
