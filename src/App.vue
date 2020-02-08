<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
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
    <div>
        <div class="main-headbar">
            <div class="left">
                <span>{{$t('localization.sysTitle')}}</span>
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
        <div class="main-content">
            <div class="main-left-menu">
                <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    @select="handleSelect"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                >
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-office-building"></i>
                            <span slot="title">系统管理</span>
                        </template>
                        <el-menu-item index="/system_manage/user/list">用户管理</el-menu-item>
                        <el-menu-item index="/system_manage/role_group/list">角色管理</el-menu-item>
                        <el-menu-item index="1-3">权限管理</el-menu-item>
                        <el-menu-item index="1-4">菜单管理</el-menu-item>
                        <el-menu-item index="1-5">页面元素管理</el-menu-item>
                        <el-menu-item index="1-6">API管理</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>内容运营管理</span>
                        </template>
                        <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="3">
                        <i class="el-icon-s-custom"></i>
                        <span slot="title">会员权益管理</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-s-grid"></i>
                        <span slot="title">内容审核管理</span>
                    </el-menu-item>
                    <el-menu-item index="5">
                        <i class="el-icon-s-finance"></i>
                        <span slot="title">支付审核管理</span>
                    </el-menu-item>
                    <el-menu-item index="6">
                        <i class="el-icon-user-solid"></i>
                        <span slot="title">注册用户管理</span>
                    </el-menu-item>
                    <el-menu-item index="7">
                        <i class="el-icon-user"></i>
                        <span slot="title">会员信息</span>
                    </el-menu-item>
                    <el-menu-item index="8">
                        <i class="el-icon-s-check"></i>
                        <span slot="title">认证管理</span>
                    </el-menu-item>
                    <el-menu-item index="9">
                        <i class="el-icon-s-data"></i>
                        <span slot="title">统计报表</span>
                    </el-menu-item>
                </el-menu>
            </div>
            <div class="page-container" id="app">
                <router-view></router-view>
            </div>
        </div>

        <el-dialog title="修改密码" :visible.sync="changePwdVisible" label-width="80px" width="500px">
            <el-form :model="pwdForm" label-width="85px">
                <el-form-item label="原密码">
                    <el-input v-model="pwdForm.originPwd" autocomplete="off" placeholder="输入原密码"></el-input>
                </el-form-item>
                <el-form-item label="新密码">
                    <el-input
                        v-model="pwdForm.newPwd"
                        autocomplete="off"
                        placeholder="最少8位，包含数字、大小写字母及字符"
                    ></el-input>
                </el-form-item>
                <el-form-item label="确认新密码">
                    <el-input v-model="pwdForm.reNewPwd" autocomplete="off" placeholder="再次输入新密码"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button size="mini" @click="dialogFormVisible = false">取 消</el-button>
                <el-button size="mini" type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
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
    computed: {
        langOptions() {
            return [
                {
                    value: 'zh-CN',
                    label: this.$t('localization.simpleZh') // '简体中文'
                },
                {
                    value: '2',
                    label: this.$t('localization.fantiZh') //'繁体中文'
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
                    label: this.$t('localization.german') //'德语'
                },
                {
                    value: '6',
                    label: this.$t('localization.spain') //'西班牙语'
                }
            ]
        }
    },
    mounted: function() {
        // this.getLoginSid()
        let mainContent = document.querySelector('.main-content')
        let pageContainer = document.querySelector('.page-container')
        mainContent.style.height = window.innerHeight - 60 + 'px'
        pageContainer.style.width = window.innerWidth - 200 + 'px'
    },
    methods: {
        switchLanguage(value) {
            this.$i18n.locale = value
            //在选择了显示的语言后，将配置保存到Cookie中
            this.$cookie.set(
                'DefaultLanguage',
                value, //
                {
                    expires: '30m' // 默认cookie有效时间为30分钟
                }
            )
        },
        getLoginSid() {
            let token = sessionStorage.accessToken
            let sid = this.getQueryString('sid')
            if (!token || token === 'undefined') {
                if (sid) {
                    this.login(sid)
                } else {
                    location.href = window.loginRedirectUrl
                }
            } else {
                // 页面刷新时
                // alert('页面刷新时，根据sid请求菜单数据: ' + sid)
                let sid = this.getQueryString('sid') || sessionStorage.sid
                this.login(sid)
            }
        },
        login(sid) {
            RP_INTERFACE.login.getToken({ sid: sid }).then(
                res => {
                    console.log(res, res.headers['rmp-token'])
                    if (res) {
                        sessionStorage.sid = sid
                        let code = res.data.code
                        if (code === 0) {
                            let data = res.data.data
                            sessionStorage.accessToken = data['accessToken']
                            this.menuData = data.menus.menuList.map(item => {
                                let name = item.name
                                let list = item.list.map(sec => {
                                    return {
                                        name: sec.name,
                                        url: sec.url
                                    }
                                })
                                return {
                                    name: name,
                                    list: list
                                }
                            })
                            const filterDep = item => {
                                return {
                                    label: item.departmentName,
                                    value: item.departmentId
                                }
                            }
                            this.userInfo.name = data.userName
                            location.href =
                                location.origin + '/' + location.hash
                        }
                    }
                },
                err => {
                    this.$alert(err.message, '提示', {
                        type: 'error',
                        confirmButtonText: '确定'
                    })
                }
            )
        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath)
            this.$router.push({ path: key })
        },
        onLangChanged(index, item) {
            this.currentLang.value = item.value
            this.currentLang.label = item.label
        },
        renderMenu(menuData) {},
        handleSelect(key, keyPath) {
            console.log(key, keyPath)
            this.$router.push({ path: key })
        },
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
