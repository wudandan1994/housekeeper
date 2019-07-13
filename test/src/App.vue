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
            storage.set('access_token',res.data.access_token); 
            // 继续请求昵称头像等信息
            let url = 'http://pay.91dianji.com.cn/wxApi/sns/userinfo?access_token='+ storage.get('access_token') +'&openid='+ res.data.openid +'&lang=zh_CN';
            axiosGet(url).then(res =>{
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
                let url = '/customer/getOpenidIsExist' // 生产环境
                axiosPost(url,params).then(res =>{
                  if(res.data.data == '0'){
                    // 未注册
                    let params = {
                      nickname: this.$store.state.wechat.nickname,
                      openid:   this.$store.state.wechat.openid,
                      photo:    this.$store.state.wechat.headimg,
                      recommendedcode: storage.get('promotioncode')
                    }
                    let url = '/customer/registered';
                    axiosPost(url,params)
                    .then(res =>{
                      if(res.data.success){
                        // 登录
                        let url = '/customer/loginByWechat';
                        let params = {
                            openid: this.$store.state.wechat.openid
                        };
                        axiosPost(url,params)
                        .then(res =>{
                            if(res.data.success){
                                storage.set('cid',res.data.data.id);
                                this.$store.commit('iscertification',res.data.data.iscertification);
                                this.$store.commit('level',res.data.data.level);
                                this.$store.commit('promotioncode',res.data.data.promotioncode);
                                this.$store.commit('mobile',res.data.data.mobile);
                                this.$store.commit('vip',res.data.data.vip);
                                this.$store.commit('recommendedcode',res.data.data.recommendedcode);
                                this.$store.commit('city',res.data.data.city);
                                this.$toast('登陆成功');
                                let url = '/customer/getCustomer';
                                let params = {
                                    openid:this.$store.state.wechat.openid,
                                };
                                axiosPost(url,params)
                                .then(res =>{
                                    if(res.data.success){
                                      this.iscertification = res.data.data.iscertification;
                                    }
                                })
                                .catch(res =>{
                                })
                              }else{
                                this.$toast('登陆失败');
                              }
                        })
                        .catch(res =>{
                            this.$toast('登陆失败');
                        })
                        }else{
                          this.$toast('注册失败了');
                        }
                    })
                    .catch(res =>{
                    })
                  }else{
                    // 已注册
                    // 登录
                    let params = {
                        openid: this.$store.state.wechat.openid
                    }
                    let url = '/customer/loginByWechat';
                    axiosPost(url,params).then(res =>{
                        if(res.data.success){
                          storage.set('cid',res.data.data.id);
                          storage.set('openid',res.data.data.openid);
                          this.$store.commit('iscertification',res.data.data.iscertification);
                          this.$store.commit('level',res.data.data.level);
                          this.$store.commit('promotioncode',res.data.data.promotioncode);
                          this.$store.commit('mobile',res.data.data.mobile);
                          this.$store.commit('vip',res.data.data.vip);
                          this.$store.commit('recommendedcode',res.data.data.recommendedcode);
                          this.$store.commit('amount',res.data.data.amount);
                          this.$store.commit('city',res.data.data.city);
                          this.$router.push('/home');
                          this.$toast('登陆成功');
                        }else{
                          this.$toast('登陆失败');
                        }
                    }).catch(res =>{
                        this.$toast('登陆失败');
                    })
                  }
                  
                }).catch(res =>{
                })
            }).catch(res =>{
            })
        }).catch(res =>{
        })
    },
  },
  created(){
    if(this.$utils.getUrlKey('promotioncode') != "" && this.$utils.getUrlKey('code') === null){
      storage.set('promotioncode',this.$utils.getUrlKey('promotioncode'));
      console.log('链接进入推荐码',this.$utils.getUrlKey('promotioncode'));
    }
    // 首先判断是否存储了openid
    if(storage.get('openid') != '' && storage.get('openid') !== null){
      // 已经注册过，可直接登录，无需再次授权
      let params = {
        openid: storage.get('openid')
      }
      let url = '/customer/loginByWechat';
      axiosPost(url,params).then(res =>{
          if(res.data.success){
            storage.set('cid',res.data.data.id);
            storage.set('openid',res.data.data.openid);
            this.$store.commit('iscertification',res.data.data.iscertification);
            this.$store.commit('level',res.data.data.level);
            this.$store.commit('promotioncode',res.data.data.promotioncode);
            this.$store.commit('mobile',res.data.data.mobile);
            this.$store.commit('vip',res.data.data.vip);
            this.$store.commit('recommendedcode',res.data.data.recommendedcode);
            this.$store.commit('amount',res.data.data.amount);
            this.$store.commit('headimg',res.data.data.photo);
            this.$store.commit('nickname',res.data.data.nickname);
            this.$store.commit('openid',res.data.data.openid);
            this.$store.commit('city',res.data.data.city);
            this.$router.push('/home');
            this.$toast('登陆成功');
          }else{
            this.$toast('登陆失败');
          }
      }).catch(res =>{
          this.$toast('登陆失败');
      })
    }else{
      // 拿不到openid，需要授权登录
      // 判断是否是微信浏览器
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
    }
  },
  mounted(){
    // js-sdk的access_token 
    let url = 'http://pay.91dianji.com.cn/wxApi/cgi-bin/token?grant_type=client_credential&appid=wx779a30a563ad570d&secret=d89c480f3181c49cbee43d4cec49b4b0';
    axiosGet(url).then(res =>{
      let url = 'http://pay.91dianji.com.cn/wxApi/cgi-bin/ticket/getticket?access_token='+ res.data.access_token +'&type=jsapi';
      axiosGet(url).then(res =>{
        storage.set('ticket',res.data.ticket);
        // 请求签名信息
        var jsapi_ticket = storage.get('ticket');
        var radom = Math.random().toString(36).substr(2);
        var timestamp = (new Date()).getTime();
        var url = window.location.href;
        
        let posturl = '/customer/getSignature';
        let params = {
          jsapi_ticket: jsapi_ticket,
          url: url,
          noncestr: radom,
          timestamp: timestamp
        };
        axiosPost(posturl,params).then(res =>{
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
                  title: '钱夹宝综合金融服务推广平台，点滴成就未来', // 分享标题
                  desc: '让每个人都能找到人生的意义', // 分享描述
                  link: 'http://pay.91dianji.com.cn/#/home?promotioncode=' + that.$store.state.wechat.promotioncode, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                  imgUrl: 'http://pay.91dianji.com.cn/logo.png', // 分享图标
                  success: function (res) {
                  }
              })
          });
          wx.error(function(res){
    
          });
        }).catch(res =>{
        })

      }).catch(res =>{
      })
    }).catch(res =>{
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
