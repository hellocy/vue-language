import request from '@/utils/Request'

// 排唛核价-工艺变更
const getCraftBomChangeList = data => {
    return request({
        url: '/bom/craft/query',
        method: 'post',
        data
    })
}

// 排唛核价-工艺变更审核
const getCraftBomChangeAuditList = data => {
    return request({
        url: '/bom/craft/check/query',
        method: 'post',
        data
    })
}

// 排唛核价-工艺变更详情
const getCraftBomChangeDetail = data => {
    return request({
        url: '/bom/craft/detail',
        method: 'post',
        data
    })
}

// 排唛核价-工艺变更保存
const saveCraftBomChange = data => {
    return request({
        url: '/bom/craft/record/update',
        method: 'post',
        data
    })
}

// 排唛核价-工艺变更提交
const submitCraftBomChange = data => {
    return request({
        url: '/bom/craft/record/submit',
        method: 'post',
        data
    })
}

// 排唛核价-工艺变更通过
const passedCraftBomChange = data => {
    return request({
        url: '/bom/craft/accept/update',
        method: 'post',
        data
    })
}

// 排唛核价-工艺变更驳回
const rejectCraftBomChange = data => {
    return request({
        url: '/bom/craft/reject/update',
        method: 'post',
        data
    })
}

// 排唛核价-工艺变更作废
const invalidCraftBomChange = data => {
    return request({
        url: '/bom/craft/invalid/update',
        method: 'post',
        data
    })
}

export default {
    getCraftBomChangeList,
    getCraftBomChangeAuditList,
    getCraftBomChangeDetail,
    submitCraftBomChange,
    saveCraftBomChange,
    passedCraftBomChange,
    invalidCraftBomChange,
    rejectCraftBomChange
}
