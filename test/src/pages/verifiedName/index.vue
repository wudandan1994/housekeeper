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
                   <input type="text" placeholder="请输入姓名">
               </div>
               <div class="number">
                   <span><van-icon name="card"/></span>
                   <span>身份证号</span>
                   <input type="number" placeholder="请输入身份证号">
               </div>
           </div>
           <div class="upload">
               <h3>身份证持证照：</h3>
               <p>*请确保证件和人脸能同事看清楚，文件大小不超过2M</p>
               <div class="positive">
                   <p>1.身份证正面</p>
                    <div class="uploadimg">
                        <input type="file" name="file" multiple>
                    </div>
               </div>
               <div class="negative">
                   <p>2.身份证反面</p>
                    <div  class="uploadimg">
                        <input type="file" name="file" multiple>
                    </div>
               </div>
           </div>
        </div>
    </div>

</template>


<script>
export default {
    data() {
        return {

        }
    },
    created(){
        
    },
    methods:{
        goBack() {
            this.$router.push({path:'/home/verified'})
        },
       
    },
    
}
</script>

<style lang="less">
   #verified-name {
       >header {
           background: #000;
           width:100%;
           height: 46px;
           line-height: 46px;
           padding-top:10px;
           color:#fff;
           display: flex;
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
           padding-top:56px;
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
                        background-color:#F2F2F2;
                        // background-color: red;
                        margin-right: 15%;
                        margin-left: 15%;

                        >input {
                            position: absolute;
                            right:0px;
                            top:0px;
                            opacity: 0;
                            cursor: pointer;
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
       }
   }
</style>
