import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import homeComponent from '@/pages/home'
import cardCenterComponent from '@/pages/cardCenter'
import clearCacheComponent from '@/pages/clearCache'
import businessCooperationComponent from '@/pages/businessCooperation'
import bindingPhoneComponent from '@/pages/bindingPhone'
import customerServiceComponent from '@/pages/customerService'
import aboutUsComponent from '@/pages/aboutUs'
import accountManagementComponent from '@/pages/accountManagement'
import modifyPhoneComponent from '@/pages/modifyPhone'
import loginComponent from '@/pages/login'
import newsComponent from '@/pages/news'
import inviteFriendsComponent from '@/pages/inviteFriends'
import creditHousekeeperComponent from '@/pages/creditHousekeeper'
import aisleHousekeeperComponent from '@/pages/aisleHousekeeper'
import registerComponent from '@/pages/register'
import forgetPasswordComponent from '@/pages/forgetPassword'
import modifyLoginPasswordComponent from '@/pages/modifyLoginPassword'
import consultationComponent from '@/pages/consultation'
import noviceGuideComponent from '@/pages/noviceGuide'
import liftingAmountComponent from '@/pages/liftingAmount'
import myOrderComponent from '@/pages/myOrder'
import progressQueryComponent from '@/pages/progressQuery'
import receivablesComponent from '@/pages/receivables'
import transactionQueryComponent from '@/pages/transactionQuery'
import storageComponent from '@/pages/storage'
import passagewayComponent from '@/pages/passageway'
import reportExampleComponent from '@/pages/reportExample'
import rateComponent from '@/pages/rate'
import verifiedComponent from '@/pages/verified/index.vue'
import verifiedNameComponent from '@/pages/verifiedName/index.vue'
import creditDataQueryComponent from '@/pages/creditDataQuery'
import violationInquiryComponent from '@/pages/violationInquiry'
import addCarComponent from '@/pages/addCar'
import addSaveComponent from '@/pages/addSave'
import punchComponent from '@/pages/punch'
import totalPunchComponent from '@/pages/totalPunch'
import systemNewsComponent from '@/pages/systemNews'
import vipComponent from '@/pages/vip'
import personalCenterComponent from '@/pages/personalCenter'
import shareComponent from '@/pages/share'
import financialCircleComponent from '@/pages/financialCircle'
import realNameComponent from '@/pages/realName'
import creditEnquiryComponent from '@/pages/creditEnquiry'
import inviteShareComponent from '@/pages/inviteShare'
import loan from '@/pages/loan'
import loandetail from '@/pages/loan/detail'
import form from '@/pages/loan/form'
// 账户管理
import userAccountManage from '@/pages/userAccountManage'
// 收益明细
import income from '@/pages/userAccountManage/Income'
// 收入明细表
import incomedetail from "@/pages/userAccountManage/incomedetail"
// 下级收入明细
import personalIncomeDetail from '@/pages/userAccountManage/personalIncomeDetail'
// 积分明细
import integralDetail from '@/pages/userAccountManage/integralDetail'
import integralCash from '@/pages/userAccountManage/integralCash'
import addcard from '@/pages/userAccountManage/addcard'
// 添加支付宝账户
import alipay from '@/pages/userAccountManage/alipay'
// 2019年4月2日10:41:43

import posterComponent from '@/pages/poster'
import principleComponent from '@/pages/principle'
import dataComponent from '@/pages/data'
import businessCardComponent from '@/pages/businessCard'
import creditCardLinkComponent from '@/pages/creditCardLink'
import shareLinkComponent from '@/pages/shareLink'
import promotionMaterialComponent from '@/pages/promotionMaterial'
import corporateVideoComponent from '@/pages/corporateVideo'
import adsNewsComponent from '@/pages/adsNews'


export default new Router({
  routes: [
    { path: '/',redirect:'/home'},
    {path:"/vip",component:vipComponent},
    {path:"/home",component:homeComponent},
    {path:"/login",component:loginComponent},
    {path:"/register",component:registerComponent},
    {path:"/forgetPassword",component:forgetPasswordComponent},
    {path:"/home/punch",component:punchComponent},
    {path:"/home/news",component:newsComponent},
    {path:"/home/creditHousekeeper",component:creditHousekeeperComponent},
    {path:"/home/creditHousekeeper/aisleHousekeeper",component:aisleHousekeeperComponent},
    {path:"/share/inviteFriends",component:inviteFriendsComponent},
    {path:"/share/inviteFriends/inviteShare",component:inviteShareComponent},
    {path:"/share/poster",component:posterComponent},
    {path:"/share/promotionMaterial",component:promotionMaterialComponent},
    {path:"/share/principle",component:principleComponent},
    {path:"/share/data",component:dataComponent},
    {path:"/share/adsNews",component:adsNewsComponent},
    {path:"/share/businessCard",component:businessCardComponent},
    {path:"/share/creditCardLink",component:creditCardLinkComponent},
    {path:"/home/clearCache",component:clearCacheComponent},
    {path:"/home/accountManagement", component:accountManagementComponent,},
    {path:"/home/accountManagement/modifyLoginPassword", component:modifyLoginPasswordComponent,},
    {path:"/home/accountManagement/modifyPhone", component:modifyPhoneComponent,},
    {path:"/home/punch/totalPunch",component:totalPunchComponent},
    {path:"/home/violationInquiry",component:violationInquiryComponent},
    {path:"/home/violationInquiry/addCar",component:addCarComponent},
    {path:"/home/violationInquiry/addCar/addSave",component:addSaveComponent},
    {path:"/home/cardCenter",component:cardCenterComponent,},
    {path:"/home/creditEnquiry",component:creditEnquiryComponent,},
    {path:"/home/systemNews",component:systemNewsComponent,},
    {path:"/home/verified",component:verifiedComponent,},
    {path:"/home/verified/verifiedName",component:verifiedNameComponent,},
    {path:"/home/bindingPhone",component:bindingPhoneComponent,},
    {path:"/home/customerService",component:customerServiceComponent,},
    {path:"/home/aboutUs",component:aboutUsComponent,},
    {path:"/home/creditEnquiry/myOrder",component:myOrderComponent,},
    {path:"/home/creditEnquiry/creditDataQuery",component:creditDataQueryComponent,},
    {path:"/home/creditEnquiry/reporyExample",component:reportExampleComponent,},
    {path:"/home/cardCenter/liftingAmount",component:liftingAmountComponent,},
    {path:"/home/cardCenter/progressQuery",component:progressQueryComponent,},
    {path:"/home/cardCenter/businessCooperation",component:businessCooperationComponent,},
    {path:"/home/cardCenter/noviceGuide",component:noviceGuideComponent,},
    {path:"/home/receivables",component:receivablesComponent,},
    {path:"/home/receivables/transactionQuery",component:transactionQueryComponent,},
    {path:"/home/receivables/rate",component:rateComponent,},
    {path:"/home/receivables/passageway",component:passagewayComponent,},
    {path:"/home/receivables/storage",component:storageComponent,},
    {path:"/home/cardCenter/consultation",component:consultationComponent,},
    {path:"/personalCenter",component:personalCenterComponent},
    {path:"/share",component:shareComponent},
    {path:"/financialCircle",component:financialCircleComponent},
    {path:"/vip/realName",component:realNameComponent},
    {path: '/home/loan', component: loan},
    {path: '/loan/detail',component: loandetail},
    {path: '/loan/form',component: form},
    {path: '/ponserCenter/userAccountManage',component: userAccountManage},
    {path: '/personalCenter/income',component: income},
    {path: '/personalCenter/incomedetail',component: incomedetail},
    {path: '/personalCenter/incomedetail/personalIncomeDetail',component: personalIncomeDetail},
    {path: '/personalCenter/incomedetail/integralDetail',component: integralDetail},
    {path: '/personalCenter/incomedetail/integralCash',component: integralCash},
    {path: '/personalCenter/incomedetail/addcard',component: addcard},
    {path: '/personalCenter/addcard/alipay',component: alipay},
  ]
})
