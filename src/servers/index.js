import {
    Base64
} from 'js-base64'
const servers = new Map([
    [
        'plm.gw-ec.com', // 正式环境
        {
            callbackUrl: Base64.encodeURI('http://plm.gw-ec.com'),
            serverHost: 'http://api-plm.gw-ec.com/',
            baseUrl: 'http://user.gw-ec.com/login/index'
        }
    ],
    [
        'dev', // 开发环境
        {
            callbackUrl: Base64.encodeURI('http://10.29.6.253:9528'),
            serverHost: 'http://10.29.6.96:8088/',
            // serverHost: 'http://plm.hqygou.com:8188/',
            baseUrl: 'http://user.hqygou.com/login/index'
        }
    ]
])

export default servers
