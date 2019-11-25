<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-06-28 10:58:28
 * @LastEditTime: 2019-09-26 14:14:10
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div id="home-component"    @swipedown="swipe(x)">
        <div class="home-container" :class="showAaside == false ? 'home-normal' : 'home-active'">
            <div  v-show="ads" class="ads" slot="loading">
                <div class="tipsone">
                    <p class="title"><van-icon size="40px"  name="http://pay.91dianji.com.cn/wxc.png" /><span>钱夹宝</span></p>
                    <div class="cres animated zoomIn">
                            <span> <van-icon  size="30px"  name="http://pay.91dianji.com.cn/xin.png" /> </span>
                        <span> <van-icon  size="30px"  name="http://pay.91dianji.com.cn/yong.png" /> </span>
                        <span> <van-icon  size="30px"  name="http://pay.91dianji.com.cn/fu.png" /> </span>
                        <span> <van-icon  size="30px"  name="http://pay.91dianji.com.cn/wu.png" /> </span>
                        <span> <van-icon  size="30px"  name="http://pay.91dianji.com.cn/ping.png" /> </span>
                        <span> <van-icon  size="30px"  name="http://pay.91dianji.com.cn/tai.png" /> </span>
                    </div>
                </div>
                <div class="tiptwo"></div>
            </div> 
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh" :loading-text="loadtext" :loosing-text="loostext" :head-height="lineheight">
                <header>
                    <div>
                        <div class="menu start-center">
                            <van-icon name="wap-nav" size="24px" @click="showAaside = !showAaside" :class="showAaside == true ? 'menu-icon-active' : 'menu-icon-normal'"/>
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
                        <van-swipe :autoplay="3000" :height="height">
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
                                <p> <van-icon  name="http://pay.91dianji.com.cn/104.png"  class="zx-search  rotateZ"  /></p>
                                <span>会员任务</span>
                            </router-link>
                            <!-- <li @click="sign">
                                <p> <van-icon  name="http://pay.91dianji.com.cn/104.png"  class="zx-search  rotateZ"  /></p>
                                <span>会员任务</span>
                            </li> -->
                        </ul>
                    </div>
                    <!-- 名片咨询模块 -->
                    <div class="pannel-news row">
                        <div class="pannel-title center">钱&nbsp;夹<br/>资&nbsp;讯</div>
                        <div class="pannel-detail center" @click="handleContactUs">
                            <van-notice-bar :text="news"/> 
                        </div>
                    </div>

                    <!-- 信用卡模块 -->
                    <div class="credit">
                        <ul>
                            <!-- <li @click="handleIsAuth('/home/cardCenter',false,'')">
                                <span class="handle">
                                    <van-icon name="http://pay.91dianji.com.cn/105.png" size="40px" />
                                </span>
                                <div class="channel">
                                    <h3>信用卡办理</h3>
                                    <p>佣金当天结算</p>
                                    <span>官方渠道</span>
                                </div>
                            </li> -->

                            <li @click="applycard('https://wsdev.1sta.cn/wechat/pages/wailian/wailian.html?merCode=b480446df76a4494948e3b95845db8ca','办卡中心')">
                                <span class="handle">
                                    <van-icon name="http://pay.91dianji.com.cn/105.png" size="40px" />
                                </span>
                                <div class="channel">
                                    <h3>信用卡办理</h3>
                                    <p>佣金当天结算</p>
                                        <div class="cardmodule">
                                            <van-swipe :autoplay="2000" vertical :height="60" indicator-color="#54866A">
                                            <van-swipe-item>官方渠道</van-swipe-item>
                                            <van-swipe-item>免费办卡</van-swipe-item>
                                            </van-swipe>
                                        </div>
                                    
                                    <!-- <span>官方渠道</span> -->
                                </div>
                            </li>
                            <li @click="handlecollect('/home/receivables',true,'2')">
                            <!-- <li @click="handleIsAuth('/home/collect',false,'')"> -->
                                <span class="handle"> <van-icon name="http://pay.91dianji.com.cn/106.png" size="40px" />
                                <!-- <van-icon name="new" color="red" class="hot new"  size="26px" /> -->
                                </span>
                                <div class="channel">
                                    <h3>在线收款</h3>
                                    <p>快捷支付</p>
                                        <div class="cardmodule">
                                            <van-swipe :autoplay="2000" vertical :height="60" indicator-color="#54866A">
                                            <van-swipe-item>落地商户</van-swipe-item>
                                            <van-swipe-item>多个选择</van-swipe-item>
                                            </van-swipe>
                                        </div>
                                </div>
                            </li>
                            <li @click="handleIsAuth('/loan/detail',true,'4')">
                                <span class="handle"> <van-icon name="http://pay.91dianji.com.cn/107.png" size="40px" /></span>
                                <div class="channel">
                                    <h3>信息咨询</h3>
                                    <p>实时审批&nbsp;授信额度</p>
                                    <span>GO>></span>
                                </div>  
                            </li>
                            <!-- <router-link tag="li" to="/home/creditHousekeeper">
                                <span class="handle"> <van-icon name="http://pay.91dianji.com.cn/108.png" size="40px" /></span>
                                <div class="channel">
                                    <h3>智能还款</h3>
                                    <p>落地商户空卡周转</p>
                                    <span>完美账单</span>
                                </div>
                            </router-link> -->

                            <li  @click="handleIsAuth('/home/creditHousekeeper/aisleHousekeeper',true,'3')" >
                                <span class="handle"> <van-icon name="http://pay.91dianji.com.cn/108.png" size="40px" /> <van-icon name="hot" color="red" class="hot pay"  size="20px" /></span>
                                <div class="channel">
                                    <h3>智能还款</h3>
                                    <p>落地商户空卡周转</p>
                                    <div class="cardmodule">
                                            <van-swipe :autoplay="2000" vertical :height="60" indicator-color="#54866A">
                                            <van-swipe-item>完美账单</van-swipe-item>
                                            <van-swipe-item>余额还款</van-swipe-item>
                                            </van-swipe>
                                        </div>
                                </div>                              
                            </li>

                        </ul>
                       
                         <div v-show="showpass" @click.self="showcover" :class="showpass?'cover':''">
                           <div  class="pop">
                               <h3>请选择通道</h3>
                                <div class="small" @click.stop="smallPass('1')">
                                    <van-icon name="http://pay.91dianji.com.cn/uz.png" size="26px"/>
                                    <div class="middle">
                                          <p>优质商户 </p>
                                          <!-- <span class="edu">还款金额为2000-30000</span> -->
                                    </div>
                                    <p> <van-icon name="checked" :color="paychennel=='1'?'#4B66AF':'gray'" size="20px"/></p>
                                </div>
                                <div class="large" @click.stop="smallPass('2')">
                                    <van-icon name="http://pay.91dianji.com.cn/pt.png" size="26px"/>
                                   <div class="middle">
                                        <p>普通商户</p>
                                        <!-- <span class="edu">优质银行商户通道，推荐高净值高授信用户使用</span> -->
                                   </div>
                                    <p> <van-icon name="checked" :color="paychennel=='2'?'#4B66AF':'gray'" size="20px"/></p>
                                </div>

                                <div class="sure">
                                    <van-button size="large" @click="handleselect" type="info">确定</van-button>
                                </div>
                             </div>
                       </div>



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
                                
                                <li  @click="handleGarbage" class="secret">
                                    <p> <van-icon name="http://pay.91dianji.com.cn/tie.png" size="30px" /></p>
                                    <p>垃圾分类</p>
                                </li>
                                <li v-show="wzcx.state=='1'" class="secret" @click="changeLink(wzcx.link,wzcx.title)" >
                                    <p> <van-icon :name="'http://pay.91dianji.com.cn/'+wzcx.icon" size="30px" /></p>
                                    <p>{{wzcx.title}}</p>
                                </li>
                                <li v-show="qcbx.state=='1'" class="secret"  @click="changeLink(qcbx.link,qcbx.title)" >
                                    <p><van-icon :name="'http://pay.91dianji.com.cn/'+qcbx.icon" size="30px" /></p>
                                    <p>{{qcbx.title}}</p>
                               </li>
                                <li  v-show="ywx.state=='1'" @click="changeLink(ywx.link,ywx.title)" >
                                    <p><van-icon :name="'http://pay.91dianji.com.cn/'+ywx.icon" size="30px" /></p>
                                    <p>{{ywx.title}}</p>
                                </li>
 
                            <router-link tag="li" to="/apply" class="secret">
                                <p> <van-icon name="http://pay.91dianji.com.cn/kabanli.png" size="30px" /></p>
                                <p>特惠加油卡</p>
                            </router-link>
                                <!-- <li @click="handleExpect">
                                    <p> <van-icon name="http://pay.91dianji.com.cn/jifen.png" size="30px" /></p>
                                    <p>积分兑换</p>
                                </li> -->
                                <!-- <li  @click="changeLink('http://www.jd.com','商城')"  >
                                <p> <van-icon name="http://pay.91dianji.com.cn/mall.png" size="30px" /></p>
                                <p>商城</p>
                                </li> -->
                                <!-- <li @click="handleExpect">
                                    <p> <van-icon name="http://pay.91dianji.com.cn/gengduo.png" size="30px" /></p>
                                    <p>更多</p>
                                </li> -->
                            </ul>
                        </div>
                    </div>
                    <!-- 热门推荐 -->
                    <div class=" hotdoor">
                        <div class="title start-center">热门推荐</div>
                        <div class="remen_tuijian">
                            <div class="more"><van-icon name="arrow" color="#cccccc" size="30px"/></div>
                            <!-- <div  @click="handleIsAuth('/home/receivables',false,'')" class="secret"> -->
                            <div  @click="handlecollect('/home/collect',true,'2')" class="secret">
                                <div class="center-end"> <van-icon name="http://pay.91dianji.com.cn/zaixianshoukuan.png" size="34px" /></div>
                                <div class="center">在线收款</div>
                            </div>

                            <div @click="applycard('https://wsdev.1sta.cn/wechat/pages/wailian/wailian.html?merCode=b480446df76a4494948e3b95845db8ca','办卡中心')" class="secret">
                                <div class="center-end"> <van-icon name="http://pay.91dianji.com.cn/kabanli.png" size="30px" /></div>
                                <div class="center">信用卡办理</div>
                            </div>
                            <div class="secret"  @click="handleIsAuth('/home/creditHousekeeper/aisleHousekeeper',true,'3')" >
                                <div class="center-end"> <van-icon name="http://pay.91dianji.com.cn/zhinenghuankuan.png" size="30px" /></div>
                                <div class="center">智能还款</div>
                            </div>

                            <router-link tag="div" class="secret"  to="/vip">
                                <div class="center-end"><van-icon name="http://pay.91dianji.com.cn/shengji.png" size="30px" /></div>
                                <div class="center">升级代理</div>
                            </router-link>
                            <router-link tag="div" class="secret"  to="/home/evaluation">
                                <div class="center-end"><van-icon name="http://pay.91dianji.com.cn/kace.png" size="30px" /></div>
                                <div class="center">卡·测评</div>
                            </router-link>
                            <div @click="handleIsAuth('/loan/detail',true,'4')" class="secret">
                                <div class="center-end"> <van-icon name="http://pay.91dianji.com.cn/daikuan.png" size="30px" /></div>
                                <div class="center">信息咨询</div>
                            </div>
                            <!-- <router-link tag="div" class="secret" to="/apply">
                                <div class="center-end"> <van-icon name="http://pay.91dianji.com.cn/mall.png" size="30px" /></div>
                                <div class="center">油卡</div>
                            </router-link> -->
                            <div class="secret" @click="changeLink(wzcx.link,wzcx.title)">
                                <div class="center-end"> <van-icon :name="'http://pay.91dianji.com.cn/'+wzcx.icon"  size="30px" /></div>
                                <div class="center">{{wzcx.title}}</div>
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
                <!-- 绑定手机模块 -->
                <bindMobile></bindMobile>
                <notice></notice>
                 
            </van-pull-refresh>
            <footerMenu :active="active" @getChange="changeActive" ></footerMenu>
          
        </div>
        
        <!-- 遮盖层 -->
        <div class="aside-left" :class="showAaside == true ? 'menu-active' : 'menu-normal'">
            <div class="info">
                <div class="avatar">
                    <!-- <span><van-icon :name="headimg" /></span> -->
                    <div class="himg">
                        <img :src="headimg" alt="">
                    </div>
                    <p><span>{{nickname}}</span> &nbsp;&nbsp; <span>{{lev}}</span></p>
                </div>
                <ul>
                    <router-link tag="li" to="/home/systemNews">系统消息</router-link>
                    <!-- <router-link tag="li" to="/home/verified">实名认证</router-link> -->
                    <li @click="handleAuth">实名认证</li>
                    <router-link to="/home/bindingPhone" tag="li">修改手机</router-link>
                    <router-link to="/home/customerService" tag="li">联系客服</router-link>
                    <router-link to="/personalCenter/contactus" tag="li">关于我们</router-link>
                    <!-- <li class="switch">声音开关
                    </li> -->
                    <router-link to="/home/accountManagement" tag="li">账户管理</router-link>
                    <li @click="handleClear">清除缓存</li>
                    <router-link tag="li" class="center" to="/register">个人设置</router-link>
                </ul>
            
                <div  @click="signOut" class="sign-out">
                    <span>退出登录</span>
                </div> 
            </div>
        </div>
    </div>
   
</template>

<script>
import footerMenu from '@/components/footer'

import bindMobile from '@/components/bindMobile'
import notice from '@/components/home/notice'
import {axiosPost} from '@/lib/http'
import storage from '@/lib/storage'

export default {
  components:{
      footerMenu,
      bindMobile,
      notice,
  },
     data() {
        return {
            componentload: true,
            showchagnnel:false,
            news:"",
            loadtext:"    ",
            loostext:"   ",
            radio:"1",
            showpass:false,
            ads:false,
            isLight:true,
            isSelect:false,
         
            lineheight:100,
            colorl:"#4B66AF",
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
            lev:"",
            headimg:'',
            iscertification: '',
            city: '',
            longitude: '',
            latitude: '',
            showUpdate:false,
            versionAndroid:"",// 安卓版本号
            versionIos:"", // ios 版本号
            updateVerson:0,  // 设备版本号
            height: 148.5,
            isLoading:false,
            paychennel:"",
            wzcx:{},
            qcbx:{},
            ywx:{},
            downUrl:[]
        }
  },
   methods:{     
       handleClear(){
        //    清除缓存
        storage.remove('promotioncode');
        this.$toast('清除成功');
       },

       handleselect(){
           if(this.paychennel=="1"){
               this.$router.push("/home/receiveXH")
           } else if(this.paychennel=="2") {
               this.$router.push("/home/receivables")
           } else {
               this.$toast("请先选择通道")
           }
       },
       smallPass(i){
           this.paychennel=i
       },
       showcover(){
          this.showpass=false
       },
       sign(){
           this.$toast("敬请期待")
       },
       onRefresh(){
           this.ads=true
           setTimeout(()=>{
              this.ads=false
              this.isLoading=false
           },2000)
       },
        isShow() {
            this.showAaside=true
        },
        applycard(url,title){

            let data ={
                type:'1'
            }
            // ai雷达
             axiosPost("/behavior/insertBehavior",data)
            .then(res=>{
                })

             if(this.iscertification == '0' ){
                //未认证
                this.$toast('请先实名认证');
                    
            }else{
               
               this.changeLink(url,title)
            }
            
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
        handleAuth(){
             if(this.iscertification == '2'){
                this.$router.push('/home/verified/verifiedName');
            }else{
                this.$router.push('/home/verified');
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
                  window.location.href=this.downUrl[1].link
               } else if(isiOS) {
                  window.location.href=this.downUrl[0].link
              } 
        },
        getUpdate(){ // 获取历史版本号
               axiosPost("/customer/getVersion")
               .then(res=>{
                   if(res.data.success){
                      let version=res.data.data
                      this.versionAndroid=parseFloat(version[0].version)
                    //   console.log(this.versionAndroid,'and')
                      this.versionIos=parseFloat(version[1].version)
                    //    console.log(this.versionIos,'ios')
                   }
               }) 
               .catch(err=>{
                   
               })
        },
        getDownloadUrl(){
             axiosPost("/content/getDownLoadUrl")
            .then(res=>{
                if(res.data.success){
                    this.downUrl=res.data.data
                    this.downUrl=JSON.parse(this.downUrl)
                } 
            })

        },
        update(){
            let that=this
              // 获取设备的版本号
              if(window.plus){  
               
                plus.runtime.getProperty(plus.runtime.appid,function(inf){
                that.updateVerson=parseFloat(inf.version);
                    if(that.versionAndroid>that.updateVerson || that.versionIos>that.updateVerson){
                       that.showUpdate=true
                       that.getDownloadUrl()
                   }
               });
            }else{  
                document.addEventListener('plusready',function () { 
                 plus.runtime.getProperty(plus.runtime.appid,function(inf){
                that.updateVerson=parseFloat(inf.version);
                    if(that.versionAndroid>that.updateVerson || that.versionIos>that.updateVerson){
                       that.showUpdate=true
                       that.getDownloadUrl()
                           }
                        });
                },false);  
            }  
        } ,
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
                    this.lev=res.data.data.level
                    if(this.lev=='0'){
                        this.lev="免费粉丝"
                    } else if(this.lev=='1'){
                        this.lev="黄金会员"
                    } else {
                        this.lev='钻石会员'
                    }
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
                   this.iscertification = res.data.data.iscertification;
                   this.$store.commit('mobile',res.data.data.mobile);
                }
            }).catch(res =>{
            })
        },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        handlecollect(obj,boo,i){
                 if(this.iscertification == '0' ){
                //未认证
                this.$toast('请先实名认证');
                if(boo){
                     let data ={
                        type:i
                    }
                     axiosPost("/behavior/insertBehavior",data)
                    .then(res=>{
                      })
                }
            }else{

                if(boo){
                    let data ={
                        type:i
                    }
                     axiosPost("/behavior/insertBehavior",data)
                    .then(res=>{
                      })
                } 
                this.showpass=true
               
            }
        },
        // 判断是否实名认证
        handleIsAuth(obj,boo,i){ 
            if(this.iscertification == '0' ){
                //未认证
                this.$toast('请先实名认证');
                if(boo){
                     let data ={
                        type:i
                    }
                     axiosPost("/behavior/insertBehavior",data)
                    .then(res=>{
                      })
                }
            }else{
                if(boo){
                    let data ={
                        type:i
                    }
                     axiosPost("/behavior/insertBehavior",data)
                    .then(res=>{
                         this.$router.push(obj);
                        
                    })
                } else {
                     this.$router.push(obj);
                }
               
            }
        },
        // 联系客服
        handleContactUs(){
            this.$router.push('/personalCenter/contactus')
        },
        // 点击轮播图进入详情
        handleSwipeDetail(item){
            this.$router.push({
                path: '/vip',
                query: {params: item.params}
            })
        },
       
        handleGarbage(){
            this.$router.push('/garbage');
        },
        //消息咨询
        getNews(){
            axiosPost("/content/getInformation")
            .then(res=>{
                if(res.data.success){
                    this.news=res.data.data
                } else {
                    this.news="敬请期待"
                }
            })
        },
        //获取外部链接
        getLinks(){
              axiosPost("/content/getOutUrl")
              .then(res=>{
                //  console.log(res,"result")
                if(res.data.success){
                    let links=res.data.data
                    links=JSON.parse(links)
                    this.wzcx=links[0]
                    this.qcbx=links[1]
                    this.ywx=links[2]
                }
              })
        }
    },
    created(){
        this.nickname=this.$store.state.wechat.nickname;
        this.headimg=this.$store.state.wechat.headimg;
        this.city=this.$store.state.wechat.city;
        this.lev=this.$store.state.wechat.level;
        this.getNews()
        this.getLinks()
         if(this.lev=='0'){
                        this.lev="免费粉丝"
                    } else if(this.lev=='1'){
                        this.lev="黄金会员"
                    } else {
                        this.lev='钻石会员'
                    }

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
        width: 100vw;
        overflow-y: scroll;
        .home-container{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
              overflow-y: scroll;
            .guide {
                position: fixed;
                top:0;
                bottom:0;
                left:0;
                right:0;
                background-color: rgba(0, 0, 0, .4);
                z-index:8888;
                .arr {
                  width:400px;
                  height:400px;
                  margin:left;                                                                                                                         
                  img {
                      width:100%;
                  }
                }
                .guide-first {
                    width:100%;
                    height:600px;
                    .arrowred {
                        width:100%;
                        height:300px;
                        margin-top:156px;
                        display:flex;
                        .arrowright,
                        .light {
                            width:50%;
                            img {
                                width:100%;
                            }
                        }
                    }
                    .manguide {
                        width:100%;
                        height:500px;
                         display:flex;
                         .person,
                         .text {
                             width:50%;
                             img {
                                 width:100%;
                             }
                         }
                    }

                    
                }
                .guide-second {
                    width:100;
                    height:800px;
                     .pay {
                        width:100%;
                        height:100px;
                        margin-right:0;
                        .guidekuan {
                            width:50%;
                            height:100%;
                            float:right;
                            img {
                              width:100%;
                           }
                        }
                        
                     }
                    .payment {
                        width:100%;
                        height:368px;
                        display:flex;
                        .guideman {
                            width:50%;
                            img {
                                width:100%;
                            }
                        }
                        .guidepay {
                            width:50%;
                            img {
                                width:100%;
                            }
                        }

                    }
                }
                .guide-third {
                    width:100%;
                    height:600px;
                    .guidelevel {
                        width:100%;
                        height:300px;
                        display:flex;
                        .guideman,
                        .guidetxt {
                            width:50%;
                            img {
                                width:100%;

                            }
                        }
                    }
                    .guidevip {
                        margin-top:300px;
                        width:100%;
                        height:300px;
                        // display:flex;
                        // justify-content: space-around;
                        // div {
                        //     width:25%;
                        // }
                        // img {
                        //     width:100%;
                        // }
                        .vipcir {
                            float:left;
                            width:130px;
                            height:100%;
                            margin-top:268px;
                            margin-left:210px;
                            img {
                                width:100%;
                            }
                        }
                        .arrowleft {
                            float:right;
                            width:400px;
                            height:100%;
                            img {
                                width:100%;
                            }
                        }
                    }
                }
            }
            .ads {
                position: fixed;
                top:0px;
                left:0;
                box-sizing: border-box;
                .tipsone { 
                    .title {
                        // text-align: center;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        >span {
                            font-size: 34px;
                            font-weight: bold;
                        }
                    }
                    .cres {
                        margin-left:100px;
                        margin-top:30px;
                        padding-bottom: 10px;
                        box-sizing: border-box;
                    }
                }
            }
            header{
                width: 100%;
                height:86px;
                font-size:28px;
                line-height: 86px;
                background-color: #4B66AF;
                color:white;
                display:flex;
                justify-content: space-between;
                position: absolute;
                top: 0px;
                left: 0;
                z-index:999;
                align-items: center;
                >div {
                    margin-left:15px;
                    display: flex;
                    >.menu {
                        margin-left:5px;
                        position: relative;
                        .menu-icon-normal{
                            transition: 0.8s;
                            transform: rotate(0deg);
                        }
                        .menu-icon-active{
                            transition: 0.8s;
                            transform: rotate(90deg);
                        }
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
                padding-top:86px;
                overflow-x: hidden;
                
                position: relative;
                background: #eee;
                .cardmodule {
                        .van-swipe {
                        height: 40px;
                        background-color: #54866A;
                        color:#fff;
                        box-sizing: border-box;
                        width:140px;
                        border-radius: 15px;
                        // text-align: center;
                        padding-left:15px;
                        padding-top:8px;
                    }
                    .van-swipe__track {
                            height: 100%;
                        }
                    .van-swipe-item {
                            height: 100%;
                        }
                }
                
                .address{
                    padding-top:30px;
                    text-align: center;
                    line-height: 50px;
                    padding-bottom: 50px;
                    margin-bottom: 50px;
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
                            
                                .rotateZ {
                                    //   animation: icon 2s 1s linear infinite;
                                    //  -webkit-animation: icon 2s 1s linear  infinite;
                                    -webkit-animation: Tada 3s both infinite;
                                    -moz-animation: Tada 3s both infinite;
                                    -ms-animation: Tada 3s both infinite;
                                    animation: Tada 3s both infinite;
                                }

                                @keyframes Tada {
                                    0% {
                                        transform: scale(1);
                                        transform: scale(1)
                                    }
                                    70%,73%{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
                                        transform: scale(0.9) rotate(-10deg);
                                        transform: scale(0.9) rotate(-10deg)
                                    }
                                    77%,83%,90%,97%  {
                                        transform: scale(1.2) rotate(10deg);
                                        transform: scale(1.2) rotate(10deg)
                                    }
                                    80%,87%,93%{
                                        transform: scale(1.2) rotate(-10deg);
                                        transform: scale(1.2) rotate(-10deg)
                                    }
                                    100% {
                                        transform: scale(1) rotate(0);
                                        transform: scale(1) rotate(0)
                                    }
                                }
                                >.zx-search {
                                font-size:80px;
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
                            >li:last-child{
                                position: relative;
                                #more{
                                    width: 80vw;
                                    height: 400px;
                                    position: absolute;
                                    right: 80px;
                                    bottom: 80px;
                                    z-index: 1000;
                                    background: #ffff;
                                    border-radius: 15px;
                                    color: #fff;
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
                    position: relative;
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
                                position: relative;
                                >.hot {
                                    position: absolute;
                                    top:-60px;
                                    right:-210px;
                                }
                                .new {
                                    animation: icon  1s linear infinite;
                                    -webkit-animation: icon  1s linear  infinite;
                                }
                                @keyframes icon{
                                    0%{
                                            transform: rotateZ(0deg);
                                    }
                                    25%{
                                            transform: rotateZ(45deg);
                                    }
                                    50%{
                                            transform: rotateZ(0deg);
                                    }
                                     75%{
                                            transform: rotateZ(-45deg);
                                    }
                                    100%{
                                            transform: rotateZ(0deg);
                                    }
                                }
                                .pay {
                                    -webkit-animation: Tada 3s both infinite;
                                    -moz-animation: Tada 3s both infinite;
                                    -ms-animation: Tada 3s both infinite;
                                    animation: Tada 3s both infinite;
                                }
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

                     .cover {
                          position: fixed;
                          top:0px;
                          bottom: 0px;
                          left:0px;
                          right:0px;
                          background-color: rgba(0, 0, 0, .5);
                          z-index: 99;
                          .pop {
                          position: absolute;
                          top:26%;
                          left:9%;
                          width: 600px;
                          padding:10px;
                          background-color: #fff;
                          border:1px solid #ccc;
                          color:#000;
                          z-index: 999;
                          border-radius: 15px;
                          h3 {
                              text-align: center;
                              font-weight: bold;
                              font-size: 34px;
                              padding:30px 0px 15px 0px;
                          }
                          >p {
                              text-align: center;
                              padding:18px 0px;
                              border-bottom: 1px solid #ccc;
                              color:#808080;
                          }
                          .sure {
                              padding:30px;
                          }
                          .van-button--info {
                                background: linear-gradient(to right,#D8B56D, #886929 );
                                height: 80px;
                                line-height: 80px;
                                color:#fff;
                                border:1px solid #886929;
                          }
                          >.small ,
                           .large {
                              display: flex;
                              justify-content: space-between;
                              padding-bottom: 20px;
                              align-items: center;
                              z-index: 1000;
                              background-color: #fff;
                              padding:15px;
                              .middle {
                                  flex:1;
                                  padding-left:20px;
                                  padding-bottom: 10px;
                                  span {
                                      font-size: 24px;
                                  }
                                  .edu {
                                      color:#BCB291;
                                      background-color: rgba(223, 219, 191, .2);
                                      line-height: 38px;
                                  }
                              }
                              p {
                                  font-size: 32px;
                                  font-weight: bold;
                                  padding: 25px 0;
                                  span{
                                      font-weight: normal;
                                      font-size: 26px;
                                      color:#808080;
                                  }
                              }
                          }
                          .small {
                              border-bottom: 1px solid #ccc;
                          }
                           .large {
                               margin-top:5px;
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
                    margin-bottom: 50px;
                    padding:20px 20px 50px 30px;
                    font-size:34px;
                    color:#4965AE;
                }
            }
        }
        .home-normal{
            position: relative;
            top: 0px;
            left: 0px;
            transition: 0.8s;
        }
        .home-active{
            position: relative;
            top: 0px;
            left: 50%;
            transition: 0.8s;
        }
        .aside-left {
            color:#fff;
            text-align: center;
            z-index: 103;
            >.info {
                width:100%;
                height: 100%;
                overflow-y: scroll;
                background-color: #4965AE;
                padding-bottom: 20px;
                >.avatar {
                    padding-top:50px;
                    .himg {
                        width:150px;
                        height:150px;
                        margin:0 auto;
                        img {
                            width:100%;
                            border-radius: 50%;
                        }
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
                    
                    .van-button--large {
                        height:48px!important;
                    }
                    .van-dialog__message--has-title {
                        height:70px!important;
                    }
                        >span{
                            box-shadow: #32406E -10px -10px 15px 4px inset;
                        border:2px solid #556BB7;
                        background-color: #2A54B3;
                        padding:30px 60px;
                        border-radius:30px;
                        }
                }
                .van-dialog .van-button {
                    border: 1px solid #4b66af;
                }

                .van-dialog,.van-dialog__message,.van-button {
                    font-size: 30px;
                }
            }
        }
        .menu-normal{
            width: calc(50% + 1px);
            height: 100%;
            position: fixed;
            overflow: visible;
            top: 0%;
            left: -50%;
            z-index: 999;
            transition: 0.8s;
            background-color: rgba(0, 0, 0, 0);
        }
        .menu-active{
            width: calc(50% + 1px);
            height: 100%;
            position: fixed;
            overflow: visible;
            top:0px;
            left:0px;
            z-index: 999;
            transition: 0.8s;
            background-color: rgba(0, 0, 0, .4);
        }
    }
</style>

