<template>
    <div id="credit-housekeeper" class="flipInX">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>信用卡管家</span>
            <span></span>
        </header>
       <div class="container">
           <h3>钱夹宝智能还款</h3>
           <p class="mode">小额,大额2种通道</p>
           <div class="light">
               <ul>
                   <!-- <li>
                       <p ><van-icon name="http://pay.91dianji.com.cn/110.png"/></p>
                       <div>
                           <p>凡是钻石会员等级，即可操作！</p>
                           <p>打破部分人群绑卡操作困难痛点，自己后台替他人操作。一帮到底，真正做到一站式扶持，加速团队裂变！</p>
                       </div>
                   </li> -->
                   <li>
                       <p><van-icon name="http://pay.91dianji.com.cn/112.png"/></p>
                       <div>
                           <p>精养卡智能规划，千城布局，省时省心</p>
                           <p>卡内预留5%以上即可，大额也支持，笔笔落地商户，健康消费，智能完美账单</p>
                       </div>
                   </li>
                   <!-- <li>
                       <p><van-icon name="http://pay.91dianji.com.cn/113.png"/></p>
                       <div>
                           <p>空卡周转，解决急需，维护信用</p>
                           <p>全程只需手续费，我给额度你来还，避免逾期，保你信用无忧</p>
                       </div>
                   </li> -->
                   <li>
                       <p><van-icon name="http://pay.91dianji.com.cn/114.png"/></p>
                       <div>
                           <p>完美账单，全新模式</p>
                           <p>距还款日只剩1-3天又想账单尽量完美，极速模式，照样可以还</p>
                       </div>
                   </li>
                   <li>
                       <p><van-icon name="http://pay.91dianji.com.cn/115.png"/></p>
                       <div>
                           <p>最高利润，自用省钱，分享赚钱</p>
                           <p>挑战还款分润最高极限，团队裂变，管道收益！被人刷卡，团队躺赚收益</p>
                       </div>
                   </li>
               </ul>
           </div>
            <!-- <router-link to="/home/creditHousekeeper/aisleHousekeeper" tag="li" class="next" >
                <span>继续</span>
                <van-button round size="large" type="default">继续</van-button>
            </router-link> -->
            <div class="keep">
                  <!-- <div class="next">
                      <van-button @click="keep" round size="large" type="default">继续</van-button>
                  </div> -->
                      <div class="select" >
                          <p>请选择还款模式</p>
                      <ul>
                          <!-- <li @click="searchInfo">
                              <div><van-icon name="http://pay.91dianji.com.cn/putong.png" size="40px"/></div>
                              <p>普通代还</p>
                               <p> <van-icon name="arrow" size="30px"/></p>
                          </li> -->
                          <router-link tag="li" to="/home/creditHousekeeper/aisleHousekeeper">
                              <div><van-icon name="http://pay.91dianji.com.cn/wanmei.png" size="40px"/></div>
                              <p>完美账单</p>
                              <p> <van-icon name="arrow" size="30px"/></p>
                          </router-link>
                      </ul>
                 
                  </div>
            </div>
        </div> 
    </div>

</template>
<script>
import {axiosPost} from '@/lib/http'
export default {
    data() {
        return {
            showSelect:false
        }
    },
    methods:{
        goBack() {
            this.$router.push('/home')
        },
        keep(){
            this.showSelect=true
        },
        searchInfo(){
            axiosPost("/creditCard/getMerchantSettled")
            .then(res=>{
                if(res.data.code==="1"){
                    this.$router.push("/home/addCard")
                } else if(res.data.code==="0"){
                    //     this.$router.push({
                    //         path:"/home/online",
                    //         query:{
                    //             info:url,
                    //             title:"还款"
                    //           }
                    //     })

                    let url=res.data.data.url

                    if (!navigator.userAgent.match(/iPad|iPhone/i)){
                                this.$router.push({
                                    path:"/loan/form/myOrder",
                                    query:{
                                        info:url,
                                        title:"还款"
                                    }
                                })
                                } else {
                                    this.componentload=false
                                    location.href=url
                                }
                }
            })
            .catch(err=>{
            })
        },
    },
    created () {
    }
}
</script>

<style lang="less">
   #credit-housekeeper{
    //    animation: enlarge 0.6s linear;
    //     -webkit-animation: enlarge 0.6s linear;
       >header {
           background-color: #4B66AF;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           color:#fff;
           display: flex;
           z-index:999;
           position: fixed;
           font-size:28px;
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
           >h3 {
               text-align: center;
               color:#000;
               padding:30px 0;
               font-size: 50px;
               font-weight: bold;
               margin-top:50px;
           }
           >.mode {
               margin-left:50px;
               color:#797979;
               font-weight: bold;
               padding:10px;
               font-size: 36px;
               margin-bottom:50px;
               margin-top: 25px;
           }
           >.light {
               margin-left:50px;
               >ul{
                   >li{
                       display: flex;
                       justify-content: space-around;
                       padding-right:10px;
                       padding-bottom:30px;
                       padding-top:10px;
                       &:nth-of-type(1){
                           >p {
                               color:#61F293;
                           }
                       }
                       &:nth-of-type(2){
                           >p {
                               color:#FF8B07;
                           }
                       }
                       &:nth-of-type(3){
                           >p {
                               color:#E849BD;
                           }
                       }
                        &:nth-of-type(4){
                           >p {
                               color:#07B8EC;
                           }
                       }
                       &:nth-of-type(5){
                           >p {
                               color:#417F79;
                           }
                       }

                       >p {
                           font-size: 100px;
                           margin-right: 10px;
                       }
                       >div {
                           flex:1;
                            line-height: 36px;
                            padding-right:30px;
                           >p {
                               &:nth-of-type(1){
                                   font-size: 30px;
                                   color:#000;
                                   font-weight: bold;

                               }
                               &:nth-of-type(2){
                                   line-height: 36px;
                                   color:#999;
                                   padding-top:10px;
                               }
                           }
                       }
                   }
               }
           }
           >.keep {
               position: relative;
               margin-top:50px;
                    .select {
                        width:100%;
                        // background-color: #fff;
                        box-sizing: border-box;
                       margin:10px;
                       >p {
                           text-align: center;
                           color:#4B66AF;
                           font-weight: bold;
                           font-size: 36px;
                           padding-bottom: 20px;
                       }
                   > ul{
                       display: flex;
                       flex-wrap: wrap;
                        margin-right:20px;
                         margin-left:40px;
                       >li {
                           width:100%;
                           padding:10px;
                            display: flex;
                           justify-content: space-between;

                           &:nth-of-type(1){
                               padding-bottom: 30px;
                              border-bottom: 1px solid #ccc;
                           }
                            &:nth-of-type(2){
                               padding-top: 30px;
                           }
                           align-items: center;
                           >p {
                               font-weight: bold;
                            
                               margin-left:30px;
                               &:nth-of-type(1){
                                      flex:1;
                               }
                           }
                       }
                    }
                }
           }
       }
   }
</style>
