import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common'
import tabRouter from './modules/tab_router'
import menus from './modules/menus'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        common,
        tabRouter,
        menus
    },
    leftMenuVisible: false
})

export default store
