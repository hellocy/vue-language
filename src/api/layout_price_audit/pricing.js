import request from '@/utils/Request'

// 排唛核价-核价
const getCraftBomCost = data => {
    return request({
        url: '/craftBom/cost/query',
        method: 'post',
        data
    })
}
// 排唛核价-核价审核
const getCraftBomCostConfirm = data => {
    return request({
        url: '/craftBom/cost/confirm/query',
        method: 'post',
        data
    })
}

// 排唛核价-核价审核(核价) - 详情
const getCraftBomCostItem = data => {
    return request({
        url: '/craftBom/cost/detail',
        method: 'post',
        data
    })
}

// 排唛核价-核价审核 - 通过
const acceptCraftBomCost = data => {
    return request({
        url: '/craftBom/cost/confirm/accept',
        method: 'post',
        data
    })
}

// 排唛核价-核价审核 - 保存
const saveCraftBomCost = data => {
    return request({
        url: '/craftBom/cost/update',
        method: 'post',
        data
    })
}

// 排唛核价-核价审核 - 提交
const submitCraftBomCost = data => {
    return request({
        url: '/craftBom/cost/submit',
        method: 'post',
        data
    })
}

export default {
    getCraftBomCost,
    getCraftBomCostConfirm,
    getCraftBomCostItem,
    acceptCraftBomCost,
    saveCraftBomCost,
    submitCraftBomCost
}
