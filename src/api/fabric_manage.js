// 面料管理-面料供应商管理-面料编码（公共）
import fabricCommon from '@/api/fabric_manage/common'

// 面料管理-面料供应商管理-面料及工艺供应商档案
import supplier from '@/api/fabric_manage/supplier_manage/supplier'

// 面料管理-面料基础档案-面料基础档案
import basic from '@/api/fabric_manage/basic_archives/basic'

// 面料管理-面料开发-面料开发申请
import developApply from '@/api/fabric_manage/fabric_develop/developApply'
// 面料管理-面料开发-面料开发接收
import accept from '@/api/fabric_manage/fabric_develop/accept'
// 面料管理-面料开发-面料开发完成登记
import developComplete from '@/api/fabric_manage/fabric_develop/developComplete'
// 面料管理-面料开发-面料效果确定
import effectConfirm from '@/api/fabric_manage/fabric_develop/effectConfirm'

// 面料管理-版料采购-版料采购申请
import purchasesApplication from '@/api/fabric_manage/material_purchases/purchases_application'
// 面料管理-版料采购-版料采购任务分配
import taskAsign from '@/api/fabric_manage/material_purchases/task_asign'
// 面料管理-版料采购-版料采购单登记
import orderRecord from '@/api/fabric_manage/material_purchases/order_record'
// 面料管理-版料采购-入库登记
import inStoreRecord from '@/api/fabric_manage/material_purchases/in_store_record'
// 面料管理-版料出库-出库领用申请
import recipientsApplication from '@/api/fabric_manage/material_out_store/recipients_application'
// 面料管理-版料出库-出库登记
import outStoreRecord from '@/api/fabric_manage/material_out_store/out_store_record'
// 面料管理-版料采购-版料库存管理
import storeManage from '@/api/fabric_manage/material_store_manage/store_manage'
// 面料管理-版料采购-库存异常申请管理
import exceptionApplicationManagement from '@/api/fabric_manage/material_store_manage/exception_application_management'
// 面料管理-版料采购-库存异常申请审批
import exceptionApplicationAudit from '@/api/fabric_manage/material_store_manage/exception_application_audit'

// 面料管理-二次工艺采购-二次工艺基础档案
import basicArchives from '@/api/fabric_manage/secondary_craft_purchases/basic_archives'
// 面料管理-二次工艺采购-二次工艺申请
import application from '@/api/fabric_manage/secondary_craft_purchases/application'
// 面料管理-二次工艺采购-二次工艺接收
import resive from '@/api/fabric_manage/secondary_craft_purchases/resive'
// 面料管理-二次工艺采购-二次工艺结果登记
import resultRecord from '@/api/fabric_manage/secondary_craft_purchases/result_record'
import secondaryCraftEffectConfirm from '@/api/fabric_manage/secondary_craft_purchases/effect_confirm'

export default {
    fabricCommon,
    supplierManage: {
        supplier
    },
    basicArchives: {
        basic
    },
    fabricDevelop: {
        developApply,
        accept,
        developComplete,
        effectConfirm
    },
    materialPurchases: {
        purchasesApplication,
        taskAsign,
        orderRecord,
        inStoreRecord,
        recipientsApplication,
        outStoreRecord,
        storeManage,
        exceptionApplicationManagement,
        exceptionApplicationAudit
    },
    secondaryCraftPurchases: {
        basicArchives,
        application,
        resive,
        resultRecord,
        secondaryCraftEffectConfirm
    }
}
