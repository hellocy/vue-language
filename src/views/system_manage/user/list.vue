<template>
    <div :class="prfClass">
        <div :class="[prfClass + '-wrap']">
            <breadcrumb :breadcrumb_list="breadcrumbList"></breadcrumb>
            <div class="main-content-box">
                <section class="table-top-box">
                    <div class="search-wrap">
                        <el-form :inline="true" class="demo-form-inline">
                            <el-form-item :label="$t('localization.loginName')">
                                <el-input
                                    v-model.trim="searchForm.logisticsNum"
                                    :placeholder="$t('localization.loginName')"
                                    size="small"
                                    style="width: 130px;"
                                ></el-input>
                            </el-form-item>
                            <el-form-item :label="$t('localization.name')">
                                <el-input
                                    v-model.trim="searchForm.rmaSn"
                                    :placeholder="$t('localization.name')"
                                    size="small"
                                    style="width: 130px;"
                                ></el-input>
                            </el-form-item>
                            <el-form-item :label="$t('localization.tel')">
                                <el-input
                                    v-model.trim="searchForm.orderSn"
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
                            </el-form-item>
                        </el-form>
                    </div>
                </section>
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

        <!-- 查看包裹明细的弹窗内容 -->
        <el-dialog title="包裹明细" :visible.sync="isDetailVisible">
            <el-table :data="detailData" size="medium">
                <el-table-column prop="sku" label="产品编码"></el-table-column>
                <el-table-column prop="goodsName" label="产品名称"></el-table-column>
                <el-table-column prop="rebackAmount" label="预报数量"></el-table-column>
                <el-table-column prop="inRebackAmount" label="实际退回数量"></el-table-column>
                <el-table-column prop="fullAmount" label="良品数量"></el-table-column>
                <el-table-column prop="badAmount" label="不良品数量"></el-table-column>
                <el-table-column prop="rmaGoodRemark" label="检测原因"></el-table-column>
                <el-table-column prop="finishTime" label="确认时间"></el-table-column>
                <el-table-column fixed="right" label="操作">
                    <template slot-scope="scope">
                        <el-button
                            class="btn-opt"
                            @click="viewImage(scope.$index, scope.row.skuImgs)"
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
                    :current-page.sync="detail_tablePage.offset"
                    :page-sizes="[20, 50, 100, 200]"
                    :page-size="detail_tablePage.limit"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="detail_tablePage.total"
                ></el-pagination>
            </div>
        </el-dialog>

        <!-- 查看物流轨迹的弹窗内容 -->
        <el-dialog
            title="物流轨迹"
            :visible.sync="isTraceVisible"
            width="62%"
            :close-on-click-moda="false"
            @close="onTraceWinClose"
        >
            <el-tabs v-model="traceData.traceTabActiveName" @tab-click="traceTabChanged">
                <el-tab-pane name="all">
                    <span slot="label">
                        <i class="iconfont icon-all"></i>
                        全部（{{traceData.all}}）
                    </span>
                </el-tab-pane>
                <el-tab-pane name="lost">
                    <span slot="label">
                        <i class="iconfont icon-empty-"></i>
                        查询不到（{{traceData.lost}}）
                    </span>
                </el-tab-pane>
                <el-tab-pane name="carrying">
                    <span slot="label">
                        <i class="iconfont icon-logistics"></i>
                        运输途中（{{traceData.carrying}}）
                    </span>
                </el-tab-pane>
                <el-tab-pane name="arrived">
                    <span slot="label">
                        <i class="iconfont icon-arrive"></i>
                        到达待取（{{traceData.arrived}}）
                    </span>
                </el-tab-pane>
                <el-tab-pane name="fail">
                    <span slot="label">
                        <i class="iconfont icon-products_fill"></i>
                        投递失败（{{traceData.fail}}）
                    </span>
                </el-tab-pane>
                <el-tab-pane name="exception">
                    <span slot="label">
                        <i class="iconfont icon-exception"></i>
                        可能异常（{{traceData.exception}}）
                    </span>
                </el-tab-pane>
                <el-tab-pane name="success">
                    <span slot="label">
                        <i class="iconfont icon-qianshoushenpitongguo"></i>
                        签收成功（{{traceData.success}}）
                    </span>
                </el-tab-pane>
                <el-tab-pane name="back">
                    <span slot="label">
                        <i class="iconfont icon-tuihui"></i>
                        包裹退回（{{traceData.back}}）
                    </span>
                </el-tab-pane>
            </el-tabs>
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
            isTraceVisible: false,
            pickerOptions: {
                disabledDate(time) {
                    // return time.getTime() > Date.now()
                },
                shortcuts: [
                    {
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date())
                        }
                    },
                    {
                        text: '昨天',
                        onClick(picker) {
                            const date = new Date()
                            date.setTime(date.getTime() - 3600 * 1000 * 24)
                            picker.$emit('pick', date)
                        }
                    },
                    {
                        text: '一周前',
                        onClick(picker) {
                            const date = new Date()
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
                            picker.$emit('pick', date)
                        }
                    }
                ]
            },
            searchForm: {
                startTime: '',
                endTime: '',
                logisticsNum: '',
                rmaSn: '',
                orderSn: '',
                createUser: '',
                status: '',
                matchFlag: '',
                forecastFlag: ''
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
            RP_INTERFACE.rpForecast
                .getCustomerList({
                    offset: this.tablePage.offset,
                    limit: this.tablePage.limit,
                    condition: {
                        ...this.searchForm
                    }
                })
                .then(res => {
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
        traceTabChanged(val) {}, // 跟踪轨迹弹窗中的tab改变时会触发
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
        formatStatus(row, column) {
            let status = row.status
            // alert(status)
            let _arr = ['待退件', '退件中', '异常完成', '已完成', '关闭']
            return _arr[Number(status) - 1]
        },
        formatForecastFlag(row, column) {
            let forecastFlag = row.forecastFlag
            let _arr = ['未预报', '已预报']
            return _arr[Number(forecastFlag)]
        },
        formatsyncOmsFlag(row, column) {
            let syncOmsFlag = row.syncOmsFlag
            let _arr = ['不同步', '同步']
            return _arr[Number(syncOmsFlag)]
        },
        formatmatchFlag(row, column) {
            let matchFlag = row.matchFlag
            let _arr = ['未匹配', '匹配']
            return _arr[Number(matchFlag)]
        },
        viewDetail(index, row) {
            this.loading = true
            RP_INTERFACE.rpForecast.getSkuDetail({ id: row.id }).then(res => {
                const data = res.data
                this.loading = false
                if (data.code === 0) {
                    this.detailData = data.data.list
                    this.detail_tablePage.total = Number(data.data.total)
                    this.isDetailVisible = true
                }
            })
        },
        viewTrack(index, row) {
            this.isTraceVisible = true
            RP_INTERFACE.rpForecast
                .getTrackInfo({
                    logisticsNum: row.logisticsNum,
                    logisticsUrl: row.logisticsUrl,
                    expressCode: row.expressCode
                })
                .then(res => {
                    const data = res.data
                    if (data.code === 0) {
                        let trajectory = data.data.trajectory.trajectory
                        if (!trajectory) {
                            this.traceData.all = 0
                            return
                        }
                        this.traceData.all = 1
                        let trajectoryFromItems =
                            data.data.trajectory.trajectoryFromItems
                        let trajectoryToItems =
                            data.data.trajectory.trajectoryToItems
                        let status = trajectory.result
                        this.traceData.status = status
                        this.traceData.lost = status === 65 ? 1 : 0
                        this.traceData.carrying = status === 8 ? 1 : 0
                        this.traceData.arrived = status === 30 ? 1 : 0
                        this.traceData.fail = status === 20 ? 1 : 0
                        this.traceData.exception = status === 50 ? 1 : 0
                        this.traceData.success = status === 40 ? 1 : 0
                        this.traceData.back = status === 65 ? 1 : 0

                        this.traceData.latest.id = trajectory.id
                        this.traceData.latest.statusText =
                            trajectory.signTrayStatus
                        this.traceData.latest.datetime = trajectory.signTrayDate
                        this.traceData.latest.trayStatus =
                            trajectory.onlineTrayStatus

                        this.traceData.from = trajectoryFromItems.map(item => {
                            return {
                                date: item.date,
                                status: item.status
                            }
                        })
                        this.traceData.to = trajectoryToItems.map(item => {
                            return {
                                date: item.date,
                                status: item.status
                            }
                        })
                    }
                })
        },
        onTraceWinClose() {
            this.traceData = {
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
                all: 1,
                lost: 0,
                carrying: 0,
                arrived: 0,
                fail: 0,
                exception: 0,
                success: 0,
                back: 0
            }
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
</style>
