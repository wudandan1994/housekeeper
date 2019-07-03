
<template>
    <div id="home-component">
        <header>
            <div>
                <div class="menu" @click="isShow">
                    <van-icon name="wap-nav" />
                    菜单
               </div>
               <span class="location">
                </span>
            </div>  
            <span class="icon"><img src="http://pay.91dianji.com.cn/top_icon.png" alt=""></span>
            <router-link tag="span" to="/home/systemNews" class="news"><van-icon name="volume" />&nbsp;消息</router-link>        
        </header>
        <div class="container">
            <!-- 轮播图模块 -->
            <div class="swipe">
                <van-swipe :autoplay="3000">
                    <van-swipe-item v-for="(item, index) in images" :key="index" @click="handleSwipeDetail(item)">
                        <img v-lazy="item.url" class="per-img" />
                    </van-swipe-item>
                </van-swipe>
            </div>
            <!-- 查询模块 -->
            <div class="search">
                <ul>
                    <router-link to="/video" tag="li">
                        <p> <van-icon name="http://pay.91dianji.com.cn/101.png"  class="zx-search"  /></p>
                        <span>新人教程</span>
                    </router-link>
                    <router-link to="/vip" tag="li">
                         <p> <van-icon name="http://pay.91dianji.com.cn/102.png"  class="zx-search"  /></p>
                        <p>升级代理</p>
                    </router-link>
                    <router-link to="/personalCenter/incomedetail" tag="li">
                         <p> <van-icon name="http://pay.91dianji.com.cn/103.png"  class="zx-search"  /></p>
                        <span>收益明细</span>
                    </router-link>
                    <router-link tag="li" to="/home/totalPunch">
                        <p> <van-icon name="http://pay.91dianji.com.cn/104.png"  class="zx-search"  /></p>
                        <span>签到打卡</span>
                    </router-link>
                </ul>
            </div>
            <!-- 名片咨询模块 -->
            <div class="pannel-news row">
                <div class="pannel-title center">钱&nbsp;夹<br/>资&nbsp;讯</div>
                <div class="pannel-detail center" @click="handleContactUs">
                    <van-notice-bar text="现成为993会员，即可享有19800元代理商的相关权限，名额有限，相关内容，请联系您的专属客户经理，确认活动详情。"/>
                </div>
            </div>

            <!-- 信用卡模块 -->
            <div class="credit">
                <ul>
                    <li @click="handleIsAuth('/home/cardCenter')">
                        <span class="handle">
                            <van-icon name="http://pay.91dianji.com.cn/105.png" size="40px" />
                        </span>
                        <div class="channel">
                            <h3>信用卡办理</h3>
                            <p>佣金当天结算</p>
                            <span>官方渠道</span>
                        </div>
                    </li>
                    <li @click="handleIsAuth('/home/collect')">
                        <span class="handle"> <van-icon name="http://pay.91dianji.com.cn/106.png" size="40px" /></span>
                        <div class="channel">
                            <h3>在线收款</h3>
                            <p>快捷支付</p>
                            <span>落地商户</span>
                        </div>
                    </li>
                    <li @click="handleIsAuth('/loan/detail')">
                        <span class="handle"> <van-icon name="http://pay.91dianji.com.cn/107.png" size="40px" /></span>
                        <div class="channel">
                            <h3>信息咨询</h3>
                            <p>实时审批&nbsp;授信额度</p>
                            <span>GO>></span>
                        </div>  
                    </li>
                     <router-link tag="li" to="/home/creditHousekeeper">
                        <span class="handle"> <van-icon name="http://pay.91dianji.com.cn/108.png" size="40px" /></span>
                        <div class="channel">
                            <h3>智能还款</h3>
                            <p>落地商户空卡周转</p>
                            <span>完美账单</span>
                        </div>
                     </router-link>

                </ul>
            </div>
            <!-- 特色服务 -->
            <div class="server">
                <p>特色服务</p>
                <div class="special">
                    <ul>
                        <router-link tag="li" to="/home/evaluation" class="secret">
                            <p> <van-icon name="http://pay.91dianji.com.cn/kace.png" size="30px" /></p>
                            <p>卡·测评</p>
                        </router-link>
                        
                        <li  @click="handleExpect" class="secret">
                            <p> <van-icon name="http://pay.91dianji.com.cn/tie.png" size="30px" /></p>
                            <p>提额秘籍</p>
                        </li>
                        <!-- <router-link tag="li" class="secret" :to="{path: '/loan/form/myOrder',query: {info: 'https://m2.weizhang8.cn/',title: '违章查询'}}">
                            <p> <van-icon name="http://pay.91dianji.com.cn/weizhang.png" size="30px" /></p>
                            <p>违章查询</p>
                        </router-link> -->
                        <li class="secret" @click="changeLink('https://m2.weizhang8.cn/','违章查询')" >
                            <p> <van-icon name="http://pay.91dianji.com.cn/weizhang.png" size="30px" /></p>
                            <p>违章查询</p>
                        </li>
                         <!-- <router-link tag="li" class="secret" :to="{path: '/loan/form/myOrder',query: {info: 'http://www.epicc.com.cn/',title: '汽车保险'}}">
                            <p><van-icon name="http://pay.91dianji.com.cn/qichebaoxian.png" size="30px" /></p>
                            <p>汽车保险</p>
                       </router-link> -->
                        <li class="secret"  @click="changeLink('http://www.epicc.com.cn/','汽车保险')" >
                            <p><van-icon name="http://pay.91dianji.com.cn/qichebaoxian.png" size="30px" /></p>
                            <p>汽车保险</p>
                       </li>


                        <!-- <router-link tag="li" :to="{path: '/loan/form/myOrder',query: {info: 'http://baoxian.pingan.com',title: '意外险'}}">
                            <p><van-icon name="http://pay.91dianji.com.cn/yiwaixian.png" size="30px" /></p>
                            <p>意外险</p>
                       </router-link> -->

                        <li  @click="changeLink('http://baoxian.pingan.com','意外险')" >
                            <p><van-icon name="http://pay.91dianji.com.cn/yiwaixian.png" size="30px" /></p>
                            <p>意外险</p>
                       </li>

                        <li @click="handleExpect">
                            <p> <van-icon name="http://pay.91dianji.com.cn/jifen.png" size="30px" /></p>
                            <p>积分兑换</p>
                        </li>
                         <!-- <router-link tag="li" :to="{path: '/loan/form/myOrder',query: {info: 'http://www.jd.com',title: '商城'}}">
                           <p> <van-icon name="http://pay.91dianji.com.cn/mall.png" size="30px" /></p>
                           <p>商城</p>
                        </router-link> -->
                         <li  @click="changeLink('http://www.jd.com','商城')"  >
                           <p> <van-icon name="http://pay.91dianji.com.cn/mall.png" size="30px" /></p>
                           <p>商城</p>
                        </li>
                         <li @click="handleExpect">
                            <p> <van-icon name="http://pay.91dianji.com.cn/gengduo.png" size="30px" /></p>
                            <p>更多</p>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 热门推荐 -->
              <div class=" hotdoor">
                <div class="title start-center">热门推荐</div>
                <div class="remen_tuijian">
                    <div class="more"><van-icon name="arrow" color="#cccccc" size="30px"/></div>
                    <router-link tag="div" to="/home/collect" class="secret">
                        <div class="center-end"> <van-icon name="http://pay.91dianji.com.cn/zaixianshoukuan.png" size="34px" /></div>
                        <div class="center">在线收款</div>
                    </router-link>
                    <div @click="handleIsAuth('/home/cardCenter')" class="secret">
                        <div class="center-end"> <van-icon name="http://pay.91dianji.com.cn/kabanli.png" size="30px" /></div>
                        <div class="center">信用卡办理</div>
                    </div>
                    <router-link tag="div" class="secret" to="/home/creditHousekeeper">
                        <div class="center-end"> <van-icon name="http://pay.91dianji.com.cn/zhinenghuankuan.png" size="30px" /></div>
                        <div class="center">智能还款</div>
                    </router-link>
                        <router-link tag="div" class="secret"  to="/vip">
                        <div class="center-end"><van-icon name="http://pay.91dianji.com.cn/shengji.png" size="30px" /></div>
                        <div class="center">升级代理</div>
                    </router-link>
                    <router-link tag="div" class="secret"  to="/home/evaluation">
                        <div class="center-end"><van-icon name="http://pay.91dianji.com.cn/kace.png" size="30px" /></div>
                        <div class="center">卡·测评</div>
                    </router-link>
                    <div @click="handleIsAuth('/loan/detail')" class="secret">
                        <div class="center-end"> <van-icon name="http://pay.91dianji.com.cn/daikuan.png" size="30px" /></div>
                        <div class="center">信息咨询</div>
                    </div>
                        <router-link tag="div" class="secret" :to="{path: '/loan/form/myOrder',query: {info: 'http://www.jd.com',title: '商城'}}">
                        <div class="center-end"> <van-icon name="http://pay.91dianji.com.cn/mall.png" size="30px" /></div>
                        <div class="center">商城</div>
                    </router-link>
                    <div class="secret" @click="handleJundgeMobile">
                        <div class="center-end"> <van-icon name="http://pay.91dianji.com.cn/weizhang.png"  size="30px" /></div>
                        <div class="center">违章查询</div>
                    </div>
                </div>
            </div>
            <!-- 遮盖层 -->
            <div class="aside-left" v-show="showAaside" @click.self="hideAside">
                <div class="info">
                    <div class="avatar">
                         <span><van-icon :name="headimg" /></span>
                         <p>{{nickname}}</p>
                    </div>
                    <ul>
                        <router-link tag="li" to="/home/systemNews">系统消息</router-link>
                        <router-link tag="li" to="/home/verified">实名认证</router-link>
                        <router-link to="/home/bindingPhone" tag="li">绑定手机</router-link>
                        <router-link to="/home/customerService" tag="li">联系客服</router-link>
                        <router-link to="/home/aboutUs" tag="li">关于我们</router-link>
                        <!-- <li class="switch">声音开关
                        </li> -->
                        <router-link to="/home/accountManagement" tag="li">账户管理</router-link>
                        <!-- <router-link to="/home/clearCache" tag="li">清除缓存</router-link> -->
                         <router-link tag="li" class="center" to="/register">个人设置</router-link>
                    </ul>
                   
                      <div  @click="signOut" class="sign-out">
                        <span>退出登录</span>
                    </div> 
                </div>
            </div>
            <!-- 更新 -->
            <div @click.self="showUpdate=false" v-show="showUpdate" class="update">
                <div  class="cover">
                    <div class="version">
                       <h3>版本更新</h3>
                        <p>钱夹宝升级了，快来体验吧！</p>
                        <div class="butt">
                            <div class="cancle" @click="showUpdate=false">取消</div>
                            <div class="upd" @click="download">更新</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="address">
                <p>与多家三方支付公司签约达成战略合作</p>
                <p>传帮带（上海）网络科技有限公司提供技术支持</p>
                <p>上海市宝山区泰和路2038号A座303室</p>
            </div>
        </div>
        <footerMenu :active="active" @getChange="changeActive"></footerMenu>
         <!-- 绑定手机模块 -->
        <bindMobile></bindMobile>
        <!-- <loading :componentload="componentload"></loading> -->
    </div>
</template>
<script>
import footerMenu from '@/components/footer'
import bindMobile from '@/components/bindMobile'
import {axiosPost} from '@/lib/http'
import storage from '@/lib/storage'
// import loading from '@/components/loading'
export default {
  components:{
      footerMenu,
      bindMobile,
    //   loading
  },
     data() {
        return {
            // 轮播图图片
            componentload: true,
            images: [
                {
                    routes: '/vip',
                    params: '1',
                    url: 'http://pay.91dianji.com.cn/banner-01.png',
                },
                {
                    routes: '/vip',
                    params: '1',
                    url: 'http://pay.91dianji.com.cn/banner-02.png',
                },
                {
                    routes: '/vip',
                    params: '2',
                    url: 'http://pay.91dianji.com.cn/banner-03.png',
                },
                {
                    routes: '/vip',
                    params: '2',
                    url: 'http://pay.91dianji.com.cn/banner-04.png',
                }
            ],
            showAaside:false, 
            checked:true,
            active: 0,
            code: '',
            openid: '',
            access_token: '',
            refresh_token: '',
            // newaccess_token: '',
            nickname: '',
            photo: '',
            headimg:'',
            iscertification: '',
            city: '',
            longitude: '',
            latitude: '',
            showUpdate:false,
            versionAndroid:"",// 安卓版本号
            versionIos:"", // ios 版本号
            updateVerson:0  // 设备版本号
        }
  },
   methods:{
        isShow() {
            this.showAaside=true
        },
        changeLink(url,title){
            //   this.$router.push({
            //          path:"/loan/form/myOrder",
            //          query:{
            //              info:url,
            //              title:title
            //          }
            //      })
            
             if (!navigator.userAgent.match(/iPad|iPhone/i)){
                 this.$router.push({
                     path:"/loan/form/myOrder",
                     query:{
                         info:url,
                         title:title
                     }
                 })
             } else {
                 location.href=url
             }
        },
        handleExpect(){
            this.$toast('敬请期待')
        },
        download(){  // 更新
            // 判断android 还是ios
                var u = navigator.userAgent;
                var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
                var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
                 if(isAndroid) {
                  window.location.href=" https://www.pgyer.com/vFbf"
               } else if(isiOS) {
                  window.location.href="http://znd.hvv.dnf-w3.cn/KXxv61"
              } 

        },
        getUpdate(){ // 获取历史版本号
               axiosPost("/customer/getVersion")
               .then(res=>{
                   if(res.data.success){
                      let version=res.data.data
                      this.versionAndroid=parseFloat(version[0].version)
                      this.versionIos=parseFloat(version[1].version)
                   }
               }) 
               .catch(err=>{
                   
               })
        },
        update(){
            let that=this
              // 获取设备的版本号
              if(window.plus){  
                   if(that.versionAndroid>that.updateVerson || that.versionIos>that.updateVerson){
                       that.showUpdate=true
                   }
            }else{  
                document.addEventListener('plusready',function () {  
                      that.updateVerson=parseFloat(plus.runtime.version);
                         if(that.versionAndroid>that.updateVerson|| that.versionIos>that.updateVerson ){
                             that.showUpdate=true
                        }

                },false);  
            }  
        } ,
        hideAside() {
            this.showAaside=false
        },
         // 自动登录
        automatic(){
            let data={
                 mobile:storage.get('username'),
                 password:storage.get('password')
            }
             axiosPost("/customer/login",data) 
             .then(res=>{
                if(!res.data.success){
                     this.$router.push("/logIn");
                    //  this.$toast('登录失败');
                }else {
                    this.$store.commit('iscertification',res.data.data.iscertification);
                    this.$store.commit('level',res.data.data.level);
                    this.$store.commit('promotioncode',res.data.data.promotioncode);
                    this.$store.commit('mobile',res.data.data.mobile);
                    this.$store.commit('vip',res.data.data.vip);
                    this.$store.commit('recommendedcode',res.data.data.recommendedcode);
                    this.$store.commit('amount',res.data.data.amount);
                    this.$store.commit('openid',res.data.data.openid);
                    this.$store.commit('nickname',res.data.data.nickname);
                    this.$store.commit('headimg',res.data.data.photo);
                    this.headimg=res.data.data.photo
                    this.nickname=res.data.data.nickname
                    this.$store.commit('city',res.data.data.city);
                }
             })
             .catch(err=>{

             })
        },
        signOut(){
            this.$dialog.confirm({
                    title: '提示',
                    message: '确定要退出？',
                    confirmButtonText:'是',
                })
                .then(() => {
                    let that =this
                  axiosPost("/customer/loginOut") 
                  .then(function(res){
                      if(!res.data.success){
                          that.$toast({
                              message:res.data.message
                          })
                          return
                      } else {
                          storage.remove('openid');
                          that.$router.push("/logIn")
                      }
                     
                  })
                  .catch(function(err){

                  })
                }).catch(() => {
                    // on cancel
                });
        },
        changeActive(obj){
            // console.log('当前选中',obj);
        } ,
        // 查询实名认证
        handleSearchAuths(){
            let url = '/customer/getCustomer';
            // let url = '/customer/getCustomer';
            let params = {
                openid:this.$store.state.wechat.openid,
            };
            axiosPost(url,params).then(res =>{
                if(res.data.success){
                //    console.log('查询个人设置成功',res)
                   this.iscertification = res.data.data.iscertification;
                   this.$store.commit('mobile',res.data.data.mobile);
                }
            }).catch(res =>{
                // console.log('查询个人设置失败',res);
            })
        },
        // 判断是否实名认证
        handleIsAuth(obj){ 
            if(this.iscertification == '0'){
                //未认证
                this.$toast('请先实名认证');
            }else{
                this.$router.push(obj);
            }
        },
        // 联系客服
        handleContactUs(){
            this.$router.push('/personalCenter/contactus')
        },
        // 点击轮播图进入详情
        handleSwipeDetail(item){
            // console.log('详情',item.routes);
            this.$router.push({
                path: '/vip',
                query: {params: item.params}
            })
        },
        // 判斷手機類型
        handleJundgeMobile(){
            if (!navigator.userAgent.match(/iPad|iPhone/i)){
                this.$router.push({
                    path:"/loan/form/myOrder",
                    query:{
                        info:'https://m2.weizhang8.cn/',
                        title:"违章查询"
                    }
                })
            } else {
                location.href= 'https://m2.weizhang8.cn/'
            }
        }
    },
    created(){
        this.nickname=this.$store.state.wechat.nickname;
        this.headimg=this.$store.state.wechat.headimg;
        this.city=this.$store.state.wechat.city;
        this.handleSearchAuths()
        //  this.automatic() //自动登录
        //  this.getUpdate() //获取版本
    }  ,
    mounted () {
        // 更新
        // this.update() 
    }
}
</script>

<style lang="less" >
   #home-component {
       padding-top: 86px;
       header {
            width: 100%;
            height:86px;
            font-size:28px;
            line-height: 86px;
            background-color: #4B66AF;
            color:white;
            display:flex;
            justify-content: space-between;
            position: fixed;
            top: 0;
            left: 0;
            z-index:999;
            align-items: center;
            >div {
                margin-left:15px;
                display: flex;
                >.menu {
                    margin-left:5px;
                    position: relative;
            }
            }
            .location {
                margin-left:15px;
            }
            >.news {
                margin-right:15px;
            }
            .icon{
                width: 60px;
                height: 60px;
                img{
                    width: 60px;
                    height: 60px;
                    animation: myfirst 5s ease-in-out infinite;
                    -moz-animation: myfirst 5s ease-in-out infinite;	/* Firefox */
                    -webkit-animation: myfirst 5s ease-in-out infinite;	/* Safari 和 Chrome */
                    -o-animation: myfirst 5s ease-in-out infinite;
                   
                }
                @keyframes myfirst
                {
                    0%{
                        transform: rotateY(0deg);
                    }
                    50%{
                        transform: rotateY(360deg);
                    }
                    100%{
                        transform: rotateY(0deg);
                    }
                }
            }
        }
       .container {
            padding-bottom:96px;
            overflow-x: hidden;
            position: relative;
            background: #eee;
            .address{
                padding-top:30px;
                text-align: center;
                line-height: 50px;
                padding-bottom: 50px;
            }
            .update {
                position: absolute;
                top:0;
                bottom:0;
                left:0;
                right:0;
                background-color: rgba(0, 0, 0, .2);
                .cover {
                   width:600px;
                   height: 400px;
                   z-index: 99;
                   position: absolute;
                   top:30%;
                   left:10%;
                   border-radius: 15px;
                   >.version {
                       background-color: #fff;
                       padding:10px;
                         height: 400px;
                       box-sizing: border-box;
                       border-radius: 15px;
                       >h3 {
                           margin-top:20px;
                           text-align: center;
                           font-size: 34px;
                           color:#4B66AF;
                           padding:20px 0px;
                           font-weight: bolder;
                       }
                       >p {
                           margin-top:20px;
                           text-align: center;
                       }
                       >.butt {
                           display: flex;
                           justify-content: space-between;
                           height: 80px;
                           >div {
                               margin-top:90px;
                               width:49%;
                               height: 100%;
                               border:1px solid #ccc;
                               line-height: 80px;
                               text-align: center;
                               &.upd {
                                   background-color: #4965AE;
                                   color:#fff;
                               }
                           }
                       }
                       
                   }
               }

           }
            >.swipe {
           height: 270px;
           .per-img{
               width: 100vw;
               height: auto;
           }
       }
        .search {
            height: 110px;
            >ul{
                list-style: none;
                display: flex;
                height: 100%;
                background-color: #fff;
                border-bottom:2px solid #ccc;
                padding-bottom:20px;
                padding-top:10px;
                >li {
                    width:33%;
                    text-align: center;
                     margin-bottom:20px;
                     >span {
                         font-size: 24px;
                     }
                     >p {
                          text-align: center;
                          margin-bottom:10px;
                        //   transform: translateX(25%);
                         >.zx-search {
                        // display:block;
                        font-size:80px;
                        // text-align: center;
                    }
                }
                    
                }
            }
        }
        >.server {
            margin-top:15px;
            background-color: #fff;
            padding-top:15px;
            >p {
                padding-left:30px;
                font-size: 34px;
                font-weight: bold;
            }
            >.special {
                >ul{
                    padding:15px;
                    margin-top:20px;
                    display:flex;
                    flex-wrap: wrap;
                    >li {
                        width:25%;
                        text-align: center;
                        &.secret {
                           margin-bottom:25px;
                           
                        }
                        >p {
                            &:nth-of-type(2){
                                padding-bottom:10px 0px;
                                
                            }
                        }
                    }
                }
            }
        }
        .hotdoor {
            background-color: #fff;
            padding-bottom: 20px;
            margin-top:10px;
            position: relative;
            .title{
                width: 98%;
                height: 50px;
                padding-left: 2%;
                font-size: 34px;
                font-weight: bold;
            }
            .remen_tuijian{
                width: 100%;
                height: 150px;
                padding-top: 5px;
                padding-bottom: 10px;
                overflow-x: scroll;
                white-space: nowrap;
                .more{
                    position: absolute;
                    top: 42%;
                    right: 1px;
                    z-index: 2;
                    animation: more 1s linear 0s infinite ;
                    -webkit-animation: more 1s linear 0s infinite ;
                }
                @keyframes more{
                    0%{
                        transform: scale(1);
                        right: 1px;
                    }
                    50%{
                        transform: scale(1.2);
                        right: 25px;
                    }
                    100%{
                        transform: scale(1);
                        right: 1px;
                    }
                }
                .secret{
                    width: 200px;
                    height: 100%;
                    display: inline-block;
                    margin-left: 30px;
                    box-shadow: 0px 0px 5px 5px #f2f2f2;
                    border-radius: 10px;
                    div{
                        width: 100%;
                        height: 50%;
                    } 
                }
            }
        }
        >.business-card {
            display: flex;
            flex-wrap: nowrap;
            height: 100px;
            margin-top:50px;
            background-color: white;
            >.information {
                font-weight: bolder;
                margin-left:10px;
                float:left;
                line-height: 100px;
            }
            >.Investment {
                float:right;
                margin-top:25px;
                margin-left:20px;
            }
        }
        >.pannel-news{
            width: 100vw;
            height: 100px;
            margin-top:45px;
            margin-left: auto;
            background-color: #fff;
            margin-right: auto;
            // background-image: -webkit-linear-gradient(0deg, #4965AE, #7189C4);
            .pannel-title{
                width: 20%;
                height: 100%;
                // color: white;
                font-weight: bold;
                font-size: 34px;
                letter-spacing: 5px;
                line-height: 48px;
            }
            .van-notice-bar {
                color:#222;
          }
            .pannel-detail{
                width: 80%;
                height: 100%;
                color: #000;
                font-size: 28px;
                animation: pannleRoll 1s ease-in-out;
            }
            @keyframes pannelRoll {
               0% {
                transform: translateX(200px);
                    -webkit-transform: translateX(200px);
                }
                100% {
                    transform: translateX(-100%);
                    -webkit-transform: translateX(-100%);
                }
            }
        }
       
        >.credit {
            margin-top:20px;
            background-color: #fff;
            >ul {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
                padding:10px;
                list-style: none;
                >li {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    width:47%;
                    border: 2px solid #ccc;
                    border-radius:10px;
                    padding-bottom:20px;
                    padding-top:35px;
                    margin-top:10px;
                    background-color:#FAFAFA;
                    &:nth-of-type(1),
                    &:nth-of-type(2){
                      background: linear-gradient(to bottom;#4E64B8,#7186B7);  
                    }
                     &:nth-of-type(3),
                    &:nth-of-type(4){
                      background: linear-gradient(to bottom;#7186B7,#4E64B8);  
                    }
                    >.handle {
                        color:#CF9C5D;
                        font-size: 60px;
                        margin-left: 10px;
                        margin-top:30px;
                    }
                    >.channel {
                        text-align: left;
                        flex:1;
                        margin-left:20px;
                        >h3 {
                            font-size:30px;
                            font-weight: bolder;
                             color:#fff;
                        }
                        >p {
                            font-size:28px;
                            margin-top:10px;
                            margin-bottom:10px;
                            // color:#4B66AF;
                            color:#fff;
                        }
                        >span {
                            // color:#4B66AF;
                              color:#fff;
                            background-color:#54866A;
                            border-radius:15px;
                            padding:5px 20px;
                            font-size: 28px;
                            margin-bottom: 10px;
                        }
                    }
                }
            }
        }   
        >.details {
            margin-top:10px;
            border-top:1px solid #ccc;
            background-color: #fff;
            padding-bottom:100px;
            margin-bottom: 50px;
            >ul{
                display: flex;
                flex-wrap: wrap;
                >li {
                    width:50%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1px solid #ccc;
                    border-right: 1px solid #ccc;
                    box-sizing: border-box;
                    >span {
                        margin-left: 40px;
                        font-size: 40px;
                        color:#CF9C5D;
                    }
                    >.detail-item {
                        margin-left:10px;
                        flex:1;
                        >h3 {
                            font-weight: bolder;
                            font-size: 30px;
                            margin-top:30px;
                            margin-bottom: 20px;
                        }
                        >p {
                            font-size:30px;
                            margin-bottom: 20px;
                            color:#666;
                        }
                    }
                }
            }
        }
         >.serve {
            //  background-color: red;
             margin-bottom: 50px;
             padding:20px 20px 50px 30px;
             font-size:34px;
             color:#4965AE;

        }
        >.aside-left {
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, .4);
                position: fixed;
                overflow: visible;
                top:0px;
                right:0px;
                bottom: 0px;
                left:0px;
                z-index: 999;
                color:#fff;
                text-align: center;
                >.info {
                    width:50%;
                    height: 100%;
                    overflow-y: scroll;
                    background-color: #4965AE;
                    position: fixed;
                    top:0px;
                    right: 0px;
                    left:0px;
                    bottom: 0px;
                    padding-bottom: 20px;
                    z-index: 999;
                   
                    >.avatar {
                        padding-top:50px;
                        >span {
                            font-size:100px;
                        }
                        >p {
                            margin-top:20px;
                            margin-bottom:80px;
                        }
                    }
                    >ul{
                        margin-left:100px;
                        margin-right:100px;
                        >li {
                            border-top:3px dashed #ccc;
                            padding:40px 10px;
                            font-size: 28px;
                             &.switch {
                             >p {
                                 margin-top:-5px;
                             }
                          }
                        }
                    }
                    >.sign-out {
                        margin-top:50px;
                        // margin-bottom:20px;
                         >span{
                            border:2px solid #fff;
                           background-color:#8E9CCE;
                           padding:30px 60px;
                           border-radius: 10px;
                         }
                    }
                    .van-dialog .van-button {
                        /* border: 0; */
                        border: 1px solid #4b66af;
                    }

                    .van-dialog,
                    .van-dialog__message,
                    .van-button {
                        font-size: 30px;
                    }
                }
                .van-button .van-button--default .van-button--large .van-dialog__confirm .van-hairline--left{
                    height:70px;
                }
         }
          .van-dialog .van-button{
             height: 80px;
         }
        
     }
   }
</style>

