<template>
    <div :class="prfClass">
        <div :class="[prfClass + '-wrap']">
            <breadcrumb :breadcrumb_list="breadcrumbList"></breadcrumb>
            <div class="main-content-box">
                <div class="search-wrap">
                    <el-form :inline="true" class="demo-form-inline">
                        <el-form-item label="广告名称">
                            <el-input
                                v-model.trim="searchForm.name"
                                placeholder="广告名称"
                                size="small"
                                style="width: 130px;"
                            ></el-input>
                        </el-form-item>
                        <el-form-item label="广告位置">
                            <el-input
                                v-model.trim="searchForm.type"
                                placeholder="广告位置"
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
                                @click="newAdv"
                            >创建新广告</el-button>
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
                    <el-table-column prop="name" label="广告名称"></el-table-column>
                    <el-table-column prop="type" label="广告位置"></el-table-column>
                    <el-table-column prop="url" label="跳转url"></el-table-column>
                    <el-table-column prop="order" label="显示顺序"></el-table-column>
                    <el-table-column prop="pr" label="优先级"></el-table-column>
                    <el-table-column prop="desc" label="描述"></el-table-column>
                    <el-table-column prop="image" label="广告图">
                        <template slot-scope="scope">
                            <img :src="'/file/dl/' + scope.row.image.path + '/' + scope.row.image.id" style="max-width: 80px;max-height:80px">
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="from"
                        label="来源"
                    ></el-table-column>
                    <el-table-column
                        prop="start_time"
                        label="开始日期"
                    ></el-table-column>
                    <el-table-column
                        prop="end_time"
                        label="结束日期"
                    ></el-table-column>
                    <el-table-column
                        fixed="right"
                        :label="$t('localization.operation')"
                        width="160"
                    >
                        <template slot-scope="scope">
                            <i class="Adv-opt-icon el-icon-edit" title="编辑" @click="edit(scope.$index, scope.row)"></i>
                            <i class="Adv-opt-icon el-icon-delete" title="删除" @click="deleteAdv(scope.$index, scope.row)"></i>
                            <!-- <i class="Adv-opt-icon el-icon-edit-outline" title="修改密码" @click="changePwd(scope.$index, scope.row)"></i> -->
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


        <!-- 创建新广告 -->
        <el-dialog
            :title="newEditTitle"
            :visible.sync="isNewAdvVisible"
            width="500px"
            :close-on-click-moda="false"
            @close="onNewAdvWinClose"
        >
            <el-form ref="newAdvForm" :model="newAdvForm" label-width="80px">
                <el-form-item label="广告名称">
                    <el-input class="new-Adv-form-item" v-model="newAdvForm.name"></el-input>
                </el-form-item>
                <el-form-item label="广告位置">
                    <el-input class="new-Adv-form-item" v-model="newAdvForm.type"></el-input>
                </el-form-item>
                <el-form-item label="来源">
                    <el-input class="new-Adv-form-item" v-model="newAdvForm.from"></el-input>
                </el-form-item>
                <el-form-item label="显示顺序">
                    <el-input class="new-Adv-form-item" v-model.number="newAdvForm.order"></el-input>
                </el-form-item>
                <el-form-item label="跳转url">
                    <el-input class="new-Adv-form-item" v-model="newAdvForm.url"></el-input>
                </el-form-item>
                <el-form-item label="开始日期">
                    <el-date-picker style="width: 350px" value-format='yyyy-MM-dd' v-model="newAdvForm.start_time" type="date" placeholder="选择开始日期"></el-date-picker>
                </el-form-item>
                <el-form-item label="结束日期">
                    <el-date-picker style="width: 350px" value-format='yyyy-MM-dd' v-model="newAdvForm.end_time" type="date" placeholder="选择结束日期"></el-date-picker>
                </el-form-item>
                <el-form-item label="优先级">
                    <el-select style="width: 350px" v-model.number="newAdvForm.pr" placeholder="请选择优先级">
                        <el-option value="1">1</el-option>
                        <el-option value="2">2</el-option>
                        <el-option value="3">3</el-option>
                        <el-option value="4">4</el-option>
                        <el-option value="5">5</el-option>
                        <el-option value="6">6</el-option>
                        <el-option value="7">7</el-option>
                        <el-option value="8">8</el-option>
                        <el-option value="9">9</el-option>
                        <el-option value="10">10</el-option>
                        <el-option value="11">11</el-option>
                        <el-option value="12">12</el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="广告图片：">
                    <el-upload ref="upload"
                            v-if="!isView"
                            :headers="uploadHeaders"
                            :action="imgUploadUrl"
                            list-type="picture-card"
                            :on-success="onImagesUpdated"
                            :on-preview="handlePictureCardPreview"
                            :file-list="images"
                            :on-remove="handleRemove">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-image v-if="isView"
                            v-for="(img, idx) in images"
                            :key="idx"
                            style="width: 100px; height: 100px; margin-right: 10px;"
                            :src="img.url"
                            @click="handlePictureCardPreview(img)"
                            fit="cover"></el-image>
                </el-form-item>
                <el-form-item label="描述">
                    <el-input type='textarea' class="new-Adv-form-item" v-model="newAdvForm.desc"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button size="mini" @click="isNewAdvVisible = false">取 消</el-button>
                <el-button size="mini" type="primary" @click="newAdvConfirm">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import breadcrumb from '../../components/breadcrumb'
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
            isNewAdvVisible: false,
            newAdvForm: {
                name: '',
                type: '',
                from: '',
                order: 0,
                url: '',
                start_time: '',
                end_time: '',
                pr: '',
                desc: '',
            },
            searchForm: {
                name: '',
                type: ''
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
            newEditTitle: '创建新广告',
            saveType: 1,
            rowData: {},
            newPwd: '',
            reNewPwd: '',
            uploadHeaders: {
                'ACCESS_TOKEN': sessionStorage.getItem('accessToken')
            },
            imgUploadUrl: '/v1/file/up',
            dialogImageUrl: '',
            isImageVisible: false,
            images: [],
            isView: true
        }
    },
    computed: {
        breadcrumbList() {
            return [
                {
                    name: '广告管理',
                    url: ''
                },
                {
                    name: '广告',
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
            ZT_INTERFACE.adv.api(param).then(res => {
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
        newAdv() {
            for (let i in this.newAdvForm) {
                this.newAdvForm[i] = ''
            }
            this.newEditTitle = '创建新广告'
            this.isNewAdvVisible = true
            this.isView = false
            this.saveType = 1
        },
        newAdvConfirm() {
            let param = `st=${this.saveType}&biz_content= + ${JSON.stringify(this.newAdvForm)}`
            ZT_INTERFACE.adv.api(param).then(res => {
                const data = res.data
                this.loading = false
                if (data.stusde === 0) {
                    this.isNewAdvVisible = false
                    this.initTable()
                } else {
                    this.$message({
                        type: 'error',
                        message: data.message
                    });
                }
            })
        },
        onNewAdvWinClose() {},
        pwdConfirm () {
            if (this.newPwd !== this.reNewPwd) {
                return this.$message({
                    showClose: true,
                    type: 'error',
                    message: '两次输入的密码不一致'
                })
            }
            let param = `st=7&biz_content= + ${JSON.stringify({k: this.rowData.k, password: this.newPwd})}`
            ZT_INTERFACE.adv.api(param).then(res => {
                const data = res.data
                this.loading = false
                if (data.stusde === 0) {
                    this.isNewAdvVisible = false
                    this.initTable()
                } else {
                    this.$message({
                        type: 'error',
                        message: data.message
                    });
                }
            })
        },
        edit (index, row) {
            this.newAdvForm = JSON.parse(JSON.stringify(row))
            this.newAdvForm.role_group_id = String(this.newAdvForm.role_group_id)
            this.newAdvForm.repassword = this.newAdvForm.password
            this.newEditTitle = '编辑企业信息'
            this.isNewAdvVisible = true
            this.saveType = 2
        },
        deleteAdv (index, row) {
            this.$confirm('此操作将删除该企业, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                let param = `st=3&biz_content= + ${JSON.stringify({k: row.k})}`
                ZT_INTERFACE.adv.api(param).then(res => {
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
            ZT_INTERFACE.adv.api(param).then(res => {
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
        },
        // 图片上传成功后
        onImagesUpdated (response, file, fileList) {
            let imgData = response.data
            this.images.push({
                id: imgData.id,
                name: imgData.imageName,
                url: `/file/dl/${imgData.path}${imgData.id}`
            })
        },
        // 图片删除
        handleRemove (file, fileList) {
            let idx = this.images.findIndex(
                item => item.id === file.id
            )
            this.images.splice(idx, 1)
            ZT_INTERFACE.auditManage.yellowPage
                .deleteImage({
                    id: file.id
                })
                .then(res => {
                    this.$message({
                        type: 'success',
                        message: '删除成功'
                    })
                })
        },
        handlePictureCardPreview (file) {
            this.dialogImageUrl = file.url
            this.isImageVisible = true
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
.new-Adv-form-item {
    width: 350px;
}
.Adv-opt-icon{
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
