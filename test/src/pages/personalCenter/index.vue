<template>
    <div id="personal-center-component">
        <div class="header_title">
            <div>
                <router-link tag="span" class="center" to="/register"><van-icon :name="url+'setting_personalCenter@2x.png'" color="#ffffff" size="24px" /></router-link>
                <router-link tag="span" to="/home/verified" class="start-center">{{iscertification}}</router-link>
                <span class="title center">我的</span>
                <span class="service center"><van-icon :name="url+'service_personalCenter.png'" color="#ffffff" size="24px"  /></span>
                <span class="chat center"><van-icon :name="url+'chat_personalCenter@2x.png'" color="#ffffff" size="24px" /></span>
            </div>
        </div>
        <div class="header">
            <div class="avator_nickname">
                <div class="avator center" :class="level == '0' ? '' : level == '1' ? 'gold' : 'diomond'">
                    <img :src="headimg" alt="">
                    <!-- <span class="isvip end-end"><img :src="url+'diomond@2x.png'" alt=""></span> -->
                </div>
                <div class="nickname center">{{nickname}}</div>
                <div class="promotioncode center">
                    <van-icon :name="url+'promitioncode_personalCenter.png'" size="28px"/>
                    <span>推荐码: {{promotioncode}}</span>
                </div>
            </div>
            <div class="account_detail van-hairline--top row">
                <div class="per-detail van-hairline--right">
                    <div class="detail_title center">收益</div>
                    <div class="detail_title center">¥{{amountSum}}</div>
                </div>
                <div class="per-detail van-hairline--right">
                    <div class="detail_title center">余额</div>
                    <div class="detail_title center">¥{{amount}}</div>
                </div>
                <div class="per-detail">
                     <div class="detail_title center">分佣</div>
                    <div class="detail_title center">¥{{commission}}</div>
                </div>
            </div>
            <div class="account_manage_upgrade">
                <div class="account_manage row">
                    <router-link tag="div" class="per_manage" :to="{path: '/personalCenter/income',query: {amountSum: amountSum}}">
                        <div class="manage_icon center"><van-icon :name="url+'account_personalCenter@2x.png'" size="28px" /></div>
                        <div class="manage_title center">账户总览</div>
                    </router-link>
                    <router-link tag="div" class="per_manage" :to="{path: '/personalCenter/income',query: {amountSum: amountSum}}">
                        <div class="manage_icon center"><van-icon :name="url+ 'Budget_personalCenter@2x.png'" size="28px" /></div>
                        <div class="manage_title center">收支明细</div>
                    </router-link>
                    <router-link tag="div" class="per_manage" :to="{path: '/personalCenter/income',query: {amountSum: amountSum}}">
                        <div class="manage_icon center"><van-icon :name="url+'Extension_personalCenter@2x.png'" size="28px" /></div>
                        <div class="manage_title center">推广收益</div>
                    </router-link>
                    <router-link tag="div" class="per_manage" :to="{path: '/personalCenter/income',query: {amountSum: amountSum}}">
                        <div class="manage_icon center"><van-icon :name="url+'reward_personalCenter@2x.png'" size="28px" /></div>
                        <div class="manage_title center">奖励佣金</div>
                    </router-link>
                    <router-link tag="div" class="per_manage" to="/personalCenter/incomedetail/addcard">
                        <div class="manage_icon center"><van-icon :name="url+'bank_personalCenter@2x.png'" size="28px" /></div>
                        <div class="manage_title center">银行卡</div>
                    </router-link>
                </div>
                <div v-if="isUpgrade" class="upgrade start-center">
                    <van-icon :name="url+'Upgrade_personalCenter@2x.png'" size="30px"/>
                    <span>升级钻石会员,享更多会员权益</span>
                    <span class="center" @click="Upgrade">立即升级</span>
                </div>
            </div>
            <!-- <div class="top">
                <div class="avator"><img :src="headimg" alt=""></div>
                <div class="name-code">
                    <div class="name start-center">{{nickname}}</div>
                    <div class="unset start-center">
                        <router-link tag="div" class="center" to="/register">设置</router-link>
                    </div>
                </div>
            </div>
            <div v-show="showYYS" class="operator end-center" @click="handleExpect">
                <van-icon name="medel" size="20px" color="#dab17b"/>
                <span>运营商</span>
            </div>
            <div v-show="isUpgrade" class="operator end-center"  @click="Upgrade">
                <van-icon name="gem" size="20px" color="#dab17b"/>
                <span>升级为钻石会员</span>
            </div>
            
            <div class="position">
                <div class="recomcode center">推荐码:{{promotioncode}}</div>
                <router-link to="/home/verified" class="authentication center" tag="div">{{iscertification}}</router-link>
                <div class="isvip end-center"><img :src="vip" alt=""></div>
                <div class="position-detail row">
                    <div class="per-position shou right">
                        <div class="title center">收益</div>
                        <div class="title bold center">{{amountSum}}</div>
                    </div>
                    <div class="per-position yu right">
                        <div class="title center">余额</div>
                        <div class="title bold center">{{amount}}</div>
                    </div>
                    <div class="per-position fen">
                        <div class="title center">分佣</div>
                        <div class="title bold center">{{commission}}</div>
                    </div>
                </div>
            </div>
        
            <div class="bottom row">
                <div class="per-menu">
                    <div class="per-icon center"><van-icon name="http://pay.91dianji.com.cn/303-check.png" size="30px" color="#dab17b"/></div>
                    <div class="per-title center" @click="handleExpect">积分</div>
                </div>
                 <div class="per-menu">
                    <div class="per-icon center"><van-icon name="http://pay.91dianji.com.cn/304-check.png" size="30px" color="#dab17b"/></div>
                    <router-link tag="div" :to="{path: '/personalCenter/incomedetail/cash',query: {amount: amount}}" class="per-title center">可结算</router-link>
                </div>
                 <div class="per-menu">
                    <div class="per-icon center"><van-icon name="http://pay.91dianji.com.cn/305-check.png" size="30px" color="#dab17b"/></div>
                    <router-link tag="div" :to="{path: '/personalCenter/income',query: {amountSum: amountSum}}" class="per-title center">总收益</router-link>
                </div>
            </div> -->
        </div>
        <div class="menu" :class="isUpgrade ? 'menu_bigtop' : 'menu_top'">
            <router-link tag="div" class="per_menu row" v-for="(item,index) in menu" :key="index" :to="item.path">
                <div class="menu_icon center"><van-icon :name="url+item.icon" size="24px"/></div>
                <div class="menu_name van-hairline--bottom start-center">{{item.name}}</div>
                <div class="menu_more van-hairline--bottom start-center"><van-icon name="arrow"/></div>
            </router-link>
        </div>
        <transition name="van-fade">
            <div class="pop" v-show="showCover">
                <van-popup v-model="show" :overlay="false" >
                   <div class="content">
                        <p>温馨提示</p>
                        <p style="margin-top:30px">您现在即将升级成<span class="colum">钱夹宝钻石会员</span>升级成功后,您将享受相应收益权限。</p>
                        <p>
                            若你成为钻石会员，垫还手续费降到万72+1元/笔，收款手续费降到万47+1元/笔，预计垫还收款每年可省3000元，最关键的一点在于不仅省钱还可以让你的信用卡资金利用率达到90%以上。
                        </p>
                        <p>
                            由于您当前已经是黄金会员，若您确认升级，您除了需支付与钻石会员的差价600元，还需另外支付10元手续费，共计610元。
                        </p>
                         <div class="button row">
                            <van-button class="cancel" type="default" @click="handleCancelOrder">取消</van-button>
                            <van-button class="submit" type="default" @click="handleBuy">确认</van-button>
                        </div>
                   </div>
                </van-popup>
            </div>
        </transition>
        <!-- <div class="menu-title server start-center">特约服务</div>
        <div class="per-list row">
            <router-link tag="div" class="per-menu-list line" :to="{path: '/ponserCenter/userAccountManage',query: {amount: amount,amountSum: amountSum}}">
                <div class="menu-icon center"><van-icon name="http://pay.91dianji.com.cn/303.png" size="30px" color="#dab17b"/></div>
                <div class="per-menu-title center">账户管理</div>
            </router-link>
            <router-link tag="div" class="per-menu-list line" to="/personalCenter/previous">
                <div class="menu-icon center"><van-icon name="http://pay.91dianji.com.cn/304.png" size="30px" color="#dab17b"/></div>
                <div class="per-menu-title center">上级推荐人</div>
            </router-link>
            <div class="per-menu-list" @click="handleExpect">
                <div class="menu-icon center"><van-icon name="http://pay.91dianji.com.cn/305.png" size="30px" color="#dab17b"/></div>
                <div class="per-menu-title center">微名片</div>
            </div>
        </div>
        <div class="per-list row">
            <router-link tag="div" to="/personalCenter/cooperation" class="per-menu-list line">
                <div class="menu-icon center"><van-icon name="http://pay.91dianji.com.cn/306.png" size="30px" color="#dab17b"/></div>
                <div class="per-menu-title center">商务合作</div>
            </router-link>

            <div class="per-menu-list line" @click="handleExpect">
                <div class="menu-icon center"><van-icon name="http://pay.91dianji.com.cn/307.png" size="30px" color="#dab17b"/></div>
                <div class="per-menu-title center">共享佣金池</div>
            </div>

            <div class="per-menu-list" @click="handleExpect">
                <div class="menu-icon center"><van-icon name="http://pay.91dianji.com.cn/308.png" size="30px" color="#dab17b"/></div>
                <div class="per-menu-title center">营销课堂</div>
            </div>
        </div>
        <div class="menu-title m-top server start-center">实时工具</div>
        <div class="per-list row">
            <div class="per-menu-list line" @click="handleExpect">
                <div class="menu-icon center"><van-icon name="http://pay.91dianji.com.cn/309.png" size="30px" color="#dab17b"/></div>
                <div class="per-menu-title center">VIP视频</div>
            </div>

            <div class="per-menu-list line"  @click="handleExpect">
                <div class="menu-icon center"><van-icon name="http://pay.91dianji.com.cn/310.png" size="30px" color="#dab17b"/></div>
                <div class="per-menu-title center">流程说明</div>
            </div>

            
        </div>
        <div class="per-list row">
            <router-link tag="div" to="/personalCenter/questionandanswers" class="per-menu-list line">
                <div class="menu-icon center"><van-icon name="http://pay.91dianji.com.cn/312.png" size="30px" color="#dab17b"/></div>
                <div class="per-menu-title center">百问百答</div>
            </router-link>

            <router-link tag="div" to="/personalCenter/contactus" class="per-menu-list line">
                <div class="menu-icon center"><van-icon name="http://pay.91dianji.com.cn/313.png" size="30px" color="#dab17b"/></div>
                <div class="per-menu-title center">联系我们</div>
            </router-link>

            <div class="per-menu-list" @click="handleExpect">
                <div class="menu-icon center"><van-icon name="http://pay.91dianji.com.cn/314.png" size="30px" color="#dab17b"/></div>
                <div class="per-menu-title center">名片夹</div>
            </div>
        </div> -->

         <div class="buy-detail" v-if="pup2">
            <!-- <div class="recom row">
                <div class="avator end-center"><img :src="recomheadimg" alt=""></div>
                <div class="recom-detail">
                    <div class="recom-title start-center">上级推荐人</div>
                    <div class="recom-name start-center">{{recomname}}</div>
                    <div class="recom-code start-center">推荐码:{{recomcode}}</div>
                </div>
                <div class="recom-info center">
                    <div class="mini-info center">
                        Hi!,{{recomname}}邀请您成为创业合伙人，钱夹宝大舞台等你来创造奇迹
                    </div>
                </div>
            </div> -->
            <div class="price center">¥{{price}}</div>
            <div class="per-title row">
                <div class="goods-title start-center">商品名称</div>
                <div class="goods-detail start-center">黄金会员升级钻石会员</div>
            </div>
            <div class="per-title row">
                <div class="goods-title start-center">付款类型</div>
                <div class="goods-detail start-center">在线支付</div>
            </div>
            <div class="per-title row">
                <div class="goods-title start-center">付款方式</div>
                <div class="goods-detail row">
                    <div class="paytype center" :class="{'wechatpay': paytype == 'wechat'}" @click="handlePayTypeWX">
                        <svg class="icon payicon" aria-hidden="true">
                            <use xlink:href="#icon-wechatpay"></use>
                        </svg>
                        微信支付
                    </div>
                    <div class="paytypes center" :class="{'alipay': paytype == 'alipay'}" @click="handlePayTypeZFB">
                        <svg class="icon payicon" aria-hidden="true">
                            <use xlink:href="#icon-alipay"></use>
                        </svg>
                        支付宝支付
                    </div>
                </div>
            </div>
            <div class="per-title row">
                <div class="goods-title start-center">推荐码</div>
                <div class="goods-detail start-center">{{recomcode}}</div>
            </div>
            <div class="per-title row">
                <div class="goods-title start-center">上级推荐人</div>
                <div class="goods-detail start-center">{{recomname}}</div>
            </div>
            <div class="buybtn row">
                <van-button type="info" class="cancel" @click="handleBuyCancel">取消支付</van-button>
                <van-button type="info" class="submit" @click="handleBuyNow">立即支付</van-button>
            </div>
        </div>


        <!-- <div  class="update">
            <ul>
                <li @click="uploadAnd">
                    <img src="http://pay.91dianji.com.cn/Android.png" >
                    安卓手机下载
                </li>
                 <li @click="uploadIos">
                    <img src="http://pay.91dianji.com.cn/ios.png" alt="">
                    苹果手机下载
                </li>
            </ul>
            <div v-show="showand" class="cover">
                    <dir class="dis">
                        <img src="http://pay.91dianji.com.cn/Aandroidem.png" alt="">
                    </dir>
            </div>
            <div v-show="showios" class="cover">
                    <dir class="dis">
                        <img src="http://pay.91dianji.com.cn/iosem.png" alt="">
                    </dir>
            </div>
        </div> -->
        <footerMenu :active="active" @getChange="changeActive"></footerMenu>
        
    </div>
</template>

<script>
import loading from '@/components/loading'
import footerMenu from '@/components/footer'
import {axiosPost} from '../../lib/http.js'
import storage from '@/lib/storage'
export default {
    components:{
      footerMenu,
      loading
    },
    data(){
        return {
            url: 'http://pay.91dianji.com.cn/',
            active:4,
            nickname: 'Giovanni',
            headimg: 'http://img2.imgtn.bdimg.com/it/u=1000195578,2796948806&fm=11&gp=0.jpg',
            promotioncode: '2456432',
            vip: 'http://pay.91dianji.com.cn/zuanshivip.png',
            iscertification: '去实名',
            amount: '',
            amountSum: '111',
            commission: '',
            // showand:false,
            // showios:false
            showYYS:true,
            isUpgrade:true,
            show:false,
            showCover:false,
            pup2:false,
            price:"610",
            paytype: 'alipay',
            recomname:"",
            recomcode:"",
            recomheadimg:"",
            orderId:"",
            popup: true,
            level: '0',
            menu: [
                {
                    name: '上级推荐人',
                    icon: 'previous_personalCenter@2x.png',
                    path: '/personalCenter/previous'
                },
                // {
                //     name: '微名片',
                //     icon: 'other-pay',
                //     path: ''
                // },
                // {
                //     name: '授权证书',
                //     icon: 'other-pay',
                //     path: ''
                // },
                // {
                //     name: 'VIP视频',
                //     icon: 'other-pay',
                //     path: ''
                // },
                // {
                //     name: '营销课堂',
                //     icon: 'other-pay',
                //     path: ''
                // },
                // {
                //     name: '共享佣金池',
                //     icon: 'other-pay',
                //     path: ''
                // },
                {
                    name: '商务合作',
                    icon: 'cooperation_personalCenter@2x.png',
                    path: '/personalCenter/cooperation'
                },
                {
                    name: '帮助中心',
                    icon: 'help_personalCenter@2x.png',
                    path: '/help'
                },
            ],
        }
    },
    methods:{
        // 尽请期待
        handleExpect(){
            this.$toast('敬请期待')
        },
        Upgrade(){
            this.show=true
            this.showCover=true
        },
        handleCancelOrder(){
            this.showCover=false
        },
        handlePayTypeWX(){
            this.paytype="wechat"
        },
        handlePayTypeZFB(){
             this.paytype="alipay"
        },
        handleBuyCancel(){
            this.pup2=false
            this.showCover=false
        },
        handleBuy(){
            this.pup2=true
            // 获取orderId
            let url = 'http://pay.91dianji.com.cn/api/order/insertOrder';
            let params = {
                amount: this.price,
                name:"升级为钻石会员"
            };
            axiosPost(url,params)
            .then(res=>{
                 if(res.data.success){
                    this.orderid = res.data.data.orderid;
                    // 查询上级
                    let url = '/customer/getCustomerUP';
                    let params = {
                        recommendedcode: this.$store.state.wechat.recommendedcode
                    }
                    axiosPost(url,params)
                    .then(res=>{
                        if(res.data.success){
                            this.recomname = res.data.data.nickname;
                            this.recomcode = res.data.data.promotioncode;
                            this.recomheadimg = res.data.data.photo;
                        }
                    })
                 }
            })
        },
        handleBuyNow(){
            // 首先判断选择哪一种支付方式
            if(this.paytype == 'alipay'){
                // 支付宝支付
                var ua = navigator.userAgent.toLowerCase();
                if(ua.match(/MicroMessenger/i)=="micromessenger") {
                    window.location.href="http://pay.91dianji.com.cn/pay.htm?orderid="+ this.orderid + '&openid='+ this.$store.state.wechat.openid
                         
                } else {
                    // 非微信浏览器
                    window.location.href="http://pay.91dianji.com.cn/pay.htm?orderid="+ this.orderid
                } 
            }else{
                var  params = {
                    orderid: this.orderid,
                    trade_type: 'JSAPI',
                    openid: storage.get('openid')
                };
                var url = '/order/wxPayH5';
                axiosPost(url,params).then(res =>{
                        var radom = Math.random().toString(36).substr(2);
                        var tmp = Date.parse( new Date() ).toString();
                        tmp = tmp.substr(0,10);
                        wx.chooseWXPay({
                            timestamp: res.data.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                            nonceStr: res.data.nonceStr, // 支付签名随机串，不长于 32 位
                            package: res.data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
                            signType: 'MD5', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                            paySign: res.data.paySign, // 支付签名
                            success: function (res) {
                            }
                        });
                    }).catch(res =>{
                    })
            }
        },
        uploadAnd(){
            this.showand=!this.showand
            this.showios=false
            setTimeout(()=>{
                this.showand=false
            },6000)
        },
        uploadIos(){
            this.showios=!this.showios
            this.showand=false
            setTimeout(()=>{
                this.showios=false
            },6000)
        },
        changeActive(obj){
            // console.log('obj', obj);
        },
        // 查询个人设置
        handleGetAmount(){
            let url = '/customer/getCustomer';
            // let url = '/customer/getCustomer';
            let params = {
                openid:this.$store.state.wechat.openid,
            };
            axiosPost(url,params).then(res =>{
                // console.log('查询个人设置成功',res)
                if(res.data.success){
                    this.nickname = res.data.data.nickname;
                    this.headimg  = res.data.data.photo;
                    this.promotioncode  = res.data.data.promotioncode; 
                    this.amount = res.data.data.amount;
                    this.amountSum = res.data.data.amountSum;
                    this.commission = res.data.data.commission;
                    this.level = res.data.data.level;
                    res.data.data.iscertification == '0' ? this.iscertification = '去实名' : ( res.data.data.iscertification == '1' ? this.iscertification = '审核中' : (res.data.data.iscertification == '2' ? this.iscertification = '认证成功' : this.iscertification = '认证失败，请重试')); 
                    if(res.data.data.level == '0'){
                        this.vip ='';
                    }
                    else if(res.data.data.level == '1'){
                        this.showYYS=false
                        this.isUpgrade=true
                        this.vip ='http://pay.91dianji.com.cn/huangjinVIP.png';
                    }else{
                        this.vip = 'http://pay.91dianji.com.cn/zuanshivip.png';
                    }
                }else{
                    this.$toast.fail('查询失败')
                }
            }).catch(res =>{
                this.$toast.fail('查询失败')
            })
        }
    },
    created(){
        this.handleGetAmount();
    }
}
</script>

<style lang="less" scoped>
  #personal-center-component {
      width: 100%;
      height: calc(100vh - 180px);
      overflow: scroll;
      padding-top: 80px;
      .header_title{
          width: 100%;
          height: 80px;
          position: fixed;
          top: 0;
          left: 0;
          background: #1d32ff;
          z-index: 3;
          div{
              width: 100%;
              height: 100%;
              position: relative;
              span:nth-child(1){
                  width: auto;
                  height: 100%;
                  position: absolute;
                  top: 0px;
                  left: 10px;
                  z-index: 4;
              }
              span:nth-child(2){
                  width: auto;
                  height: 100%;
                  position: absolute;
                  top: 0px;
                  left: 80px;
                  z-index: 4;
                  color: #f2f2f2;
              }
              span:nth-child(3){
                  width: 100%;
                  height: 100%;
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  z-index: 3;
                  color: #f2f2f2;
                  font-weight: 700;
                  font-size: 32px;
              }
              span:nth-child(4){
                  width: auto;
                  height: 100%;
                  position: absolute;
                  top: 0px;
                  right: 80px;
                  z-index: 3;
              }
              span:nth-child(5){
                  width: auto;
                  height: 100%;
                  position: absolute;
                  top: 0px;
                  right: 10px;
                  z-index: 3;
              }
          }
      }
      .header{
          width: 100vw;
          height: 470px;
          position: relative;
          background-image: linear-gradient(180deg, #1d32ff 0%, #73a1ff 100%), linear-gradient(#2942ff, #2942ff);
          .avator_nickname{
              width: 100%;
              height: auto;
              .diomond{
                  background: url('http://pay.91dianji.com.cn/diomond@2x.png') center center no-repeat;
                  background-size: contain;
              }
              .gold{
                  background: url('http://pay.91dianji.com.cn/gold@2x.png') center center no-repeat;
                  background-size: contain;
              }
              .avator{
                  width: 200px;
                  height: 200px;
                  margin: auto;
                  position: relative;
                  >img{
                    width: 70%;
                    height: 70%;
                    border-radius: 50%;
                    position: absolute;
                    bottom: 14px;
                    left: 24px;
                  }
                  .isvip{
                      position: absolute;
                      right: 0px;
                      bottom: 10px;
                      >img{
                          width: 60px;
                          height: 60px;
                      }
                  }
              }
              .nickname{
                  width: auto;
                  height: 40px;
                  color: #ffffff;
                  font-size: 28px;
                  font-weight: 700;
              }
              .promotioncode{
                  width: auto;
                  height: 40px;
                  color: #ffffff;
                  font-size: 26px;
                  >span{
                      background-image: linear-gradient(180deg, #f5e8d3 0%, #f8c45b 87%), linear-gradient(#000000, #000000);
                      padding: 4px 10px 4px 10px;
                      margin-left: -12px;
                      border-top-right-radius: 10px;
                      border-bottom-right-radius: 10px;
                  }
              }
          }
          .account_detail{
              width: 80%;
              height: 100px;
              margin: 20px 10% 0px 10%;
              padding-top: 20px;
              .per-detail{
                  width: calc(100% / 3);
                  height: 100%;
                  .detail_title{
                      width: 100%;
                      height: 50%;
                      font-size: 28px;
                      color: #ffffff;
                  }
              }
          }
          .account_manage_upgrade{
               width: 85%;
               height: auto;
               margin: 10px auto 0px auto;
               position: relative;
            .account_manage{
                width: 100%;
                height: 130px;
                background: #ffffff;
                padding-top: 30px;
                border-radius: 5px;
                box-shadow: 0px 8px 16px 0px rgba(51, 51, 51, 0.35);
                position: absolute;
                left: 0;
                top: 0;
                z-index: 2;
                .per_manage{
                    width: 20%;
                    height: 100%;
                    .manage_icon{
                        width: 100%;
                        height: 40%;
                    }
                    .manage_title{
                        width: 100%;
                        height: 40%;
                    }
                } 
            }
            .upgrade{
                width: 97%;
                height: 100px;
                padding-left: 3%;
                margin-left: auto;
                margin-right: auto;
                margin-top: -3px;
                border-radius: 5px;
                background-image: linear-gradient(90deg, #f5e8d4 0%, #f3cb7c 100%);
                position: absolute;
                z-index: 1;
                left: 0;
                top: 160px;
                span:nth-child(2){
                    font-size: 26px;
                    color: #333333;
                    margin-left: 15px;
                }
                span:nth-child(3){
                    width: 148px;
                    height: 48px;
                    background-color: #000000;
                    border-radius: 24px;
                    font-size: 26px;
                    color: #f3cb7c;
                    margin-left: 10px;
                }
                span:nth-child(3):hover{
                    background: #f5e8d4;
                }
            }
          }
          
          .top{
              width: 100%;
              height: 80px;
              margin-left: auto;
              margin-right: auto;
              position: fixed;
              .scan{
                  width: 30%;
                  height: 100%;
              }

              .avator{
                  width: 18%;
                  height: 100%;
                  >img{
                      width: 120px;
                      height: 120px;
                      border-radius: 50%;
                  }
              }
              .name-code{
                  width: 72%;
                  margin-left: 15px;
                  height: 100%;
                  .name{
                      height: 50px;
                      margin-top: 10px;
                      font-size: 40px;
                      font-weight: 700;
                      color:#ffffff;
                  }
                  .unset{
                      width: 100%;
                      height: 50px;
                      margin-top: 5px;
                      font-size: 28px;
                      color:#ffffff; 
                      >div{
                        width: auto;
                        border: solid 0.02rem #ccc;
                        border-radius: 20px; 
                        padding: 5px 20px;
                      }

                  }
              }
          }
          .operator{
              width: auto;
              height: 100px;
              position: absolute;
              right: 0px;
              top: 70px;
              background: #798bc5;
              padding-left: 20px;
              padding-right: 20px;
              color: #ccc;
              border-top-left-radius: 60px;
              border-bottom-left-radius: 60px;
          }
          .position{
              width: 90%;
              height: 350px;
              position: relative;
              margin-top: 100px;
              margin-left: auto;
              margin-right: auto;
              background: #ffffff;
              border-radius: 15px;
              .recomcode{
                  width: 220px;
                  height: 50px;
                  padding-left: 10px;
                  padding-right: 10px;
                  border: solid 0.02rem  rgb(101, 121, 254);
                  color: rgb(101, 121, 254);
                  position: absolute;
                  left: 20px;
                  top: 30px;
                  font-size: 24px;
                  border-radius: 60px;
              }
              .authentication{
                  width: 220px;
                  height: 55px;
                  position: absolute;
                  left: 280px;
                  top: 30px;
                  color: rgb(101, 121, 254);
                  font-weight: 700;
                  font-size: 26px;
              }
              .isvip{
                  width: 120px;
                  height: 60px;
                  position: absolute;
                  right: 20px;
                  top: 20px;
                  >img{
                      width: 100%;
                  }
              }
              .position-detail{
                  width: 95%;
                  height: 200px;
                  position: absolute;
                  left: 2.5%;
                  bottom: 20px;
                  .per-position{
                      width: 33%;
                      height: 100%;
                      .title{
                          width: 90%;
                          height: 50px;
                          padding-left: 10%;
                          font-size: 30px;
                      }
                      .bold{
                          font-weight: bold;
                          font-size: 34px;
                      }
                      
                  }
                  .shou{
                      background: url('http://pay.91dianji.com.cn/3-shou.jpg') no-repeat;
                      background-size: 80% 60%;
                      background-position: 50% 100%;
                  }
                  .yu{
                      background: url('http://pay.91dianji.com.cn/3-yu.jpg') no-repeat;
                      background-size: 80% 60%;
                      background-position: 50% 100%;
                  }
                  .fen{
                      background: url('http://pay.91dianji.com.cn/3-fen.jpg') no-repeat;
                      background-size: 80% 60%;
                      background-position: 50% 100%;
                  }
                  .right{
                    border-right: solid 1px #f2f2f2;
                  }
              }
          }
          .bottom{
              width: 100vw;
              height: 180px;
              background: white;
              margin-top: 30px;
              .per-menu{
                  width: 33%;
                  height: 160px;
                  margin-top: 10px;
                  .per-icon{
                      width: 100%;
                      height: 60%;
                  }
                  .per-title{
                      width: 100%;
                      height: 40%;
                      font-size: 30px;
                  }
              }
          }
      }
      .menu_top{
          margin-top: 130px;
      }
      .menu_bigtop{
          margin-top: 230px;
      }
      .menu{
        width: 100%;
        height: auto;
        background: #ffffff;
        .per_menu{
            width: 100%;
            height: 100px;
            .menu_icon{
            width: 10%;
            height: 100%;
            }
            .menu_name{
                width: 85%;
                height: 100%;
                font-size: 30px;
                color: #333333;
            }
            .menu_more{
                width: 5%;
                height: 100%;
            }
        }
      }
      .pop {
            width: 100%;
            height: 100%;
            position: fixed;
            z-index: 2;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.4);

          .content {
              width:600px;
              height:800px;
              margin:0 auto;
              padding:15px;
              box-sizing:border-box;
              line-height: 38px;
              p:nth-child(1) {
                text-align: center;
                margin-top:10px;
                font-weight: bold;
                margin-bottom: 10px;
                font-size: 32px;
                font-weight: 700;
                color: #f3cb7c;
              }
              >p{
                  font-size: 26px;
                  margin-top: 20px;
                  padding: 0px 15px 0px 15px;
                  text-align: justify;
              }
              .colum {
                  color:#DAB17D;
                  font-weight: bold;
                  font-size: 30px;
              }
              .vip {
                  margin-top:20px;
                  margin-bottom:20px;
                  font-size: 30px;
              }
               .button{
                 width: 80%;
                 height: 80px;
                 margin-left: auto;
                 margin-right: auto;
                 margin-top:80px;
                 .cancel{
                     width: 40%;
                     height: 100%;
                     background: #ccc;
                     color: #666;
                     font-size: 28px;
                 }
                 .submit{
                     width: 40%;
                     height: 100%;
                     margin-left: 20%;
                     background: linear-gradient(90deg,#4B66AF,#6883C1);
                     color: #fff;
                     font-size: 28px;
                 }
             }
          }
      }
       .menu-title{
            width: 98%;
            padding-left: 2%;
            height: 80px;
            border-bottom: solid 1px #ccc;
            background: white;
            font-size: 30px;
            color: #000;
            margin-top: 360px;
            &.server {
                font-size: 36px;
                font-weight: bold;
            }
        }
        .m-top{
            margin-top: 15px;
        }
        .per-list{
            background: white;
            border-bottom: solid 1px #ccc;
            .per-menu-list{
                width: 33%;
                height: 180px;
                padding-top:10px;
                .menu-icon{
                    width: 100%;
                    height: 60%;
                    font-size: 24px;
                }
                .per-menu-title{
                    font-size: 28px;
                    width: 100%;
                    height: 40%;
                    color: #666;
                }
            }
            .line{
                    border-right: solid 1px #ccc;
            }
        }
        .update {
            margin:20px;
            position:relative;
            >ul{
                display: flex;
                position: relative;
                justify-content: space-around;
                >li {
                    width:30%;
                    text-align: center;
                    padding:20px;
                    >img {
                            display: block;
                            margin-bottom: 15px;
                            width:100%;
                        }
                }
            }
            >.cover {
                position: absolute;
                top:-300%;
                left:100px;
                background-color: #ccc;
                >.dis {
                    width:400px;
                    height: 350px;
                    margin:0 auto;
                    margin-top:20px;
                    >img {
                        width:80%;
                    }
                }
            }
        }
         .buy-detail{
         width: 100%;
         height: 100%;
         position: fixed;
         z-index: 10000;
         top: 0;
         left: 0;
         background: #ffffff;
         color: black;
         .recom{
             width: 100%;
             height: 150px;
            //  border-bottom: solid 1px #ccc;
             .avator{
                 width: 15%;
                 height: 100%;
                 >img{
                     width: 80px;
                     height: 80px;
                     border-radius: 50%;
                 }
             }
             .recom-detail{
                 width: 33%;
                 height: 100%;
                 padding-left: 2%;
                 .recom-title{
                     width: 100%;
                     height: 25%;
                     margin-top: 8%;
                     color: #333;
                     font-size: 24px;
                 }
                 .recom-name{
                     width: 100%;
                     height: 25%;
                     font-size: 20px;
                 }
                 .recom-code{
                     width: 100%;
                     height: 25%;
                     color: #333;
                     font-size: 24px;
                 }
             }
             .recom-info{
                 width: 50%;
                 height: 100%;
                 .mini-info{
                     width: 80%;
                     height: 70%;
                     background: #CAF788;
                     padding: 5%;
                     text-align: justify; 
                     font-size: 22px;

                 }
             }
         }
        .price{
            width: 100%;
            height: 150px;
            font-weight: bold;
            font-size: 50px;
        }
        .per-title{
            width: 100%;
            height: 100px;
            border-bottom: solid 1px #ddd;
            .goods-title{
                width: 25%;
                height: 100%;
                margin-left: 5%;
                font-size: 32px;
                color: #333;
            }
            .goods-detail{
                width: 75%;
                height: 100%;
                font-size: 28px;
                .alipay{
                    border: solid 1.2px #0498E2;
                }
                .wechatpay{
                    border: solid 1.2px #09BB07;
                }
                .paytype{
                    width: 40%;
                    height: 70%;
                    padding-left: 15px;
                    padding-right: 15px;
                    margin-top: 15px;
                    border-radius: 50px;
                    .payicon{
                        font-size: 40px;
                        padding-right: 10px;
                    }
                }
                .paytypes{
                    width: 40%;
                    height: 70%;
                    margin-left: 5%;
                    padding-left: 15px;
                    padding-right: 15px;
                    margin-top: 15px;
                    border-radius: 50px;
                    .payicon{
                        font-size: 40px;
                        padding-right: 10px;
                    }
                }
            }
        }
        .buybtn{
            width: 80%;
            height: 100px;
            margin-left: auto;
            margin-right: auto;
            margin-top: 100px;
            .cancel{
                width: 40%;
                height: 100%;
                background: #ddd;
                border: none;
                font-size: 30px;
            }
            .submit{
                width: 40%;
                height: 100%;
                background: #4b66af;
                color:#ffffff;
                font-size: 36px;
                font-weight: bold;
                margin-left: 20%;
                border: none;
                font-size: 30px;
            }
        }
     }
        
}
</style>
