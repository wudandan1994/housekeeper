<template>
  <div id="app">
    
    <router-view/>
  
  </div>
</template>

<script>
import {axiosPost,axiosGet} from '@/lib/http'
import storage from '@/lib/storage'
export default {
  name: 'App',
  data(){
    return {
      active:0,
      code: '',
      openid: '',
      access_token: '',
      refresh_token: '',
      // newaccess_token: '',
      nickname: '',
      photo: '',
    }
  },
  methods:{
     // 微信授权
    handleOauth(){
        location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx779a30a563ad570d&redirect_uri=http%3a%2f%2fpay.91dianji.com.cn%2f%23%2fhome&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect"
    },
    // 获取url参数
    GetUrlParam(paraName) {
　　　　var url = document.location.toString();
　　　　var arrObj = url.split("?");
　　　　if (arrObj.length > 1) {
　　　　　　var arrPara = arrObj[1].split("&");
　　　　　　var arr;
　　　　　　for (var i = 0; i < arrPara.length; i++) {
　　　　　　　　arr = arrPara[i].split("=");
　　　　　　　　if (arr != null && arr[0] == paraName) {
　　　　　　　　　　return arr[1];
　　　　　　　　}
　　　　　　}
　　　　　　return "";
　　　　}
　　　　else {
　　　　　　return "";
　　　　}
　　},
    //  获取access_token
     handleAccessToken(){
         let url = 'http://pay.91dianji.com.cn//wxApi/sns/oauth2/access_token?appid=wx779a30a563ad570d&secret=d89c480f3181c49cbee43d4cec49b4b0&code='+this.code+'&grant_type=authorization_code';
         axiosGet(url).then(res =>{
             // 继续请求昵称头像等信息
             let url = 'http://pay.91dianji.com.cn//wxApi/sns/userinfo?access_token='+ res.data.access_token +'&openid='+ res.data.openid +'&lang=zh_CN';
             axiosGet(url).then(res =>{
                 console.log('获取用户头像信息成功',res);
                 this.nickname = res.data.nickname;
                 this.photo = res.data.headimgurl;
                 this.$store.commit('openid',res.data.openid);
                 this.$store.commit('nickname',res.data.nickname);
                 this.$store.commit('headimg',res.data.headimgurl);
                 // 判断openid是否注册过
                 let params = {
                   openid: res.data.openid
                 };
                 let url = '/customer/getOpenidIsExist';
                 axiosPost(url,params).then(res =>{
                   console.log('openid存在',res);
                   if(res.data.data == '0'){
                     // 未注册
                     let params = {
                         nickname: this.$store.state.wechat.nickname,
                         openid:   this.$store.state.wechat.openid,
                         photo:    this.$store.state.wechat.headimg
                     }
                     let url = '/customer/registered';
                     axiosPost(url,params).then(res =>{
                         console.log('注册成功',res.data);
                    
                     }).catch(res =>{
                         console.log('注册失败',res.data);
                     })
                   }
                   // 登录
                   let params = {
                       openid: this.$store.state.wechat.openid
                   }
                   let url = '/customer/loginByWechat';
                   axiosPost(url,params).then(res =>{
                       console.log('登陆成功',res);
                       this.$toast('登陆成功');
                       this.$store.commit('mobile',res.data.data.mobile);
                       this.$store.commit('promotioncode',res.data.data.promotioncode);
                       this.$store.commit('recommendedcode',res.data.data.recommendedcode);
                       this.$store.commit('vip',res.data.data.vip);
                       this.$store.commit('level',res.data.data.level);
                       storage.set('cid',res.data.data.id);
                       console.log('VUEX',this);
                   }).catch(res =>{
                       console.log('登录失败',res);
                   })
                 }).catch(res =>{
                 })
             }).catch(res =>{
                 console.log('获取用户头像信息失败',res);
             })
         }).catch(res =>{
             console.log('获取access_token失败',res.data)
         })
     }
  },
   created(){
    //  判断是否是微信浏览器
     var ua = navigator.userAgent.toLowerCase();
     if(ua.match(/MicroMessenger/i)=="micromessenger") {
       // 微信浏览器
       this.code = this.GetUrlParam('code');
       if(this.GetUrlParam('code') != ''){
         // 已授权
         this.handleAccessToken();
       }else{
         // 未授权
         this.handleOauth();
       }
     }else{
       // 非微信浏览器
       this.$router.push({
         path: '/login'
       })
     }

   },
   mounted(){
     // js-sdk的access_token
     if(storage.get('cid') != ''){
       let url = 'http://pay.91dianji.com.cn/wxApi/cgi-bin/token?grant_type=client_credential&appid=wx779a30a563ad570d&secret=d89c480f3181c49cbee43d4cec49b4b0';
       axiosGet(url).then(res =>{
         console.log('jsapi请求成功',res);
         let url = 'http://pay.91dianji.com.cn/wxApi/cgi-bin/ticket/getticket?access_token='+ res.data.access_token +'&type=jsapi';
         axiosGet(url).then(res =>{
           console.log('jsapi_ticket请求成功',res);
           storage.set('ticket',res.data.ticket);
           // 请求签名信息
           var jsapi_ticket = storage.get('ticket');
           var radom = Math.random().toString(36).substr(2);
           var timestamp = parseInt(new Date().getTime()/1000);
           var url = window.location.href;
           let posturl = '/customer/getSignature';
           let params = {
             jsapi_ticket: jsapi_ticket,
             url: url,
             noncestr: radom,
             timestamp: timestamp
           };
           axiosPost(posturl,params).then(res =>{
             console.log('签名请求成功',res);
             wx.config({
                 debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                 appId: 'wx779a30a563ad570d', // 必填，公众号的唯一标识
                 timestamp: timestamp, // 必填，生成签名的时间戳
                 nonceStr: radom, // 必填，生成签名的随机串
                 signature: res.data.data.signature,// 必填，签名
                 jsApiList: [
                   'chooseImage',
                   'uploadImage',
                   'getLocation',
                   'onMenuShareTimeline',
                   'onMenuShareAppMessage'
                 ] // 必填，需要使用的JS接口列表
             });
             // wx.ready(function(){
               console.log('微信',wx);
                 wx.onMenuShareAppMessage({
                   title: '钱夹宝', // 分享标题
                   desc: '钱夹宝邀请您来参加', // 分享描述
                   link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                   imgUrl: 'http://pay.91dianji.com.cn/101.png', // 分享图标
                   type: '', // 分享类型,music、video或link，不填默认为link
                   dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                   success: function (res) {
                   // 用户点击了分享后执行的回调函数
                   console.log('分享成功',res);
                   }
                 });
             // });
             wx.error(function(res){
  
             });
           }).catch(res =>{
             console.log('签名请求失败',res);
           })

         }).catch(res =>{
           console.log('jsapi_ticket请求失败',res);
         })
       }).catch(res =>{
         console.log('jsapi请求失败',res);
       })
     }
   }

}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
