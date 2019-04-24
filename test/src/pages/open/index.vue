<template>
    <div id="open">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            
            <span>开通商户业务</span>
            <span></span>
        </header>
        <div class="container">
          
           <p class="type">开通商户业务至少要上传身份证正反面和手持身份证照片，在提交之前，请先选择上传照片的类型</p>
           <button class="btn" @click="selset">请选择</button>
                    <van-actionsheet
                            v-model="show"
                            :actions="actions"
                            cancel-text="取消"
                            @select="onSelect"
                            @cancel="onCancel"
                            />
           <div class="info">
               <div class="positive">
                    <p class="title start-center">请上传</p>
                    <input class="pictrue" type="text" v-model="content" :placeholder="content">
                    <div class="uploadimg">
                        <van-uploader :after-read="onRead" class="upload-component" accept="image/*" multiple name="zhengm">                           
                                <img :src="url+cardfront" />
                        </van-uploader>
                    </div>
            </div>
           </div>
           <div class="submit">
               <van-button @click="sbumit" round size="large" type="info">提交</van-button>
           </div>
           <div class="update">
               <van-button @click="payment" size="large" round type="info">图片上传已完成？去收款</van-button>
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
            baseUrl:"",
            show:false,
            content:"",
            
            type:"",
            actions:[
                    {
                    name: '身份证正面'
                    },
                     {
                    name: '身份证反面'
                    },
                     {
                    name: '手持身份证'
                    },
                     {
                    name: '银行卡正面'
                    },
                     {
                    name: '银行卡反面'
                    },
                
                ],
          }
    },
    methods:{
        goBack() {
            this.$router.push('/home')
        },
        payment(){
            let data={
                chMerCode:this.info
            }
            axiosPost("http://pay.91dianji.com.cn/api/creditCard/getMemberRegLine",data)
            .then(res=>{
                if(!res.data.success){
                    this.$toast({
                        message:res.data.message
                    })
                    return
                }
                let type=res.data.data.uploadStatus
                if(type==="0"){
                     this.$router.push("/home/collect/payment")
                } else if(type==="1"){
                    this.$toast({
                        message:"您还未上传图片"
                    })
                } else if(type==="2"){
                     this.$toast({
                        message:"您只上传了部分图片"
                    })
                } else {
                     this.$toast({
                        message:"您的证件非法"
                    })
                }
                
                
            })
            .catch(err=>{
                console.log(err,"图片审核中")
                
            })
            .catch(err=>{

            })
           
        },
        onSelect(item){
            this.content=item.name
             this.show=false
        },
        selset(){
            this.show=true
        },
        onCancel(){
            this.show=false
        },
       
        sbumit(){
            if(this.content.trim().length===0){
                this.$toast({
                    message:"请先选择你要上传图片的类型"
                })
                return
            }
            if(this.content==="身份证正面"){
                this.type="1"
            } else if(this.content==="身份证反面"){
                 this.type="2"
            } else if(this.content==="手持身份证"){
                 this.type="3"
            } else if(this.content==="银行卡正面"){
                  this.type="4"
            } else {
                  this.type="5"
            }

            let data={
                chMerCode:this.info,
                busCode:"2001",
                photoType:this.type,
                photoData:this.cardfront
            }
            console.log(data)
            axiosPost("http://pay.91dianji.com.cn/api/creditCard/photoUpload",data)
            .then(res=>{
                if(!res.data.success){
                    this.$toast({
                        message:res.data.message
                    })
                } else {
                    this.$toast({
                        message:res.data.message
                    })
                }
                
            })
            .catch(err=>{
                console.log(err,"提交不成功");
                
            })
            // this.$router.push("/home/collect/payment")
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
           }
           .van-actionsheet__item{
               height: 90px;
           }
           .van-actionsheet__cancel, .van-actionsheet__item{
               font-size: 28px;
               line-height: 90px;
           }
           >.btn {
               margin:20px;
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
       }
   }
</style>
