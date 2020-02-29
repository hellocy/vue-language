<template>
    <div :class="prfClass">
        <div :class="[prfClass + '-wrap']">
            <breadcrumb :breadcrumb_list="breadcrumbList"></breadcrumb>
            <div class="main-content-box">
                <div class="search-wrap">
                    <el-form :inline="true" class="demo-form-inline">
                        <el-form-item :label="$t('localization.loginName')">
                            <el-input
                                v-model.trim="searchForm.username"
                                :placeholder="$t('localization.loginName')"
                                size="small"
                                style="width: 130px;"
                            ></el-input>
                        </el-form-item>
                        <el-form-item :label="$t('localization.name')">
                            <el-input
                                v-model.trim="searchForm.displayname"
                                :placeholder="$t('localization.name')"
                                size="small"
                                style="width: 130px;"
                            ></el-input>
                        </el-form-item>
                        <el-form-item :label="$t('localization.tel')">
                            <el-input
                                v-model.trim="searchForm.mobile"
                                :placeholder="$t('localization.tel')"
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
                                @click="newUser"
                            >创建新用户</el-button>
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
                    <el-table-column prop="rmaSn" :label="$t('localization.search')" width="180">
                        <template slot-scope="scope">
                            <el-link
                                type="primary"
                                class="btn-opt"
                                @click="viewDetail(scope.$index, scope.row)"
                                size="small"
                            >{{scope.row.rmaSn}}</el-link>
                        </template>
                    </el-table-column>
                    <el-table-column prop="orderSn" :label="$t('localization.name')" width="180"></el-table-column>
                    <el-table-column
                        prop="logisticsNum"
                        :label="$t('localization.tel')"
                        width="180"
                    >
                        <template slot-scope="scope">
                            <el-link
                                type="primary"
                                class="btn-opt"
                                @click="viewTrack(scope.$index, scope.row)"
                                size="small"
                            >{{scope.row.rmaSn}}</el-link>
                        </template>
                    </el-table-column>
                    <el-table-column prop="expressCode" :label="$t('localization.mail')" width="90"></el-table-column>
                    <el-table-column
                        prop="stockCode"
                        :label="$t('localization.loginCount')"
                        width="180"
                    ></el-table-column>
                    <el-table-column
                        prop="inStockCode"
                        :label="$t('localization.loginIp')"
                        width="180"
                    ></el-table-column>
                    <el-table-column
                        prop="createUser"
                        :label="$t('localization.loginTime')"
                        width="100"
                    ></el-table-column>
                    <el-table-column
                        prop="createTime"
                        :label="$t('localization.releGroup')"
                        width="150"
                    ></el-table-column>
                    <el-table-column
                        fixed="right"
                        :label="$t('localization.operation')"
                        width="160"
                    >
                        <template slot-scope="scope">
                            <el-button
                                class="btn-opt"
                                @click="viewDetail(scope.$index, scope.row)"
                                type="text"
                                size="small"
                            >查看明细</el-button>
                            <el-button
                                class="btn-opt"
                                @click="viewImage(scope.$index, scope.row.packImgs)"
                                type="text"
                                size="small"
                            >查看图片</el-button>
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

        <!-- 创建新用户 -->
        <el-dialog
            title="创建新用户"
            :visible.sync="isNewUserVisible"
            width="500px"
            :close-on-click-moda="false"
            @close="onNewUserWinClose"
        >
            <el-form ref="newUserForm" :model="newUserForm" label-width="80px">
                <el-form-item label="角色组">
                    <el-select
                        class="new-user-form-item"
                        v-model="newUserForm.region"
                        placeholder="请选择角色组"
                    >
                        <el-option label="管理员" value="1"></el-option>
                        <el-option label="店小二" value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="用户名">
                    <el-input class="new-user-form-item" v-model="newUserForm.name"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input class="new-user-form-item" v-model="newUserForm.name"></el-input>
                </el-form-item>
                <el-form-item label="重复密码">
                    <el-input class="new-user-form-item" v-model="newUserForm.name"></el-input>
                </el-form-item>
                <el-form-item label="登录名">
                    <el-input class="new-user-form-item" v-model="newUserForm.name"></el-input>
                </el-form-item>
                <el-form-item label="电话">
                    <el-input class="new-user-form-item" v-model="newUserForm.name"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input class="new-user-form-item" v-model="newUserForm.name"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button size="mini" @click="isNewUserVisible = false">取 消</el-button>
                <el-button size="mini" type="primary" @click="newUserConfirm">确 定</el-button>
            </span>
        </el-dialog>

        <!-- 图片浏览组件 -->
        <viewer
            :images="images"
            @inited="initImageViewer"
            class="viewer"
            ref="viewer"
            v-show="isImgVisible"
        >
            <template scope="scope">
                <img v-for="src in scope.images" :src="src" :key="src" />
                {{scope.options}}
            </template>
        </viewer>
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
    watch: {
        depart(oldVal, newVal) {
            this.initTable() // 重新加载列表数据
        }
    },
    data() {
        return {
            prfClass: 'rp-forecast-customer',
            isDetailVisible: false,
            isNewUserVisible: false,
            newUserForm: {},
            searchForm: {
                username: '',
                displayname: '',
                mobile: ''
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
            isImgVisible: false,
            images: []
        }
    },
    computed: {
        breadcrumbList() {
            return [
                {
                    name: this.$t('localization.sysMge'),
                    url: ''
                },
                {
                    name: this.$t('localization.sysUserMge'), // '系统用户管理',
                    url: ''
                }
            ]
        }
    },
    created: function() {},
    mounted: function() {
        this.initTable() // 加载列表数据
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
            let condStr = JSON.stringify(this.searchForm)
            let param = `st=5&biz_content={"start":1, "limit":20,"condi":${condStr}}`
            console.log(param, 88888)
            ZT_INTERFACE.systemManage.systemUser.api(`st=1&biz_content=${param}`).then(res => {
                const data = res.data
                this.loading = false
                if (data.code === 0) {
                    this.tableData = data.data.list
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
            // 搜索
            // this.tablePage.currentPage = 1 // 默认搜索第一页
            // this.initTable()
            this.$message({
                message: this.$t('localization.supplierManager')
            })
        },
        onClear() {
            // 重置
            for (let i in this.searchForm) {
                this.searchForm[i] = ''
            }
        },
        newUser() {
            let newUserInfoStr = JSON.stringify(this.newUserForm)
            ZT_INTERFACE.systemManage.systemUser.api(`st=1&biz_content=${newUserInfoStr}`).then(res => {
                const data = res.data
                this.loading = false
                if (data.code === 0) {
                    this.isNewUserVisible = true
                } else {

                }
            })
        },
        newUserConfirm() {
            this.isNewUserVisible = false
        },
        onNewUserWinClose() {},
        formatStatus(row, column) {
            let status = row.status
            // alert(status)
            let _arr = ['待退件', '退件中', '异常完成', '已完成', '关闭']
            return _arr[Number(status) - 1]
        },
        viewDetail(index, row) {
            this.loading = true
            ZT_INTERFACE.rpForecast.getSkuDetail({ id: row.id }).then(res => {
                const data = res.data
                this.loading = false
                if (data.code === 0) {
                    this.detailData = data.data.list
                    this.detail_tablePage.total = Number(data.data.total)
                    this.isDetailVisible = true
                }
            })
        },
        initImageViewer(viewer) {
            this.$viewer = viewer
        },
        viewImage(index, imgs) {
            let images = imgs
            if (images.length === 0) {
                this.$message({
                    message: '暂无图片',
                    type: 'info'
                })
                return
            }
            for (let i = 0; i < images.length; i++) {
                this.$set(this.images, i, images[i])
            }
            this.$viewer.reset()
            setTimeout(() => {
                this.$viewer.show()
            })
        }
    }
}
</script>

<style lang="scss">
.table-top-box {
    margin: 5px 0;
}
.new-user-form-item {
    width: 350px;
}
</style>
