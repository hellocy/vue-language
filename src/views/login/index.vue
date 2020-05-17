<style lang="scss" scoped>
.main-header {
    height: 60px;
    display: flex;
    background: #555; //rgb(84, 92, 100);
    color: #fff;
    justify-content: space-between;
}

.logo-box {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 20vw;
    height: 60px;
    line-height: 54px;
    min-width: 200px;
    font-size: 32px;
    padding-left: 10px;
}

.right-lang-box {
    width: 20vw;
    height: 60px;
    line-height: 54px;
    text-align: right;
    padding-right: 10px;
    cursor: pointer;
}

.login-form-wraper {
    width: 400px;
    height: 300px;
    border: 1px solid #ddd;
    margin: 100px auto;
    border-radius: 3px;
    padding: 30px;
    text-align: center;
}

.login-item {
    margin-top: 10px;
    margin-bottom: 20px;
    padding: 0 20px;
}
.v-code-bopx {
    display: flex;
    justify-content: space-between;
}

.v-code-img-box {
    width: 100px;
    height: 38px;
    border: 1px solid #eee;
    box-sizing: border-box;
}

.change-vcode-link {
    display: inline-block;
    height: 38px;
    line-height: 38px;
    font-size: 12px;
}

.btn-login {
    width: 350px;
    background: orange;
    border: 1px solid orange;
    height: 40px;
    border-radius: 2px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.2s;
    margin-top: 30px;
}
.btn-login:hover {
    background: orange;
    border: 1px solid orange;
}

.btn-login.disabled {
    background: orange;
    border: 0;
}
</style>

<template>
    <div>
        <div class="login-form-wraper">
            <el-form :model="formData" :rules="rules" label-width="60px" ref="formLogin">
                <el-form-item label="用户名">
                    <el-input v-model="formData.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="formData.password"></el-input>
                </el-form-item>
                <el-form-item label="验证码">
                    <div class="v-code-bopx">
                        <el-input v-model="formData.digits" style="width: 180px;"></el-input>
                        <div class="v-code-img-box">
                            <img :src="vCodeImgSrc" alt />
                        </div>
                        <a href="javascript:" class="change-vcode-link" @click="getVcode">换一张</a>
                    </div>
                </el-form-item>
                <el-button type="primary" class="btn-login" @click="onSubmit">登 录</el-button>
            </el-form>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { localStore, sessionStore } from '@/utils'
export default {
    data() {
        return {
            formData: {
                username: '',
                password: '',
                digits: ''
            },
            rules: {},
            vCodeImgSrc: '',
            vcodeId: ''
        }
    },
    computed: {
        ...mapGetters({
            menuData: 'menuList'
        })
    },
    created() {
        this.getVcode()
        this.$store.dispatch('common/leftMenuVisible', false)
    },
    methods: {
        getVcode() {
            this.formData.digits = ''
            let ZT_INTERFACE = window.ZT_INTERFACE
            ZT_INTERFACE.login.getVcode().then(res => {
                const data = res.data
                this.vCodeImgSrc = data.data.split('imgge').join('image')
                this.vcodeId = data.id
            })
        },
        refreshVcode() {
            let ZT_INTERFACE = window.ZT_INTERFACE
            let param = {
                id: this.vcodeId
            }
            ZT_INTERFACE.login.refreshVcode(param).then(res => {
                const data = res.data
                this.vCodeImgSrc = data.data
                this.vcodeId = data.id
            })
        },
        goHome() {},
        onSubmit() {
            let ZT_INTERFACE = window.ZT_INTERFACE
            let param = {
                username: this.formData.username,
                password: this.formData.password,
                id: this.vcodeId,
                digits: this.formData.digits
            }
            if (!this.formData.username || !this.formData.password) {
                return this.$message({
                    showClose: true,
                    message: '请输入用户名和密码',
                    type: 'error'
                })
            }
            this.getVcode()
            ZT_INTERFACE.login.login(param).then(res => {
                const data = res.data
                if (data.status === 0) {
                    sessionStore('test', 'Bearer cycycy')
                    sessionStore('accessToken', 'Bearer ' + data.token.substring(0, data.token.length))
                    setTimeout(() => {
                        this.$router.push('/')
                    })    
                }
            })
        }
    }
}
</script>
