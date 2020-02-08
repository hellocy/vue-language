<template>
    <div>
        <div>
            <breadcrumb :breadcrumb_list="breadcrumbList"></breadcrumb>
            <div class="main-content-box">
                <div class="table-top-box">
                    <el-button
                        type="primary"
                        size="mini"
                        icon="el-icon-plus"
                        @click="newRoleGroup"
                    >创建角色组</el-button>
                </div>
                <el-table
                    :data="tableData"
                    :height="tableHeight"
                    border
                    stripe
                    :class="prfClass"
                    style="width: 100%;"
                >
                    <el-table-column type="index" label="序号" align="center"></el-table-column>
                    <el-table-column prop="rmaSn" label="角色组名称">
                        <template slot-scope="scope">
                            <el-link
                                type="primary"
                                class="btn-opt"
                                @click="viewDetail(scope.$index, scope.row)"
                                size="small"
                            >{{scope.row.rmaSn}}</el-link>
                        </template>
                    </el-table-column>
                    <el-table-column fixed="right" label="操作" width="160">
                        <template slot-scope="scope">
                            <el-button
                                class="btn-opt"
                                @click="viewDetail(scope.$index, scope.row)"
                                type="text"
                                size="small"
                            >关联角色</el-button>
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

        <!-- 创建角色组弹窗 -->
        <el-dialog title="创建角色组" :visible.sync="newRoleGroupVisible"></el-dialog>
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
            breadcrumbList: [
                {
                    name: '系统管理',
                    url: ''
                },
                {
                    name: '角色组管理',
                    url: ''
                }
            ],
            newRoleGroupVisible: false,
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
    created: function() {},
    mounted: function() {
        this.initTable() // 加载列表数据
        setTimeout(() => {
            let navH = document
                .querySelector('.main-headbar')
                .getBoundingClientRect().height
            this.tableHeight = window.innerHeight - navH - 145
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
            this.tablePage.currentPage = 1 // 默认搜索第一页
            this.initTable()
        },
        onClear() {
            // 重置
            for (let i in this.searchForm) {
                this.searchForm[i] = ''
            }
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
        newRoleGroup() {
            this.newRoleGroupVisible = true
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
.table-top-box {
    margin: 5px 0;
}
</style>
