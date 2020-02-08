import request from '@/utils/Request'

// 排唛核价-排料
const getList = data => {
    return request({
        url: '/craftBom/usage/query',
        method: 'post',
        data
    })
}

// 排唛核价-排料详情
const getDetail = data => {
    return request({
        url: '/craftBom/usage/detail',
        method: 'post',
        data
    })
}

// 排唛核价-面辅料确认详情-提交
const updateSubmit = data => {
    return request({
        url: '/craftBom/usage/submit',
        method: 'post',
        data
    })
}

// 排唛核价-面辅料确认详情-保存
const updateSave = data => {
    return request({
        url: '/craftBom/usage/update',
        method: 'post',
        data
    })
}

export default {
    getList,
    getDetail,
    updateSave,
    updateSubmit
}
