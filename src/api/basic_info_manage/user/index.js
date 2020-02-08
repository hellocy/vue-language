import request from '@/utils/Request'

// 基础信息-用户管理-获取主列表数据
const getList = (data) => {
    return request({
        url: '/sys/user/query',
        method: 'post',
        data
    })
}

// 基础信息-用户管理-获取主列表数据
const getPageList = (data) => {
    return request({
        url: '/sys/user/all/list/query',
        method: 'post',
        data
    })
}

// 基础信息-用户管理-获取主列表数据
const getAllList = (data) => {
    return request({
        url: '/sys/user/all/query',
        method: 'post',
        data
    })
}

// 基础信息-用户管理-获取当前用户角色
const getroles = (data) => {
    return request({
        url: '/sys/userRole/query',
        method: 'post',
        data
    })
}

// 基础信息-用户管理-删除当前用户角色
const deleteroles = (data) => {
    return request({
        url: '/sys/userRole/delete',
        method: 'post',
        data
    })
}

// 基础信息-用户管理-分配用户角色
const giveroles = (data) => {
    return request({
        url: '/sys/userRole/add',
        method: 'post',
        data
    })
}

// 基础信息-用户管理-用户关系字典编辑查询（基础配置）
const userBaseConfig = (data) => {
    return request({
        url: '/user/dict/detail/edit',
        method: 'post',
        data
    })
}

// 基础信息-用户管理-用户关系字典编辑保存（基础配置）
const userBaseConfigSsave = (data) => {
    return request({
        url: '/user/dict/detail/update',
        method: 'post',
        data
    })
}

export default {
    getList,
    getPageList,
    getAllList,
    getroles,
    deleteroles,
    giveroles,
    userBaseConfig,
    userBaseConfigSsave
}
