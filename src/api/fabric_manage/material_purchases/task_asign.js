import request from '@/utils/Request'

// 面料管理-版料采购-获取主列表数据
const getList = (data) => {
    return request({
        url: '/material/assign/query',
        method: 'post',
        data
    })
}

// 面料管理-版料采购-退回
const repulse = (data) => {
    return request({
        url: '/material/assign/repulse',
        method: 'post',
        data
    })
}

// 面料管理-版料采购-编辑保存
const update = (data) => {
    return request({
        url: '/material/assign/update',
        method: 'post',
        data
    })
}

// 面料管理-版料采购-获取采购员
const getBuyer = (data) => {
    return request({
        url: '/material/assign/buyer/query',
        method: 'post',
        data
    })
}

export default {
    getList,
    repulse,
    update,
    getBuyer
}
