<template>
    <div :class="prfClass">
        <div :class="[prfClass + '-wrap']">
            <breadcrumb :breadcrumb_list="breadcrumbList"></breadcrumb>
            <div class="main-content-box">
                <div class="search-wrap">
                    <el-form :inline="true" class="demo-form-inline">
                        <el-form-item label="企业名称">
                            <el-input
                                v-model.trim="searchForm.company_name"
                                placeholder="企业名称"
                                size="small"
                                style="width: 130px;"
                            ></el-input>
                        </el-form-item>
                        <el-form-item style="margin-left: 20px;">
                            <el-button
                                type="primary"
                                size="mini"
                                icon="el-icon-search"
                                @click="onSearch"
                            >{{$t('localization.search')}}</el-button>
                            <el-button
                                type="primary"
                                size="mini"
                                icon="el-icon-delete"
                                @click="onClear"
                            >{{$t('localization.reset')}}</el-button>
                            <el-button
                                style="margin-left: 20px;"
                                type="primary"
                                size="mini"
                                icon="el-icon-plus"
                                @click="newCompany"
                            >创建新企业</el-button>
                        </el-form-item>
                    </el-form>
                </div>
                <el-table
                    :data="tableData"
                    :height="tableHeight"
                    border
                    stripe
                    :empty-text="$t('localization.noData')"
                    :class="prfClass"
                    style="width: 100%;"
                >
                    <el-table-column
                        type="index"
                        :label="$t('localization.index')"
                        align="center"
                        width="80"
                    ></el-table-column>
                    <el-table-column prop="company_name" label="公司名称"></el-table-column>
                    <el-table-column prop="company_people" label="联系人"></el-table-column>
                    <el-table-column prop="company_phone" label="联系电话"></el-table-column>
                    <el-table-column
                        prop="address"
                        label="公司地址"
                    ></el-table-column>
                    <el-table-column
                        prop="createtime"
                        label="创建时间"
                    ></el-table-column>
                    <el-table-column
                        fixed="right"
                        :label="$t('localization.operation')"
                        width="160"
                    >
                        <template slot-scope="scope">
                            <i class="Company-opt-icon el-icon-edit" title="编辑" @click="edit(scope.$index, scope.row)"></i>
                            <i class="Company-opt-icon el-icon-delete" title="删除" @click="deleteCompany(scope.$index, scope.row)"></i>
                            <!-- <i class="Company-opt-icon el-icon-edit-outline" title="修改密码" @click="changePwd(scope.$index, scope.row)"></i> -->
                            <el-switch
                                v-model="scope.row.enable"
                                active-color="#13ce66"
                                inactive-color="#ff4949"
                                @change="onActiveChanged(scope.row)">
                            </el-switch>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="page">
                    <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="tablePage.currentPage"
                        :page-size="tablePage.per_page"
                        layout="total, prev, pager, next, jumper"
                        :total="tablePage.total"
                    ></el-pagination>
                </div>
            </div>
        </div>

        <!-- 创建新企业 -->
        <el-dialog
            :title="newEditTitle"
            :visible.sync="isNewCompanyVisible"
            width="500px"
            :close-on-click-moda="false"
            @close="onNewCompanyWinClose"
        >
            <el-form ref="newCompanyForm" :model="newCompanyForm" label-width="80px">
                <el-form-item label="企业名称">
                    <el-input class="new-Company-form-item" v-model="newCompanyForm.company_name"></el-input>
                </el-form-item>
                <el-form-item label="联系人">
                    <el-input class="new-Company-form-item" v-model="newCompanyForm.company_people"></el-input>
                </el-form-item>
                <el-form-item label="联系电话">
                    <el-input class="new-Company-form-item" v-model="newCompanyForm.contact_phone"></el-input>
                </el-form-item>
                <el-form-item label="公司地址">
                    <el-input class="new-Company-form-item" v-model="newCompanyForm.address"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button size="mini" @click="isNewCompanyVisible = false">取 消</el-button>
                <el-button size="mini" type="primary" @click="newCompanyConfirm">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import breadcrumb from '../../../components/breadcrumb'
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer/src/component.vue'
export default {
    components: {
        breadcrumb,
        Viewer
    },
    props: {
        depart: {
            type: String
        }
    },
    data() {
        return {
            prfClass: 'rp-forecast-customer',
            isDetailVisible: false,
            isNewCompanyVisible: false,
            newCompanyForm: {},
            searchForm: {
                company_name: ''
            },
            tableData: [],
            detailData: [
                {
                    goodsCode: '438698701',
                    goodsName: '438698701',
                    forecastkAmount: 1,
                    realBackAmount: 0,
                    nineAmount: 0,
                    badAmount: 0,
                    checkReason: '缺件',
                    confirmTime: '2019-04-30 10:45:02'
                }
            ],
            traceData: {
                traceTabActiveName: 'all',
                status: '',
                latest: {
                    id: '',
                    statusText: '',
                    from: '',
                    to: '',
                    datetime: '',
                    trayStatus: ''
                },
                from: [],
                to: [],
                all: 0,
                lost: 0,
                carrying: 0,
                arrived: 0,
                fail: 0,
                exception: 0,
                success: 0,
                back: 0
            },
            tableHeight: 300,
            tablePage: {
                offset: 1, // 当前页
                limit: 20, // 每页数量
                total: 0 // 总数量
            },
            detail_tablePage: {
                offset: 1, // 当前页
                limit: 20, // 每页数量
                total: 0 // 总数量
            },
            newEditTitle: '创建新企业',
            saveType: 1,
            rowData: {},
            newPwd: '',
            reNewPwd: ''
        }
    },
    computed: {
        breadcrumbList() {
            return [
                {
                    name: '推荐企业',
                    url: ''
                },
                {
                    name: '推荐企业',
                    url: ''
                }
            ]
        }
    },
    created: function() {},
    mounted: function() {
        // this.initTable() // 加载列表数据
        setTimeout(() => {
            let navH = document
                .querySelector('.main-headbar')
                .getBoundingClientRect().height
            let searchBoxH = document
                .querySelector('.search-wrap')
                .getBoundingClientRect().height
            let breadcrumbBox = document
                .querySelector('#breadcrumb-box')
                .getBoundingClientRect().height
            this.tableHeight =
                window.innerHeight - navH - searchBoxH - breadcrumbBox - 100
        })
    },
    methods: {
        initTable() {
            this.loading = true
            let param = "st=5&biz_content=" + JSON.stringify({start:1, limit:20,condi:this.searchForm})
            ZT_INTERFACE.companyManage.api(param).then(res => {
                const data = res.data
                this.loading = false
                if (data.status === 0) {
                    this.tableData = data.data.rows
                    this.tablePage.total = Number(data.data.total)
                }
            })
        },
        handleSizeChange(val) {
            // pageSize 改变时会触发
            this.initTable()
        },
        handleCurrentChange(val) {
            // currentPage 改变时会触发
            this.initTable()
        },
        detail_handleSizeChange(val) {
            // pageSize 改变时会触发
            this.initDetailTable()
        },
        detail_handleCurrentChange(val) {
            // currentPage 改变时会触发
            this.initDetailTable()
        },
        onDateChanged(timeFlag) {
            if (
                this.searchForm.startTime &&
                this.searchForm.endTime &&
                this.searchForm.startTime > this.searchForm.endTime
            ) {
                this.$message.error('开始日期不能大于结束日期')
                this.searchForm[timeFlag] = ''
            }
        },
        onSearch() {
            this.tablePage.currentPage = 1 // 默认搜索第一页
            this.initTable()
        },
        onClear() {
            // 重置
            for (let i in this.searchForm) {
                this.searchForm[i] = ''
            }
        },
        newCompany() {
            for (let i in this.newCompanyForm) {
                this.newCompanyForm[i] = ''
            }
            this.newEditTitle = '创建新企业'
            this.isNewCompanyVisible = true
            this.saveType = 1
        },
        newCompanyConfirm() {
            let param = `st=${this.saveType}&biz_content= + ${JSON.stringify(this.newCompanyForm)}`
            ZT_INTERFACE.companyManage.api(param).then(res => {
                const data = res.data
                this.loading = false
                if (data.stusde === 0) {
                    this.isNewCompanyVisible = false
                    this.initTable()
                } else {
                    this.$message({
                        type: 'error',
                        message: data.message
                    });
                }
            })
        },
        onNewCompanyWinClose() {},
        pwdConfirm () {
            if (this.newPwd !== this.reNewPwd) {
                return this.$message({
                    showClose: true,
                    type: 'error',
                    message: '两次输入的密码不一致'
                })
            }
            let param = `st=7&biz_content= + ${JSON.stringify({k: this.rowData.k, password: this.newPwd})}`
            ZT_INTERFACE.companyManage.api(param).then(res => {
                const data = res.data
                this.loading = false
                if (data.stusde === 0) {
                    this.isNewCompanyVisible = false
                    this.initTable()
                } else {
                    this.$message({
                        type: 'error',
                        message: data.message
                    });
                }
            })
        },
        formatStatus(row, column) {
            let status = row.status
            // alert(status)
            let _arr = ['待退件', '退件中', '异常完成', '已完成', '关闭']
            return _arr[Number(status) - 1]
        },
        edit (index, row) {
            this.newCompanyForm = JSON.parse(JSON.stringify(row))
            this.newCompanyForm.role_group_id = String(this.newCompanyForm.role_group_id)
            this.newCompanyForm.repassword = this.newCompanyForm.password
            this.newEditTitle = '编辑企业信息'
            this.isNewCompanyVisible = true
            this.saveType = 2
        },
        deleteCompany (index, row) {
            this.$confirm('此操作将删除该企业, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                let param = `st=3&biz_content= + ${JSON.stringify({k: row.k})}`
                ZT_INTERFACE.companyManage.api(param).then(res => {
                    const data = res.data
                    this.loading = false
                    if (data.status === 0) {
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                        this.initTable()
                    } else {
                        this.$message({
                            type: 'error',
                            message: data.message
                        });
                    }
                })
            })
        },
        onActiveChanged (row) {
            let msg = row.enable ? '激活' : '禁用'
            let type = row.enable ? 'success' : 'warning'
            let optType = row.enable ? 8 : 9
            let param = `st=${optType}&biz_content= + ${JSON.stringify({k: row.k})}`
            ZT_INTERFACE.companyManage.api(param).then(res => {
                const data = res.data
                this.loading = false
                if (data.status === 0) {
                    this.$message({
                        showClose: true,
                        type: type,
                        message: '当前企业已' + msg
                    })
                } else {
                    this.$message({
                        type: 'error',
                        message: data.message
                    });
                }
            })
        }
    }
}
</script>

<style lang="scss">
.table-top-box {
    margin: 5px 0;
}
.new-Company-form-item {
    width: 350px;
}
.Company-opt-icon{
    font-size: 16px;
    margin-right: 5px;
    margin-top: 5px;
    cursor:pointer;
    &.el-icon-edit{
        color:#409EFF
    }
    &.el-icon-delete{
        color:#F56C6C
    }
    &.el-icon-edit-outline{
        color:#E6A23C
    }
}
.el-switch{
    display: inline-block;
    vertical-align: top;
}
</style>
