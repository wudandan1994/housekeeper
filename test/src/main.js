// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/vuex/index'
import wx from 'weixin-jsapi'
Vue.use(wx)
Vue.config.productionTip = false
// 引入插件兼容Ie
import 'babel-polyfill'
import "../node_modules/babel-polyfill/dist/polyfill.js"
// 引入公共css
import '@/assets/css/common.css'
// 引入图标库
import '@/assets/icon/iconfont.css'
import '@/assets/icon/iconfont.js'

import axios from 'axios'
Vue.prototype.$http = axios
// 允许跨域
axios.defaults.withCredentials = true
// 引入适配
import 'lib-flexible/flexible'

import { Actionsheet,Button,Switch,Dialog,RadioGroup, Uploader ,Radio,Tabbar,TabbarItem,Popup,Icon, Field ,NavBar,Swipe,Collapse,CollapseItem, SwipeItem,NoticeBar ,Tab, Tabs,Toast,Checkbox, CheckboxGroup ,Area,Lazyload,Loading,Rate   } from 'vant'
Vue.use(Actionsheet)
Vue.use(Button)
Vue.use(Switch)
Vue.use(Dialog)
Vue.use(RadioGroup)
Vue.use(Uploader)
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





/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
