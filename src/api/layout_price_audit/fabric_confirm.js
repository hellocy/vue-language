import request from '@/utils/Request'

// 排唛核价-面辅料确认
const getList = data => {
    return request({
        url: '/craftBom/confirm/query',
        method: 'post',
        data
    })
}

// 排唛核价-面辅料确认详情
const getDetail = data => {
    return request({
        url: '/craftBom/sku/detail',
        method: 'post',
        data
    })
}

// 排唛核价-面辅料确认详情-作废
const updateInvalid = data => {
    return request({
        url: '/craftBom/sku/invalid',
        method: 'post',
        data
    })
}

// 排唛核价-面辅料确认详情-提交
const updateSubmit = data => {
    return request({
        url: '/craftBom/sku/submit',
        method: 'post',
        data
    })
}

// 排唛核价-面辅料确认详情-保存
const updateSave = data => {
    return request({
        url: '/craftBom/sku/update',
        method: 'post',
        data
    })
}

export default {
    getList,
    getDetail,
    updateSave,
    updateSubmit,
    updateInvalid
}
