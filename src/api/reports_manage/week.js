import request from '@/utils/Request'

// 报表管理 - 周报表 - 获取主列表数据
const getList = data => {
    return request({
        url: '/report/type/work/week/query',
        method: 'post',
        data
    })
}

export default {
    getList
}
