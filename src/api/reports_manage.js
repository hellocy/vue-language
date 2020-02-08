// 报表管理-跟进表
import followup from '@/api/reports_manage/followup'

// 报表管理-车版师绩效表
import performanceCheban from '@/api/reports_manage/performance_cheban'

// 报表管理-纸样师绩效表
import performanceZhiyang from '@/api/reports_manage/performance_zhiyang'

// 报表管理-工作表-工作表(通用)
import work from '@/api/reports_manage/work'

// 报表管理-工作表-日报表
import day from '@/api/reports_manage/day'

// 报表管理-工作表-周报表
import week from '@/api/reports_manage/week'

// 报表管理-工作表-月报表
import month from '@/api/reports_manage/month'

// 报表管理-工作表-总时效表
import total from '@/api/reports_manage/total'

export default {
    followup,
    performanceCheban,
    performanceZhiyang,
    work,
    day,
    week,
    month,
    total
}
