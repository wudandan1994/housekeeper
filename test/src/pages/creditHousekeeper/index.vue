<template>
    <div id="credit-housekeeper">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>信用卡管家</span>
            <span></span>
        </header>
       <div class="container">
           <h3>钱夹宝智能还款</h3>
           <p class="mode">智能,急速2种模式</p>
           <div class="light">
               <ul>
                   <li>
                       <p ><van-icon name="http://pay.91dianji.com.cn/110.png"/></p>
                       <div>
                           <p>凡是钻石会员等级，即可帮助他人进行绑卡操作！</p>
                           <p>打破部分人群绑卡操作困难痛点，自己后台替他人操作。一帮到底，真正做到一站式扶持，加速团队裂变！</p>
                       </div>
                   </li>
                   <li>
                       <p><van-icon name="http://pay.91dianji.com.cn/112.png"/></p>
                       <div>
                           <p>精养卡智能规划，千城布局，省时省心</p>
                           <p>卡内预留2%以上即可，大额也支持，笔笔落地商户，健康消费，智能完美账单</p>
                       </div>
                   </li>
                   <li>
                       <p><van-icon name="http://pay.91dianji.com.cn/113.png"/></p>
                       <div>
                           <p>空卡周转，解决急需，维护信用</p>
                           <p>全程只需手续费，我给额度你来还，避免逾期，保你信用无忧</p>
                       </div>
                   </li>
                   <li>
                       <p><van-icon name="http://pay.91dianji.com.cn/114.png"/></p>
                       <div>
                           <p>极速还款，全新模式</p>
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
                  <div class="next">
                      <van-button @click="keep" round size="large" type="default">继续</van-button>
                  </div>
                  <div class="cover" v-show="showSelect">
                      <div class="select" >
                      <ul>
                          <li @click="searchInfo">
                              <p>普通贷还</p>
                              <div><img src="http://pay.91dianji.com.cn/putong.png" alt=""></div>
                               <p> <van-icon name="arrow" size="30px"/></p>
                          </li>
                          <router-link tag="li" to="/home/creditHousekeeper/aisleHousekeeper">
                              <p>完美账单</p>
                              <div> <img src="http://pay.91dianji.com.cn/wanmei.png" alt=""></div>
                              <p> <van-icon name="arrow" size="30px"/></p>
                          </router-link>
                      </ul>
                  </div>
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
                console.log('链接请求成功',res);
                if(res.data.code==="1"){
                    this.$router.push("/home/addCard")
                } else if(res.data.code==="0"){
                    // location.href=res.data.data.url
                    let url=res.data.data.url
                        this.$router.push({
                            path:"/home/cardCenter/progressQuery",
                            query:{
                                info:url,
                                title:"还款"
                              }
                        })
                }
            })
            .catch(err=>{
                // console.log(err,"失败");
                
            })
        },

    },
    created () {
    }
}
</script>

<style lang="less">
   #credit-housekeeper{
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
               .next {
                   padding:0px 30px;
                }
                .cover {
                    position: fixed;
                    top:0px;
                    bottom: 0px;
                    left:0px;
                    right:0px;
                    background-color: rgba(0, 0, 0, .4);
                    box-sizing: border-box;
                    .select {
                    position: absolute;
                    top:30%;
                    left:0px;
                    width:100%;
                    background-color: #fff;
                    border:1px solid #ccc;
                     box-sizing: border-box;
                       margin:10px;
                   > ul{
                       display: flex;
                       flex-wrap: wrap;
                       >li {
                           width:100%;
                           text-align: center;
                           padding:10px;
                            display: flex;
                           justify-content: space-around;
                           border-bottom: 1px solid #ccc;
                           align-items: center;
                           >p {
                               padding-bottom: 15px;
                               font-weight: bold;
                               font-size: 30px;
                           }
                           >div {
                               width:300px;
                               margin:0 auto;
                               padding-bottom: 10px;
                               >img {
                                   width:100%;
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
