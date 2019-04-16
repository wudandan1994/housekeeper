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
               <p>*请确保证件和人脸能同事看清楚，文件大小不超过2M</p>
<<<<<<< HEAD
               <div class="positive">
                   <p>1.身份证正面</p>
                    <div class="uploadimg">
                         <van-uploader :after-read="onRead" accept="image/*" multiple name="zhengm">                           
                              <img src="" ref="zhengm" >
                        </van-uploader>
                        <!-- <input type="file" id="zhengm" @change="changeImg($event)"> -->
                        <img src="" alt="">
                    </div>
               </div>
               <div class="negative fanm">
                   <p>2.身份证反面</p>
                    <!-- <div  class="uploadimg">
                            <van-uploader :after-read="onReadFanm" accept="image/*" multiple name="fanm">                           
                              <img src="" ref="fanm" >
                        </van-uploader>
                    </div> -->
               </div>
           </div>
           <!-- <div class="submit" @click="submit">提交</div> -->
=======
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
           <div class="submit center" @click="submit" v-if="status == '未认证'"><van-button class="van-button" type="default">提交</van-button></div>
           <div class="loading center" v-if="loading"><van-loading type="spinner" color="black" size="50px" /></div>
>>>>>>> daff1af637bea3d6a7068ab6bba9db9a1091455c
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
            cardfront: 'http://pay.91dianji.com.cn/idcardfront.jpg',
            cardback: 'http://pay.91dianji.com.cn/idcardback.jpg',
            back: '',
            loading: false,
            status: ''
        }
    },
    methods:{
<<<<<<< HEAD
         onRead(filez) {
            console.log(filez);
            // axiosPost("/upload/uploadImg",filez.file.name)
            // .then(res=>{
            //     console.log(res)
                
            // })
            // .catch(err=>{
            //     console.log(err);
            //     console.log(555);
                
            // })
            // this.$refs.zhengm.src=filez.content
            
            //    localStorage.setItem('zhengm',filez.content)
        },
            // changeImg(e){
            //     // console.log(filef);
            //     // let file =this.files[0]
            //     // console.log(this.files);
            //     console.log(this);
            //     let vm=this;
            //     let _this = e.currentTarget;
            //     console.log(_this);
                
            //     console.log('this.upnum: ',vm.upnum)
            //     console.log('vm.picshowList.length: ',vm.picshowList.length);
      

            //     let files=document.getElementById("zhengm").files[0];


            //      axiosPost("/upload/uploadImg",files).then(res=>{
            //         // console.log('上传成功',res)  
            //     }).catch(err=>{
            //         // console.log(err);
            //         // console.log(555);
                    
            //     })  
            // },
    //   onReadFanm(filef){
    //        this.$refs.fanm.src=filef.content
    //         localStorage.setItem('fanm',filef.content)

    //   },
    //   submit(){
    //       let  idcardnumber=this.idcardnumber
    //       let  idcardfront=localStorage.getItem('zhengm')
    //       console.log(typeof idcardfront);
    //       let  idcardback=localStorage.getItem("fanm")
    //       let name=this.name
    //     if(!this.name.trim()){

    //     }
          
    //   },
=======
         // 返回首页
        handleReturnHome(){
            this.$router.push({
                path:'/home/verified'
            })
        },
        onRead(file) {
            var formData = new FormData()
            
            formData.append('file',file.file)
            let config = {
                headers: {'Content-Type': 'multipart/form-data'}
            }
            // axios.post('http://localhost:8080/api/upload/uploadImg',formData,config).then(res =>{     //本地环境
            axios.post('http://pay.91dianji.com.cn/api/upload/uploadImg',formData,config).then(res =>{ //线上环境
                console.log('身份证正面上传成功',res);
                this.front = res.data.data.imgUrl;
                console.log('图片组合',this.url + res.data.data.thumImgUrl);
                this.cardfront = this.url + res.data.data.thumImgUrl;
            }).catch(res =>{
                console.log('身份证正面上传失败',res);
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
                console.log('身份证反面上传成功',res);
                this.back = res.data.data.imgUrl
                this.cardback = this.url + res.data.data.thumImgUrl
            }).catch(res =>{
                console.log('身份证反面上传失败',res);
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
                    // setTimeout(() =>{
                    //     this.loading = false;
                    //     this.$toast.success('已提交');
                    // },1000)
                    console.log('实名认证成功',res);
                    if(res.data.success){
                        this.loading = false;
                        this.$toast.success('已提交');
                    }
                }).catch(res =>{
                    console.log('实名认证失败',res);
                })
            }
        },
>>>>>>> daff1af637bea3d6a7068ab6bba9db9a1091455c
        goBack() {
            this.$router.push({path:'/home/verified'})
        },
        test(e){
            console.log('88',event.target.files[0]);
            var file = event.target.files[0];
             var reader = new FileReader();
                console.log('测试',reader.readAsDataURL(file));
        },
        // 获取实名认证信息
        handleGetAOuth(){
            let url = '/customer/getIdentification';
            let params = {};
            axiosPost(url,params).then(res =>{
                console.log('获取实名认证状态成功',res);
                if(res.data.data.status != '0'){
                    this.name = res.data.data.name;
                    this.idcardnumber = res.data.data.idcardnumber;
                    this.cardback = this.url + res.data.data.idcardback;
                    this.cardfront = this.url + res.data.data.idcardfront;
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
