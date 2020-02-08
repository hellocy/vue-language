import request from '@/utils/Request'

// 样品开发-样品资料管理（也叫设计稿上传）- 获取主列表数据
const getList = data => {
    return request({
        url: '/sample/develop/query',
        method: 'post',
        data
    })
}

// 样品开发-样品资料管理（初稿）- 新增提交
const submit = data => {
    return request({
        url: '/sample/develop/draft/submit',
        method: 'post',
        data
    })
}

// 样品开发-样品资料管理（初稿）- 新增保存
const add = data => {
    return request({
        url: '/sample/develop/draft/update',
        method: 'post',
        data
    })
}

// 样品开发-样品资料管理（初稿）- 编辑保存
const edit = data => {
    return request({
        url: '/sample/develop/draft/update',
        method: 'post',
        data
    })
}

// 样品开发-样品资料管理（初稿）- 查询详情
const getDetail = data => {
    return request({
        url: '/sample/develop/edit',
        method: 'post',
        data
    })
}
// 样品开发-样品资料管理（初稿）- 获取PDM分类
const getPdmCategory = data => {
    return request({
        url: '/pdm/base/category/query',
        method: 'post',
        data
    })
}

// 样品开发-样品资料管理（初稿）- 根据PDM分类获取PLM分类
const getPlmCategory = data => {
    return request({
        url: '/sample/develop/pdm/plm/realtion/query',
        method: 'post',
        data
    })
}

// 样品开发-样品资料管理（初稿）- 获取PDM尺寸列表
const getPdmSizeData = data => {
    return request({
        url: '/pdm/base/size/query',
        method: 'post',
        data
    })
}

// 样品开发-样品资料管理（初稿）- 获取APM设计师
const getApmDesigners = (data) => {
    return request({
        url: '/sample/develop/base/apm/query',
        method: 'post',
        data
    })
}

// 样品开发-样品资料管理（初稿）- 获取APM设计师
const getPm = data => {
    return request({
        url: '/sample/develop/base/pm/query',
        method: 'post',
        data
    })
}

// 样品开发-样品资料管理（初稿）- 删除规格
const deleteSpec = data => {
    return request({
        url: '/sample/develop/product/delete',
        method: 'post',
        data
    })
}

// 样品开发-样品资料管理（初稿）- 删除
const drop = data => {
    return request({
        url: '/sample/develop/delete',
        method: 'post',
        data
    })
}

// 样品开发-样品资料管理（初稿）- 获取销售加价规则
const getSalsePrice = (data) => {
    return request({
        url: '/pdm/base/price/rule/query',
        method: 'post',
        data
    })
}

// 样品开发-样品资料管理（初稿）- 终止开发
const stopDevelop = data => {
    return request({
        url: '/sample/develop/pdm/termination/repulse',
        method: 'post',
        data
    })
}

// 样品开发-样品资料管理（初稿）- 删除图片
const deleteMainImage = data => {
    return request({
        url: '/sample/develop/image/delete',
        method: 'post',
        data
    })
}

// 样品开发-样品资料管理（初稿）- 删除规格图片
const deleteSpecImage = data => {
    return request({
        url: '/sample/develop/product/image/delete',
        method: 'post',
        data
    })
}

// 样品开发-样品资料管理- 检查品名是否重复
const checkExist = data => {
    return request({
        url: '/sample/develop/draft/check/name/query',
        method: 'post',
        data
    })
}

// 样品开发-样品资料管理- 获取PDM颜色
const getPdmColor = data => {
    return request({
        url: '/pdm/color/query',
        method: 'post',
        data
    })
}

// 样品开发-样品资料管理- 打版提交时获取SKU
const getSkuData = data => {
    return request({
        url: '/sample/process/sku/query',
        method: 'post',
        data
    })
}

// 样品开发-样品资料管理- 获取日志状态
const getLogStatus = data => {
    return request({
        url: '/sample/develop/status/query',
        method: 'post',
        data
    })
}

// 样品开发-样品资料管理- 日志
const getLogData = data => {
    return request({
        url: '/sample/process/log/query',
        method: 'post',
        data
    })
}

// 样品开发-样品资料管理- 出库领用申请
const stockOutSubmit = data => {
    return request({
        url: '/material/stockOut/sample/submit',
        method: 'post',
        data
    })
}

// 样品开发-样品资料管理- 打版提交
const patternSubmit = data => {
    return request({
        url: '/proofing/sample/submit',
        method: 'post',
        data
    })
}

// 样品开发-样品资料管理- 打版提交查看时，先获取sku和id
const getPatternSkuId = data => {
    return request({
        url: '/sample/proofing/sku/query',
        method: 'post',
        data
    })
}

// 样品开发-样品资料管理- 出库领用申请查看时，先获取sku和id
const getRecipientId = data => {
    return request({
        url: '/sample/stock/out/query',
        method: 'post',
        data
    })
}

// 样品开发-样品资料管理- 出库领用申请查看时，根据ID，获取详情
const getRecipientDetail = data => {
    return request({
        url: '/material/stockOut/byId/query',
        method: 'post',
        data
    })
}

export default {
    getList,
    submit,
    add,
    edit,
    getDetail,
    getPdmCategory,
    getPlmCategory,
    getPdmSizeData,
    getApmDesigners,
    getPm,
    deleteSpec,
    drop,
    getSalsePrice,
    stopDevelop,
    deleteMainImage,
    deleteSpecImage,
    getPdmColor,
    checkExist,
    getSkuData,
    getLogStatus,
    getLogData,
    patternSubmit,
    stockOutSubmit,
    getPatternSkuId,
    getRecipientId,
    getRecipientDetail
}
