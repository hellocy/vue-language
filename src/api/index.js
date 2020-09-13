import dict from '@/api/common'

// 登录
import login from '@/api/login'

// 系统管理
import systemManage from '@/api/system_manage'
// 审核管理
import auditManage from '@/api/audit_manage'
// 推荐企业等管理
import companyManage from '@/api/recomand/company'
// 广告管理
import adv from '@/api/adv/adv'

const INTERFACE = {
    dict,
    login,
    systemManage,
    auditManage,
    companyManage,
    adv
}

export default INTERFACE
