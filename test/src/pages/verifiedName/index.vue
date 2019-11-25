<template>
    <div id="verified-name">
        <header class="header-top row">
            <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">实名认证</div>
            <div class="right-icon varify center">{{status}}</div>
        </header>
        <div class="container">
           <div class="real">
               <div class="name row">
                   <div class="name-icon center"><van-icon name="manager" size="20px"/></div>
                   <div class="name-title start-center">真实姓名</div>
                   <div class="name-input"><input type="text" v-model="name" placeholder="请输入姓名"></div>
               </div>
               <div class="name row">
                   <div class="name-icon center"><van-icon name="card" size="20px"/></div>
                   <div class="name-title start-center">身份证号</div>
                    <div class="name-input"><input type="text" v-model="idcardnumber" placeholder="请输入身份证号"></div>
               </div>
           </div>
           <!-- <div class="upload">
               <h3>身份证持证照：</h3>
               <p>*请确保证件和人脸能同时看清楚，文件大小不超过2M</p>
           </div> -->

           <!-- <div class="positive">
                <div class="title start-center">1.身份证正面</div>
                <div class="uploadimg">
                    <van-uploader :after-read="onRead" class="upload-component" accept="image/*" multiple name="zhengm">                           
                            <img :src="url+cardfront" />
                    </van-uploader>
                </div>
            </div> -->
            
            <!-- <div class="positive top">
                <div class="title start-center">2.身份证反面</div>
                <div  class="uploadimg">
                    <van-uploader :after-read="onReadFanm" class="upload-component" accept="image/*" multiple name="fanm">                           
                        <img :src="url+cardback" />
                    </van-uploader>
                </div>
            </div> -->
           <div class="submit center" @click="submit" v-if="status  != '已认证'"><van-button class="van-button" type="default">提交</van-button></div>
           <div class="submit center" v-else><van-button class="van-button" disabled   type="info">已提交</van-button></div>
           <!-- <div class="submit center" @click="submit" ><van-button class="van-button" type="default">提交认证</van-button></div> -->

        </div>
        <loading :componentload="componentload"></loading>
    </div>

</template>


<script>
import loading from '@/components/loading'
import axios from 'axios'
import {axiosPost,axiosGet} from '@/lib/http'
import storage from '@/lib/storage'
export default {
    components:{
      loading
    },
    data() {
        return {
            componentload: true,
            url: 'http://pay.91dianji.com.cn/',
            name:"",
            idcardnumber:"",
            picshowList: [],
            front: '',
            // cardfront: 'idcardfront.jpg',
            // cardback: 'idcardback.jpg',
            cardfrontup: '',
            cardbackup: '',
            back: '',
            loading: false,
            status: '未认证',
          
        }
    },
    methods:{
       
        // submit(){
        //     this.componentload = true;
        //     let url = '/customer/identification';
        //     let params = {
        //         // openid: this.$store.state.wechat.openid,
        //         // idcardnumber: this.idcardnumber,
        //         // name: this.name,
        //         // idcardfront: this.cardfrontup,
        //         // idcardback: this.cardbackup,
        //         // cid: storage.get('cid')
        //     };
        //     axiosPost(url,params).then(res =>{
        //         if(res.data.success){
        //             this.loading = false;
        //             this.$toast('提交成功');
        //             this.$store.commit('iscertification',res.data.data.status);
        //             this.name = res.data.data.name;
        //              if(this.name.length==2){
        //                 this.name=this.hidden(this.name,1,0)
        //             } else {
        //                 this.name=this.hidden(this.name,1,1)
        //             }
        //             this.idcardnumber = res.data.data.idcardnumber;
        //              this.idcardnumber=this.hidden(this.idcardnumber,4,4)
        //             this.$router.push({path:'/home'})
        //              setTimeout(()=>{
        //                 this.componentload = false;
        //             },500)
        //         }else{
        //             this.loading = false;
        //             this.$toast(res.data.message);
        //             setTimeout(()=>{
        //                 this.componentload = false;
        //             },500)
        //         }
        //     }).catch(res =>{
        //          setTimeout(()=>{
        //             this.componentload = false;
        //         },500)
        //         this.$toast('认证失败');
        //     })
        // },
        submit(){
            if(this.name.trim().length==0 || this.idcardnumber.trim().length==0){
                this.$toast("请将信息填写完整")
                return
            }
            let data={
                idcardnumber:this.idcardnumber,
                name:this.name
            }
            
             axiosPost("/customer/insertIdentification",data)
             .then(res=>{
                 if(res.data.success){
                     this.loading = false;
                    this.$toast('提交成功');
                    this.$store.commit('iscertification','2');
                    this.$router.push({path:'/personalCenter'})
                     setTimeout(()=>{
                        this.componentload = false;
                    },500)
                 } else {
                     this.loading = false;
                    this.$toast(res.data.message);
                    setTimeout(()=>{
                        this.componentload = false;
                    },500) 
                 }
             })
             .catch(res=>{
                 setTimeout(()=>{
                    this.componentload = false;
                },500)
                this.$toast('认证失败');
                this.status = '信息不符,请重新认证';
             })

        },
        handleReturnHome() {
            this.$router.go(-1);
        },
        
        // 获取实名认证信息
        handleGetAOuth(){
            let url = '/customer/getIdentification';
            let params = {};
            axiosPost(url,params).then(res =>{
                setTimeout(()=>{
                    this.componentload = false;
                },500)
                if(res.data.data.status != '0'){
                    this.name = res.data.data.name;
                    if(this.name.length==2){
                        this.name=this.hidden(this.name,1,0)
                    } else {
                        this.name=this.hidden(this.name,1,1)
                    }
                    this.idcardnumber = res.data.data.idcardnumber;

                    this.idcardnumber=this.hidden(this.idcardnumber,4,4)

                    // this.cardback = 'thum_' + res.data.data.idcardback;
                    // this.cardfront = 'thum_' + res.data.data.idcardfront;
                   if(res.data.data.status == '1'){
                        this.status = '审核中'
                    }else{
                        this.status = '已认证'
                    }
                }else{
                    this.status = '未认证'
                }
            }).catch(res =>{
                setTimeout(()=>{
                    this.componentload = false;
                    this.$toast('查询失败');
                },500)
            })
        },
        hidden(str,front,end){

            var len = str.length-front-end;
           var xing = '';
           for (var i=0;i<len;i++) {
                xing+='*';
                }
           return str.substring(0,front)+xing+str.substring(str.length-end);

        }
    },
    created(){

       this.$store.state.wechat.iscertification == '0' ? this.status = '未实名' : (this.$store.state.wechat.iscertification == '2') ? this.status = '认证成功' : this.status = '信息不符,请重新认证'; 

    },
    mounted(){
        this.handleGetAOuth();
    }
}
</script>

<style lang="less">
   #verified-name {
       >header {
           background-color: #4965AE;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           color:#fff;
           display: flex;
           font-size:28px;
           position: fixed;
           justify-content: space-between;
           z-index: 999;
           .varify{
              font-size: 24px;
           }
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
           padding-top:94px;
           padding-bottom: 50px;
           >.real {
               background-color: #fff;
               margin-top:30px;
               color:#000;
               .name{
                   width: 100%;
                   height: 120px;
                   border-bottom: solid 1px #ccc;
                   color:#000;
                   .name-icon{
                       width: 10%;
                       height: 100%;
                   }
                   .name-title{
                       width: 16%;
                       height: 100%;
                       font-size: 26px;
                       margin-left:10px;
                   }
                   .name-input{
                       width: 66%;
                       height: 100%;
                       margin-right:15px;
                       input{
                          width: 100%;
                          height: 100%;
                          text-align: right;
                          background: transparent;
                          border: none; 
                       }
                       input::placeholder{
                          color: #ccc; 
                       }
                   }
               }
           }
           >.upload {
               padding-top:30px;
               padding-left:20px;
               .fanm {
                   margin-top:200px;
               }
               >h3{
                   font-size: 32px;
                   color:#000;
                   font-weight: bold;
                   padding-bottom: 20px;
               }
               >p{
                   color:#A09999;
                   padding-bottom: 20px;
               }
           }
           .top{
               margin-top: 30px;
           }
           .positive{
                width: 95vw;
                height: 450px;
                margin-left: auto;
                margin-right: auto;
                .title{
                    width: 100%;
                    height: 50px;
                    font-size: 30px;
                }
                .uploadimg{
                    width: 100%;
                    height: 400px;
                    .upload-component{
                        width: 100%;
                        height: 100%;
                        >img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
           >.submit{
               width:95%;
               height: 100px;
               margin-left: auto;
               margin-right: auto;
               margin-top:200px;
               background-color: #B39A57;
               color:#fff;
               text-align: center;
               border-radius: 5px;
               .van-button--info {
                   background-color: #fff;
                   color:#000;
                   border:1px solid #fff;
               }
               .van-button{
                   width: 100%;
                   height: 100%;
                   font-size: 30px;
               }
           }
           .loading{
               width: 100vw;
               height: 20vh;
               position: fixed;
               z-index: 5;
               top: 40vh;
               left: 0px;
           }
       }
   }
</style>
