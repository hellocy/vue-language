// 样品管理-出入库管理-出入库登记
import storeRecord from '@/api/sample_manage/warehouse_manage/store_record'
// 样品管理-出入库管理-借还样申请
import borrowReturnApplication from '@/api/sample_manage/warehouse_manage/borrow_return_application'
// 样品管理-出入库管理-清仓判断
import clearStoreJudgement from '@/api/sample_manage/warehouse_manage/clear_store_judgement'

// 样品管理-样品库存
import sampleStorage from '@/api/sample_manage/sample_storage'

export default {
    warehouse_manage: {
        storeRecord,
        borrowReturnApplication,
        clearStoreJudgement
    },    
    sampleStorage
}
