/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-04-09 16:57:17
 * @LastEditTime: 2019-08-21 15:02:31
 * @LastEditors: Please set LastEditors
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/vuex/index'
// import wx from 'weixin-jsapi'
// Vue.use(wx)
Vue.config.productionTip = false


// 引入插件兼容Ie
import 'babel-polyfill'
import "../node_modules/babel-polyfill/dist/polyfill.js"
// 引入公共css
import '@/assets/css/common.css'
import back from './lib/back'
// import touch from './lib/touch.js'

// import animated from 'animate.css'

// Vue.use(animated)

// 引入导览
// import Smartour from 'smartour/dist/index.esm.js'

import axios from 'axios'
import utils from '@/lib/params'
// Vue.prototype.$http = axios
Vue.prototype.$utils = utils
// 引入适配
import 'lib-flexible/flexible'
import {
        Actionsheet,Button,Switch,Dialog,RadioGroup,Pagination , PullRefresh ,DatetimePicker ,Uploader ,
        Radio,Tabbar,TabbarItem,Popup,Icon, Field ,NavBar,Swipe,Collapse,CollapseItem, SwipeItem,NoticeBar ,
        Tab, Tabs,Toast,Checkbox, CheckboxGroup ,Area,Lazyload,Loading,Rate,Picker,Cell, CellGroup
        // DropdownMenu,DropdownItem    
       } from 'vant'
Vue.use(Actionsheet)
Vue.use(Button)
Vue.use(Switch)
// Vue.use(DropdownMenu).use(DropdownItem)
Vue.use(Dialog)
Vue.use(PullRefresh)
Vue.use(RadioGroup)
Vue.use(DatetimePicker)
Vue.use(Uploader)
Vue.use(Pagination)
Vue.use(Radio)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Popup)
Vue.use(Icon)
Vue.use(Field)
Vue.use(NavBar)
Vue.use(Swipe).use(SwipeItem)
Vue.use(Collapse).use(CollapseItem)
Vue.use(NoticeBar)
Vue.use(Tab).use(Tabs)
Vue.use(Checkbox).use(CheckboxGroup)
Vue.use(Toast)
Vue.use(Area)
Vue.use(Lazyload)
Vue.use(Loading)
Vue.use(Rate)
Vue.use(Picker)
Vue.use(Cell).use(CellGroup)

// 引入图标库
// import '@/assets/icon/iconfont.css'
// import '@/assets/icon/iconfont.js'



/* eslint-disable no-new */
new Vue({
  el: '#app',
  back,
  router,
  store,
  components: { App },
  template: '<App/>'
})
