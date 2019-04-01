// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
// 引入插件兼容Ie
import 'babel-polyfill'
// 引入公共css
import './assets/css/common.css'
// 引入图标库
import '@/assets/icon/iconfont.css'

import axios from 'axios'
Vue.prototype.$http = axios
// 允许跨域
axios.defaults.withCredentials = true
// 引入适配
import 'lib-flexible/flexible'

import { Button,Switch,Dialog,RadioGroup, Radio,Tabbar,TabbarItem,Popup,Icon, Field ,NavBar,Swipe, SwipeItem,NoticeBar ,Tab, Tabs,Toast,Checkbox, CheckboxGroup ,} from 'vant'
Vue.use(Button)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Icon)
Vue.use(NavBar)
Vue.use(Field)
Vue.use(Swipe).use(SwipeItem)
Vue.use(NoticeBar)
Vue.use(Toast)
Vue.use(Tab).use(Tabs)
Vue.use(Popup)
Vue.use(Switch)
Vue.use(Dialog)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(Checkbox).use(CheckboxGroup);





/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
