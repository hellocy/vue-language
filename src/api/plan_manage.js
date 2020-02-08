// 规划管理-品类规划-管理
import manage from '@/api/plan_manage/category_plan/manage'
// 规划管理-品类规划-审核
import audit from '@/api/plan_manage/category_plan/audit'
// 规划管理-品类规划-汇总
import gather from '@/api/plan_manage/category_plan/gather'

// 规划管理-面料企划-面料企划管理
import fabricPlan from '@/api/plan_manage/fabric_plan'

// 规划管理-任务分解-区域
import area from '@/api/plan_manage/task_split/area'
// 规划管理-任务分解-品类
import category from '@/api/plan_manage/task_split/category'

export default {
    categoryPlan: {
        manage,
        audit,
        gather
    },
    fabricPlan,
    taskSplit: {
        area,
        category
    }
}
