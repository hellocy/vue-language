// 版房管理-打版提交-打版提交
import patternMakingSubmit from '@/api/pattern_room_manage/pattern_making_submit'

// 版房管理-版房打版-纸样任务分派
import paperSampleTaskAsign from '@/api/pattern_room_manage/pattern_room_making/paper_sample_task_asign'
// 版房管理-版房打版-纸样设计
import paperSampleDesign from '@/api/pattern_room_manage/pattern_room_making/paper_sample_design'
// 版房管理-版房打版-裁版
import sewingQualityControl from '@/api/pattern_room_manage/pattern_room_making/sewing_quality_control'
// 版房管理-版房打版-车缝质检
import tailoredPattern from '@/api/pattern_room_manage/pattern_room_making/tailored_pattern'
// 版房管理-版房打版-审版
import checkPattern from '@/api/pattern_room_manage/pattern_room_making/check_pattern'
// 版房管理-版房打版-纸样确认
import paperSampleConfirm from '@/api/pattern_room_manage/pattern_room_making/paper_sample_confirm'
// 版房管理-版房打版-纸样组长审核
import papersampleTeamLeaderAudit from '@/api/pattern_room_manage/pattern_room_making/paper_sample_team_leader_audit'

// 版房管理-核价-核价信息确认
import pricingInfoConfirm from '@/api/pattern_room_manage/pricing/pricing_info_confirm'
// 版房管理-核价-排料
import fabricPlan from '@/api/pattern_room_manage/pricing/fabric_plan'
// 版房管理-核价-核价
import pricing from '@/api/pattern_room_manage/pricing/pricing'
// 版房管理-核价-核价审核
import pricingAudit from '@/api/pattern_room_manage/pricing/pricing_audit'

// 版房管理-工艺-工艺
import craft from '@/api/pattern_room_manage/pricing/craft'

// 版房管理-退回助理-退回助理（版房）
import sendbackRoom from '@/api/pattern_room_manage/sendback/room'
// 版房管理-退回助理-退回助理（助理）
import sendbackAssistant from '@/api/pattern_room_manage/sendback/assistant'

// 版房管理-二次工艺-版房
import secondaryCraftRoom from '@/api/pattern_room_manage/secondary_craft/room'
// 版房管理-二次工艺-助理
import secondaryCraftAssistant from '@/api/pattern_room_manage/secondary_craft/assistant'

// 版房管理-复版审核-复版审核
import duplicationPatternAudit from '@/api/pattern_room_manage/duplication_pattern_audit'

// 版房管理-打版作废-打版作废申请
import application from '@/api/pattern_room_manage/pattern_making_destroy/application'
// 版房管理-打版作废-打版作废审核
import audit from '@/api/pattern_room_manage/pattern_making_destroy/audit'

// 版房公共用户数据接口
import common from '@/api/pattern_room_manage/common'

export default {
    common,
    patternMakingSubmit,
    patternRoomMaking: {
        paperSampleTaskAsign,
        paperSampleDesign,
        sewingQualityControl,
        tailoredPattern,
        checkPattern,
        paperSampleConfirm,
        papersampleTeamLeaderAudit
    },
    pricing: {
        pricingInfoConfirm,
        fabricPlan,
        pricing,
        pricingAudit,
        craft
    },
    sendback: {
        sendbackRoom,
        sendbackAssistant
    },
    secondary_craft: {
        secondaryCraftRoom,
        secondaryCraftAssistant
    },
    duplicationPatternAudit,
    pattern_making_destroy: {
        application,
        audit
    }
}
