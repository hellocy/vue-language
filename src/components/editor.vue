<style lang="scss">
    .el-form-item__content{
        z-index: 998 !important;
    }
</style>

<template>
    <div id="wangeditor" :style="editorStyle">
        <div ref="editorElem" style="text-align:left;"></div>
    </div>  
</template>
<script>
import E from 'wangeditor'
export default {
    name: 'editorElem',
    data() {
        return {
            editor: null,
            editorContent: ''
        }
    },
    props: {
        content: {
            type: String
        },
        editorStyle: {
            type: Object
        }
    },
    mounted() {
        this.editor = new E(this.$refs.editorElem)
        this.editor.customConfig.onchange = html => {
            this.editorContent = html
            console.log(html)
            this.$emit('contentChanged', this.editorContent) // 把这个html通过catchData的方法传入父组件
        }
        this.editor.customConfig.zIndex = 998
        this.editor.customConfig.uploadImgServer = '上传图片的接口'
        this.editor.customConfig.uploadFileName = '自定义的文件名'
        this.editor.customConfig.menus = [
            // 菜单配置
            'head', // 标题
            'bold', // 粗体
            'fontSize', // 字号
            'fontName', // 字体
            'italic', // 斜体
            'underline', // 下划线
            'strikeThrough', // 删除线
            'foreColor', // 文字颜色
            'backColor', // 背景颜色
            'link', // 插入链接
            'list', // 列表
            'justify', // 对齐方式
            'quote', // 引用
            'emoticon', // 表情
            'image', // 插入图片
            'table', // 表格
            'code', // 插入代码
            'undo', // 撤销
            'redo' // 重复
        ]
        // 下面是最重要的的方法
        this.editor.customConfig.uploadImgHooks = {
            before: function(xhr, editor, files) {},
            success: function(xhr, editor, result) {},
            fail: function(xhr, editor, result) {},
            error: function(xhr, editor) {},
            timeout: function(xhr, editor) {},
            customInsert: function(insertImg, result, editor) {
                let url = Object.values(result.data) // result.data就是服务器返回的图片名字和链接
                JSON.stringify(url) // 在这里转成JSON格式
                insertImg(url)
            }
        }
        this.editor.create() // 创建富文本实例
        this.editor.txt.html(this.content)
    }
}
</script>
<style lang="scss" rel="stylesheet/scss">
#wangeditor {
    width: 100%;
}
</style>
