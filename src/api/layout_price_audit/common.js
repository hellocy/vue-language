import request from '@/utils/Request'
// 排唛核价-驳回
const reject = data => {
    return request({
        url: '/craftBom/reject',
        method: 'post',
        data
    })
}
// 排唛核价-sku查询
const getCraftBomSku = data => {
    return request({
        url: '/craftBom/sku/query',
        method: 'post',
        data
    })
}
// 排唛核价-日志
const getCraftBomlogs = data => {
    return request({
        url: '/craftBom/log/query',
        method: 'post',
        data
    })
}

// 排唛核价-工艺版本
const getCarftVersion = data => {
    return request({
        url: '/craftBom/craft/detail',
        method: 'post',
        data
    })
}
// 排唛核价-核价版本
const getBomVersion = data => {
    return request({
        url: '/craftBom/detail',
        method: 'post',
        data
    })
}
// 排唛核价-纸样变更 - 历史版本
const getPatterVersion = data => {
    return request({
        url: '/bom/pattern/historyversion/query',
        method: 'post',
        data
    })
}
const common = {
    reject,
    getCraftBomSku,
    getCarftVersion,
    getBomVersion,
    getPatterVersion,
    getCraftBomlogs
}
export default common
