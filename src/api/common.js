import request from '@/utils/Request'

// 数据字典
const getDictData = (data) => {
    return request({
        url: '/biz/dict/all/query',
        method: 'post',
        data
    })
}
// Pn data
const getPnData = (data) => {
    return request({
        url: '/biz/map/productPlanCategory/query',
        method: 'post',
        data
    })
}
// Color data
const getColorData = (data) => {
    return request({
        url: '/color/query',
        method: 'post',
        data
    })
}

// 面料企划-面料公共接口-sku
const getUsers = (data) => {
    return request({
        url: '/sys/user/byUsernameOrNameOrDepartment/query',
        method: 'post',
        data
    })
}

// 根据角色查询用户
const getUsersByRole = (data) => {
    return request({
        url: '/sys/user/byRoleCode/query',
        method: 'post',
        data
    })
}

export default {
    getDictData,
    getPnData,
    getColorData,
    getUsers,
    getUsersByRole
}
