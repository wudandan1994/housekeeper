<template>
    <div id="verified-name">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>实名认证</span>
            <span><van-icon name="ellipsis"/></span>
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
               <p>*请确保证件和人脸能同事看清楚，文件大小不超过2M</p>
           </div>

           <div class="positive">
                <div class="title start-center">1.身份证正面</div>
                <div class="uploadimg">
                    <van-uploader :after-read="onRead" class="upload-component" accept="image/*" multiple name="zhengm">                           
                            <img :src="cardfront" />
                    </van-uploader>
                </div>
            </div>
            
            <div class="positive top">
                <div class="title start-center">2.身份证反面</div>
                <div  class="uploadimg">
                        <van-uploader :after-read="onReadFanm" class="upload-component" accept="image/*" multiple name="fanm">                           
                            <img :src="cardback" />
                    </van-uploader>
                </div>
            </div>
           <div class="submit center" @click="submit"><van-button class="van-button" type="default">提交</van-button></div>
           <div class="loading center" v-if="loading"><van-loading type="spinner" color="black" size="50px" /></div>
        </div>
    </div>

</template>


<script>
import axios from 'axios'
import {axiosPost,axiosGet} from '@/lib/http'
export default {
    data() {
        return {
            url: 'http://pay.91dianji.com.cn/',
            name:"",
            idcardnumber:"",
            picshowList: [],
            front: '',
            cardfront: '',
            cardback: '',
            back: '',
            loading: false
        }
    },
    methods:{
        onRead(file) {
            var formData = new FormData();
            formData.append('file',file.file);
            let config = {
                headers: {'Content-Type': 'multipart/form-data'}
            };
            // axios.post('http://localhost:8080/api/upload/uploadImg',formData,config).then(res =>{     //本地环境
            axios.post('http://pay.91dianji.com.cn/api/upload/uploadImg',formData,config).then(res =>{ //线上环境
                console.log('请求成功',res);
                this.front = res.data.data.imgUrl
                this.cardfront = this.url + res.data.data.thumImgUrl
            }).catch(res =>{
                console.log('请求失败',res);
            })
        },
           
        onReadFanm(file){
            var formData = new FormData();
            formData.append('file',file.file);
            let config = {
                headers: {'Content-Type': 'multipart/form-data'}
            };
            // axios.post('http://localhost:8080/api/upload/uploadImg',formData,config).then(res =>{//本地环境
            axios.post('http://pay.91dianji.com.cn/api/upload/uploadImg',formData,config).then(res =>{ //线上环境
                console.log('请求成功',res);
                this.back = res.data.data.imgUrl
                this.cardback = this.url + res.data.data.thumImgUrl
            }).catch(res =>{
                console.log('请求失败',res);
            })

        },
        // 提交实名认证
        submit(){
            if(this.name == ''){
                this.$toast('请输入姓名');
            }else if(this.idcardnumber == ''){
                this.$toast('请输入身份证号码');
            }else if(this.front == ''){
                this.$toast('请上传身份证正面图');
            }else if(this.back == ''){
                this.$toast('请上传身份证反面图');
            }else{
                this.loading = true;
                let url = '/customer/identification';
                let params = {
                    openid: this.$store.state.wechat.openid,
                    name: this.name,
                    idcardnumber: this.idcardnumber,
                    idcardfront: this.front,
                    idcardback: this.back
                };
                axiosPost(url,params).then(res =>{
                    setTimeout(() =>{
                        this.loading = false;
                        this.$toast.success('已提交');
                    },2000)
                    console.log('实名认证成功',res);
                }).catch(res =>{
                    console.log('实名认证失败',res);
                })
            }
        },
        goBack() {
            this.$router.push({path:'/home/verified'})
        },
        test(e){
            console.log('88',event.target.files[0]);
            var file = event.target.files[0];
             var reader = new FileReader();
                console.log('测试',reader.readAsDataURL(file));
        }
    },
    created(){
        // this.$toast.success('已提交');
        
    },
    mounted(){
        // document.forms[0].submit();
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
               background-color: #252930;
               color:#fff;
               .name{
                   width: 100%;
                   height: 80px;
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
                   font-size: 36px;
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
                            background: #c63;
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
