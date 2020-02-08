import request from '@/utils/Request'

// 报表管理 - 跟进表 - 获取主列表数据
const getList = data => {
    return request({
        url: '/report/sku/stage/query',
        method: 'post',
        data
    })
}

export default {
    getList
}
