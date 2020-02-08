import request from '@/utils/Request'

// 任务拆分-区域负责人-获取主列表数据
const getList = (data) => {
    return request({
        url: '/regionTask/query',
        method: 'post',
        data
    })
}

// 任务拆分-区域负责人-获取明细
const getDetail = (data) => {
    return request({
        url: '/regionTaskDetail/query',
        method: 'post',
        data
    })
}

// 任务拆分-区域负责人-获取品类负责人
const getCategoryUser = (data) => {
    return request({
        url: '/regionTaskDetail/product/user/query',
        method: 'post',
        data
    })
}

// 任务拆分-区域负责人-作废
const drop = (data) => {
    return request({
        url: '/regionTask/delete',
        method: 'post',
        data
    })
}

// 任务拆分-区域负责人-修改保存
const updateSave = (data) => {
    return request({
        url: '/regionTask/update',
        method: 'post',
        data
    })
}

export default {
    getList,
    getDetail,
    updateSave,
    getCategoryUser,
    drop
}
