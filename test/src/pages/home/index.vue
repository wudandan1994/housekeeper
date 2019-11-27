<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-06-28 10:58:28
 * @LastEditTime: 2019-11-27 14:31:33
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div id="home-component">
        <div class="home-container" :class="showAaside == false ? 'home-normal' : 'home-active'">

            <!-- banner -->
            <div class="swipe">
                <van-swipe :autoplay="3000" :height="height">
                    <van-swipe-item v-for="(item, index) in images" :key="index" @click="handleSwipeDetail(item)">
                        <img v-lazy="item.url" class="per-img" />
                    </van-swipe-item>
                </van-swipe>
                <div class="space-between" :class="showAaside == false ? 'menus-normal' : 'menus-active'">
                    <div><van-icon name="wap-nav" size="24px" @click="showAaside = !showAaside" :class="showAaside == true ? 'menu-icon-active' : 'menu-icon-normal'"/></div>
                    <router-link tag="div" to="/home/systemNews"><van-icon name="volume" size="24px"/></router-link>        
                </div>
            </div>

            <!-- 顶部菜单 -->
            <div class="top-menus">
                <ul>
                    <router-link to="/video" tag="li">
                        <p><van-icon name="http://pay.91dianji.com.cn/jiaocheng-1.1.png" class="zx-search"/></p>
                        <span>新人教程</span>
                    </router-link>
                    <router-link to="/vip" tag="li">
                        <p><van-icon name="http://pay.91dianji.com.cn/daili-1.1.png"  class="zx-search "/></p>
                        <p>升级代理</p>
                    </router-link>
                    <router-link to="/personalCenter/incomedetail" tag="li">
                        <p><van-icon name="http://pay.91dianji.com.cn/mingxi-1.1.png"  class="zx-search"/></p>
                        <span>收益明细</span>
                    </router-link>
                        <li  @click="goTask">
                        <p class="dot"> 
                            <van-icon  name="http://pay.91dianji.com.cn/renwu-1.1.png"  class="zx-search rotateZ "/>
                            <span v-show="showdot">1</span>
                        </p>
                        <span>会员任务</span>
                    </li>
                </ul>
            </div>

            <!-- 钱夹资讯 -->
            <div class="pannel-news row">
                <div class="pannel-title end-center">
                    <van-icon name="http://pay.91dianji.com.cn/zixun-icon-1.1.png" size="28px"/>
                    <van-icon name="http://pay.91dianji.com.cn/zixun-title-1.1.png" size="38px"/>
                </div>
                <div class="pannel-detail center" @click="handleContactUs"><van-notice-bar :text="news"/> </div>
            </div>

            <!-- 分类商城 -->
            <div class="link-mall">
                <router-link tag="div" class="mall-one" to="/Trip">
                    <div class="center">全球出行</div>
                    <div class="center"><van-icon name="http://pay.91dianji.com.cn/quanqiuchuxing-1.1.png" size="60px"/></div>
                </router-link>
                <div class="mall-two">
                    <div class="shoukuan" @click="handlecollect('/home/collect',true,'2')">
                        <div class="start-end">在线收款</div>
                        <div class="end-center"><van-icon name="http://pay.91dianji.com.cn/zaixianshoukuan-1.1.png" size="40px"/></div>
                    </div>
                    <div class="huankuan" @click="handleIsAuth('/home/creditHousekeeper/aisleHousekeeper',true,'3')">
                        <div class="center-end">智能还款</div>
                        <div class="center"><van-icon name="http://pay.91dianji.com.cn/zhinenghuankuan-1.1.png" size="40px"/></div>
                    </div>
                </div>
                <div class="mall-three">
                    <router-link tag="div" to="/apply" class="jiayou">
                        <div class="center-end">加油卡</div>
                        <div class="center"><van-icon name="http://pay.91dianji.com.cn/youka-1.1.png" size="40px"/></div>
                    </router-link>
                    <div class="fuwu" @click="handleExpect">
                        <div class="center-end">生活服务</div>
                        <div class="center"><van-icon name="http://pay.91dianji.com.cn/shenghuofuwu-1.1.png" size="40px"/></div>
                    </div>
                    <div class="meishi" @click="handleExpect">
                        <div class="center-end">大牌美食</div>
                        <div class="center"><van-icon name="http://pay.91dianji.com.cn/meishi-1.1.png" size="40px"/></div>
                    </div>
                </div>
            </div>

            <!-- 乐享出游 -->
            <router-link tag="div" class="big-banner center" to="/Trip">
                <img src="http://pay.91dianji.com.cn/chuyou-1.1.png" alt="">
            </router-link>

            <!-- 特色服务 -->
            <div class="special-service">
                <div class="title start-center">特色服务</div>
                <div class="content">
                    <router-link tag="div" class="per-menu" to="/apply">
                        <div class="icon center"><van-icon name="http://pay.91dianji.com.cn/jiayouzhan-1.1.png" size="36px"/></div>
                        <div class="name center">特惠加油站</div>
                    </router-link>
                    <router-link tag="div" class="per-menu" to="/home/evaluation">
                        <div class="icon center"><van-icon name="http://pay.91dianji.com.cn/kaceping-1.1.png" size="36px"/></div>
                        <div class="name center">卡·测评</div>
                    </router-link>
                    <div class="per-menu" v-show="wzcx.state=='1'" @click="changeLink(wzcx.link,wzcx.title)">
                        <div class="icon center"><van-icon name="http://pay.91dianji.com.cn/weizhangchaxun-1.1.png" size="36px"/></div>
                        <div class="name center">违章查询</div>
                    </div>
                    <div class="per-menu" @click="applycard('https://wsdev.1sta.cn/wechat/pages/wailian/wailian.html?merCode=b480446df76a4494948e3b95845db8ca','办卡中心')">
                        <div class="icon center"><van-icon name="http://pay.91dianji.com.cn/xinyongkabaili-1.1.png" size="36px"/></div>
                        <div class="name center">信用卡办理</div>
                    </div>
                    <div class="per-menu" @click="handleGarbage">
                        <div class="icon center"><van-icon name="http://pay.91dianji.com.cn/lajifenlei-1.1.png" size="36px"/></div>
                        <div class="name center">垃圾分类</div>
                    </div>
                    <div class="per-menu" v-show="qcbx.state=='1'" @click="changeLink(qcbx.link,qcbx.title)">
                        <div class="icon center"><van-icon name="http://pay.91dianji.com.cn/qichebaoxian-1.1.png" size="36px"/></div>
                        <div class="name center">汽车保险</div>
                    </div>
                    <div class="per-menu" @click="handlecollect('/home/receivables',true,'2')">
                        <div class="icon center"><van-icon name="http://pay.91dianji.com.cn/zaixianshoukuan-1.1-new.png" size="36px"/></div>
                        <div class="name center">在线收款</div>
                    </div>
                    <div class="per-menu" @click="handleIsAuth('/home/creditHousekeeper/aisleHousekeeper',true,'3')">
                        <div class="icon center"><van-icon name="http://pay.91dianji.com.cn/zhinenghuankuan-1.1-new.png" size="36px"/></div>
                        <div class="name center">智能还款</div>
                    </div>
                </div>
            </div>

            <div class="container">
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
            </div>
            <!-- 绑定手机模块 -->
            <bindMobile></bindMobile>
            <notice></notice>
            <footerMenu :active="active" @getChange="changeActive"></footerMenu>
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
                    <router-link to="/home/accountManagement" tag="li">账号管理</router-link>
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
            radio:"1",
            showpass:false,
            isLight:true,
            isSelect:false,
            colorl:"#4B66AF",
            images: [
                {
                    routes: '/vip',
                    params: '1',
                    url: 'http://pay.91dianji.com.cn/banner01-1.1.png',
                },
                {
                    routes: '/vip',
                    params: '1',
                    url: 'http://pay.91dianji.com.cn/banner02-1.1.png',
                },
                {
                    routes: '/vip',
                    params: '2',
                    url: 'http://pay.91dianji.com.cn/banner03-1.1.png',
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
            height: 190,
            paychennel:"",
            wzcx:{},
            qcbx:{},
            ywx:{},
            downUrl:[],
            showdot:false
        }
  },
   methods:{     
       handleClear(){
        //    清除缓存
        storage.remove('promotioncode');
        this.$toast('清除成功');
       },
        // 查看任务
        getTask(){
             axiosPost("/activity/activityExit")
            .then(res=>{
                if(res.data.success && res.data.code==="1"){
                    this.showdot=true
                }
            })
        },
        goTask(){
            this.$router.push({
                path:"/home/totalPunch"
            })
            this.showdot=false
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

                //  this.$router.push("/home/cardCenter")
            //    this.changeLink(url,title)
              location.href=url
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
                      this.versionIos=parseFloat(version[1].version)
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
        this.getTask()
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
        height: calc(100vh - 100px);
        overflow-y: scroll; 
        background: #ECECEC;
        .home-container{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
            overflow-y: scroll;
            // banner
            .swipe {
                width: 100%;
                // height: 380px;
                position: relative;
                .per-img{
                    width: 100vw;
                    height: auto;
                }
                .menus-normal{
                    width: 100%;
                    height: 86px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    color: #ffffff;
                    box-sizing: border-box;
                    padding: 0px 15px;
                    transition: 0.8s;
                    .menu-icon-normal{
                        transition: 0.8s;
                        transform: rotate(0deg);
                    }
                    .menu-icon-active{
                        transition: 0.8s;
                        transform: rotate(90deg);
                    }
                }
                .menus-active{
                    width: 50%;
                    height: 86px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    color: #ffffff;
                    box-sizing: border-box;
                    padding: 0px 15px;
                    transition: 0.8s;
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
            // 顶部菜单
            .top-menus {
                height: auto;
                margin-top: 10px;
                >ul{
                    list-style: none;
                    display: flex;
                    height: 100%;
                    background-color: #fff;
                    padding-bottom:20px;
                    padding-top:20px;
                    >li {
                        width:33%;
                        text-align: center;
                        >span {
                            font-size: 24px;
                        }
                        >p {
                            text-align: center;
                            margin-bottom:10px;
                            &.dot{
                                >span{
                                    display: inline-block;
                                    width:26px;
                                    height:26px;
                                    border-radius: 50%;
                                    background-color: red;
                                    color:#fff;
                                }
                            }
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
                                font-size: 60px;
                            }
                        }   
                    }
                }
            }
            // 钱夹资讯
            .pannel-news{
                width: 100vw;
                height: 100px;
                margin-top:10px;
                background-color: #fff;
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
            // 分类商城
            .link-mall{
                width: 100%;
                height: 398px;
                background: #fff;
                box-sizing: border-box;
                padding: 10px;
                display: grid;
                grid-template-columns: repeat(7,1fr);
                grid-template-rows: repeat(2,2fr);
                grid-gap: 10px;
                margin-top: 15px;
                grid-template-areas:  
                    "l l r r r r r"
                    "l l b b b b b";
                .mall-one{
                    background:linear-gradient(180deg,rgba(80,101,185,1) 0%,rgba(60,107,213,1) 100%);
                    border-radius:8px;
                    grid-area: l;
                    div{
                        width: 100%;
                        height: 50%;
                        color: #FBFBFB;
                        font-size: 30px;
                    }
                }
                .mall-two{
                    grid-area: r;
                    display: grid;
                    grid-gap: 10px;
                    grid-template-columns: repeat(7,1fr);
                    grid-template-rows: 1fr;
                    grid-template-areas: "l2 l2 l2 l2 r2 r2 r2";
                    .shoukuan{
                        grid-area: l2;
                        background:linear-gradient(180deg,rgba(80,101,185,1) 0%,rgba(60,107,213,1) 100%);
                        border-radius:8px;
                        div:nth-child(1){
                            width: 100%;
                            height: 40%;
                            color: #FBFBFB;
                            font-size: 30px;
                            box-sizing: border-box;
                            padding-left: 10%;
                        }
                        div:nth-child(2){
                            width: 100%;
                            height: 60%;
                            box-sizing: border-box;
                            padding-right: 10%;
                        }
                    }
                    .huankuan{
                        grid-area: r2;
                        background:linear-gradient(180deg,rgba(80,101,185,1) 0%,rgba(60,107,213,1) 100%);
                        border-radius:8px;
                        div:nth-child(1){
                            width: 100%;
                            height: 40%;
                            color: #FBFBFB;
                            font-size: 30px;
                        }
                        div:nth-child(2){
                            width: 100%;
                            height: 60%;
                        }
                    }
                }
                .mall-three{
                    grid-area: b;
                    display: grid;
                    grid-template-columns: repeat(6,1fr);
                    grid-template-rows: 1fr;
                    grid-template-areas: "l3 l3 m3 m3 r3 r3";
                    grid-gap: 10px;
                    .jiayou{
                        grid-area: l3;
                        background:linear-gradient(180deg,rgba(80,101,185,1) 0%,rgba(60,107,213,1) 100%);
                        border-radius:8px;
                        div:nth-child(1){
                            color: #FBFBFB;
                            width: 100%;
                            height: 40%;
                            font-size: 30px;
                        }
                        div:nth-child(2){
                            width: 100%;
                            height: 60%;
                        }
                    }
                    .fuwu{
                        grid-area: m3;
                        background:linear-gradient(180deg,rgba(80,101,185,1) 0%,rgba(60,107,213,1) 100%);
                        border-radius:8px;
                        div:nth-child(1){
                            color: #FBFBFB;
                            width: 100%;
                            height: 40%;
                            font-size: 30px;
                        }
                        div:nth-child(2){
                            width: 100%;
                            height: 60%;
                        }
                    }
                    .meishi{
                        grid-area: r3;
                        background:linear-gradient(180deg,rgba(80,101,185,1) 0%,rgba(60,107,213,1) 100%);
                        border-radius:8px;
                        div:nth-child(1){
                            color: #FBFBFB;
                            width: 100%;
                            height: 40%;
                            font-size: 30px;
                        }
                        div:nth-child(2){
                            width: 100%;
                            height: 60%;
                        }
                    }
                }
            }
            // 乐享出游
            .big-banner{
                width: 100%;
                height: auto;
                margin-top: 10px;
                box-sizing: border-box;
                padding: 0px 10px;
                img{
                    width: 100%;
                    height: auto;
                }
            }
            // 特色服务
            .special-service{
                width: 100%;
                height: auto;
                background: #fff;
                padding-top: 10px;
                .title{
                    width: calc(100% - 30px);
                    height: 50px;
                    margin-left: 10px;
                    border-left: solid 10px #5165B7;
                    padding-left: 10px;
                    font-size: 36px;
                    font-weight: 700;
                }
                .content{
                    width: 100vw;
                    box-sizing: border-box;
                    padding: 0px 10px;
                    margin-top: 10px;
                    display: flex;
                    flex-wrap: wrap;
                    .per-menu{
                        width: calc(calc(100vw - 20px) / 4);
                        height: calc(calc(100vw - 20px) / 4);
                        box-sizing: border-box;
                        grid-area: c;
                        border: solid 1px #ccc;
                        .icon{
                            width: 100%;
                            height: 60%;
                        }
                        .name{
                            width: 100%;
                            height: 40%;
                            font-size: 26px;
                        }
                    }
                }
            }
            // 更新 
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
        .aside-left{
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
            width: 50%;
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
            width: 50%;
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

