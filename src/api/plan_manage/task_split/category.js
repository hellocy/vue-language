import request from '@/utils/Request'

// 任务拆分-品类负责人-获取主列表数据
const getList = (data) => {
    return request({
        url: '/productTask/query',
        method: 'post',
        data
    })
}

// 任务拆分-品类负责人-获取明细
const getDetail = (data) => {
    return request({
        url: '/productTaskDetail/query',
        method: 'post',
        data
    })
}

// 任务拆分-品类负责人-作废
const drop = (data) => {
    return request({
        url: '/productTask/delete',
        method: 'post',
        data
    })
}

// 任务拆分-品类负责人-获取品类负责人
const getCategoryUser = (data) => {
    return request({
        url: '/regionTaskDetail/product/designer/query',
        method: 'post',
        data
    })
}

// 任务拆分-品类负责人-获取P4数据
const getP4Data = (data) => {
    return request({
        url: '/productTaskDetail/p4/query',
        method: 'post',
        data
    })
}

// 任务拆分-品类负责人-获取P5数据
const getP5Data = (data) => {
    return request({
        url: '/productTaskDetail/p5/query',
        method: 'post',
        data
    })
}

// 任务拆分-品类负责人-修改保存
const updateSave = (data) => {
    return request({
        url: '/productTask/update',
        method: 'post',
        data
    })
}

// 任务拆分-品类负责人-获取上期开发数量
const getPreDevelopQtn = (data) => {
    return request({
        url: '/productTaskDetail/devQty/query',
        method: 'post',
        data
    })
}

export default {
    getList,
    getDetail,
    drop,
    updateSave,
    getCategoryUser,
    getP4Data,
    getP5Data,
    getPreDevelopQtn
}
