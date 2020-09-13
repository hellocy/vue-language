<template>
    <div>
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
                    <el-form-item style="margin-left: 5px;">
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
                            type="success"
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
                <el-table-column prop="orderNo" :label="$t('localization.orderNo')">
                    <template slot-scope="scope">
                        <el-link
                            type="primary"
                            class="btn-opt"
                            @click="viewDetail(scope.$index, scope.row)"
                            size="small"
                        >{{scope.row.orderNo}}</el-link>
                    </template>
                </el-table-column>
                <el-table-column prop="title" :label="$t('localization.title')"></el-table-column>
                <el-table-column prop="submitTime" :label="$t('localization.submitTime')">
                    <template slot-scope="scope">
                        <el-link
                            type="primary"
                            class="btn-opt"
                            @click="viewTrack(scope.$index, scope.row)"
                            size="small"
                        >{{scope.row.submitTime}}</el-link>
                    </template>
                </el-table-column>
                <el-table-column prop="submitUser" :label="$t('localization.submitUser')" width="90"></el-table-column>
                <el-table-column prop="status" :label="$t('localization.status')"></el-table-column>
                <el-table-column prop="statusDesc" :label="$t('localization.statusDesc')"></el-table-column>
                <el-table-column prop="dealUser" :label="$t('localization.dealUser')" ></el-table-column>
                <el-table-column prop="dealTime" :label="$t('localization.dealTime')" width="150"></el-table-column>
                <el-table-column fixed="right" :label="$t('localization.operation')" width="200">
                    <template slot-scope="scope">
                        <el-button
                            class="btn-opt"
                            @click="auditPass(scope.$index, scope.row)"
                            type="text"
                            size="small"
                        >通过</el-button>
                        <el-button
                            class="btn-opt"
                            @click="auditReject(scope.$index, scope.row)"
                            type="text"
                            size="small"
                        >驳回</el-button>
                        <el-button
                            class="btn-opt"
                            @click="auditEdit(scope.$index, scope.row)"
                            type="text"
                            size="small"
                        >编辑</el-button>
                        <el-button
                            class="btn-opt"
                            @click="viewDetail(scope.$index, scope.row)"
                            type="text"
                            size="small"
                        >查看</el-button>
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

        <!-- 查看/编辑详情 -->
        <el-dialog
            :title="'单据' + (!isView ? '编辑' : '详情')"
            :visible.sync="isOrderDtlVisible"
            width="500px"
            :close-on-click-moda="false"
            top="2vh"
            @close="onNewUserWinClose"
        >
            <el-form ref="orderForm" :model="orderForm" label-width="90px">
                <el-form-item label="广告标题：">
                    <el-input v-if="!isView" class="new-user-form-item" v-model="orderForm.advTitle"></el-input>
                    <span v-if="isView">{{orderForm.advTitle}}</span>
                </el-form-item>
                <el-form-item label="地区：">
                    <el-select
                        v-if="!isView"
                        class="new-user-form-item"
                        v-model="orderForm.region"
                        placeholder="请选择"
                    >
                        <el-option label="北京" value="1"></el-option>
                        <el-option label="上海" value="2"></el-option>
                    </el-select>
                    <span v-if="isView">{{orderForm.region}}</span>
                </el-form-item>
                <el-form-item label="城市名：">
                    <el-select
                        v-if="!isView"
                        class="new-user-form-item"
                        v-model="orderForm.city"
                        placeholder="请选择"
                    >
                        <el-option label="北京" value="1"></el-option>
                        <el-option label="上海" value="2"></el-option>
                    </el-select>
                    <span v-if="isView">{{orderForm.city}}</span>
                </el-form-item>
                <el-form-item label="附加信息：">
                    <el-input v-if="!isView" type="textarea" v-model="orderForm.attachInfo" style="width: 350px"></el-input>
                    <span v-if="isView">{{orderForm.attachInfo}}</span>
                </el-form-item>
                <el-form-item label="广告有效性：">
                    <el-select
                        v-if="!isView"
                        class="new-user-form-item"
                        v-model="orderForm.advEffective"
                        placeholder="请选择"
                    >
                        <el-option label="30天" value="1"></el-option>
                        <el-option label="60天" value="2"></el-option>
                    </el-select>
                    <span v-if="isView">{{['30天', '60天'][orderForm.advEffective]}}</span>
                </el-form-item>
                <el-form-item label="照片：">
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
                <el-form-item label="联系人：">
                    <el-input v-if="!isView" class="new-user-form-item" v-model="orderForm.contactUser"></el-input>
                    <span v-if="isView">{{orderForm.contactUser}}</span>
                </el-form-item>
                <el-form-item label="联系电话：">
                    <el-input v-if="!isView" class="new-user-form-item" v-model="orderForm.phone"></el-input>
                    <span v-if="isView">{{orderForm.phone}}</span>
                </el-form-item>
                <el-form-item label="公司名称：">
                    <el-input v-if="!isView" class="new-user-form-item" v-model="orderForm.company"></el-input>
                    <span v-if="isView">{{orderForm.company}}</span>
                </el-form-item>
                <el-form-item label="公司简介：">
                    <el-input v-if="!isView" type="textarea" v-model="orderForm.desc" style="width: 350px"></el-input>
                    <span v-if="isView">{{orderForm.desc}}</span>
                </el-form-item>
                <el-form-item label="公司地址：">
                    <el-input v-if="!isView" class="new-user-form-item" v-model="orderForm.address"></el-input>
                    <span v-if="isView">{{orderForm.address}}</span>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button size="mini" @click="isOrderDtlVisible = false">取 消</el-button>
                <el-button size="mini" type="danger" v-if="!isView" @click="orderFormSure">发 布</el-button>
            </span>
        </el-dialog>

        <el-dialog :visible.sync="isImageVisible"
                   :modal-append-to-body="false">
            <img width="100%"
                 :src="dialogImageUrl"
                 alt />
        </el-dialog>

        <el-dialog title="驳回" :visible.sync="auditFormVisible" width="30%">
            <el-form ref="sendBackForm" label-width="80px">
                <el-form-item label="驳回原因">
                    <el-input type="textarea" v-model="rejectReason" style="width:90%"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button size="small" @click="auditFormVisible = false">取 消</el-button>
                <el-button size="small" type="primary" @click="orderFormSure()">确 定</el-button>
            </span>
        </el-dialog>

        <!-- 图片浏览组件 -->
        <viewer
            :images="images"
            @inited="initImageViewer"
            class="viewer"
            ref="viewer"
            v-show="isImageVisible"
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
    data() {
        return {
            prfClass: 'rp-forecast-customer',
            isDetailVisible: false,
            isOrderDtlVisible: false,
            searchForm: {
                username: '',
                displayname: '',
                mobile: ''
            },
            tableData: [
                {

                }
            ],
            tableHeight: 300,
            tablePage: {
                offset: 1, // 当前页
                limit: 20, // 每页数量
                total: 0 // 总数量
            },
            orderForm: {
                advTitle: '世纪佳缘-同城交友',
                region: '1',
                city: '1',
                attachInfo: '限单身',
                advEffective: '1',
                contactUser: '王五',
                phone: '18955688865',
                company: '北京世纪佳缘有限公司',
                desc: '靠谱',
                address: '北五环'
            },
            auditFormVisible: false,
            rejectReason: '',
            uploadHeaders: {
                'ACCESS_TOKEN': sessionStorage.getItem('accessToken')
            },
            imgUploadUrl: window.SERVERHOST + '/upload',
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
                    name: '审核管理', // this.$t('localization.sysMge'),
                    url: ''
                },
                {
                    name: '企业黄页审核', // this.$t('localization.sysUserMge'), // '系统用户管理',
                    url: ''
                },
                {
                    name: '农业/养殖业', // this.$t('localization.sysUserMge'), // '系统用户管理',
                    url: ''
                }
            ]
        },
        pageContengSize() {
            return {
                w: window.innerWidth - 200,
                h: window.innerHeight - 60
            }
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
            ZT_INTERFACE.systemManage.systemUser
                .api(`st=1&biz_content=${param}`)
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
            let newUserInfoStr = JSON.stringify(this.orderForm)
            ZT_INTERFACE.systemManage.systemUser
                .api(`st=1&biz_content=${newUserInfoStr}`)
                .then(res => {
                    const data = res.data
                    this.loading = false
                    if (data.code === 0) {
                        this.isOrderDtlVisible = true
                    } else {
                    }
                })
        },
        orderFormSure() {
            let rejectReason = {
                remark: this.rejectReason
            }
            this.loading = true
            ZT_INTERFACE.systemManage.systemUser
                .api(`st=1&biz_content=${rejectReason}`)
                .then(res => {
                    const data = res.data
                    this.loading = false
                    if (data.code === 0) {
                        this.isOrderDtlVisible = false
                    } else {

                    }
                })
        },
        onNewUserWinClose() {},
        formatStatus(row, column) {
            let status = row.status
            let _arr = ['待退件', '退件中', '异常完成', '已完成', '关闭']
            return _arr[Number(status) - 1]
        },
        auditPass (index, row) {
            this.loading = true
            ZT_INTERFACE.auditManage.yellowPage.getDetail({ id: row.id }).then(res => {
                const data = res.data
                this.loading = false
                if (data.code === 0) {
                    this.detailData = data.data.list
                    this.detail_tablePage.total = Number(data.data.total)
                    this.isDetailVisible = true
                }
            })
        },
        auditReject (index, row) {
            this.auditFormVisible = true
            this.loading = true
            ZT_INTERFACE.auditManage.yellowPage.getDetail({ id: row.id }).then(res => {
                const data = res.data
                this.loading = false
                if (data.code === 0) {
                    this.detailData = data.data.list
                    this.detail_tablePage.total = Number(data.data.total)
                    this.isDetailVisible = false
                }
            })
        },
        auditEdit (index, row) {
            this.isView = false
            this.isOrderDtlVisible = true
            this.loading = true
            ZT_INTERFACE.auditManage.yellowPage.getDetail({ id: row.id }).then(res => {
                const data = res.data
                this.loading = false
                if (data.code === 0) {
                    this.detailData = data.data.list
                    this.detail_tablePage.total = Number(data.data.total)
                    this.isOrderDtlVisible = true
                }
            })
        },
        viewDetail(index, row) {
            this.isView = true
            this.isOrderDtlVisible = true
            this.loading = true
            ZT_INTERFACE.auditManage.yellowPage.getDetail({ id: row.id }).then(res => {
                const data = res.data
                this.loading = false
                if (data.code === 0) {
                    this.detailData = data.data.list
                    this.detail_tablePage.total = Number(data.data.total)
                    this.isDetailVisible = true
                }
            })
        },
        // 图片上传成功后
        onImagesUpdated (response, file, fileList) {
            let imgData = response.data
            this.images.push({
                id: imgData.id,
                name: imgData.imageName,
                url: window.SERVERHOST + 'image/downLoad?imageId=' + imgData.id
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
.new-user-form-item {
    width: 350px;
}
</style>
