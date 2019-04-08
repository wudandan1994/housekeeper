<template>
    <div id="lifting-amount">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>信用卡提额</span>
            <span><van-icon name="ellipsis"/></span>
        </header>
        <div class="container">
           <div class="online">
               <p><span>&nbsp;</span>在线提额</p>
               <ul>
                   <li>
                       <p><span><van-icon name="star"/></span></p>
                       <p>交通银行</p>
                   </li>
                   <li>
                       <p><span><van-icon name="star"/></span></p>
                       <p>招商银行</p>
                   </li>
                   <li>
                       <p><span><van-icon name="star"/></span></p>
                       <p>广发银行</p>
                   </li>
                   <li>
                       <p><span><van-icon name="star"/></span></p>
                       <p>花旗银行</p>
                   </li>
                   <li>
                       <p><span><van-icon name="star"/></span></p>
                       <p>民生银行</p>
                   </li>
                   <li>
                       <p><span><van-icon name="star"/></span></p>
                       <p>浦发银行</p>
                   </li>
                   <li>
                       <p><span><van-icon name="star"/></span></p>
                       <p>建设银行</p>
                   </li>
               </ul>
           </div>
           <div class="image">
               <img src="" alt="">
           </div>
           <div class="artificial">
                <p><span>&nbsp;</span>人工提额</p>
               <ul>
                   <li>
                       <p><span><van-icon name="star"/></span></p>
                       <p>交通银行</p>
                   </li>
                   <li>
                       <p><span><van-icon name="star"/></span></p>
                       <p>招商银行</p>
                   </li>
                   <li>
                       <p><span><van-icon name="star"/></span></p>
                       <p>广发银行</p>
                   </li>
                   <li>
                       <p><span><van-icon name="star"/></span></p>
                       <p>农业银行</p>
                   </li>
                   <li>
                       <p><span><van-icon name="star"/></span></p>
                       <p>平安银行</p>
                   </li>
                   <li>
                       <p><span><van-icon name="star"/></span></p>
                       <p>中信银行</p>
                   </li>
                   <li>
                       <p><span><van-icon name="star"/></span></p>
                       <p>工商银行</p>
                   </li>
                   <li>
                       <p><span><van-icon name="star"/></span></p>
                       <p>中国银行</p>
                   </li>
                   <li>
                       <p><span><van-icon name="star"/></span></p>
                       <p>上海银行</p>
                   </li>
                   <li>
                       <p><span><van-icon name="star"/></span></p>
                       <p>华夏银行</p>
                   </li>
                   <li>
                       <p><span><van-icon name="star"/></span></p>
                       <p>浦发银行</p>
                   </li>
                   <li>
                       <p><span><van-icon name="star"/></span></p>
                       <p>兴业银行</p>
                   </li>
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
            this.$router.push('/home/cardCenter')
        }
    }
}
</script>

<style lang="less">
   #lifting-amount {
       >header {
           background: #000;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           font-size:28px;
           color:#fff;
           display: flex;
           z-index:999;
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
           padding-bottom:56px;
           >.online {
               >p {
                   padding:20px;
                   border-bottom: 1px solid #ccc;
                   display: flex;
                   >span {
                       display: block;
                       width:8px;
                       height: 100%;
                       margin-right:20px;
                       background-color:#1690FF; 
                   }
               }
               >ul{
                   display: flex;
                   flex-wrap: wrap;
                   >li {
                       width:33.2%;
                       text-align:center;
                       border-bottom: 1px solid #ccc;
                       border-right: 1px solid #ccc;
                       &:nth-of-type(3),
                       &:nth-of-type(6),
                       &:nth-of-type(9),
                       &:nth-of-type(12),{
                           border-right: none;
                       }

                       >p{
                           &:nth-of-type(1) {
                               font-size: 80px;
                               margin-top:30px;
                               margin-bottom: 10px;
                           }
                           &:nth-of-type(2) {
                               color:#000;
                               padding-bottom:30px;
                           }
                       }
                   }
               }
           }
           >.image {
               background-color: #EEEEEE;
               padding-top:20px;
               height: 500px;
           }
           >.artificial {
               margin-bottom: 20px;
                 >p {
                   padding:20px;
                   border-bottom: 1px solid #ccc;
                   display: flex;
                   >span {
                       display: block;
                       width:8px;
                       height: 100%;
                       margin-right:20px;
                       background-color:#1690FF; 
                   }
               }
               >ul{
                   display: flex;
                   flex-wrap: wrap;
                   >li {
                       width:33.2%;
                       text-align:center;
                       border-bottom: 1px solid #ccc;
                       border-right: 1px solid #ccc;
                       &:nth-of-type(3),
                       &:nth-of-type(6),{
                           border-right: none;
                       }

                       >p{
                           &:nth-of-type(1) {
                               font-size: 80px;
                               margin-top:30px;
                               margin-bottom: 10px;
                           }
                           &:nth-of-type(2) {
                               color:#000;
                               padding-bottom:30px;
                           }
                       }
                   }
               }
           }
       }
   }
</style>
