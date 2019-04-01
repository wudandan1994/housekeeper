<template>
    <div id="poster">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>海报</span>
            <span></span>
        </header>
        <div class="container">
            <ul>
                <li @click="cur=0" :class="{active:cur==0}">个性化</li>
                <li @click="cur=1" :class="{active:cur==1}">自定义</li>
            </ul>
            <div class="changeimg">
                <div v-show="cur==0">
                    <img src="../../../static/images/flower.jpg.jpg" alt="">
                </div>
                <div v-show="cur==1">
                    <div class="upload">

                    </div>
                </div>
                 <div class="info">
                     <div class="left">
                         <p>
                             <span><van-icon name="manager"/></span>
                         </p>
                         <div>
                             <p>江辉
                                 <span>技术总监</span>
                             </p>
                             <p>传帮带（上海）网络科技有限公司</p>
                         </div>
                     </div>
                     <div class="right">
                         <p> <span><van-icon name="like"/></span></p>
                     </div>
                </div>
                <p class="phone">
                    <span>手机</span>
                    <span>18217788778</span>
                </p>
                <p class="save">
                    <span>换一换</span>
                    <span @click="savePoster">保存海报</span>
                </p>
                <div class="tips" v-show="showUpload">
                    <h3>保存海报成功</h3>
                    <p>名片海报已保存到手机相册，你可以分享到朋友圈了</p>
                     <p>确定</p>
                </div>
            </div>
            
            
        </div>
    </div>

</template>


<script>
export default {
    data() {
        return {
            cur:0 ,
        showUpload:false,

        }
    },
    methods:{
        goBack() {
            this.$router.push('/share')
        },
        savePoster(){
            this.showUpload=!this.showUpload
        }
    }
}
</script>

<style lang="less">
   #poster {
       >header {
           background: #000;
           width:100%;
           height: 46px;
           padding-top:10px;
           line-height:46px;
           color:#fff;
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
           padding-top:56px;
           padding-bottom: 50px;
           >ul {
               background-color: #252930;
               display: flex;
               justify-content: space-between;
               >li {
                   width:50%;
                   text-align: center;
                   padding:20px 0;
                   color:#FEFEFE;
                   &.active {
                       color:#DAB17B;
                   }
               }
           }
           >.changeimg {
               position: relative;
              width:60%;
              margin-left:20%;
              padding-top:30px;
              img {
                  width:100%;
              }
              >.info {
                  padding:10px;
                  background-color: #252930;
                  display: flex;
                  justify-content: space-around;
                  color:#fff;
                  >.left {
                      display: flex;
                      justify-content: space-around;
                    >p {
                      &:nth-of-type(1){
                          font-size: 80px;
                      }
                    }
                    >div {
                        font-size:26px;
                    }
                  }
                  >.right {
                      font-size: 80px;
                  }
              }
              >.phone {
                  background-color: #252930;
                  color:#fff;
                  padding-left:30px;
                  padding-bottom: 20px;
              }
              >.save {
                  margin-top:30px;
                  display: flex;
                  justify-content: space-between;
                 
                 >span {
                     display: block;
                     width:45%;
                      border:2px solid #DAB17C;
                      text-align: center;
                      padding-top:25px;
                      padding-bottom:25px;
                      border-radius: 10px;
                      &:nth-of-type(2){
                          background-color: #DAB17C;
                          color:#fff;
                      }
                 }
              }
              >.tips {
                  position: absolute;
                  bottom:15%;
                  left:-10%;
                  width:120%;
                  background-color:#fff;
                  border-radius: 10px;
                  border:2px solid #ccc;
                  line-height: 40px;
                  >h3 {
                      color:#9F6711;
                      padding-top:30px;
                      padding-bottom: 50px;
                      text-align: center;
                  }
                  >p {
                       padding:20px 30px;
                       &:nth-of-type(1){
                            border-bottom: 1px solid #ccc;
                       }
                       &:nth-of-type(2){
                            text-align: center;
                       }
                  }
                  
              }
           }
       }
   }
</style>
