/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-04-09 16:57:17
 * @LastEditTime: 2019-11-28 15:24:47
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const homeComponent = () =>import('@/pages/home')
const cardCenterComponent = () =>import('@/pages/cardCenter')
const clearCacheComponent = () =>import('@/pages/clearCache')
const businessCooperationComponent = () =>import('@/pages/businessCooperation')

// import cardCenterComponent from '@/pages/cardCenter'
const bindingPhoneComponent = () =>import('@/pages/bindingPhone')

// import customerServiceComponent from '@/pages/customerService'
const customerServiceComponent = () =>import('@/pages/customerService')

// import aboutUsComponent from '@/pages/aboutUs'
const aboutUsComponent = () =>import('@/pages/aboutUs')

// import accountManagementComponent from '@/pages/accountManagement'
const accountManagementComponent = () =>import('@/pages/accountManagement');

// import loginComponent from '@/pages/login'
const loginComponent = () =>import('@/pages/login')

// import newsComponent from '@/pages/news'
const newsComponent = () =>import('@/pages/news')


// import logOutComponent from '@/pages/logOut'
const logOutComponent = () =>import('@/pages/logOut')

// import insertEsiCashComponent from '@/pages/insertEsiCash'
const insertEsiCashComponent = () =>import('@/pages/insertEsiCash')

// import iframeComponent from '@/pages/insertEsiCash/iframe'
const iframeComponent = () =>import('@/pages/insertEsiCash/iframe')

// import creditHousekeeperComponent from '@/pages/creditHousekeeper'
const creditHousekeeperComponent = () =>import('@/pages/creditHousekeeper')

// import aisleHousekeeperComponent from '@/pages/aisleHousekeeper'
const aisleHousekeeperComponent = () =>import('@/pages/aisleHousekeeper')

// import registerComponent from '@/pages/register'
const registerComponent = () =>import('@/pages/register')

// import forgetPasswordComponent from '@/pages/forgetPassword'
const forgetPasswordComponent = () =>import('@/pages/forgetPassword')

// import modifyLoginPasswordComponent from '@/pages/modifyLoginPassword'
const modifyLoginPasswordComponent = () =>import('@/pages/modifyLoginPassword')

// import consultationComponent from '@/pages/consultation'
const consultationComponent = () =>import('@/pages/consultation')

// import noviceGuideComponent from '@/pages/noviceGuide'
const noviceGuideComponent = () =>import('@/pages/noviceGuide')

// import liftingAmountComponent from '@/pages/liftingAmount'
const liftingAmountComponent = () =>import('@/pages/liftingAmount')

const bankserviceComponent = () =>import('@/pages/liftingAmount/bankservice')

// import myOrderComponent from '@/pages/myOrder'
const myOrderComponent = () =>import('@/pages/myOrder')

// import progressQueryComponent from '@/pages/progressQuery'
const progressQueryComponent = () =>import('@/pages/progressQuery')

// import receivablesComponent from '@/pages/receivables'
const receivablesComponent = () =>import('@/pages/receivables')

// import transactionQueryComponent from '@/pages/transactionQuery'
const transactionQueryComponent = () =>import('@/pages/transactionQuery')


// import passagewayComponent from '@/pages/passageway'
const passagewayComponent = () =>import('@/pages/passageway')


// import rateComponent from '@/pages/rate'
const rateComponent = () =>import('@/pages/rate')

// import verifiedComponent from '@/pages/verified/index.vue'
const verifiedComponent = () =>import('@/pages/verified/index')

// import verifiedNameComponent from '@/pages/verifiedName/index.vue'
const verifiedNameComponent = () =>import('@/pages/verifiedName/index')

// import violationInquiryComponent from '@/pages/violationInquiry'
const violationInquiryComponent = () =>import('@/pages/violationInquiry')

// import addCarComponent from '@/pages/addCar'
const addCarComponent = () =>import('@/pages/addCar')

// import punchComponent from '@/pages/punch'
const punchComponent = () =>import('@/pages/punch')

// import totalPunchComponent from '@/pages/totalPunch'
const totalPunchComponent = () =>import('@/pages/totalPunch')

// import systemNewsComponent from '@/pages/systemNews'
const systemNewsComponent = () =>import('@/pages/systemNews')

// import vipComponent from '@/pages/vip'
const vipComponent = () =>import('@/pages/vip')

// import personalCenterComponent from '@/pages/personalCenter'
const personalCenterComponent = () =>import('@/pages/personalCenter')

// import shareComponent from '@/pages/share'
const shareComponent = () =>import('@/pages/share')

// import DHbindComponent from '@/pages/DHbind' // 第三条还款通道绑卡 
const DHbindComponent = () =>import('@/pages/DHbind')   

// import DHregisterComponent from '@/pages/DHregister' // 第三条还款通道注册
const DHregisterComponent = () =>import('@/pages/DHregister')


// import financialCircleComponent from '@/pages/financialCircle'
const financialCircleComponent = () =>import('@/pages/financialCircle')

// import realNameComponent from '@/pages/realName'
const realNameComponent = () =>import('@/pages/realName')


// import inviteShareComponent from '@/pages/inviteShare'
const inviteShareComponent = () =>import('@/pages/inviteShare')

// import repaymentChannelComponent from '@/pages/repaymentChannel'
const repaymentChannelComponent = () =>import('@/pages/repaymentChannel')

// import makePlanComponent from '@/pages/makePlan'
const makePlanComponent = () =>import('@/pages/makePlan')

// import planListComponent from '@/pages/planList'
const planListComponent = () =>import('@/pages/planList')

// import changeCardComponent from '@/pages/changeCard'
const changeCardComponent = () =>import('@/pages/changeCard')

// import recordsComponent from '@/pages/records'
const recordsComponent = () =>import('@/pages/records')

// import largeAmountComponent from '@/pages/largeAmount'  // 大额鉴权
const largeAmountComponent = () =>import('@/pages/largeAmount')

// import largeCardComponent from '@/pages/largeCard'
const largeCardComponent = () =>import('@/pages/largeCard')

// import evaluationComponent from '@/pages/evaluation'
const evaluationComponent = () =>import('@/pages/evaluation')

// import activeComponent from '@/pages/active' // 大额激活
const activeComponent = () =>import('@/pages/active')

// import loan from '@/pages/loan'
const loan = () =>import('@/pages/loan')

// import loandetail from '@/pages/loan/detail'
const loandetail = () =>import('@/pages/loan/detail')

// import form from '@/pages/loan/form'
const form = () =>import('@/pages/loan/form')

// 账户管理
// import userAccountManage from '@/pages/userAccountManage'
const userAccountManage = () =>import('@/pages/userAccountManage')

// 收益明细
// import income from '@/pages/userAccountManage/Income'
const income = () =>import('@/pages/userAccountManage/Income')

// 收入明细表
// import incomedetail from "@/pages/userAccountManage/incomedetail"
const incomedetail = () =>import('@/pages/userAccountManage/incomedetail')

// 下级收入明细
// import personalIncomeDetail from '@/pages/userAccountManage/personalIncomeDetail'
const personalIncomeDetail = () =>import('@/pages/userAccountManage/personalIncomeDetail')

// 积分明细
// import integralDetail from '@/pages/userAccountManage/integralDetail'
const integralDetail = () =>import('@/pages/userAccountManage/integralDetail')

// import integralCash from '@/pages/userAccountManage/integralCash'
const integralCash = () =>import('@/pages/userAccountManage/integralCash')

// import addcard from '@/pages/userAccountManage/addcard'
const addcard = () =>import('@/pages/userAccountManage/addcard')

// 添加支付宝账户
// import alipay from '@/pages/userAccountManage/alipay'
const alipay = () =>import('@/pages/userAccountManage/alipay')

// 添加银行卡
// import UnionPay from "@/pages/userAccountManage/UnionPay"
const UnionPay = () =>import("@/pages/userAccountManage/UnionPay")

// 2019年4月2日14:52:41
//提现
// import cashComponent from '@/pages/userAccountManage/cash'
const cashComponent = () =>import('@/pages/userAccountManage/cash')

// 提现记录
// import recordComponent from "@/pages/userAccountManage/record"
const recordComponent = () =>import('@/pages/userAccountManage/record')

// import posterComponent from '@/pages/poster'
const posterComponent = () =>import('@/pages/poster')


// import dataComponent from '@/pages/data'
const dataComponent = () =>import('@/pages/data')

// import businessCardComponent from '@/pages/businessCard'
const businessCardComponent = () =>import('@/pages/businessCard')


// import adsNewsComponent from '@/pages/adsNews'
const adsNewsComponent = () =>import('@/pages/adsNews')

// import incomeBreakdownComponent from '@/pages/incomeBreakdown'
const incomeBreakdownComponent = () =>import('@/pages/incomeBreakdown')

// 支付宝支付中间页
// import middleAlipay from "@/pages/vip/middle"
const middleAlipay = () =>import('@/pages/vip/middle')

// import applyCardComponent from '@/pages/applyCard'
const applyCardComponent = () =>import('@/pages/applyCard')

// 上级推荐人
// import previousComponent from '@/pages/previous'
const previousComponent = () =>import('@/pages/previous')

// 绑定信用卡
// import bindingCreditCardComponent from '@/pages/bindingCreditCard'
const bindingCreditCardComponent = () =>import('@/pages/bindingCreditCard')

// 付款
// import repaymentComponent from '@/pages/repayment'
const repaymentComponent = () =>import('@/pages/repayment')

// 商户收款
// import collectComponent from '@/pages/collect'
const collectComponent = () =>import('@/pages/collect')

// 开通业务
// import openComponent from '@/pages/open'
const openComponent = () =>import('@/pages/open')
// 快捷支付
// import paymentComponent from '@/pages/payment'
const paymentComponent = () =>import('@/pages/payment')
// 第三方跳转
// import url from '@/pages/home/url'
const url = () =>import('@/pages/home/url')
// 计划详情
// import planDetailComponent from '@/pages/planDetail'
const planDetailComponent = () =>import('@/pages/planDetail')


// 百问百答
// import Questionandanswers from '@/pages/personalCenter/Questionandanswers'
const Questionandanswers = () =>import('@/pages/personalCenter/Questionandanswers')
// 平台手册
// import manual from '@/pages/personalCenter/manual'
const manual = () =>import('@/pages/personalCenter/manual')
// 商务合作
// import cooperation from '@/pages/personalCenter/cooperation'
const cooperation = () =>import('@/pages/personalCenter/cooperation')
// 联系我们
// import contactUs from '@/pages/personalCenter/contactUs'
const contactUs = () =>import('@/pages/personalCenter/contactUs')
// 我要贷款
// import myloan from '@/pages/loan/myloan'
const myloan = () =>import('@/pages/loan/myloan')
// 在线查询银联
// import onlineComponent from '@/pages/online'
const onlineComponent = () =>import('@/pages/online')
// 信用卡管家
// import cardManager from '@/pages/progressQuery/cardManager'
const cardManager = () =>import('@/pages/progressQuery/cardManager')
// 帮助中心
// import help from '@/pages/help/index'
const help = () =>import('@/pages/help/index')
// 推广原则
// import Extension from '@/pages/personalCenter/Extension'
const Extension = () =>import('@/pages/personalCenter/Extension')
// 新人教程
// import video from '@/pages/home/video'
const video = () =>import('@/pages/home/video')

// import radar from '@/pages/AIRadar/index'
const radar = () =>import('@/pages/AIRadar/index')

const vipRate = () =>import('@/pages/vip/vipRate')

// import nextLevel from '@/pages/AIRadar/nextdetail'
const nextLevel = () =>import('@/pages/AIRadar/nextdetail')

// import garbage from '@/pages/garbage/index'
const garbage = () =>import('@/pages/garbage/index')

// 解绑卡
// import cancelCard from '@/pages/aisleHousekeeper/cancelCard'
const cancelCard = () =>import('@/pages/aisleHousekeeper/cancelCard')
// 油卡
// import apply from '@/pages/Oilcard/apply'
const apply = () =>import('@/pages/Oilcard/apply')
// 完善详细信息
// import detailMessage from '@/pages/Oilcard/detail'
const detailMessage = () =>import('@/pages/Oilcard/detail')
// 行驶证
// import Driving from '@/pages/Oilcard/Driving'
const Driving = () =>import('@/pages/Oilcard/Driving')
// 领卡
// import Collar from '@/pages/Oilcard/Collar'
const Collar = () =>import('@/pages/Oilcard/Collar')
// 油卡支付页
// import youKaPay from '@/pages/Oilcard/order'
const youKaPay = () =>import('@/pages/Oilcard/order')
// 油卡邮寄地址
// import Address from '@/pages/Oilcard/Address'
const Address = () =>import('@/pages/Oilcard/Address')
// 油卡充值
// import Recharge from '@/pages/Oilcard/Recharge'
const Recharge = () =>import('@/pages/Oilcard/Recharge')
// 油卡列表
// import RechargeList from '@/pages/Oilcard/RechargeList'
const RechargeList = () =>import('@/pages/Oilcard/RechargeList')
// 充值中心
// import RechargeCenter from '@/pages/Oilcard/RechargeCenter'
const RechargeCenter = () =>import('@/pages/Oilcard/RechargeCenter')
// 充值明细
// import RechargeDetail from '@/pages/Oilcard/RechargeDetail'
const RechargeDetail = () =>import('@/pages/Oilcard/RechargeDetail')
// 激活
// import activation from '@/pages/Oilcard/activation'
const activation = () =>import('@/pages/Oilcard/activation')
// 充值记录
// import RechargeAllList from '@/pages/Oilcard/RechargeAllList'
const RechargeAllList = () =>import('@/pages/Oilcard/RechargeAllList')
// 下级数据列表，下级浏览数，点击联系方式
const nextList = () =>import('@/pages/AIRadar/nextList')
// 下级数据列表，新增客户，我的团队
const nextOtherList = () =>import('@/pages/AIRadar/nextOtherList')  
// 测试页，测试完请删除
const testpage = () =>import('@/pages/AIRadar/test')  
// import cardsComponent from '@/pages/receivables/cards'  //收款信用卡列表  
const  cardsComponent = () =>import('@/pages/receivables/cards')
 
const  largeZYComponent = () =>import('@/pages/largeZY')
const largeVerificateComponent = () =>import('@/pages/largeVerificate')  // 哲杨大额短信验证

const largeWFcardComponent = () => import('@/pages/largeWFcard')  //WF大额绑卡
const largeWFverifyComponent = () => import('@/pages/largeWFcard/verify')  //WF大额短信验证
const largeWFxeComponent = () => import('@/pages/largeWFxe')  //WF小额绑卡
const largeWFxeverifyComponent = () => import('@/pages/largeWFxe/verify')  //WF小额短信验证

const gameElsbComponent = () => import('@/pages/games/gameElsb.vue')  // 2048游戏
const gameCatComponent = () => import('@/pages/games/gameCat.vue')  // 2048游戏
const gameClockComponent = () => import('@/pages/games/gameClock.vue')  // clock游戏  


const receiveXHComponent = () => import('@/pages/receiveXH')  // 收单小惠通道
const cardCXComponent = () => import('@/pages/receiveXH/cardCX.vue')  // 收单小惠通道储蓄卡管理
const payXHComponent = () => import('@/pages/receiveXH/payXH.vue')  // 收单小惠通道支付 
const signXHComponent = () => import('@/pages/receiveXH/signXH.vue')  // 收单小惠通道签约

const signComponent = () => import('@/pages/receivables/sign.vue')  // 收单小惠通道签约(通道二)

const easyPayComponent = () => import('@/pages/easyPay')  // 工易付小额代还

const easycardComponent = () => import('@/pages/easyPay/easycard.vue')  // 工易付小额绑卡

const walletComponent = () => import('@/pages/totalPunch/wallet.vue')  //签到领红包
const taskedComponent = () => import('@/pages/totalPunch/tasked.vue')  //任务已完成
const taskrecordComponent = () => import('@/pages/totalPunch/taskrecord.vue')  //任务记录

const smallAmountMCComponent = () => import('@/pages/smallAmountMC')  //mc小额  

const largeAmountHCComponent = () => import('@/pages/largeAmountHC')  //汇潮大额 注册商户 
const sendmsgHCComponent = () => import('@/pages/largeAmountHC/sendmsgHC.vue')  //汇潮大额 发送短信
const uploadmsgComponent = () => import('@/pages/largeAmountHC/uploadmsg.vue')  //汇潮大额 短信验证

// const changeBillComponent = () => import('@/pages/changeBill')    // 换信用卡信息  
import changeBillComponent from '@/pages/changeBill'  // 换信用卡信息  

const largeAmountSCComponent = () => import('@/pages/largeAmountSC')  //SC大额通道 注册商户 
const sendmsgSCComponent = () => import('@/pages/largeAmountSC/sendmsgSC.vue')  //汇潮大额 发送短信

const videosComponent = () => import('@/pages/share/videos.vue')  //视频播放

const billDetailsComponent = () => import('@/pages/aisleHousekeeper/billDetails')  //立即还款
const budgetComponent = () => import('@/pages/aisleHousekeeper/budget')  //预算费用
const queryComponent = () => import('@/pages/aisleHousekeeper/query')  //账单查询

const extensionComponent = () => import('@/pages/vip/extension')  //账单查询

const smallAmountWYFComponent = () => import('@/pages/smallAmountWYF')  // wyf小额

const smallAmountSCComponent = () => import('@/pages/smallAmountSC')  // sc小额

const smallSCactiveComponent = () => import('@/pages/smallAmountSC/smallSCactive.vue')  // sc小额

const smallAmountRHComponent = () => import('@/pages/smallAmountRH')  // rh小额
const rhbindingComponent = () => import('@/pages/smallAmountRH/rhbinding')  // rh小额

const smallAmountXSComponent = () => import('@/pages/smallAmountXS')  // 新生小额
const xsbindingComponent = () => import('@/pages/smallAmountXS/xsbinding')  // 新生小额绑卡



const largeAmountRSRComponent = () => import('@/pages/largeAmountRSR')  // rsr大额注册商户

const rsrBindingComponent = () => import('@/pages/largeAmountRSR/rsrBinding')  // rsr大额绑卡

const rsrActiveComponent = () => import('@/pages/largeAmountRSR/rsrActive')  // rsr激活

const beautyBillComponent = () => import('@/pages/beautyBill')  // 美化账单

const exchangeRateComponent = () => import('@/pages/beautyBill/exchangeRate.vue')  // 实时汇率

const checkComponent = () => import('@/pages/beautyBill/check.vue')  // 选择卡验证

const detailbillComponent = () => import('@/pages/beautyBill/detailbill.vue')  // 选择金额




// 全球出行
const Trip = ()=>import('@/pages/mall/Trip')
// 安卓商城跳转中间件
const MallmiddleWare = ()=>import('@/pages/mall/MallmiddleWare')
// 大牌美食
const famousFoods = ()=>import('@/pages/mall/famousFoods')
// 生活服务
const lifeservice =()=>import('@/pages/mall/lifeservice')

// 融宝小额
const smallAmountRbcomponent = ()=>import('@/pages/smallAmountRb/index.vue')

// 融宝小额验证码
const rbbindingComponent = ()=>import('@/pages/smallAmountRb/rbbinding.vue')

const smallAmountYZcomponent = ()=>import('@/pages/smallAmountYZ')  // YZ小额注册
const smallYZbindcomponent = ()=>import('@/pages/smallAmountYZ/smallYZbind.vue')  // YZ小额注册

const largeAmountZSDHcomponent = ()=>import('@/pages/largeAmountZSDH')  // ZSDH大额注册
const sendmsgZSDHcomponent = ()=>import('@/pages/largeAmountZSDH/sendmsgZSDH.vue')  // ZSDH大额注册



export default new Router({
  // mode:"hash",
  routes: [
    { path: '/',redirect:'/home'},
    {path:"/vip",component:vipComponent},
    {path:"/home",component:homeComponent},
    {path:"/login",component:loginComponent},
    {path:"/logOut",component:logOutComponent},  
    {path:"/register",component:registerComponent},
    {path:"/home/collect",component:collectComponent},
    {path:"/home/online",component:onlineComponent},
    {path:"/home/collect/open",component:openComponent},
    {path:"/home/collect/payment",component:paymentComponent},
    {path:"/home/smallAmountRb",component:smallAmountRbcomponent},
    {path:"/home/rbbinding",component:rbbindingComponent},
    {path:"/home/smallAmountXS",component:smallAmountXSComponent},
    {path:"/home/xsbinding",component:xsbindingComponent},

    {path:"/home/largeAmountZSDH",component:largeAmountZSDHcomponent},
    {path:"/home/sendmsgZSDH",component:sendmsgZSDHcomponent},



    {path:"/home/smallAmountYZ",component:smallAmountYZcomponent},
    {path:"/home/smallYZbind",component:smallYZbindcomponent},



    {path:"/forgetPassword",component:forgetPasswordComponent},
    {path:"/home/punch",component:punchComponent},
    {path:"/home/punch/planDetail",component:planDetailComponent},
    {path:"/home/news",component:newsComponent},
    {path:"/vip/extension",component:extensionComponent},  // 推广升级
    {path:"/home/beautyBill",component:beautyBillComponent},  // 美化账单
    {path:"/home/beautyBill/exchangeRate",component:exchangeRateComponent},  // 实时汇率
    {path:"/home/beautyBill/check",component:checkComponent},  // 选择卡验证
    {path:"/home/beautyBill/detailbill",component:detailbillComponent},  // 选择金额

 
    {path:"/home/receivables/cards",component:cardsComponent},  //收款信用卡列表
    {path:"/home/games/gameElsb",component:gameElsbComponent},  //2048游戏 
    {path:"/home/games/gameCat",component:gameCatComponent},  //cat游戏  
    {path:"/home/games/gameClock",component:gameClockComponent},  //clock游戏  
    {path:"/home/smallAmountMC",component:smallAmountMCComponent},  //mc小额  
    {path:"/home/billDetails",component:billDetailsComponent},  //立即还款
    {path:"/home/budget",component:budgetComponent},  //预算
    {path:"/home/query",component:queryComponent},  //账单查询
    {path:"/home/liftingAmount/bankservice",component:bankserviceComponent},  //账单查询
    {path:"/home/smallAmountWYF",component:smallAmountWYFComponent},  //wyf小额
    {path:"/home/smallAmountSC",component:smallAmountSCComponent},  //sc小额
    {path:"/home/smallSCactive",component:smallSCactiveComponent},  //sc小额

    {path:"/home/largeAmountRSR",component:largeAmountRSRComponent},  //rsr大额注册商户

    {path:"/home/largeAmountRSR/rsrBinding",component:rsrBindingComponent},  //rsr大额绑卡
    
    {path:"/home/largeAmountRSR/rsrActive",component:rsrActiveComponent},  //rsr大额激活

    {path:"/home/smallAmountRH",component:smallAmountRHComponent},  //rh小额
    {path:"/home/smallAmountRH/rhbinding",component:rhbindingComponent},  //rh小额绑卡
    {path:"/home/largeAmountHC",component:largeAmountHCComponent},  //汇潮大额 注册商户  
    {path:"/home/largeAmountHC/sendmsgHC",component:sendmsgHCComponent},  //汇潮大额 发送短信 
    {path:"/home/largeAmountHC/uploadmsg",component:uploadmsgComponent},  //汇潮大额 短信验证
    {path:"/home/share/videos",component:videosComponent},  //视频  
    {path:"/home/largeAmountSC",component:largeAmountSCComponent},  //SC大额通道 注册商户  
    {path:"/home/largeAmountSC/sendmsgSC",component:sendmsgSCComponent},  //汇潮大额 短信验证
    {path:"/home/changeBill",component:changeBillComponent}, //更换账单 
    {path:"/home/receiveXH",component:receiveXHComponent},  //收单小惠通道  
    {path:"/home/receiveXH/cardCX",component:cardCXComponent},  //收单小惠通道储蓄卡管理 
    {path:"/home/receiveXH/payXH",component:payXHComponent},  //收单小惠通道支付
    {path:"/home/receiveXH/signXH",component:signXHComponent},  //收单小惠通道签约
    {path:"/home/receivables/sign",component:signComponent},  //收单小惠通道签约（通道二）
    {path:"/home/easyPay",component:easyPayComponent},  //工易付小额代还
    {path:"/home/easyPay/easycard",component:easycardComponent},  //工易付小额代还
    {path:"/home/cardCenter/applyCard",component:applyCardComponent,},
    {path:"/home/creditHousekeeper/aisleHousekeeper/bindingCreditCard",component:bindingCreditCardComponent,},
    {path:"/home/creditHousekeeper/aisleHousekeeper/repayment",component:repaymentComponent},
    {path:"/home/creditHousekeeper/aisleHousekeeper/makePlan",component:makePlanComponent},
    {path:"/home/creditHousekeeper/aisleHousekeeper/planList",component:planListComponent},
    {path:"/home/changeCard",component:changeCardComponent},
    {path:"/home/collect/payment/records",component:recordsComponent},
    {path:"/home/creditHousekeeper",component:creditHousekeeperComponent},
    {path:"/home/creditHousekeeper/aisleHousekeeper",component:aisleHousekeeperComponent},
    {path:"/home/insertEsiCash",component:insertEsiCashComponent}, //绑定第三方信用卡
    {path:"/home/insertEsiCash/iframe",component:iframeComponent}, //绑定第三方信用卡返回页面
    {path:"/home/largeAmount",component:largeAmountComponent}, // 大额鉴权
    {path:"/home/active",component:activeComponent}, // 大额激活
    {path:"/home/largeCard",component:largeCardComponent},
    {path:"/home/evaluation",component:evaluationComponent}, //卡测评
    {path:"/home/DHbind",component:DHbindComponent}, //第三条还款通道  
    {path:"/home/DHregister",component:DHregisterComponent}, //第三条还款通道 注册
    {path:"/home/largeZY",component:largeZYComponent}, //哲杨发送短信  
    {path:"/home/largeVerificate",component:largeVerificateComponent}, //哲杨短信验证
    {path:"/home/largeWFcard",component:largeWFcardComponent}, //WF大额通道绑卡
    {path:"/home/largeWFcard/verify",component:largeWFverifyComponent}, //WF大额通道验证
    {path:"/home/largeWFxe",component:largeWFxeComponent}, //WF小额通道绑卡
    {path:"/home/largeWFxe/verify",component:largeWFxeverifyComponent}, //WF小额通道绑卡
    {path:"/share/inviteFriends/inviteShare",component:inviteShareComponent},
    {path:"/share/poster",component:posterComponent},
    // {path:"/share/principle",component:principleComponent},
    {path:"/share/data",component:dataComponent},
    {path:"/home/creditHousekeeper/aisleHousekeeper/repaymentChannel",component:repaymentChannelComponent},
    {path:"/share/adsNews",component:adsNewsComponent},
    {path:"/share/businessCard",component:businessCardComponent},
    {path:"/home/incomeBreakdown",component:incomeBreakdownComponent},
    {path:"/home/clearCache",component:clearCacheComponent},
    {path:"/home/accountManagement", component:accountManagementComponent,},
    {path:"/home/accountManagement/modifyLoginPassword", component:modifyLoginPasswordComponent,},
    {path:"/home/bindingPhone", component:bindingPhoneComponent,},
    {path:"/home/totalPunch",component:totalPunchComponent}, // 签到
    {path:"/home/totalPunch/wallet",component:walletComponent}, // 红包任务
    {path:"/home/totalPunch/tasked",component:taskedComponent}, // 任务完成
    {path:"/home/totalPunch/taskrecord",component:taskrecordComponent}, // 任务纪录
    {path:"/home/violationInquiry",component:violationInquiryComponent},
    {path:"/home/violationInquiry/addCar",component:addCarComponent},
    {path:"/home/cardCenter",component:cardCenterComponent,},
    {path:"/home/systemNews",component:systemNewsComponent,},
    {path:"/home/verified",component:verifiedComponent,},
    {path:"/home/verified/verifiedName",component:verifiedNameComponent,},
    {path:"/home/bindingPhone",component:bindingPhoneComponent,},
    {path:"/home/customerService",component:customerServiceComponent,},
    {path:"/home/aboutUs",component:aboutUsComponent,},
    {path:"/loan/form/myOrder",component:myOrderComponent,},
    {path:"/home/cardCenter/liftingAmount",component:liftingAmountComponent,},
    {path:"/home/cardCenter/progressQuery",component:progressQueryComponent,},
    {path:"/home/cardCenter/businessCooperation",component:businessCooperationComponent,},
    {path:"/home/cardCenter/noviceGuide",component:noviceGuideComponent,},
    {path:"/home/receivables",component:receivablesComponent,},
    {path:"/home/receivables/transactionQuery",component:transactionQueryComponent,},
    {path:"/home/receivables/rate",component:rateComponent,},
    {path:"/home/receivables/passageway",component:passagewayComponent,},
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
    {path: '/personalCenter/addcard/UnionPay',component: UnionPay},
    {path: '/personalCenter/incomedetail/cash',component: cashComponent},
    {path: '/middle',component: middleAlipay},
    {path: '/personalCenter/incomedetail/record',component: recordComponent},
    {path: '/personalCenter/previous',component:previousComponent},
    {path: '/personalCenter/questionandanswers',component:Questionandanswers},
    {path: '/personalCenter/manual',component:manual},
    {path: '/personalCenter/cooperation',component:cooperation},
    {path: '/personalCenter/contactus',component:contactUs},
    {path: '/loan/myloan',component:myloan},
    {path: '/url',component: url},
    {path: '/cardManager',component: cardManager},
    {path: '/help',component: help},
    {path: '/vipRate',component: vipRate},
    {path: '/Extension',component: Extension},
    {path: '/video',component: video},
    {path: '/radar',component: radar},
    {path: '/nextLevel',component: nextLevel},
    {path: '/nextList',component: nextList},
    {path: '/nextOtherList',component: nextOtherList},
    {path: '/garbage',component: garbage},
    {path: '/cancelCard',component: cancelCard},
    {path: '/apply',component: apply},
    {path: '/detailMessage',component: detailMessage},
    {path: '/Driving',component: Driving},
    {path: '/collar',component: Collar},
    {path: '/youKaPay',component: youKaPay},
    {path: '/Address',component: Address},
    {path: '/Recharge',component: Recharge},
    {path: '/RechargeList',component: RechargeList},
    {path: '/RechargeCenter',component: RechargeCenter},
    {path: '/RechargeDetail',component: RechargeDetail},
    {path: '/activation',component: activation},
    {path: '/RechargeAllList',component: RechargeAllList},
    // {path: '/moreGoods',component: moreGoods},
    {path: '/testpage',component: testpage},
    {path: '/Trip',component: Trip},
    {path: '/MallmiddleWare',component: MallmiddleWare},
    {path: '/famousFoods',component: famousFoods},
    {path: '/lifeservice',component: lifeservice}
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
