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
                   <div class="name-title start-center">姓名</div>
                   <div class="name-input"><input type="text" v-model="name" placeholder="请输入姓名"></div>
               </div>
               <div class="name row">
                   <div class="name-icon center"><van-icon name="card" size="20px"/></div>
                   <div class="name-title start-center">身份证号</div>
                    <div class="name-input"><input type="text" v-model="idcardnumber" placeholder="请输入身份证号"></div>
               </div>
           </div>
           <div class="upload">
               <h3>身份证持证照：</h3>
               <p>*请确保证件和人脸能同时看清楚，文件大小不超过2M</p>
           </div>

           <div class="positive">
                <div class="title start-center">1.身份证正面</div>
                <div class="uploadimg">
                    <van-uploader :after-read="onRead" class="upload-component" accept="image/*" multiple name="zhengm">                           
                            <img :src="url+cardfront" />
                    </van-uploader>
                </div>
            </div>
            
            <div class="positive top">
                <div class="title start-center">2.身份证反面</div>
                <div  class="uploadimg">
                        <van-uploader :after-read="onReadFanm" class="upload-component" accept="image/*" multiple name="fanm">                           
                            <img :src="url+cardback" />
                    </van-uploader>
                </div>
            </div>
           <div class="submit center" @click="submit" v-if="status == '未认证'"><van-button class="van-button" type="default">提交</van-button></div>
           <div class="loading center" v-if="loading"><van-loading type="spinner" color="black" size="50px" /></div>
        </div>
    </div>

</template>


<script>
import axios from 'axios'
import {axiosPost,axiosGet} from '@/lib/http'
import storage from '@/lib/storage'
export default {
    data() {
        return {
            url: 'http://pay.91dianji.com.cn/',
            name:"",
            idcardnumber:"",
            picshowList: [],
            front: '',
            cardfront: 'idcardfront.jpg',
            cardback: 'idcardback.jpg',
            back: '',
            loading: false,
            status: '',
          
        }
    },
    methods:{
        // 身份证正面
         onRead(file) {
            console.log('文件上传',file)
            var form = new FormData()
            form.append('file',file.file)
            let url = 'http://pay.91dianji.com.cn/api/upload/uploadImg'
            let config = {
                headers: { "Content-Type": "multipart/form-data" }
            };
            axios.post(url,form,config).then(res =>{
                console.log('文件上传成功',res);
                if(res.data.success){
                    this.cardfront = res.data.data.imgUrl
                }
            }).catch(res =>{
                console.log('文件上传失败',res);
            })
            
        },
        // 身份证反面
        onReadFanm(file){
            console.log('文件上传',file);
            var form = new FormData();
            form.append('file',file.file);
            let url = 'http://pay.91dianji.com.cn/api/upload/uploadImg';
            let config = {
                headers: { "Content-Type": "multipart/form-data" }
            };
            axios.post(url,form,config).then(res =>{
                console.log('文件上传成功',res);
                if(res.data.success){
                    this.cardback = res.data.data.imgUrl;
                }
            }).catch(res =>{
                console.log('文件上传失败',res);
                })
        },
        submit(){
            this.loading = true;
            let url = 'http://pay.91dianji.com.cn/api/customer/identification';
            let params = {
                openid: this.$store.state.wechat.openid,
                idcardnumber: this.idcardnumber,
                name: this.name,
                idcardfront: this.cardfront,
                idcardback: this.cardback,
                cid: storage.get('cid')
            };
            axiosPost(url,params).then(res =>{
                if(res.data.success){
                    this.loading = false;
                    this.$toast('提交成功');
                }else{
                    this.loading = false;
                    this.$toast('认证失败');
                }
            }).catch(res =>{
                console.log('实名认证失败',res);
            })
        },
        handleReturnHome() {
            this.$router.push({path:'/home/verified'})
        },
        
        // 获取实名认证信息
        handleGetAOuth(){
            let url = 'http://pay.91dianji.com.cn/api/customer/getIdentification';
            let params = {};
            axiosPost(url,params).then(res =>{
                console.log('获取实名认证状态成功',res);
                if(res.data.data.status != '0'){
                    this.name = res.data.data.name;
                    this.idcardnumber = res.data.data.idcardnumber;
                    this.cardback = res.data.data.idcardback;
                    this.cardfront = res.data.data.idcardfront;
                   if(res.data.data.status == '1'){
                        this.status = '审核中'
                    }else{
                        this.status = '已认证'
                    }
                }else{
                    this.status = '未认证'
                }
            }).catch(res =>{
                console.log('获取实名认证状态失败',res);
            })
        }
    },
    created(){
        
        
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
               background-color: #4b66af;
               color:#fff;
               .name{
                   width: 100%;
                   height: 120px;
                   border-bottom: solid 1px #1221CA;
                   color:#fff;
                   .name-icon{
                       width: 10%;
                       height: 100%;
                   }
                   .name-title{
                       width: 15%;
                       height: 100%;
                       font-size: 26px;
                   }
                   .name-input{
                       width: 70%;
                       height: 100%;
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
               margin-top: 50px;
               background-color: #B39A57;
               color:#fff;
               text-align: center;
               border-radius: 5px;
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
