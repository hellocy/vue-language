import request from '@/utils/Request'

// 报表管理 - 日报表 - 获取主列表数据
const getList = data => {
    return request({
        url: '/report/type/work/query',
        method: 'post',
        data
    })
}

export default {
    getList
}
