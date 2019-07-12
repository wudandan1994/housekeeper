<template>
    <div id="vip">
        <header>升级代理</header>
        <div class="containt">
            <ul>
                <li id="huangjin">
                    <img src="http://pay.91dianji.com.cn/vip001.png" alt="">
                     <div class="diamonds">
                         <div class="card">黄金会员</div>
                         <div class="instructions">
                             <span @click="handleSeeDetail('1')">权益说明</span>
                         </div>
                     </div>
                     <div class="price">
                        <span class="new-price">￥393.00</span>
                        <span class="buy" @click="handleVip('393')">立即购买</span>
                     </div>
                </li>
                <li>
                    <img src="http://pay.91dianji.com.cn/vip002.png" alt="">
                     <div class="diamonds">
                         <div class="card">钻石会员</div>
                         <div class="instructions">
                             <span @click="handleSeeDetail('2')">权益说明</span>
                         </div>
                     </div>
                     <div class="price">
                        <span class="new-price">￥993.00</span>
                        <span class="buy" @click="handleVip('993')">立即购买</span>
                     </div>
                </li>

                 <li id="hehuoren">
                    <img src="http://pay.91dianji.com.cn/vip003.png" alt="">
                     <div class="diamonds">
                         <div class="card">城市合伙人</div>
                         <div class="instructions">
                             <span @click="handleSeeDetail('3')">权益说明</span>
                         </div>
                     </div>
                     <div class="price">
                        <span class="new-price">￥19800.00</span>
                        <span class="buy" @click="contactUs" >联系我们</span>
                     </div>
                </li>
                 <li>
                    <img src="http://pay.91dianji.com.cn/vip004.png" alt="">
                     <div class="diamonds">
                         <div class="card">城市运营商</div>
                         <div class="instructions">
                             <span @click="handleSeeDetail('4')">权益说明</span>
                             
                         </div>
                     </div>
                     <div class="price">
                        <span class="new-price">￥58000.00-￥159800.00</span>
                        <span class="buy" @click="contactUs" >联系我们</span>
                         <van-popup v-model="showcontantUs">
                                <div  class="rule">
                                     <p>联系我们</p>
                                     <ul>
                                         <li>
                                             <p><van-icon name="http://pay.91dianji.com.cn/icon_63.png"/></p>
                                             <p>服务时间：周一至周日（09：00-22:00）</p>
                                             <span></span>
                                         </li>
                                          <li>
                                             <p><van-icon name="http://pay.91dianji.com.cn/icon_63.png"/></p>
                                             <p>加盟热线：021-60592500 &nbsp;&nbsp;朱经理</p>
                                              <p @click="contact('11')"><a href="tel:021-60592500">拨打</a></p>
                                         </li>
                                          <!-- <li>
                                                <p><van-icon name="http://pay.91dianji.com.cn/icon_63.png"/></p>
                                                <p id="mobile">微信号码：18017459488 </p>
                                                <p data-clipboard-action="copy" data-clipboard-target="#mobile" class="test" @click="handleCopy('18017459488')">复制</p>
                                         </li> -->
                                          <li>
                                             <p><van-icon name="http://pay.91dianji.com.cn/icon_63.png"/></p>
                                             <p>客服电话 ：400-1059-769</p>
                                              <p  @click="contact('12')"><a href="tel:400-1059-769">拨打</a></p>
                                         </li>
                                     </ul>
         
                                </div>
                            </van-popup>
                     </div>
                </li>
            </ul>
        </div>
        <footerMenu :active="active" @getChange="changeActive"></footerMenu>
        <div class="popup center" v-if="pup1">
            <div class="pop-detail">
                <div class="reminder center-end">温馨提示</div>
                <div class="level center">您现在即将购买<span class="center">【{{level}}】</span></div>
                <div class="desc">
                    <ul>
                        <li>升级成功后您将享受相应收益权限</li>
                        <li v-if="level == '钱夹宝钻石会员'">若你成为钻石会员，垫还每万元可省下78元，空卡代还每万元可省下57元，最关键的一点在于不仅省钱还可以让你的信用卡资金利用率达到90%以上。</li>
                        <li v-if="level == '钱夹宝黄金会员'">黄金会员无城市合伙人、城市运营商躺赢赚钱资格</li>
                        <li v-if="level == '钱夹宝黄金会员'">开通钻石会员可享受更高级别收益权限，数据显示，黄金会员整体收益低于钻石会员80%，您确定要升级吗？</li>
                        <li v-if="level == '钱夹宝钻石会员'"><span class="van-rate">推荐指数：</span><van-rate class="van-rate" readonly  v-model="value" /></li>
                        <li v-if="level == '钱夹宝黄金会员'"><span class="van-rate">推荐指数：</span><van-rate class="van-rate" readonly  v-model="value1" /></li>
                    </ul>
                    <!-- <div class="tips center">(保证金将按业绩退还)</div> -->
                </div>
                <div class="button row">
                    <van-button class="cancel" type="default" @click="handleCancelOrder">取消</van-button>
                    <van-button class="submit" type="default" @click="handleBuy">确认</van-button>
                </div>
            </div>
        </div>

        <div class="buy-detail" v-if="pup2">
            <div class="recom row">
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
            </div>
            <div class="price center">¥{{price}}</div>
            <div class="per-title row">
                <div class="goods-title start-center">商品名称</div>
                <div class="goods-detail start-center">{{level}}</div>
            </div>
            <div class="per-title row">
                <div class="goods-title start-center">付款类型</div>
                <div class="goods-detail start-center">在线支付</div>
            </div>
            <div class="per-title row">
                <div class="goods-title start-center">付款方式</div>
                <div class="goods-detail row">
                    <div class="paytype center" :class="{'wechatpay': paytype == 'wechat'}" @click="handlePayType('wechat')">
                        <svg class="icon payicon" aria-hidden="true">
                            <use xlink:href="#icon-wechatpay"></use>
                        </svg>
                        微信支付
                    </div>
                    <div class="paytypes center" :class="{'alipay': paytype == 'alipay'}" @click="handlePayType('alipay')">
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
    </div>
</template>

<script>
import storage from '@/lib/storage'
import footerMenu from '@/components/footer'
import ClipboardJS from "clipboard";
import { axiosPost } from '../../lib/http';
export default {
    components: {
        footerMenu
    },
    data(){
        return{
            active: 1,
            ShowDiamonds:false,
            ShowGold: false,
            showRule:false,
            pup1: false,
            pup2: false,
            price: '',
            level: '',
            value: 5,
            value1:4, 
            paytype: 'alipay',
            orderid: '',
            recomname: '',
            recomcode: '',
            recomheadimg: '',
            nickname: '',
            showcontantUs:false,
            type:"",
        }
    },
    methods:{
         // 返回首页
        handleReturnHome(){
            this.$router.push({
                path:'/ponserCenter/userAccountManage'
            })
        },
        contactUs(){
            this.showcontantUs=true
            let data={
                type:'11'
            }
             axiosPost("/behavior/insertBehavior",data)
            .then(res=>{
                
            })
        },
        contact(i){
            let data={
                type:i
            }
             axiosPost("/behavior/insertBehavior",data)
            .then(res=>{
                
            })
        },

        // 复制
        handleCopy(data){
             var that = this;
            var clipboard = new ClipboardJS('.test');
            this.showcontantUs = false;
            //成功回调
            clipboard.on('success', function(e) {
                that.$toast('复制成功');
                e.clearSelection();
            });
            //失败回调
            clipboard.on('error', function(e) {
                that.$toast('复制失败');
            });
        },
        changeActive(obj){
        },
        // 查看明细
        handleSeeDetail(obj){
            this.$router.push({
                path: '/middle',
                query: {
                    level: obj
                }
            })
        },
        // 会员充值
        handleVip(obj){
            this.price = obj;
            obj == '993' ? this.level = '钱夹宝钻石会员' : this.level = '钱夹宝黄金会员';
            this.pup1 = true;
            if(obj=='393') {
                this.type='5'
            } else if(obj=='993') {
                this.type='6'
            }
            let data={
                type:this.type
            }
            axiosPost("/behavior/insertBehavior",data)
            .then(res=>{

            })

            
            
        },
        // 取消订单
        handleCancelOrder(){
            this.pup1 = false;
        },
        // 确认购买，也就是下单
        handleBuy(){
            this.pup1 = false;
            this.pup2 = true;
            let name = '';
            if(this.price == '993'){
                name = '钱夹宝钻石会员';
            }else{
                name = '钱夹宝黄金会员'
            }
            let url = '/order/insertOrder';
            let params = {
                amount: this.price,
                name: this.level
            };
            axiosPost(url,params).then(res =>{
                if(res.data.success){
                    this.orderid = res.data.data.orderid;
                    // 请求上级推荐人
                    let url = '/customer/getCustomerUP';
                    let params = {
                        recommendedcode: this.$store.state.wechat.recommendedcode
                    };
                    axiosPost(url,params).then(res =>{
                        if(res.data.success){
                            this.recomname = res.data.data.nickname;
                            this.recomcode = res.data.data.promotioncode;
                            this.recomheadimg = res.data.data.photo;
                        }
                    }).catch(res =>{
                    })
                }
            }).catch(res =>{
            })
        },
        // 选择支付方式
        handlePayType(obj){
            this.paytype = obj;
        },
        // 取消支付
        handleBuyCancel(){
            this.pup1 = false;
            this.pup2 = false;
        },
        // 立即购买
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
        TocontOne(){
            document.querySelector("#huangjin").scrollIntoView(true);
        },
        TocontTwo(){
            document.querySelector("#hehuoren").scrollIntoView(true);
        }
    },
    created(){
        this.nickname = this.$store.state.wechat.nickname;
        
    },
    mounted(){
        // console.log(this.$route.query.params)
        if(this.$route.query.params == '1'){
            this.TocontOne();
        }else{
            this.TocontTwo();
        }
       
    }
}
</script>

<style lang="less" scoped>
 #vip {
     >header {
         width:100%;
         background-color: #4B66AF;
         color:white;
         text-align: center;
         position: fixed;
         z-index:999;
         height:86px;
        font-size:28px;
        line-height: 86px;
     }
     >.containt {
         padding-top:96px;
         padding-bottom: 46px;
         >ul {
             padding:20px 30px;
             margin-bottom: 100px;
             >li {
                 margin-bottom: 30px;
            
                 >img {
                     width:100%;
                     height: auto;
                 }
                 >.diamonds {
                     margin-top:20px;
                     display: flex;
                     justify-content: space-between;
                     >.card {
                         font-weight: bolder;
                         font-size: 30px;
                         color:#000;
                         margin-top:10px;
                     }
                     >.instructions {
                        //  display: flex;
                         >span {
                             width:50%;
                             border:2px solid #4B66AF;
                             color:#4B66AF;
                             padding:7px 10px 4px 10px;
                             border-radius:8px;
                             margin-left:20px;
                         }
                         .cover {
                             width:500px;
                            padding-top:30px;
                            height: 700px;
                            border-radius: 10px;
                            padding:30px;
                            line-height: 45px;
                            text-align: justify;
                            font-size: 28px;
                            background-color: #fff;
                            >p{
                                &:nth-of-type(1){
                                    color:#000;
                                    text-align: center;
                                    font-size: bold;
                                    margin-bottom: 20px;
                                    font-size: 30px;
                                }
                            }
                         }
                         .rule {
                            width:1000px;
                            padding-top:30px;
                            height: 700px;
                            border-radius: 10px;
                            padding:30px;
                            font-size: 28px;
                            text-align: justify;
                            background-color: #fff;
                            line-height: 40px;
                            >p{
                                &:nth-of-type(1){
                                    color:#000;
                                    text-align: center;
                                    font-size: bold;
                                    margin-bottom: 20px;
                                    font-size: 30px;
                                }
                                &:nth-of-type(2){
                                    color:#000;
                                    line-height: 38px;
                                }
                            }
                         }
                     }
                 }
                 >.qualifications {
                     margin-top:20px;
                     display: flex;
                     justify-content: space-between;
                     >span {
                          color: #4B66AF;
                          background-color: #E8ECF7;
                          padding:10px 4px;
                          font-size: 22px;
                          border-radius:13px;
                     }
                 }
                 >.price {
                     display: flex;
                     margin-top:30px;
                     justify-content: space-between;
                     margin-bottom: 15px;
                      .rule {
                            width:600px;
                            padding-top:30px;
                            height: 600px;
                            border-radius: 10px;
                            font-size: 28px;
                            text-align: justify;
                            background-color: #fff;
                            line-height: 40px;
                            >ul {
                                margin-top:15px;
                                >li {
                                    display: flex;
                                    padding:15px;
                                    justify-content: space-around;
                                    align-items: center;
                                    >p {
                                        &:nth-of-type(1){
                                           width:50px;
                                        }
                                         &:nth-of-type(2){
                                          flex:1;
                                        }
                                          &:nth-of-type(3){
                                         background-color: #4B66AF;
                                         padding:10px;
                                         color:#fff;
                                         >a {
                                             color:#fff;
                                         }
                                        }
                                    }
                                    
                                }
                            }
                            >p{
                                &:nth-of-type(1){
                                    color:#000;
                                    text-align: center;
                                    font-size: bold;
                                    margin-bottom: 20px;
                                    font-size: 30px;
                                }
                                &:nth-of-type(2){
                                    color:#000;
                                    line-height: 38px;
                                }
                            }
                         }
                     >.new-price {
                         color:#E84529;
                         font-weight: bolder;
                         font-size: 36px;
                     }
                     >.old-price {
                         text-decoration: line-through;
                         margin-top:10px;
                         color:#666;
                         font-weight: bolder;
                         margin-left:-40%;
                     }
                     >.buy {
                         color:white;
                         background-color: #E84529;
                         border-radius: 10px;
                         padding:10px 20px;
                         font-size: 22px;
                     }
                     >.buy-he {
                         color:white;
                         background-color: #DAB17D;
                         border-radius: 10px;
                         padding:10px 20px;
                         font-size: 14px;
                     }
                 }
             }
         }
     }
     .popup{
         width: 100%;
         height: 100%;
         position: fixed;
         z-index: 2;
         top: 0;
         left: 0;
         background: rgba(0, 0, 0, 0.4);
         .pop-detail{
             width: 80%;
             height: 62%;
             background: white;
             .reminder{
                 width: 100%;
                 height: 100px;
                 font-size: 38px;
                 font-weight: bold;
             }
             .level{
                 width: 80%;
                 height: 80px;
                 margin-left: auto;
                 margin-right: auto;
                 margin-top: 20px;
                 font-size: 28px;
                 font-weight: bold;
                 >span{
                     width: auto;
                     height: 80px;
                     color: #DAB17D;
                 }
             }
             .desc{
                 width: 90%;
                 height: auto;
                 margin-left: auto;
                 margin-right: auto;
                 >ul{
                     list-style: none;
                     .van-rate{
                         float: left;
                     }
                     >li{
                         font-size: 28px;
                         width: 90%;
                         height: auto;
                         margin-top: 20px;
                         margin-left: auto;
                         margin-right: auto;
                        list-style: none; 
                        line-height: 40px;
                     }
                 }
                 .tips{
                     width: 80%;
                     height: auto;
                     margin-left: auto;
                     margin-right: auto;
                     clear: both;
                     margin-top: 80px;
                     font-size: 24px;
                 }
             }
             .button{
                 width: 80%;
                 height: 80px;
                 margin-left: auto;
                 margin-right: auto;
                 margin-top: 50px;
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
             border-bottom: solid 1px #ccc;
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
