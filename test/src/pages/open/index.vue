<template>
    <div id="open">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>开通商户业务</span>
            <span></span>
        </header>
        <div class="container">
           <p class="type">请上传图片</p>
           <div class="info">
               <div class="positive">
                    <p class="title start-center">身份证正面</p>
                    <div class="uploadimg">
                        <van-uploader :after-read="onRead" class="upload-component" accept="image/*" multiple name="zhengm">                           
                                <img :src="url+cardfront" />
                        </van-uploader>
                    </div>
               </div>
               <div class="positive">
                    <p class="title start-center">身份证反面</p>
                    <div class="uploadimg">
                        <van-uploader :after-read="onReadF" class="upload-component" accept="image/*" multiple name="zhengm">                           
                                <img :src="url+cardback" />
                        </van-uploader>
                    </div>
               </div>
                <div class="positive">
                    <p class="title start-center">手持身份证</p>
                    <div class="uploadimg">
                        <van-uploader :after-read="onReadS" class="upload-component" accept="image/*" multiple name="zhengm">                           
                                <img :src="url+cardWithhand" />
                        </van-uploader>
                    </div>
               </div>
                <div class="positive">
                    <p class="title start-center">银行卡正面</p>
                    <div class="uploadimg">
                        <van-uploader :after-read="onReadQ" class="upload-component" accept="image/*" multiple name="zhengm">                           
                                <img :src="url+bankfront" />
                        </van-uploader>
                    </div>
               </div>
               <div class="positive">
                    <p class="title start-center">银行卡反面</p>
                    <div class="uploadimg">
                        <van-uploader :after-read="onReadH" class="upload-component" accept="image/*" multiple name="zhengm">                           
                                <img :src="url+bankback" />
                        </van-uploader>
                    </div>
               </div>
           </div>
           <div class="submit">
               <van-button @click="sbumit" round size="large" type="info">提交</van-button>
           </div>
            <div class="showImg">
                <ul>
                    <li v-for="(item, index) of photoList " :key="index">
                        <img :src="url+item.photoData" >
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script>
import {axiosPost} from '@/lib/http'
export default {
    data() {
        return {
             url: 'http://pay.91dianji.com.cn/',
            info:"",
            cardfront:"idcardfront.jpg",
            cardback:"idcardback.jpg",
            cardWithhand:"imgwiths.jpg",
            bankfront:"01.jpg",
            bankback:"02.jpg",
            baseUrl:"",
            show:false,
            content:"",
            type:"",
            photoList:[]
          }
    },
    methods:{
        goBack() {
            this.$router.push('/home')
        },
        sureSubmit(){
            let data={
                chMerCode:this.info
            }
            axiosPost("http://pay.91dianji.com.cn/api/creditCard/getMemberRegLine",data)
            .then(res=>{
                let type=res.data.data.uploadStatus
                if(res.data.data.uploadStatus==="0"){
                     this.$router.push("/home/collect/payment")
                  } 
            })
            .catch(err=>{

            })
            
        },
         onRead(file) {
            var form = new FormData()
            form.append('file',file.file)
            let url = 'http://pay.91dianji.com.cn/api/upload/uploadImg'
            let config = {
                headers: { "Content-Type": "multipart/form-data" }
            };
            this.$http.post(url,form,config).then(res =>{
                if(res.data.success){
                    this.cardfront = res.data.data.imgUrl
                    let datas={
                        chMerCode:this.info,
                        busCode:"2001",
                        photoType:"1",
                        photoData:this.cardfront
                    }
                     axiosPost("http://pay.91dianji.com.cn/api/creditCard/photoUpload",datas)
                        .then(res=>{
                            if(!res.data.success){
                                this.$toast({
                                    message:res.data.message
                                })
                            } else {
                                 let datas={
                                    chMerCode:this.info
                                }
                                 axiosPost("http://pay.91dianji.com.cn/api/creditCard/getMemberRegLine",datas)
                                    .then(res=>{
                                        if(!res.data.success){
                                            this.$toast({
                                                message:res.data.message
                                            })
                                            return
                                        } else if(res.data.data.uploadStatus==="0"){
                                            this.$router.push("/home/collect/payment")
                                         } else {
                                              axiosPost("http://pay.91dianji.com.cn/api/creditCard/getMemberPhoto")
                                              .then(res=>{
                                                  console.log(res,"上传图片的res");
                                                  this.photoList=res.data.data
                                              })
                                              .catch(err=>{
                                                  console.log(err,"上传图片的错误");
                                                  
                                              })
                                         }
                                        })
                                        .catch(err=>{
                                            console.log(err,"图片审核中")
                                        })
                              }
                        })

                } else{
                    this.$toast({
                        message:res.data.message
                    })
                }
            }).catch(res =>{
                console.log('文件上传失败',res);
            })
            
        },
         onReadF(file) {
            var form = new FormData()
            form.append('file',file.file)
            let url = 'http://pay.91dianji.com.cn/api/upload/uploadImg'
            let config = {
                headers: { "Content-Type": "multipart/form-data" }
            };
            this.$http.post(url,form,config).then(res =>{
                if(res.data.success){
                    this.cardback = res.data.data.imgUrl
                    let datas={
                        chMerCode:this.info,
                        busCode:"2001",
                        photoType:"2",
                        photoData:this.cardback
                    }
                     axiosPost("http://pay.91dianji.com.cn/api/creditCard/photoUpload",datas)
                        .then(res=>{
                            if(!res.data.success){
                                this.$toast({
                                    message:res.data.message
                                })
                            } else {
                                 let datas={
                                    chMerCode:this.info
                                }
                                 axiosPost("http://pay.91dianji.com.cn/api/creditCard/getMemberRegLine",datas)
                                    .then(res=>{
                                        if(!res.data.success){
                                            this.$toast({
                                                message:res.data.message
                                            })
                                            return
                                        } else if(res.data.data.uploadStatus==="0"){
                                            this.$router.push("/home/collect/payment")
                                         } else {
                                              axiosPost("http://pay.91dianji.com.cn/api/creditCard/getMemberPhoto")
                                              .then(res=>{
                                                  this.photoList=res.data.data
                                              })
                                              .catch(err=>{
                                                  console.log(err,"上传图片的错误");
                                                  
                                              })
                                         }
                                        })
                                        .catch(err=>{
                                            console.log(err,"图片审核中")
                                        })
                              }
                        })

                } else{
                    this.$toast({
                        message:res.data.message
                    })
                }
            }).catch(res =>{
                console.log('文件上传失败',res);
            })
            
        },
         onReadS(file) {
            var form = new FormData()
            form.append('file',file.file)
            let url = 'http://pay.91dianji.com.cn/api/upload/uploadImg'
            let config = {
                headers: { "Content-Type": "multipart/form-data" }
            };
            this.$http.post(url,form,config).then(res =>{
                if(res.data.success){
                    this.cardWithhand = res.data.data.imgUrl
                    let datas={
                        chMerCode:this.info,
                        busCode:"2001",
                        photoType:"3",
                        photoData:this.cardWithhand
                    }
                     axiosPost("http://pay.91dianji.com.cn/api/creditCard/photoUpload",datas)
                        .then(res=>{
                            if(!res.data.success){
                                this.$toast({
                                    message:res.data.message
                                })
                            } else {
                                 let datas={
                                    chMerCode:this.info
                                }
                                 axiosPost("http://pay.91dianji.com.cn/api/creditCard/getMemberRegLine",datas)
                                    .then(res=>{
                                        if(!res.data.success){
                                            this.$toast({
                                                message:res.data.message
                                            })
                                            return
                                        } else if(res.data.data.uploadStatus==="0"){
                                            this.$router.push("/home/collect/payment")
                                         } else {
                                              axiosPost("http://pay.91dianji.com.cn/api/creditCard/getMemberPhoto")
                                              .then(res=>{
                                                  this.photoList=res.data.data
                                              })
                                              .catch(err=>{
                                                  console.log(err,"上传图片的错误");
                                                  
                                              })
                                         }
                                        })
                                        .catch(err=>{
                                            console.log(err,"图片审核中")
                                        })
                              }
                        })

                } else{
                    this.$toast({
                        message:res.data.message
                    })
                }
            }).catch(res =>{
                console.log('文件上传失败',res);
            })
            
        },
         onReadQ(file) {
            var form = new FormData()
            form.append('file',file.file)
            let url = 'http://pay.91dianji.com.cn/api/upload/uploadImg'
            let config = {
                headers: { "Content-Type": "multipart/form-data" }
            };
            this.$http.post(url,form,config).then(res =>{
                if(res.data.success){
                    this.bankfront = res.data.data.imgUrl
                    let datas={
                        chMerCode:this.info,
                        busCode:"2001",
                        photoType:"4",
                        photoData:this.bankfront
                    }
                     axiosPost("http://pay.91dianji.com.cn/api/creditCard/photoUpload",datas)
                        .then(res=>{
                            if(!res.data.success){
                                this.$toast({
                                    message:res.data.message
                                })
                            } else {
                                 let datas={
                                    chMerCode:this.info
                                }
                                 axiosPost("http://pay.91dianji.com.cn/api/creditCard/getMemberRegLine",datas)
                                    .then(res=>{
                                        if(!res.data.success){
                                            this.$toast({
                                                message:res.data.message
                                            })
                                            return
                                        } else if(res.data.data.uploadStatus==="0"){
                                            this.$router.push("/home/collect/payment")
                                         } else {
                                              axiosPost("http://pay.91dianji.com.cn/api/creditCard/getMemberPhoto")
                                              .then(res=>{
                                                  this.photoList=res.data.data
                                              })
                                              .catch(err=>{
                                                  console.log(err,"上传图片的错误");
                                                  
                                              })
                                         }
                                        })
                                        .catch(err=>{
                                            console.log(err,"图片审核中")
                                        })
                              }
                        })

                } else{
                    this.$toast({
                        message:res.data.message
                    })
                }
            }).catch(res =>{
                console.log('文件上传失败',res);
            })
            
        },
         onReadH(file) {
            var form = new FormData()
            form.append('file',file.file)
            let url = 'http://pay.91dianji.com.cn/api/upload/uploadImg'
            let config = {
                headers: { "Content-Type": "multipart/form-data" }
            };
            this.$http.post(url,form,config).then(res =>{
                if(res.data.success){
                    this.bankback = res.data.data.imgUrl
                    let datas={
                        chMerCode:this.info,
                        busCode:"2001",
                        photoType:"5",
                        photoData:this.bankback
                    }
                     axiosPost("http://pay.91dianji.com.cn/api/creditCard/photoUpload",datas)
                        .then(res=>{
                            if(!res.data.success){
                                this.$toast({
                                    message:res.data.message
                                })
                            } else {
                                 let datas={
                                    chMerCode:this.info
                                }
                                 axiosPost("http://pay.91dianji.com.cn/api/creditCard/getMemberRegLine",datas)
                                    .then(res=>{
                                        if(!res.data.success){
                                            this.$toast({
                                                message:res.data.message
                                            })
                                            return
                                        } else if(res.data.data.uploadStatus==="0"){
                                            this.$router.push("/home/collect/payment")
                                         } else {
                                              axiosPost("http://pay.91dianji.com.cn/api/creditCard/getMemberPhoto")
                                              .then(res=>{
                                                  this.photoList=res.data.data
                                              })
                                              .catch(err=>{
                                                  console.log(err,"上传图片的错误");
                                                  
                                              })
                                         }
                                        })
                                        .catch(err=>{
                                            console.log(err,"图片审核中")
                                        })
                              }
                        })

                } else{
                    this.$toast({
                        message:res.data.message
                    })
                }
            }).catch(res =>{
                console.log('文件上传失败',res);
            })
            
        },
        
    },
    created () {
          this.info=this.$route.query.info
          this.sureSubmit()
    }
}
</script>

<style lang="less">
   #open {
       >header {
           background-color: #4B66AF;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           font-size:28px;
           color:#fff;
           z-index:999;
           display: flex;
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
          
           >.type {
               padding:20px;
               line-height: 38px;
               font-size: 30px;
               font-weight: bold;
               text-align: center;
           }
          
           >.info {
               >.positive{
                width: 95vw;
                height: 450px;
                margin-left: auto;
                margin-right: auto;
                .title{
                    font-size: 30px;
                    display: inline-block;
                    margin-top:30px;
                    margin-left:30px;
                    font-weight: bold;
                    text-align: center;
                }
                >.pictrue {
                    border:none;
                    font-size: 30px;
                    font-weight: bold;
                    padding-left:40px;
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
           }
           >.submit {
               margin-top:30px;
               padding-left:30px;
               padding-right: 30px;
               >button{
                   height: 90px;
                   font-size: 30px;
               }
           }
           >.update {
               margin-top:20px;
               >button{
                   height: 90px;
                   font-size: 28px;
               }
           }
           >.showImg {
               >ul{
                   >li {
                       padding:20px;
                       >img {
                           width:100%;
                       }
                   }
               }
           }
       }
   }
</style>
