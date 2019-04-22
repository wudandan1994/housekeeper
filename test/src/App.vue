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
    GetUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r != null) return decodeURI(r[2]);
        return null;
    },
    // 获取access_token
    handleAccessToken(){
        let url = 'http://pay.91dianji.com.cn/wxApi/sns/oauth2/access_token?appid=wx779a30a563ad570d&secret=d89c480f3181c49cbee43d4cec49b4b0&code='+this.code+'&grant_type=authorization_code';
        axiosGet(url).then(res =>{
            console.log('access_token获取成功',res);
            storage.set('access_token',res.data.access_token); 
            // 继续请求昵称头像等信息
            let url = 'http://pay.91dianji.com.cn/wxApi/sns/userinfo?access_token='+ storage.get('access_token') +'&openid='+ res.data.openid +'&lang=zh_CN';
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
                // let url = '/customer/getOpenidIsExist'; //开发环境
                let url = 'http://pay.91dianji.com.cn/api/customer/getOpenidIsExist' // 生产环境
                axiosPost(url,params).then(res =>{
                  console.log('openid存在',res);
                  if(res.data.data == '0'){
                    // 未注册
                    let params = {
                        nickname: this.$store.state.wechat.nickname,
                        openid:   this.$store.state.wechat.openid,
                        photo:    this.$store.state.wechat.headimg,
                        recommendedcode: storage.get('recommendedcode')
                    }
                    let url = 'http://pay.91dianji.com.cn/api/customer/registered';
                    axiosPost(url,params).then(res =>{
                        
                        if(res.data.success){
                          console.log('注册成功',res);
                          // 登录
                          let url = 'http://pay.91dianji.com.cn/api/customer/loginByWechat';
                          let params = {
                              openid: this.$store.state.wechat.openid
                          };
                          axiosPost(url,params).then(res =>{
                              console.log('登陆成功',res);
                              storage.set('cid',res.data.data.id);
                              this.$store.commit('iscertification',res.data.data.iscertification);
                              this.$store.commit('level',res.data.data.level);
                              this.$store.commit('promotioncode',res.data.data.promotioncode);
                              this.$store.commit('mobile',res.data.data.mobile);
                              this.$store.commit('vip',res.data.data.vip);
                              this.$store.commit('recommendedcode',res.data.data.recommendedcode);
                              this.$toast('登陆成功');
                          }).catch(res =>{
                              console.log('登录失败',res);
                              this.$toast('登陆失败');
                          })
                        }else{
                          this.$toast('注册失败了');
                        }
                    }).catch(res =>{
                        console.log('注册失败',res);
                    })
                  }else{
                    // 已注册
                    // 登录
                    let params = {
                        openid: this.$store.state.wechat.openid
                    }
                    let url = 'http://pay.91dianji.com.cn/api/customer/loginByWechat';
                    axiosPost(url,params).then(res =>{
                        console.log('登陆成功',res);
                        storage.set('cid',res.data.data.id);
                        this.$store.commit('iscertification',res.data.data.iscertification);
                        this.$store.commit('level',res.data.data.level);
                        this.$store.commit('promotioncode',res.data.data.promotioncode);
                        this.$store.commit('mobile',res.data.data.mobile);
                        this.$store.commit('vip',res.data.data.vip);
                        this.$store.commit('recommendedcode',res.data.data.recommendedcode);
                        this.$store.commit('amount',res.data.data.amount);
                        this.$toast('登陆成功');
                    }).catch(res =>{
                        console.log('登录失败',res);
                        this.$toast('登陆失败');
                    })
                  }
                  
                }).catch(res =>{
                })
            }).catch(res =>{
                console.log('获取用户头像信息失败',res);
            })
        }).catch(res =>{
            console.log('获取access_token失败',res.data)
        })
    },
  },
  created(){
    if(this.$router.currentRoute.query.promotioncode != '' && typeof(this.$router.currentRoute.query.promotioncode) != 'undefined'){
      storage.set('recommendedcode',this.$router.currentRoute.query.promotioncode);
    }
    // 判断是否是微信浏览器
    console.log('VUEX',this.$store.state.wechat);
    var ua = navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i)=="micromessenger") {
      // 微信浏览器
      if(this.GetUrlParam('code') === null){
      // 未授权
        this.handleOauth();
      }else{
      // 已授权
        this.code = this.GetUrlParam('code');
        this.handleAccessToken();
      }
    }else{
      // 非微信浏览器
    }  
  },
  mounted(){
    // js-sdk的access_token 
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
        var timestamp = (new Date()).getTime();
        var url = window.location.href;
        
        let posturl = 'http://pay.91dianji.com.cn/api/customer/getSignature';
        let params = {
          jsapi_ticket: jsapi_ticket,
          url: url,
          noncestr: radom,
          timestamp: timestamp
        };
        axiosPost(posturl,params).then(res =>{
          console.log('签名请求成功',res);
          let that = this;
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
                'updateAppMessageShareData',
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'chooseWXPay'
              ] // 必填，需要使用的JS接口列表
          });
          wx.ready(function(){
              wx.onMenuShareAppMessage({ 
                  title: '测试', // 分享标题
                  desc: '测试', // 分享描述
                  link: 'http://pay.91dianji.com.cn/#/home?promotioncode=' + that.$store.state.wechat.promotioncode, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                  imgUrl: 'http://pay.91dianji.com.cn/icon_61.png', // 分享图标
                  success: function (res) {
                    console.log('分享调用成功',res);
                  }
              })
          });
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
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
