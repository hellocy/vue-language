import request from '@/utils/Request'

// 面料管理-版料采购-获取主列表数据
const getList = (data) => {
    return request({
        url: '/craft/apply/query',
        method: 'post',
        data
    })
}
// 面料管理-二次开发申请-删除
const deleteRows = (data) => {
    return request({
        url: '/craft/apply/delete',
        method: 'post',
        data
    })
}
// 面料管理-二次开发申请-修改
const getDetail = (data) => {
    return request({
        url: '/craft/apply/edit',
        method: 'post',
        data
    })
}
// 面料管理-二次开发申请-新增
const add = (data) => {
    return request({
        url: '/craft/apply/add',
        method: 'post',
        data
    })
}
// 面料管理-二次开发申请-修改
const edit = (data) => {
    return request({
        url: '/craft/apply/update',
        method: 'post',
        data
    })
}
// 设计师
const getDesign = (data) => {
    return request({
        url: '/craft/apply/design/user/query',
        method: 'post',
        data
    })
}
// 面料管理-二次开发申请-面料编码查询
const fabricBase = (data) => {
    return request({
        url: '/fabric/base/query',
        method: 'post',
        data
    })
}
// 面料管理-二次开发申请-供应商查询
const getSupplier = (data) => {
    return request({
        url: '/craft/apply/supplier/query',
        method: 'post',
        data
    })
}
// 面料管理-二次开发申请-提交
const submit = (data) => {
    return request({
        url: '/craft/apply/submit',
        method: 'post',
        data
    })
}
// 面料管理-二次开发申请-删除一行的数据
const detailDelete = (data) => {
    return request({
        url: '/craft/apply/detail/delete',
        method: 'post',
        data
    })
}

// 面料管理-二次开发申请-选择面料编码
const getSku = (data) => {
    return request({
        url: '/craft/apply/detail/delete',
        method: 'post',
        data
    })
}

// 面料管理-二次开发申请-删除附件
const deleteAttachment = (data) => {
    return request({
        url: '/craft/apply/image/delete',
        method: 'post',
        data
    })
}
export default {
    getList,
    deleteRows,
    add,
    edit,
    getDetail,
    fabricBase,
    getDesign,
    getSupplier,
    submit,
    detailDelete,
    getSku,
    deleteAttachment
}
