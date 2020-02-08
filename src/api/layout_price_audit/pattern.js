import request from '@/utils/Request'

// 排唛核价-纸样变更
const getPatternsChange = data => {
    return request({
        url: '/bom/pattern/query',
        method: 'post',
        data
    })
}
// 排唛核价-纸样变更审核
const getPatternsChangeAudit = data => {
    return request({
        url: '/bom/pattern/review/query',
        method: 'post',
        data
    })
}

// 排唛核价-纸样变更 - 详情
const getPatternsChangetItem = data => {
    return request({
        url: '/bom/pattern/detail/query',
        method: 'post',
        data
    })
}

// 排唛核价-纸样变更 - 通过
const passPatternsChange = data => {
    return request({
        url: '/bom/pattern/pass/update',
        method: 'post',
        data
    })
}

// 排唛核价-纸样变更 - 驳回
const rejectPatternsChange = data => {
    return request({
        url: '/bom/pattern/reject/update',
        method: 'post',
        data
    })
}

// 排唛核价-纸样变更 - 作废
const invalidPatternsChange = data => {
    return request({
        url: '/bom/pattern/invalid/update',
        method: 'post',
        data
    })
}

// 排唛核价-纸样变更 - 保存
const savePatternsChange = data => {
    return request({
        url: '/bom/pattern/add',
        method: 'post',
        data
    })
}

// 排唛核价-纸样变更 - 提交
const submitPatternsChange = data => {
    return request({
        url: '/bom/pattern/submit',
        method: 'post',
        data
    })
}
// 排唛核价-纸样变更 - 上传纸样
const uploadPatterFile = data => {
    return request({
        url: '/bom/pattern/file/upload',
        method: 'post',
        data
    })
}

export default {
    getPatternsChange,
    getPatternsChangeAudit,
    getPatternsChangetItem,
    passPatternsChange,
    rejectPatternsChange,
    savePatternsChange,
    submitPatternsChange,
    uploadPatterFile,
    invalidPatternsChange
}
