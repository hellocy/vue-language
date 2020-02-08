import request from '@/utils/Request'

// 基础信息-角色管理-获取主列表数据
const getList = (data) => {
    return request({
        url: '/sys/role/query',
        method: 'post',
        data
    })
}

// 基础信息-角色管理-新增
const add = (data) => {
    return request({
        url: '/sys/role/add',
        method: 'post',
        data
    })
}

// 基础信息-角色管理-编辑保存
const edit = (data) => {
    return request({
        url: '/sys/role/edit',
        method: 'post',
        data
    })
}

// 基础信息-角色管理-删除
const deleteRows = (data) => {
    return request({
        url: '/sys/role/delete',
        method: 'post',
        data
    })
}

// 基础信息-角色管理-获取详情
const getDetail = (data) => {
    return request({
        url: '/sys/role/detail',
        method: 'post',
        data
    })
}

// 基础信息-角色管理-获取当前用户权限
const getPowers = (data) => {
    return request({
        url: '/sys/rolePermission/query',
        method: 'post',
        data
    })
}

// 基础信息-角色管理-删除当前用户权限
const deletePowers = (data) => {
    return request({
        url: '/sys/rolePermission/delete',
        method: 'post',
        data
    })
}

// 基础信息-角色管理-分配用户权限
const givePowers = (data) => {
    return request({
        url: '/sys/rolePermission/add',
        method: 'post',
        data
    })
}

export default {
    getList,
    add,
    edit,
    deleteRows,
    getDetail,
    getPowers,
    givePowers,
    deletePowers
}
