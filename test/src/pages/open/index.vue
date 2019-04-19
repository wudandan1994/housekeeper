<template>
    <div id="open">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>开通商户业务</span>
            <span></span>
        </header>
        <div class="container">
           <h3 @click="open">点击开工商户业务</h3>
           <div class="info">
               <div class="positive">
                <div class="title start-center">1.法人身份证正面照</div>
                <div class="uploadimg">
                    <van-uploader :after-read="onRead" class="upload-component" accept="image/*" multiple name="zhengm">                           
                            <img :src="url+cardfront" />
                    </van-uploader>
                </div>
            </div>
            
            <div class="positive top">
                <div class="title start-center">2.法人身份证反面照</div>
                <div  class="uploadimg">
                        <van-uploader :after-read="onReadFanm" class="upload-component" accept="image/*" multiple name="fanm">                           
                            <img :src="url+cardback" />
                    </van-uploader>
                </div>
            </div>
            <div class="positive top">
                <div class="title start-center">3.法人手持身份证照</div>
                <div  class="uploadimg">
                        <van-uploader :after-read="onReadShow" class="upload-component" accept="image/*" multiple name="shou">                           
                            <img :src="url+cardShou" />
                    </van-uploader>
                </div>
            </div>
           </div>
           <div class="submit">
               <van-button @click="sbumit" round size="large" type="info">提交</van-button>
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
             cardfront:"idcardback.jpg",
            cardback: 'idcardback.jpg',
            cardShou:"idcardback.jpg",
            one:"",

        }
    },
    methods:{
        goBack() {
            this.$router.push('/home')
        },
        open(){
            let that=this
            let data={
                chMerCode:that.info
            }
             axiosPost("http://pay.91dianji.com.cn/api/upload/uploadImg",data)
             .then(function(res){
                 console.log(res,"开户业务成功")
                 
             })
             .catch(function(err){
                 console.log(err,"开户业务失败")
             })
        },
        sbumit(){
            this.$router.push("/home/collect/payment")
        },
         onRead(file) {
            console.log('文件上传',file)
            this.one=file.content
            console.log(this.one)
            
            var form = new FormData()
            form.append('file',file.file)
            let url = 'http://pay.91dianji.com.cn/api/upload/uploadImg'
            let config = {
                headers: { "Content-Type": "multipart/form-data" }
            };
            axiosPost(url,form,config).then(res =>{
                console.log('文件上传成功',res);
                if(res.data.success){
                    this.cardfront = res.data.data.imgUrl
                }
            }).catch(res =>{
                console.log('文件上传失败',res);
            })
            
        },
         onReadFanm(file){
            console.log('文件上传反面',file)
            var form = new FormData();
            form.append('file',file.file)
            let url = 'http://pay.91dianji.com.cn/api/upload/uploadImg'
            let config = {
                headers: { "Content-Type": "multipart/form-data" }
            }
            axiosPost(url,form,config).then(res =>{
                console.log('文件上传成功',res);
                if(res.data.success){
                    this.cardback = res.data.data.imgUrl;
                }
            }).catch(res =>{
                console.log('文件上传失败',res)
                })
        },
         onReadShou(file){
            console.log('文件上传手持',file);
            var form = new FormData();
            form.append('file',file.file);
            let url = 'http://pay.91dianji.com.cn/api/upload/uploadImg'
            let config = {
                headers: { "Content-Type": "multipart/form-data" }
            };
           axiosPost(url,form,config).then(res =>{
                console.log('文件上传成功',res)
                if(res.data.success){
                    this.cardShou = res.data.data.imgUrl;
                }
            }).catch(res =>{
                console.log('文件上传失败',res)
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
           >h3{
               margin-top:20px;
               font-size: 30px;
               font-weight: bold;
           }
           >.info {
               >.positive{
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
           }
           >.submit {
               margin-top:30px;
               padding-left:30px;
               padding-right: 30px;
               >button{
                   height: 90px;
               }
           }
       }
   }
</style>
