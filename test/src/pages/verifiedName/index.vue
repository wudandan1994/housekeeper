<template>
    <div id="verified-name">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>实名认证</span>
            <span><van-icon name="ellipsis"/></span>
        </header>
        <div class="container">
           <div class="real">
               <div class="name">
                   <span><van-icon name="manager"/></span>
                   <span>姓名</span>
                   <input type="text" v-model="name" placeholder="请输入姓名">
               </div>
               <div class="number">
                   <span><van-icon name="card"/></span>
                   <span>身份证号</span>
                   <input type="number" v-model="idcardnumber" placeholder="请输入身份证号">
               </div>
           </div>
           <div class="upload">
               <h3>身份证持证照：</h3>
               <p>*请确保证件和人脸能同事看清楚，文件大小不超过2M</p>
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
        </div>
    </div>

</template>


<script>
import {axiosPost,axiosGet} from '@/lib/http'
export default {
    data() {
        return {
            name:"",
            idcardnumber:"",
            picshowList: [],
        }
    },
    methods:{
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
        goBack() {
            this.$router.push({path:'/home/verified'})
        },

    },
    created(){
        
    },
}
</script>

<style lang="less">
   #verified-name {
       >header {
           background: #000;
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
               >.name,
                .number {
                   padding:20px;
                   display: flex;
                   >span {
                       &:nth-of-type(1){
                           margin-right: 30px;
                           color:#CFA875;
                           font-size: 40px;
                       }
                   }
                   >input {
                       text-align: right;
                       border:none;
                       background-color: #252930;
                       flex: 1;
                   }
               }
            
           }
           >.upload {
               padding-top:30px;
               padding-left:20px;
               .fanm {
                   margin-top:200px;
               }
                .positive,
                .negative {
                   >p{
                       margin-top:30px;
                   }
                   display: flex;
                   justify-content: space-between;
                   padding-top:20px;
                   >.uploadimg{
                        cursor: pointer;
                        position: relative;
                        height: 200px;
                        flex: 1;
                        background-color: red;
                        margin-right: 15%;
                        margin-left: 15%;
                        >.van-uploader {
                            width:100%;
                            height:100%;
                            >img {
                                width:100%;
                            }
                        }
                    }
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
           >.submit{
               width:80%;
               background-color: #B39A57;
               color:#fff;
               padding:20px;
               text-align: center;
               margin-left:10%;
               border-radius: 10px;
               margin-top:40%;
           }
       }
   }
</style>
