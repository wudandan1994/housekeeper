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
// 引入分享的css
// import '@/assets/css/share.css'
import axios from 'axios'
Vue.prototype.$http = axios
// axios.defaults.withCredentials = true
// axios.defaults.baseURL = 'http://pay.91dianji.com.cn/api';
// 引入适配
import 'lib-flexible/flexible'
import { Actionsheet,Button,Switch,Dialog,RadioGroup,Pagination , DatetimePicker ,Uploader ,Radio,Tabbar,TabbarItem,Popup,Icon, Field ,NavBar,Swipe,Collapse,CollapseItem, SwipeItem,NoticeBar ,Tab, Tabs,Toast,Checkbox, CheckboxGroup ,Area,Lazyload,Loading,Rate,Picker    } from 'vant'
Vue.use(Actionsheet)
Vue.use(Button)
Vue.use(Switch)
Vue.use(Dialog)
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
// Vue.use(Step).use(Steps);

// 引入图标库
import '@/assets/icon/iconfont.css'
import '@/assets/icon/iconfont.js'



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
