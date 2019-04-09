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
//   methods:{
//      // 微信授权
//     handleOauth(){
//         // 第一次授权过后无需再次授权
//         // if(this.$store.state.wechat.openid)
//         location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx779a30a563ad570d&redirect_uri=http%3a%2f%2fbc.91dianji.com.cn%2f%23%2fhome&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect"
//         console.log('授权','123');
//     },
//     // 获取url参数
//     GetUrlParam(paraName) {
// 　　　　var url = document.location.toString();
// 　　　　var arrObj = url.split("?");
// 　　　　if (arrObj.length > 1) {
// 　　　　　　var arrPara = arrObj[1].split("&");
// 　　　　　　var arr;
// 　　　　　　for (var i = 0; i < arrPara.length; i++) {
// 　　　　　　　　arr = arrPara[i].split("=");
// 　　　　　　　　if (arr != null && arr[0] == paraName) {
// 　　　　　　　　　　return arr[1];
// 　　　　　　　　}
// 　　　　　　}
// 　　　　　　return "";
// 　　　　}
// 　　　　else {
// 　　　　　　return "";
// 　　　　}
// 　　},
//     // 获取access_token
//     handleAccessToken(){
//       console.log('执行');
//         let url = 'http://bc.91dianji.com.cn//wxApi/sns/oauth2/access_token?appid=wx779a30a563ad570d&secret=d89c480f3181c49cbee43d4cec49b4b0&code='+this.code+'&grant_type=authorization_code';
//         axiosGet(url).then(res =>{
//             // 继续请求昵称头像等信息
//             let url = 'http://bc.91dianji.com.cn//wxApi/sns/userinfo?access_token='+ res.data.access_token +'&openid='+ res.data.openid +'&lang=zh_CN';
//             axiosGet(url).then(res =>{
//                 console.log('获取用户头像信息成功',res);
//                 this.nickname = res.data.nickname;
//                 this.photo = res.data.headimgurl;
//                 this.$store.commit('openid',res.data.openid);
//                 this.$store.commit('nickname',res.data.nickname);
//                 this.$store.commit('headimg',res.data.headimgurl);
//                 // 判断openid是否注册过
//                 let params = {
//                   openid: res.data.openid
//                 };
//                 let url = '/customer/getOpenidIsExist';
//                 axiosPost(url,params).then(res =>{
//                   console.log('openid存在',res);
//                   if(res.data.data == '0'){
//                     // 未注册
//                     let params = {
//                         nickname: this.$store.state.wechat.nickname,
//                         openid:   this.$store.state.wechat.openid,
//                         photo:    this.$store.state.wechat.headimg
//                     }
//                     let url = '/customer/registered';
//                     axiosPost(url,params).then(res =>{
//                         console.log('注册成功',res.data);
//                         // 登录
//                         let params = {
//                             openid: this.$store.state.wechat.openid
//                         }
//                         let url = '/customer/loginByWechat';
//                         axiosPost(url,params).then(res =>{
//                             console.log('登陆成功',res);
//                             storage.set('cid',res.data.data.id);
//                         }).catch(res =>{
//                             console.log('登录失败',res);
//                         })
//                     }).catch(res =>{
//                         console.log('注册失败',res.data);
//                     })
//                   }
//                 }).catch(res =>{
//                 })
//             }).catch(res =>{
//                 console.log('获取用户头像信息失败',res);
//             })
//         }).catch(res =>{
//             console.log('获取access_token失败',res.data)
//         })
//     },
//   },
//   created(){
//     this.code = this.GetUrlParam('code');
//     if(this.GetUrlParam('code') != ''){
//       // 已授权
//       this.handleAccessToken();
//     }else{
//       // 未授权
//       this.handleOauth();
//     }
//   }
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
