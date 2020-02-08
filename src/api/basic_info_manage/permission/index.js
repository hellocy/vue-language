import request from '@/utils/Request'

// 基础信息-权限管理-获取主列表数据
const getList = (data) => {
    return request({
        url: '/sys/permission/query',
        method: 'post',
        data
    })
}

// 基础信息-权限管理-新增
const add = (data) => {
    return request({
        url: '/sys/permission/add',
        method: 'post',
        data
    })
}

// 基础信息-权限管理-编辑保存
const update = (data) => {
    return request({
        url: '/sys/permission/update',
        method: 'post',
        data
    })
}

// 基础信息-权限管理-删除
const deleteRows = (data) => {
    return request({
        url: '/sys/permission/delete',
        method: 'post',
        data
    })
}

// 基础信息-权限管理-获取详情
const getDetail = (data) => {
    return request({
        url: '/sys/permission/detail',
        method: 'post',
        data
    })
}

export default {
    getList,
    add,
    update,
    deleteRows,
    getDetail
}
