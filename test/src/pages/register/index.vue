<template>
    <div id="register">
        <header class="header-top row">
            <div class="left-icon start-center" @click="goBack"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">个人设置</div>
            <div class="right-icon center"></div>
        </header>
        <div class="container">
            <div class="info">
               <div class="area">
                   <div class="per-userinfo top row">
                       <div class="avator start-center"><van-icon name="manager" size="22px"/>头像</div>
                       <div class="detail end-center">
                           <van-uploader :after-read="onAvator" class="upload-component" accept="image/*" multiple name="zhengm">                           
                                <img :src="photo" />
                            </van-uploader>
                       </div>
                       <div class="icon-left end-center"><van-icon name="arrow" /></div>
                   </div>
                   <div class="per-userinfo row">
                       <div class="avator start-center"><van-icon name="map-marked" size="22px"/>昵称</div>
                       <div class="detail end-center">
                          <input type="text" v-model="nickname" placeholder="请输入您的昵称">
                       </div>
                       <div class="icon-left end-center"><van-icon name="arrow" /></div>
                   </div>
                   <div class="per-userinfo row">
                       <div class="avator start-center"><van-icon name="phone" size="22px"/>手机号</div>
                       <div class="detail end-center">
                          <input type="text" v-model="mobile" placeholder="请输入您的手机号">
                       </div>
                       <div class="icon-left end-center"><van-icon name="arrow" /></div>
                   </div>
                   <div class="per-userinfo row">
                       <div class="avator start-center"><van-icon name="location" size="22px"/>所在地</div>
                       <div class="detail end-center">
                          <input type="text" v-model="city" placeholder="请输入您的所在地">
                       </div>
                       <div class="icon-left end-center"><van-icon name="arrow" /></div>
                   </div>
                   <div class="per-userinfo row">
                       <div class="avator start-center"><van-icon name="card" size="22px"/>是否有信用卡</div>
                       <div class="detail end-center">
                           <van-switch v-model="iscreditcard" />
                       </div>
                       <div class="icon-left end-center"><van-icon name="arrow" /></div>
                   </div>
                   <div class="per-userinfo row">
                       <div class="avator start-center"><van-icon name="shopping-cart" size="22px"/>是否有车</div>
                       <div class="detail end-center">
                          <van-switch v-model="iscar" />
                       </div>
                       <div class="icon-left end-center"><van-icon name="arrow" /></div>
                   </div>
                    <div class="per-userinfo row">
                       <div class="avator start-center"><van-icon name="chat" size="22px"/>是否允许下级联系</div>
                       <div class="detail end-center">
                          <van-switch v-model="isconnect" />
                       </div>
                       <div class="icon-left end-center"><van-icon name="arrow" /></div>
                   </div>
                   <div class="per-userinfo row">
                       <div class="avator start-center"><van-icon name="invition" size="22px"/>微信号</div>
                       <div class="detail end-center">
                          <input type="text" v-model="wechat" placeholder="请输入您的微信号">
                       </div>
                       <div class="icon-left end-center"><van-icon name="arrow" /></div>
                   </div>
                    <!-- <div class="per-userinfo row">
                       <div class="avator start-center"><van-icon name="todo-list" size="22px"/>微信二维码</div>
                       <div class="detail end-center">
                            <van-uploader :after-read="onWechatQr"  class="upload-component" accept="image/*" multiple name="zhengm">                           
                                <img :src="wechatqr" />
                            </van-uploader>
                       </div>
                       <div class="icon-left end-center"><van-icon name="arrow" /></div>
                   </div> -->
                   <!-- <div class="per-userinfo row">
                       <div class="avator start-center"><van-icon name="stop-circle" size="22px"/>声音开关</div>
                       <div class="detail end-center">
                           <van-switch v-model="voice" active-color="#1989fa" inactive-color="#f44" />
                       </div>
                       <div class="icon-left end-center"><van-icon name="arrow" /></div>
                   </div> -->
               </div>
            </div>
            <!-- <van-loading type="spinner" color="#4B66AF" size="40px"/> -->
            <van-button class="btn" @click="updateSet" type="default">更新信息</van-button>
        </div>
        <loading :componentload='componentload'></loading>
    </div>

</template>

<script>
import loading from'@/components/loading'
import {axiosPost} from '@/lib/http'
import axios from 'axios'
import storage from '@/lib/storage'
export default {
    data() {
        return {
            componentload: true,
            url: 'http:pay.91dianji.com.cn/',
            checkedCard:"",
            checkedCar:"",
            checkedVoice:"",
            show:false,
            actions:[
                { name:"上班族"},
                { name:"个体户"},
                { name:"自由职业者"},
                { name:"企业主"},
               ],
            identity:"",
            photo: 'http://pay.91dianji.com.cn/logo.png',
            nickname: '',
            mobile: '',
            city: '',
            iscreditcard: false,
            iscar: false,
            wechat: '',
            wechatqr: 'http://pay.91dianji.com.cn/logo.png',
            voice: '0',
            isconnect:true
        }
    },
    components:{
        loading
    },
    methods:{
        goBack() {
            this.$router.go(-1);
        },
        // 上传微信头像
        onAvator(file){
            this.componentload = true;
             var form = new FormData();
            form.append('file',file.file);
            let url = '/upload/uploadImg';
            let config = {
                headers: { "Content-Type": "multipart/form-data" }
            };
            axios.post(url,form,config).then(res =>{
                if(res.data.success){
                    // console.log('微信头像上传成功',res);
                    this.photo = res.data.data.imgUrl;
                     this.wechatqr = res.data.data.thumImgUrl;
                    setTimeout(() =>{
                        this.componentload = false;
                    },500)
                }
            }).catch(res =>{
            })
        },
        // 上传微信二维码头像
        onWechatQr(file){
            this.componentload = true;
            var form = new FormData();
            form.append('file',file.file);
            let url = '/upload/uploadImg';
            let config = {
                headers: { "Content-Type": "multipart/form-data" }
            };
            axios.post(url,form,config).then(res =>{
                if(res.data.success){
                    // console.log('二维码上传成功',res);
                    this.wechatqr = res.data.data.thumImgUrl;
                    setTimeout(() =>{
                        this.componentload = false;
                    },500)
                }
            }).catch(res =>{
            })
        },
        onRead(file){},
        // 查询个人设置
        getSet(){
            let data={
                openid:this.$store.state.wechat.openid,
            }
            axiosPost("/customer/getCustomer",data)
            .then(res =>{
                if(res.data.success){
                    // console.log('查询成功',res.data.data);
                    this.photo = res.data.data.photo;
                    this.nickname = res.data.data.nickname;
                    this.mobile = res.data.data.mobile;
                    this.city = res.data.data.city;
                    res.data.data.iscreditcard == '0' ? this.iscreditcard = false : this.iscreditcard = true;
                    res.data.data.iscar == '0' ? this.iscar = false : this.iscar = true;
                    res.data.data.voice == '0' ? this.voice = false : this.voice = true;
                    this.wechat = res.data.data.wechat;
                    this.wechatqr = res.data.data.wechatqr;
                    res.data.data.ispermit == '0' ? this.isconnect = false : this.isconnect = true;
                }
            })
            .catch(res =>{
                this.$toast('查询失败');
                // console.log('查询失败',res.data.data);
            })
        },
        // 更新个人设置
        updateSet(){
            this.componentload = true;
            let url = '/customer/updateCustomer';
            var iscreditcard = false;
            var voice = '';
            var iscar = '';
            var isconnect = '';

            this.isconnect == true ? isconnect = "1" :  isconnect = "0";
            // console.log('允许',isconnect);
            this.iscar == true ? iscar = '1' : iscar = '0';
            this.voice == true ? voice = '1' : voice = '0';
            this.iscreditcard == true ? iscreditcard = '1' : iscreditcard = '0';
            
            let params = {
                openid: this.$store.state.wechat.openid,
                photo: this.photo,
                nickname: this.nickname,
                mobile: this.mobile,
                city: this.city,
                iscreditcard: iscreditcard,
                iscar: iscar,
                wechat: this.wechat,
                wechatqr: this.wechatqr,
                voice: voice,
                ispermit:isconnect
            };
            axiosPost(url,params).then(res =>{
                
                if(res.data.success){
                    setTimeout(() =>{
                        this.componentload = false;
                    },1000);
                    this.$toast('更新成功');
                }else{
                    this.$toast(res.data.message);
                    setTimeout(() =>{
                        this.componentload = false;
                    },1000);
                }
            }).catch(res =>{
            })
        }
    },
    created () {
        
    },
    mounted(){
        this.getSet();
        setTimeout(() =>{
            this.componentload = false;
        },500)
    }
}
</script>

<style lang="less">
   #register {
       width: 100vw;
       height: auto;
       background-color: #E2E3E5;    
       padding-bottom: 80px;
       >header {
           background-color: #4B66AF;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           font-size:28px;
           color:#fff;
           display: flex;
           z-index:999;
           position: fixed;
           justify-content: space-between;
           >span {
               &:nth-of-type(1) {
                   margin-left: 10px;
               }
               &:nth-of-type(3) {
                   margin-right: 10px;
               }
           }
       }
       >.container {
           padding-top:96px;
           padding-bottom: 50px;
           >.info {
               >.area {
                   .top{
                       margin-top: 20px;
                   }
                   .per-userinfo{
                       width: 96%;
                       height: 100px;
                       margin: auto;
                       font-size: 28px;
                       border-bottom: #ccc solid 1px;
                       .avator{
                           width: 50%;
                           height: 100%;
                       }
                       .detail{
                           width: 58%;
                           height: 100%;
                           img{
                               width: 80px;
                               height: 80px;
                           }
                           input{
                               width: 100%;
                               height: 80%;
                               text-align: right;
                               border: none;
                               background: transparent;
                           }
                       }
                       .icon-left{
                           width: 10%;
                           height: 100%;
                       }
                   }
               }
           }
            .btn{
                width: 100%;
                height:100px;
                border: none;
                color:#fff;
                background-color: #4B66AF;
                border-radius: 15px;
                width:92%;
                height: 100px;
                margin-top:60px;
                margin-left: 4%;
                font-size: 28px;
            }
       }
   }
</style>
