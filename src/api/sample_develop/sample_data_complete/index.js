import request from '@/utils/Request'

// 样品开发-样品资料完善- 获取主列表数据
const getList = (data) => {
    return request({
        url: '/sample/develop/query',
        method: 'post',
        data
    })
}

// 样品开发-样品资料完善- 获取PDM分类
const getPdmCategory = (data) => {
    return request({
        url: '/pdm/base/category/query',
        method: 'post',
        data
    })
}

// 样品开发-样品资料完善- 根据PDM分类获取PLM分类
const getPlmCategory = (data) => {
    return request({
        url: '/sample/develop/pdm/plm/realtion/query',
        method: 'post',
        data
    })
}

// 样品开发-样品资料完善- 获取PDM尺寸列表
const getPdmSizeData = (data) => {
    return request({
        url: '/pdm/base/size/query',
        method: 'post',
        data
    })
}

// 样品开发-样品资料完善- 新增保存
const add = (data) => {
    return request({
        url: '/sample/develop/add',
        method: 'post',
        data
    })
}

// 样品开发-样品资料完善- 新增提交
const submit = (data) => {
    return request({
        url: '/sample/develop/submit',
        method: 'post',
        data
    })
}

// 样品开发-样品资料完善- 编辑保存
const edit = (data) => {
    return request({
        url: '/sample/develop/update',
        method: 'post',
        data
    })
}

// 样品开发-样品资料完善- 查询详情
const getDetail = (data) => {
    return request({
        url: '/sample/develop/edit',
        method: 'post',
        data
    })
}

// 样品开发-样品资料完善- 开放网站搜索
const getCdpWeb = (data) => {
    return request({
        url: '/cdp/web/query',
        method: 'post',
        data
    })
}

// 样品开发-样品资料完善- PDM产品品牌
const getBrand = (data) => {
    return request({
        url: '/pdm/base/product/brand/query',
        method: 'post',
        data
    })
}

// 样品开发-样品资料完善- PDM系列列表查询
const getSerious = (data) => {
    return request({
        url: '/pdm/base/series/query',
        method: 'post',
        data
    })
}

// 样品开发-样品资料完善- PDM产品标签组
const getLabelGroups = (data) => {
    return request({
        url: '/pdm/base/label/group/query',
        method: 'post',
        data
    })
}

// 样品开发-样品资料完善- PDM产品标签
const getLabels = (data) => {
    return request({
        url: '/pdm/base/label/query',
        method: 'post',
        data
    })
}

// 样品开发-样品资料完善- PDM产品标签明细
const getLabelsDetail = (data) => {
    return request({
        url: '/pdm/base/label/edit',
        method: 'post',
        data
    })
}

// 样品开发-样品资料完善- 获取币种
const getCurrency = (data) => {
    return request({
        url: '/cdp/currency/query',
        method: 'post',
        data
    })
}

// 样品开发-样品资料完善- 获取汇率
const getExchange = (data) => {
    return request({
        url: '/cdp/exchange/rate/query',
        method: 'post',
        data
    })
}

// 样品开发-样品资料完善- 获取仓库
const getWarehouse = (data) => {
    return request({
        url: '/cdp/warehouse/query',
        method: 'post',
        data
    })
}

// 样品开发-样品资料完善- 获取APM设计师
const getApmDesigners = (data) => {
    return request({
        url: '/sample/develop/base/apm/query',
        method: 'post',
        data
    })
}

// 样品开发-样品资料完善- 获取APM设计师
const getPm = (data) => {
    return request({
        url: '/sample/develop/base/pm/query',
        method: 'post',
        data
    })
}

// 样品开发-样品资料完善- 获取销售加价规则
const getSalesPrice = (data) => {
    return request({
        url: '/pdm/base/price/rule/query',
        method: 'post',
        data
    })
}

// 样品开发-样品资料完善- 删除
const drop = (data) => {
    return request({
        url: '/sample/develop/delete',
        method: 'post',
        data
    })
}

// 样品开发-样品资料完善- 终止开发
const stopDevelop = (data) => {
    return request({
        url: '/sample/develop/pdm/termination/repulse',
        method: 'post',
        data
    })
}

// 样品开发-样品资料完善- 送编辑
const sendEdit = (data) => {
    return request({
        url: '/sample/develop/pdm/send/add',
        method: 'post',
        data
    })
}

// 样品开发-样品资料完善- 删除图片
const deleteMainImage = (data) => {
    return request({
        url: '/sample/develop/image/delete',
        method: 'post',
        data
    })
}

// 样品开发-样品资料完善- 删除规格图片
const deleteSpecImage = (data) => {
    return request({
        url: '/sample/develop/product/image/delete',
        method: 'post',
        data
    })
}

// 样品开发-样品资料完善- 删除附件
const deleteFiles = (data) => {
    return request({
        url: '/sample/develop/file/delete',
        method: 'post',
        data
    })
}

// 样品开发-样品资料完善- 检查品名是否重复
const checkExist = (data) => {
    return request({
        url: '/sample/develop/draft/check/name/query',
        method: 'post',
        data
    })
}

// 样品开发-样品资料管理- 获取PDM颜色
const getPdmColor = (data) => {
    return request({
        url: '/pdm/color/query',
        method: 'post',
        data
    })
}

// 样品开发-样品资料管理- 复制同款时获取初始数据
const getCopyData = (data) => {
    return request({
        url: '/sample/develop/copy/edit',
        method: 'post',
        data
    })
}

// 样品开发-样品资料管理- 颜色和尺寸改变时，根据样品编码，获取采购价、币种和销售价
const getColorSizePrice = (data) => {
    return request({
        url: '/sample/develop/copy/samplecode/query',
        method: 'post',
        data
    })
}

// 样品开发-样品资料管理- 复制同款时的保存
const saveCopySameStyleData = (data) => {
    return request({
        url: '/sample/develop/copy/add',
        method: 'post',
        data
    })
}

// 样品开发-样品资料管理- 复制同款时的提交
const submitCopySameStyleData = (data) => {
    return request({
        url: '/sample/develop/copy/submit',
        method: 'post',
        data
    })
}

export default {
    getList,
    getPdmCategory,
    getPlmCategory,
    getPdmSizeData,
    add,
    edit,
    submit,
    getDetail,
    getCdpWeb,
    getSerious,
    getBrand,
    getLabelGroups,
    getLabels,
    getLabelsDetail,
    getCurrency,
    getExchange,
    getWarehouse,
    getApmDesigners,
    getPm,
    getSalesPrice,
    drop,
    stopDevelop,
    sendEdit,
    deleteMainImage,
    deleteSpecImage,
    deleteFiles,
    checkExist,
    getPdmColor,
    getCopyData,
    getColorSizePrice,
    saveCopySameStyleData,
    submitCopySameStyleData
}
