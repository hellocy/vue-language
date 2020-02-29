<style lang="scss" scoped>
    .main-headbar {
        width: 100%;
        height: 60px;
        background: #545c64;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
    }
    .left {
        padding-left: 10px;
        display: flex;
        align-items: center;
        font-size: 30px;
        color: #fff;
    }
    .right-box {
        display: flex;
        color: #fff;
        align-items: center;
        padding-right: 10px;
    }
    .language-box {
        position: relative;
        display: inline-block;
        margin-right: 20px;
        color: #ddd;
        height: 60px;
        line-height: 60px;
        cursor: pointer;
    }
    .lang-list-box {
        position: absolute;
        top: 150px;
        left: -40px;
        width: 200px;
        height: 300px;
        padding: 0 10px;
        background: rgba(255, 255, 255, 0);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px;
        display: none;
        transition: all 0.2s;
        z-index: 99999;
    }
    .language-box:hover {
        color: #fff;
        .lang-list-box {
            background: rgba(255, 255, 255, 1);
            box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
            display: block;
            top: 60px;
        }
    }
    .v-line {
        color: #ccc;
    }
    .zone-box {
        line-height: 20px;
        color: #666;
        margin-top: 10px;
    }
    .lang-box {
        margin-top: 10px;
        line-height: 20px;
        color: #666;
    }
    .current-lang-box {
        border: 1px solid #ccc;
        height: 30px;
        line-height: 30px;
    }
    .lang-item {
        line-height: 20px;
        margin-top: 2px;
    }
    .lang-item:hover {
        color: #000;
    }
    .user-info-box {
        color: #ddd;
        cursor: pointer;
        margin-left: 20px;
    }
    .user-info-box:hover {
        color: #fff;
    }
    .a-logout {
        display: inline-block;
        margin-left: 10px;
        color: #f5f5f5;
    }
    .main-content {
        display: flex;
    }
    .main-left-menu {
        width: 200px;
        overflow-y: auto;
        overflow-x: hidden;
        background: rgb(84, 92, 100);
    }
    .page-container {
        width: 500px;
        padding: 5px;
    }
</style>
<template>
  <div class="main-headbar">
    <div class="left">
        <!-- <span>{{$t('localization.sysTitle')}}</span> -->
        <img src="../../static/images/logo.png" class="ml8 mr24 poi" @click="goHome" />
    </div>
    <div class="right-box">
        <div class="language-box">
            <span>{{$t('localization.wkly')}}</span>/
            <span>{{$t('localization.english')}}</span>
            <div class="lang-list-box">
                <div class="zone-box">
                    <label>{{$t('localization.countryArea')}}</label>
                    <el-select
                        v-model="currentZoneValue"
                        filterable
                        :placeholder="$t('localization.pleaseChoose')"
                    >
                        <el-option
                            v-for="item in zoneOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        ></el-option>
                    </el-select>
                </div>
                <div class="lang-box">
                    <label>{{$t('localization.language')}}</label>
                    <div class="current-lang-box">{{currentLang.label}}</div>
                    <div
                        class="lang-item"
                        v-for="(item, index) in langOptions"
                        :key="index"
                        @click="switchLanguage(item.value)"
                    >{{item.label}}</div>
                </div>
            </div>
        </div>
        <span class="v-line">|</span>
        <div class="user-info-box">
            <i class="el-icon-user-solid"></i>
            <span>{{$t('localization.supplierManager')}}</span>
            <i class="el-icon-arrow-down"></i>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        visible: {
            type: [Boolean, Number]
        },
        title: {
            type: String
        },
        id: {
            type: String
        }
    },
    data () {
        return {
            changePwdVisible: false,
            pwdForm: {
                originPwd: '',
                newPwd: '',
                reNewPwd: ''
            },
            value: this.$i18n.locale,
            currentZoneValue: {
                value: '1',
                label: '保加利亚'
            },
            zoneOptions: [
                {
                    value: '1',
                    lable: '保加利亚'
                },
                {
                    value: '2',
                    lable: '罗马尼亚'
                },
                {
                    value: '3',
                    lable: '塞尔维亚'
                },
                {
                    value: '4',
                    lable: '阿尔巴尼亚'
                }
            ],
            currentLang: {
                value: '',
                label: ''
            },
            departmentData: '',
            menuData: [],
            userInfo: {
                name: '',
                id: ''
            }
        }
    },
    mounted () {
    },
    computed: {
        height () {
            return window.innerHeight - 50
        },
        subwinBodyHeight () {
            return window.innerHeight - 96
        },
        langOptions() {
            return [
                {
                    value: 'zh-CN',
                    label: this.$t('localization.simpleZh') // '简体中文'
                },
                {
                    value: '2',
                    label: this.$t('localization.fantiZh') // '繁体中文'
                },
                {
                    value: 'en-US',
                    label: this.$t('localization.english') // '英语'
                },
                {
                    value: 'Bul',
                    label: this.$t('localization.bulgaria') // '保加利亚语'
                },
                {
                    value: '5',
                    label: this.$t('localization.german') // '德语'
                },
                {
                    value: '6',
                    label: this.$t('localization.spain') // '西班牙语'
                }
            ]
        }
    },
    methods: {
        switchLanguage(value) {
            this.$i18n.locale = value
            // 在选择了显示的语言后，将配置保存到Cookie中
            this.$cookie.set(
                'DefaultLanguage',
                value, //
                {
                    expires: '30m' // 默认cookie有效时间为30分钟
                }
            )
        },
        // getLoginSid() {
        //     let token = sessionStorage.accessToken
        //     let sid = this.getQueryString('sid')
        //     if (!token || token === 'undefined') {
        //         if (sid) {
        //             this.login(sid)
        //         } else {
        //             location.href = window.loginRedirectUrl
        //         }
        //     } else {
        //         // 页面刷新时
        //         // alert('页面刷新时，根据sid请求菜单数据: ' + sid)
        //         let sid = this.getQueryString('sid') || sessionStorage.sid
        //         this.login(sid)
        //     }
        // },
        goHome() {
            this.$router.push('/')
        },
        // login(sid) {
        //     ZT_INTERFACE.login.getToken({ sid: sid }).then(
        //         res => {
        //             console.log(res, res.headers['rmp-token'])
        //             if (res) {
        //                 sessionStorage.sid = sid
        //                 let code = res.data.code
        //                 if (code === 0) {
        //                     let data = res.data.data
        //                     sessionStorage.accessToken = data['accessToken']
        //                     this.menuData = data.menus.menuList.map(item => {
        //                         let name = item.name
        //                         let list = item.list.map(sec => {
        //                             return {
        //                                 name: sec.name,
        //                                 url: sec.url
        //                             }
        //                         })
        //                         return {
        //                             name: name,
        //                             list: list
        //                         }
        //                     })
        //                     const filterDep = item => {
        //                         return {
        //                             label: item.departmentName,
        //                             value: item.departmentId
        //                         }
        //                     }
        //                     this.userInfo.name = data.userName
        //                     location.href =
        //                         location.origin + '/' + location.hash
        //                 }
        //             }
        //         },
        //         err => {
        //             this.$alert(err.message, '提示', {
        //                 type: 'error',
        //                 confirmButtonText: '确定'
        //             })
        //         }
        //     )
        // },
        handleSelect(key, keyPath) {
            console.log(key, keyPath)
            this.$router.push({ path: key })
        },
        onLangChanged(index, item) {
            this.currentLang.value = item.value
            this.currentLang.label = item.label
        },
        renderMenu(menuData) {},
        handleOpen(key, keyPath) {
            console.log(key, keyPath)
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath)
        },
        departmentChange() {
            // 模拟异步
            setTimeout(() => {
                this.$store.dispatch({
                    type: 'department',
                    department: this.departmentData
                })
            })
        },
        getQueryString(name) {
            let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
            let r = window.location.search.substr(1).match(reg)
            if (r != null) {
                return unescape(r[2])
            }
            return null
        },
        logout() {
            // 退出登录
            sessionStorage.removeItem('accessToken')
            sessionStorage.removeItem('sid')
            location.href = window.logoutRedirecturl
        },
        socket() {
            // let socket = io.connect();// 与服务器进行连接
            // console.log(io, socket, 9999)
            // socket.emit('foo', 'hello');// 发送一个名为foo的事件，并且传递一个字符串数据‘hello’
        }
    }
}
</script>
<style lang="scss">
.subwin-mask {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2000;
    background: rgba(0, 0, 0, 0.5);
}
.subwin-wrapper {
    position: absolute;
    right: 0;
    top: 50px;
    bottom: 0;
    background: #fff;
    z-index: 2000;
    box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.3);
    transition: all 0.5s ease-in-out;
    width: 85vw;
    .subwin-header {
        height: 45px;
        line-height: 45px;
        background: #f2f6fc;
        border-bottom: 1px solid #e4e7ed;
        text-align: center;
        font-size: 24px;
        .subwin-header-title {
            text-align: center;
            font-size: 24px;
        }
    }
    .subwin-body {
        overflow: auto;
        .subwin-content {
            height: calc(100% - 91px);
        }
        .subwin-close-btn {
            position: absolute;
            left: -30px;
            top: 50%;
            width: 50px;
            height: 50px;
            background: #fff;
            border-radius: 50%;
            cursor: pointer;
            line-height: 34px;
            text-align: center;
            font-size: 26px;
            z-index: -1;
            .el-icon-circle-close {
                position: absolute;
                top: 11px;
                left: 4px;
                color: #ccc;
                transition: all 0.1s;
                &:hover {
                    color: #888;
                }
            }
        }
        &::-webkit-scrollbar {
            width: 4px;
            background-color: #f5f5f5;
        }
        &::-webkit-scrollbar-thumb {
            background-color: #a1a2a5;
        }
        &::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            background-color: #f5f5f5;
        }
    }
}
</style>
