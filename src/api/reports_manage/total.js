import request from '@/utils/Request'

// 报表管理 - 总时效表 - 获取主列表数据
const getList = data => {
    return request({
        url: '/report/group/user/time/query',
        method: 'post',
        data,
        timeout: 1000 * 60 * 10
    })
}

export default {
    getList
}
