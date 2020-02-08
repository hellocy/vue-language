<style lang="scss">
    .images-box{
        display: flex;
        flex-flow: row wrap;
    }
    .image-item{
        display: 0 1 auto;
        position: relative;
        width: 100px;
        height:100px;
        border-radius: 3px;
        border:1px solid #ccc;
        overflow: hidden;
        margin-right:10px;
        margin-bottom:10px;
        &:hover{
            .opt-panel{
                background:rgba(0, 0, 0, .5);
            }
            .btn-preview{
                opacity: 1;
            }
            .btn-delete{
                opacity: 1;
            }
        }
        img{
            position: absolute;
            top:0;
            left:0;
            width: 100%;
            height: 100px;
        }
        .opt-panel{
            position: absolute;
            top: 0;
            left:0;
            width: 100px;
            height: 100px;
            background:rgba(0, 0, 0, 0);
            transition: all .1s ease-in-out;
            text-align: center;
            line-height: 100px;
        }
        .btn-preview{
            font-size: 20px;
            margin-right: 20px;
            color:#fff;
            opacity: 0;
            cursor: pointer;
        }
        .btn-delete{
            font-size: 20px;
            color:#fff;
            opacity: 0;
            cursor: pointer;
        }
    }
    .btn-add-more{
        width: 100px;
        height: 100px;
        line-height: 120px;
        color:#ccc;
        border:2px solid #ccc;
        border-radius: 3px;
        text-align: center;
        transition: all .1s;
        &:hover{
            color:#888
        }
    }
    .btn-img-upload{
        font-size: 50px;
    }
</style>

<template>
    <div class="images-box">
        <div class="image-item" v-for="(img, index) in images" :key="index">
            <img :src="img.imageAddress" :alt="img.imageName">
            <div class="opt-panel">
                <i class="btn-preview el-icon-zoom-in"></i>
                <i class="btn-delete el-icon-delete" @click="deleteOne(img.id)"></i>
            </div>
        </div>
        <div class="btn-add-more" v-if="modal===1">
            <el-upload
                style="display:inline-block;"
                ref="upload"
                :headers="uploadHeaders"
                :action="imgUploadUrl"
                :on-success="onUploadSuccessed"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                :show-file-list="false"
                multiple
                :limit="3"
                :on-exceed="handleExceed"
                :file-list="UploadFileList">
                <i class="el-icon-plus btn-img-upload"></i>
            </el-upload>
        </div>
    </div>
</template>

<script>
export default{
    props: {
        imgUploadUrl: {
            type: String
        },
        images: {
            type: Array
        },
        modal: {
            default: 1,
            type: Number
        }
    },
    data () {
        return {
            uploadHeaders: {
                'PLM-TOKEN': sessionStorage.getItem('accessToken')
            },
            UploadFileList: []
        }
    },
    computed: {},
    methods: {
        handleRemove (file, fileList) {
            console.log(file, fileList)
        },
        handlePreview (file) {
            console.log(file)
        },
        handleExceed (files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
        },
        beforeRemove (file, fileList) {
            return this.$confirm(`确定移除${file.name}？`)
        },
        onUploadSuccessed (res, file, fileList) {
            this.$refs.upload.clearFiles()
            if (res) {
                this.$emit('update', res.data)
            }
        },
        deleteOne (id) {
            let index = this.UploadFileList.findIndex(item => item.id === id)
            this.UploadFileList.split(index, 1)
            this.$emit('update', this.UploadFileList)
        }
    }
}
</script>
