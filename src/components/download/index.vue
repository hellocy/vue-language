<template>
    <el-button :type="type" size="mini" plain icon="el-icon-download" :loading="isLoading" @click="handleDownload">
        <slot>{{text}}</slot>
    </el-button>
</template>
<script>
import axios from 'axios'
import qs from 'qs'
import servers from '@/servers'

export default {
    name: 'plmDownload',
    data () {
        return {
            isLoading: false
        }
    },
    props: {
        // axios 请求参数, 支持配置的参数 url, method, data
        ajaxConfig: {
            type: Object,
            required: true
        },
        fileName: {
            type: String
        },
        // 文件后缀
        fileNameSuffix: {
            type: String,
            default() {
                return 'xlsx'
            }
        },
        // button类型, 具体类型参照el-button设置
        type: {
            type: String,
            default() {
                return 'primary'
            }
        },
        // button文本
        text: {
            type: String,
            default() {
                return '下载'
            }
        }
    },
    methods: {
        handleDownload() {
            let { url, method = 'get', data } = this.ajaxConfig
            if (!url) {
                this.$message.error('url不能为空')
                return
            }
            let token = sessionStorage.getItem('accessToken')
            const env = process.env.NODE_ENV
            const { serverHost } =
                servers.get(location.host) || servers.get('dev')
            if (env === 'development') {
                url = '/proxy/' + url
            } else {
                url = serverHost + url
            }
            this.isLoading = true
            this.$emit('beforeDownload')
            axios({
                url: method === 'get' ? `${url}?${qs.stringify(data)}` : url,
                method,
                data: data,
                headers: {
                    'PLM-TOKEN': token
                },
                responseType: 'blob'
            }).then(response => {
                if (!response) {
                    return
                }
                const content = response
                let fileName = ''
                try {
                    fileName = content.headers['content-disposition'].match(
                        /filename=(.*)/
                    )[1]
                    fileName = decodeURIComponent(fileName)
                } catch (error) {
                    fileName = this.fileName
                    console.error(error)
                }

                const blob = new Blob([content.data])
                if ('download' in document.createElement('a')) {
                    // 非IE下载
                    const elink = document.createElement('a')
                    elink.download = fileName
                    elink.style.display = 'none'
                    elink.href = URL.createObjectURL(blob)
                    document.body.appendChild(elink)
                    elink.click()
                    URL.revokeObjectURL(elink.href) // 释放URL 对象
                    document.body.removeChild(elink)
                } else {
                    // IE10+下载
                    navigator.msSaveBlob(blob, this.fileName)
                }
            }).finally(() => {
                this.isLoading = false
            })
        }
    }
}
</script>
