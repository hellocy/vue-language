import request from '@/utils/Request'

// 面料管理-版料采购-版料采购单登记-获取主列表数据
const getList = (data) => {
    return request({
        url: '/material/register/query',
        method: 'post',
        data
    })
}

// 面料管理-版料采购--版料采购单登记-新增/修改保存
const save = (data) => {
    return request({
        url: '/material/register/update',
        method: 'post',
        data
    })
}

// 面料管理-版料采购--版料采购单登记-查询详情
const getDetail = (data) => {
    return request({
        url: '/materialDetail/register/query',
        method: 'post',
        data
    })
}

// 面料管理-版料采购-获取采购员
const getBuyer = (data) => {
    return request({
        url: '/material/assign/buyer/query',
        method: 'post',
        data
    })
}

export default {
    getList,
    save,
    getDetail,
    getBuyer
}
