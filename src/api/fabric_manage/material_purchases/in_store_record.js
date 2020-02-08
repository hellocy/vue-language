import request from '@/utils/Request'

// 面料管理-版料采购-入库登记-获取主列表数据
const getList = (data) => {
    return request({
        url: '/material/stockIn/query',
        method: 'post',
        data
    })
}

// 面料管理-版料采购-提交入库
const update = (data) => {
    return request({
        url: '/material/stockIn/update',
        method: 'post',
        data
    })
}

export default {
    getList,
    update
}
