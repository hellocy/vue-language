import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/common.scss'
import '@/styles/transition.scss'
import '@/styles/design-el-form.scss'
import '@/styles/iconfont.scss'
import vueCookie from 'vue-cookie'
import VueI18n from 'vue-i18n'
import locale from 'element-ui/lib/locale'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import enLocale from 'element-ui/lib/locale/lang/en'
import App from './App'
import router from './router'
import store from './store'
import '@/permission'
import PLM_INTERFACE from '@/api/index'
import filters from './utils/filters'
import {
    computedTableHeight,
    sessionStore,
    storeCondition,
    removeCondition,
    autoLogin
} from './utils'

import { message } from '@/utils/resetMessage'

import servers from '@/servers'
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'

const host = location.host
const {
    serverHost
} = servers.get(host) || servers.get('dev')
window.PLM_INTERFACE = PLM_INTERFACE // 全局API

window.computedTableHeight = computedTableHeight
window.storeCondition = storeCondition // 存储查询条件和页码的方式
window.removeCondition = removeCondition // 移除查询条件和页码的方式
window.SERVERHOST = serverHost

// autoLogin()

// 定义全局Filter过滤器
Object.keys(filters).map(key => Vue.filter(key, filters[key]))

Vue.use(ElementUI, {
    zhLocale
})
Vue.use(vueCookie)
Vue.use(VueI18n)
Vue.use(Viewer)

Vue.prototype.$message = message

Vue.mixin({
    beforeRouteEnter(to, from, next) {
        next(vm => {
            let searchObj = sessionStore('searchFormData')
            let path = to.path
            if (searchObj && searchObj[path]) {
                vm.searchForm = searchObj[path].searchForm
                vm.tablePage = searchObj[path].tablePage
                if (searchObj[path].tabId && vm.activeName) {
                    vm.activeName = searchObj[path].tabId
                }
            }
            vm.initTable && vm.initTable()
        })
    }
})

// InitLanguage  这里引入了vue-cookie,是为了将用户选择的语言存储到Cookie里，在以后访问站点不需要重新选择语言
function InitLanguage() {
    return Vue.cookie.get('DefaultLanguage') === null ? 'zh-CN' : Vue.cookie.get('DefaultLanguage')
}

const i18n = new VueI18n({
    locale: InitLanguage(), // 语言标识,默认汉语,先去cookie查找，如果存在并有效，cookie值即为默认语言类型；否则默认为中文简体
    messages: {
        'en-US': Object.assign(require('./language/en'), enLocale),
        'zh-CN': Object.assign(require('./language/zh'), zhLocale),
        'Bul': Object.assign(require('./language/bul'))
    }
    // silentTranslationWarn: true
})
// locale.i18n((key, value) => i18n.t(key, value)) // 为了之后将element-ui组件本地化

window.VUE = new Vue({
    el: '#app',
    router,
    store,
    i18n,
    render: h => h(App)
})
