<style lang="scss" scoped>
.data-table-box {
    position: relative;
}
.subwin-wrapper {
    position: absolute;
    right: 0;
    top: 50px;
    bottom: 0;
    background: #fff;
    z-index: 2000;
    box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.3);
    transition: all 0.5s ease-in-out;
    width: 85vw;
    .subwin-header {
        height: 45px;
        line-height: 45px;
        background: #f2f6fc;
        border-bottom: 1px solid #e4e7ed;
        text-align: center;
        font-size: 24px;
        .subwin-header-title {
            text-align: center;
            font-size: 24px;
        }
    }
    .subwin-body {
        overflow: auto;
        .subwin-content {
            height: calc(100% - 91px);
        }
        .subwin-close-btn {
            position: absolute;
            left: -30px;
            top: 50%;
            width: 50px;
            height: 50px;
            background: #fff;
            border-radius: 50%;
            cursor: pointer;
            line-height: 34px;
            text-align: center;
            font-size: 26px;
            z-index: -1;
            .el-icon-circle-close {
                position: absolute;
                top: 11px;
                left: 4px;
                color: #ccc;
                transition: all 0.1s;
                &:hover {
                    color: #888;
                }
            }
        }
        &::-webkit-scrollbar {
            width: 4px;
            background-color: #f5f5f5;
        }
        &::-webkit-scrollbar-thumb {
            background-color: #a1a2a5;
        }
        &::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            background-color: #f5f5f5;
        }
    }
}
.opt-box {
    position: absolute;
    width: 33px;
    height: 15px;
    border: 1px solid #ccc;
    top: -18px;
    right: 0;
    line-height: 17px;
    cursor: pointer;
    transition: all 0.1s;
}
.opt-box:hover {
    color: #409eff;
    border-color: #409eff;
}
.business-columns-all {
    padding: 10px;
    background: #f5f7fa;
}
.business-columns-box {
    overflow: auto;
    height: 300px;
    padding: 10px;
}
.fields-box {
    display: inline-block;
    width: 235px;
    border: 1px solid #ccc;
    border-radius: 3px;
    vertical-align: middle;
}
.field-item {
    display: block !important;
    margin-bottom: 5px;
}
.middle-opt-box {
    display: inline-block;
    width: 50px;
    margin: 0 10px;
    text-align: center;
}
.middle-opt-box button:last-child {
    margin-left: 0;
    margin-top: 10px;
}
.tip {
    font-size: 12px;
    color: #aaa;
    padding-bottom: 3px;
}
</style>
<template>
  <div class="data-table-box">
    <div class="opt-box"
         @click="onColumnSettingClick">
      <i class="el-icon-s-grid"></i>
      <i class="el-icon-arrow-down"></i>
    </div>
    <el-table v-if="isReRender"
              :data="data"
              :height="height"
              border
              stripe
              :row-class-name="tableRowClassName"
              style="width: 100%;"
              @selection-change="onSelectionChanged"
              ref="mainTable">
      <el-table-column v-if="localColumns.isIndex"
                       fixed
                       type="index"
                       label="序号"
                       align="center"></el-table-column>
      <el-table-column v-if="localColumns.isSelection"
                       fixed="left"
                       type="selection"
                       :selectable="selectable"
                       width="55"></el-table-column>
      <el-table-column v-if="localColumns.isOperation"
                       fixed
                       label="操作"
                       width="100">
        <template slot-scope="scope">
          <slot name="operation"
                :data="{row: scope.row}"></slot>
        </template>
      </el-table-column>
      <el-table-column v-for="(item, index) in localColumns.businessFields"
                       v-if="item.visible"
                       :key="index"
                       :prop="item.prop"
                       :label="item.label"
                       :width="item.width"
                       align="center">
        <template slot-scope="scope">
          <slot name="business"
                :data="{row: scope.row, column: item.prop, $index: scope.$index}"></slot>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="设置表格字段"
               width="280px"
               :close-on-click-modal="false"
               :visible.sync="fieldSettingBoxVisible">
      <p class="tip">Tip: 可拖动字段排序</p>
      <div class="fields-box all">
        <div class="business-columns-all">

          <el-checkbox :indeterminate="isIndeterminate"
                       v-model="checkAll"
                       @change="handleCheckAllChange">全选</el-checkbox>
        </div>
        <div class="business-columns-box">
          <el-checkbox-group v-model="userSelectedColumns"
                             @change="onColumnChange">
            <draggable v-model="localColumns.businessFields"
                       @end="onSort">
              <el-checkbox v-for="(column, index) in localColumns.businessFields"
                           class="field-item"
                           :label="column.prop"
                           :key="index">{{column.label}}</el-checkbox>
            </draggable>
          </el-checkbox-group>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import {
    localStore
} from '../utils'
export default {
    components: {
        draggable
    },
    props: {
        columns: {
            type: Object
        },
        data: {
            type: Array
        },
        height: {
            type: Number
        },
        tableRowClassName: {
            type: Function
        },
        selectable: {
            type: Function
        }
    },
    data () {
        return {
            isReRender: true,
            isIndeterminate: false,
            checkAll: true,
            fieldSettingBoxVisible: false,
            userSelectedColumns: []
        }
    },
    computed: {
        localColumns: {
            get: function () {
                return this.columns
            },
            set: function (newValue) {

            }
        },
        path () {
            return this.$route.path
        },
        selection () {
            return this.$refs.mainTable.selection
        }
    },
    mounted () {
        this.userSelectedColumns = this.localColumns.businessFields.map(item => item.prop)
        let _localtableColumns = localStore('tableColumns')
        if (!_localtableColumns) {
            return
        }
        let pageColumnObj = _localtableColumns[this.path]
        if (pageColumnObj) {
            this.localColumns.isIndex = pageColumnObj.isIndex
            this.localColumns.businessFields = pageColumnObj.businessFields
            this.localColumns.businessFields = []
            this.userSelectedColumns = []

            pageColumnObj.businessFields.forEach(item => {
                this.localColumns.businessFields.push(item)
                item.visible && this.userSelectedColumns.push(item.prop)
            })
        }
    },
    methods: {
    // 表格行勾选时
        onSelectionChanged () {
            this.$emit('selection-change', this.$refs.mainTable.selection)
        },
        onColumnSettingClick () {
            this.fieldSettingBoxVisible = true
        },
        // 全选/全反选时
        handleCheckAllChange (val) {
            this.userSelectedColumns = val ? this.localColumns.businessFields.map(item => item.prop) : []
            this.isIndeterminate = false
            this.reRenderTable()
        },
        // 勾选/反选时
        onColumnChange (val) {
            let checkedCount = val.length
            this.checkAll = checkedCount === this.localColumns.businessFields.length
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.localColumns.businessFields.length
            this.reRenderTable()
        },
        reRenderTable () {
            this.localColumns.businessFields.forEach(item => {
                let fieldName = item.prop
                if (this.userSelectedColumns.includes(fieldName)) {
                    item.visible = true
                } else {
                    item.visible = false
                }
            })
            this.isReRender = false
            this.$nextTick(item => {
                this.isReRender = true
            })
            this.localSave()
        },
        onSort (val) {
            this.localSave()
        },
        localSave () {
            let obj = localStore('tableColumns')
            if (!obj) {
                obj = {}
            }
            obj[this.path] = this.localColumns
            localStore('tableColumns', obj)
        }
    }
}
</script>
