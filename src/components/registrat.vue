<style lang="scss">
.supplier-informat {
    .el-icon-circle-plus-outline,
    .el-icon-remove-outline {
        font-size: 20px;
        color: #409eff;
    }
    .el-icon-circle-plus-outline {
        margin-right: 10px;
    }
    .el-table td,
    .el-table th {
        padding: 16px 0 0;
        .cell {
            padding-bottom: 10px;
        }
    }
    .star {
        color: #f56c6c;
        margin-left: 4px;
        vertical-align: middle;
    }
}
</style>

<template>
  <div class="supplier-informat">
    <div style="margin-top:10px;">
      <el-form :rules="model.rules"
               :model="model"
               ref="form"
               @validate="tableDataValidate">
        <!-- 表布局 -->
        <el-table style="width: 100%"
                  border
                  :data="model.tableData"
                  ref="mainTable">
          <el-table-column label="产品编码"
                           width="150"
                           :render-header="rendername">
            <template slot-scope="scope">
              <el-form-item :prop="'tableData.' + scope.$index + '.sku'"
                            :rules="[{ required: true, message: '产品编码不能为空'}]">
                <el-input v-model="scope.row.sku"
                          size="small"
                          maxlength="50"
                          @change="skuChange(scope.row, scope.$index)"
                          style="width:100%"></el-input>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column prop="sampleNum"
                           label="样品编码"
                           width="150">
            <template slot-scope="scope">
              <el-form-item :prop="'tableData.' + scope.$index + '.sampleNum'">
                <span>{{ scope.row.sampleNum }}</span>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column prop="remark"
                           label="数量"
                           width="80">
            <template slot-scope="scope">
              <el-form-item :prop="'tableData.' + scope.$index + '.num'">
                <span>{{ scope.row.num }}</span>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column label="提交结果">
            <template slot-scope="scope">
              <el-form-item :prop="'tableData.' + scope.$index + '.result'"
                            style="width:100%">
                <span>{{ scope.row.result }}</span>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column fixed="right"
                           width="100"
                           :render-header="renderProductId">
            <template slot-scope="scope">
              <span @click="addRow()"
                    class="el-icon-circle-plus-outline"></span>
              <span @click="deleteRow(scope.$index, model.tableData)"
                    size="small"
                    class="el-icon-remove-outline"></span>
            </template>
          </el-table-column>
        </el-table>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
    name: 'supplier-informat',
    props: {
        codeData: {
            type: Array
        },
        isConcatData: {
            type: Boolean
        }
    },
    data () {
        return {
            model: {
                rules: {
                    sku: [
                        {
                            required: true,
                            message: '请填写样品编码',
                            trigger: 'change'
                        },
                        { type: 'number', message: '样品编码必须为数字值' }
                    ]
                },
                tableData: []
            },
            fildtps: []
        }
    },
    watch: {
        codeData (val) {
            if (val) {
                const data = JSON.parse(JSON.stringify(val))
                if (this.isConcatData) {
                    const concatData = [...this.model.tableData, ...data]
                    this.model.tableData = concatData
                } else {
                    this.model.tableData = data
                }
                this.model.tableData.forEach(row => {
                    row.sku = row.sampleNum = row.sku
                    row.num = 1
                })
            }
        }
    },
    methods: {
        deleteRow (index, rows) {
            rows.splice(index, 1)
        },
        // 增加
        addRow () {
            this.model.tableData.push({
                sampleNum: '',
                sku: '',
                num: 1,
                result: ''
            })
        },
        async skuChange (row, index) {
            const tableData = this.model.tableData
            const isHas = await tableData.some((item, i) => {
                if (index !== i) {
                    return item.sku === row.sku
                }
            })
            if (isHas) {
                this.$message({
                    type: 'error',
                    message: row.sku + '产品编码已存在，请重新输入'
                })
                row.sku = ''
                row.sampleNum = ''
            } else {
                row.sampleNum = row.sku
            }
        },
        submit () {
            return new Promise((resolve, reject) => {
                this.$refs['form'].validate(valid => {
                    if (valid) {
                        this.$emit('confirm', this.model.tableData)
                        resolve()
                    } else {
                        this.$emit('confirm', this.model.tableData)
                        return false
                    }
                })
            })
        },
        renderProductId () {
            return (
                <span
                    onClick={this.addRow.bind(this)}
                    class="el-icon-circle-plus-outline"
                ></span>
            )
        },
        rendername () {
            return (
                <div>
          产品编码<span class="star">*</span>
                </div>
            )
        },
        tableDataValidate (key, status) {
            this.$emit('validateStatus', status)
        }
    }
}
</script>
