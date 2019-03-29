<template>
    <div id="credit-housekeeper">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>信用卡管家</span>
            <span></span>
        </header>
        <div class="container">
           <h3>钱夹宝智能还款</h3>
           <p class="mode">空卡,智能,急速3种模式</p>
           <div class="light">
               <ul>
                   <li>
                       <p><van-icon name="star"/></p>
                       <div>
                           <p>凡是钻石会员等级，即可帮助他人进行绑卡操作！</p>
                           <p>打破部分人群绑卡操作困难痛点，自己后台替他人操作。一帮到底，真正做到一站式扶持，加速团队裂变！</p>
                       </div>
                   </li>
                   <li>
                       <p><van-icon name="star"/></p>
                       <div>
                           <p>凡是钻石会员等级，即可帮助他人进行绑卡操作！</p>
                           <p>打破部分人群绑卡操作困难痛点，自己后台替他人操作。一帮到底，真正做到一站式扶持，加速团队裂变！</p>
                       </div>
                   </li>
                   <li>
                       <p><van-icon name="star"/></p>
                       <div>
                           <p>凡是钻石会员等级，即可帮助他人进行绑卡操作！</p>
                           <p>打破部分人群绑卡操作困难痛点，自己后台替他人操作。一帮到底，真正做到一站式扶持，加速团队裂变！</p>
                       </div>
                   </li>
                   <li>
                       <p><van-icon name="star"/></p>
                       <div>
                           <p>凡是钻石会员等级，即可帮助他人进行绑卡操作！</p>
                           <p>打破部分人群绑卡操作困难痛点，自己后台替他人操作。一帮到底，真正做到一站式扶持，加速团队裂变！</p>
                       </div>
                   </li>
                   <li>
                       <p><van-icon name="star"/></p>
                       <div>
                           <p>凡是钻石会员等级，即可帮助他人进行绑卡操作！</p>
                           <p>打破部分人群绑卡操作困难痛点，自己后台替他人操作。一帮到底，真正做到一站式扶持，加速团队裂变！</p>
                       </div>
                   </li>
               </ul>
           </div>
            <router-link to="/home/creditHousekeeper/aisleHousekeeper" tag="li" class="next" >
                <span>继续</span>
            </router-link>
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
   #credit-housekeeper{
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
           >h3 {
               text-align: center;
               color:#C67E11;
               padding:30px 0;
               font-size: 50px;
               font-weight: bold;
           }
           >.mode {
               margin-left:50px;
               color:#797979;
               font-weight: bold;
               padding:10px;
               font-size: 36px;
               margin-bottom:60px;
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
                       >p {
                           font-size: 100px;
                        //    margin-top:15px;
                           margin-right: 10px;
                       }
                       >div {
                           flex:1;
                            line-height: 36px;
                           >p {
                               &:nth-of-type(1){
                                   font-size: 30px;
                                   color:#000;
                                   font-weight: bold;

                               }
                               &:nth-of-type(2){
                                   line-height: 36px;
                               }
                           }
                       }
                   }
               }
           }
           >.next {
              padding-top:30px;
              padding-bottom: 30px;
              text-align: center;
              color:#fff;
              background-color: #9F6711;
              width:60%;
              margin-top:60px;
              margin-left:20%;
              margin-bottom: 100px;
              border-radius: 15px;

           }
       }
   }
</style>
