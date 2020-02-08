import dict from '@/api/common'
import login from '@/api/login'

// 规划管理
import planManage from '@/api/plan_manage'
// 面料管理
import fabricManage from '@/api/fabric_manage'
// 样品开发
import sampleDevelop from '@/api/sample_develop'
// 版房管理
import patternRoomManage from '@/api/pattern_room_manage'
// 样品管理
import sampleManage from '@/api/sample_manage'
// 采购协同模块
import productionProcess from '@/api/production_process'
// 采购协同
import purchaesCoordination from '@/api/purchaes_coordination'

// 排唛核价
import layoutPriceAudit from '@/api/layout_price_audit'

// 基础信息
import basicInfoManage from '@/api/basic_info_manage'

// 报表管理
import reportsManage from '@/api/reports_manage'

const INTERFACE = {
    dict,
    login,
    planManage,
    fabricManage,
    sampleDevelop,
    patternRoomManage,
    sampleManage,
    basicInfoManage,
    productionProcess,
    purchaesCoordination,
    layoutPriceAudit,
    reportsManage
}

export default INTERFACE
