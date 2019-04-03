<template>
    <div id="total-punch">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>打卡签到</span>
            <span></span>
        </header>
        <div class="container">
           <div class="task">
               <div class="punch">
                   <div class="left">
                       <p>我的金币</p>
                       <p>
                           <span></span>
                           <span>0</span>
                       </p>
                   </div>
                   <div class="middle">
                      <p>未签到</p>
                   </div>
                   <div class="right">
                       <p>当月累计签到</p>
                           <span>2</span>
                           天
                   </div>
               </div>
               <p>每月累计签到5天即可获得金币</p>
               <div class="gold">
                   <ul>
                       <li>
                           <p>5天</p>
                           <span></span>
                       </li>
                        <li>
                           <p>10天</p>
                           <span></span>
                       </li>
                        <li>
                           <p>15天</p>
                           <span></span>
                       </li>
                        <li>
                           <p>20天</p>
                           <span></span>
                       </li>
                        <li>
                           <p>25天</p>
                           <span></span>
                       </li>
                        <li>
                           <p>全</p>
                           <span></span>
                       </li>
                   </ul>
               </div>
           </div>
            <div class="rule">
                   <ul>
                       <li>签到规则</li>
                       <li>兑换奖品库</li>
                       <li>我的任务</li>
                   </ul>
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
    methods:{
        goBack() {
            this.$router.push('/home')
        }
    }
}
</script>

<style lang="less">
   #total-punch {
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
           >.task{
               background-color: #9A0000;
               color:#FFF1F6;
               padding:20px 30px;
               >.punch {
                   display: flex;
                   justify-content: space-between;
                   >.middle {
                       width:200px;
                       height: 200px;
                       background-color: #9A0000;
                       border:10px solid #fff;
                       border-radius: 50%;
                       >p {
                           text-align: center;
                           line-height: 200px;
                           font-size: 40px;
                       }
                   }
                   >.left,
                   .right {
                       padding-top:50px;
                   }
                   >.left {
                       >p {
                           &:nth-of-type(1){
                               padding-bottom:20px;
                           }
                           &:nth-of-type(2){
                               text-align: center;
                               >span {
                                   &:nth-of-type(1){
                                       display: inline-block;
                                       width:40px;
                                       height:40px;
                                       background-color:#FCDD6D; 
                                       border-radius: 50%;
                                       margin-right:10px;
                                   }
                               }
                           }
                       }
                       
                   }
                   >.right {
                       text-align: center;
                      >p{
                           padding-bottom:10px;
                      }
                      >span {
                          display:inline-block;
                          width:40px;
                          height: 40px;
                          line-height: 40px;
                          color:#7E1113;
                          background-color: #fff;
                          margin-top:10px;
                      }
                   }
               }
               >p {
                   padding:30px 0px;
               }
               >.gold{
                   >ul{
                       display: flex;
                       >li{
                           width:15%;
                           background-color: #fff;
                           color:#8E3E3F;
                           border-radius:30px;
                           text-align: center;
                           margin-right:5%;
                           >p {
                               margin-top:20px;
                               margin-bottom:10px;
                           }
                           >span {
                               display: inline-block;
                               width:30px;
                               height: 30px;
                               border-radius: 50%;
                               background-color: #FFDC6D;
                               margin-top:10px;
                               margin-bottom:10px;
                           }
                       }
                   }
               }
               
           }
           >.rule{
               background-color: #8A0000;
               color:#fff;
               >ul{
                   display: flex;
                   padding:20px 0px;
                   >li {
                       width:33%;
                       border-right: 1px solid #fff;
                       text-align: center;
                       &:nth-of-type(3){
                           border:none;
                       }
                   }
               }
           }
       }
   }
</style>
