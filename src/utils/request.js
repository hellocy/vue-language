import axios from 'axios'
import {
    handleRedirectUrl
} from './index'

// 创建axios实例
const service = axios.create({
    // api的base_url
    baseURL: process.env.BASE_API,
    // 请求超时时间
    timeout: 30000
})

window.ajax = service
// request拦截器
service.interceptors.request.use(
    config => {
        // 让每个请求携带自定义token 请根据实际情况自行修改
        if (sessionStorage.getItem('accessToken')) {
            config.headers['token'] = sessionStorage.getItem('accessToken')
        }
        config.headers['Content-Type'] = 'application/json'
        config.data = JSON.stringify(config.data)
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
// respone拦截器
service.interceptors.response.use(
    response => {
        let data = response.data
        if (data.status === 0) {
            return response
        } else {
            VUE.$message.error({
                showClose: true,
                message: data.message
            })
            return response
        }
    },
    error => {
        let response = error.response
        let message = '网络错误'
        if (response) {
            let code = Number(response.status)
            let data = response.data
            if (code === 404) {
                message = '请求资源不存在'
            } else if (code === 500) {
                message = '服务器错误'
            } else if (code === 400) {
                if (
                    data.status === 900000001 ||
                    data.status === 900000005 ||
                    data.status === 900000006
                ) {
                    message = data.message
                }
            } else {
                message = '网络错误'
            }
        }
        if (error.message.includes('timeout')) { // 判断请求异常信息中是否含有超时timeout字符串
            message = '请求超时'
        }
        VUE.$message.error({
            showClose: true,
            message: message
        })
        return Promise.resolve(response)
    }
)

export default service
