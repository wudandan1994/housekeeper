<template>
    <div id="promotion-material">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span></span>
            <span></span>
        </header>
        <div class="container">
            <ul>
                <li>
                    <span  @click="cur=0" :class="{active:cur==0}">图片</span>
                </li>
                <li >
                    <span @click="cur=1" :class="{active:cur==1}">视频</span>
                </li>
            </ul>
            <div class="changeimg">
                <div class="images" v-show="cur==0">
                   <ul>
                       <li>
                           <img src="../../../static/images/flower.jpg.jpg" alt="">
                           <p>志坚</p>
                       </li>
                       <li>
                           <img src="../../../static/images/flower.jpg.jpg" alt="">
                           <p>努力</p>
                       </li>
                       <li>
                           <img src="../../../static/images/flower.jpg.jpg" alt="">
                           <p>可能</p>
                       </li>
                       <li>
                           <img src="../../../static/images/flower.jpg.jpg" alt="">
                           <p>坚持</p>
                       </li>
                       <li>
                           <img src="../../../static/images/flower.jpg.jpg" alt="">
                           <p>反省</p>
                       </li>
                       <li>
                           <img src="../../../static/images/flower.jpg.jpg" alt="">
                           <p>选择</p>
                       </li>
                        <li>
                           <img src="../../../static/images/flower.jpg.jpg" alt="">
                           <p>选择</p>
                       </li>
                        <li>
                           <img src="../../../static/images/flower.jpg.jpg" alt="">
                           <p>选择</p>
                       </li>
                        <li>
                           <img src="../../../static/images/flower.jpg.jpg" alt="">
                           <p>选择</p>
                       </li>
                   </ul>
                </div>
                <div class="upload" v-show="cur==1">
                   <ul>
                       <li>
                           <video src=""></video>
                           <p>
                               <span>保存视频</span>
                               <span>转发</span>
                           </p>
                       </li>
                        <li>
                           <video src=""></video>
                           <p>
                               <span>保存视频</span>
                               <span>转发</span>
                           </p>
                       </li>
                        <li>
                           <video src=""></video>
                           <p>
                               <span>保存视频</span>
                               <span>转发</span>
                           </p>
                       </li>
                        <div class="tips" v-show="showFlag">
                        <h3>温馨提示</h3>
                        <p>您还不是拼台会员，暂时不能转发查看推广视频，是否前往购买会员？</p>
                        <p>
                            <span @click="cancle">取消</span>
                            <span>购买会员</span>
                        </p>
                    </div>
                   </ul>
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
            showFlag:true,
        }
    },
    methods:{
        goBack() {
            this.$router.push('/share')
        },
        cancle(){
            this.showFlag=false
        }
    }
}
</script>

<style lang="less">
   #promotion-material {
       >header {
           background: #000;
           width:100%;
           height: 86px;
           padding-top:10px;
           line-height:86px;
           font-size:28px;
           z-index:999;
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
           padding-top:96px;
           padding-bottom: 50px;
           >ul {
               background-color: #252930;
               display: flex;
              
               >li {
                   width:50%;
                   padding:40px 20px;
                   color:#FEFEFE;
                    &:nth-of-type(1){
                           text-align: right;
                       }
                   >span {
                       border:1px solid #DAB17B;
                       padding:10px 60px;
                       background-color: #fff;
                       color:#DAB17B;
                       border-radius: 10px;
                       &.active {
                       color:#fff;
                       background-color: #DAB17B;
                   }
                 }
               }
           }
           >.changeimg {
              width:92%;
              height: 50px;
              margin-left:4%;
              margin-top:30px;
              >.images {
                  >ul{
                      display: flex;
                       flex-wrap: wrap;
                      justify-content: space-between;
                      >li {
                          text-align: center;
                          width:33%;
                          >img {
                              width:100%;
                          }
                          >p {
                              padding:10px;
                          }
                      }
                  }
              }
              >.upload {
                  >ul{
                      display: flex;
                       flex-wrap: wrap;
                       position: relative;
                      >li {
                          text-align: center;
                          width:49%;
                          margin-bottom: 2%;
                          &:nth-of-type(odd){
                              margin-right: 1%;
                          }
                          >video {
                              width:100%;
                          }
                          >p{
                              display: flex;
                              justify-content: space-between;
                              >span {
                                  padding: 10px 20px;
                                  border:2px solid #ccc;
                                  border-radius: 10px;
                                  &:nth-of-type(1){
                                      background-color: #C5A666;
                                      color:#fff;
                                  }
                                  
                              }
                          }
                      }
                       >.tips {
                    width:80%;
                    height: 500px;
                    margin-left:10%;
                    position: absolute;
                    bottom:-50%;
                    left:0px;
                    >h3 {
                        text-align: center;
                        padding:20px 0;
                        background-color: #E8E8E8;
                        border-bottom: 1px solid #ccc;
                        color:#3B3B3D;
                        font-weight: bold;
                    }
                    >p {
                        &:nth-of-type(1){
                            line-height: 40px;
                            background-color: #fff;
                            padding:20px;
                        }
                        &:nth-of-type(2){
                            padding-bottom: 20px;
                            line-height: 40px;
                            background-color: #fff;
                            display: flex;
                            justify-content: space-around;
                            >span {
                                border:2px solid #ccc;
                                padding:10px 30px;
                                border-radius:20px;
                                &:nth-of-type(2){
                                    background-color: #BD9B5B;
                                    color:#fff;
                                }
                            }
                        }
                    }
                 }
                  }
              }
           }
       }
   }
</style>
