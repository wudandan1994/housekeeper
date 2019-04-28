<template>
    <div id="credit-enquiry">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>大数据查询</span>
            <span></span>
            <!-- <router-link tag="p" to="/home/creditEnquiry/myOrder"><span><van-icon name="manager"/></span>&nbsp;我的订单</router-link> -->
            
        </header>
        <div class="container">
           <div class="data-query">
             <h3>
                 此功能正在上线中，敬请期待！
             </h3>
              
           </div>
           <div class="detail"></div>
           
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
   #credit-enquiry {
       >header {
           background-color: #4B66AF;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           color:#fff;
           display: flex;
           position: fixed;
           z-index:999;
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
           > p{
               padding-right: 10px;
           }
       }
       >.container {
           padding-top:96px;
           padding-bottom: 50px;
           >.data-query {
               position: relative;
               >h3 {
                   padding-top:20px;
                   text-align: center;
                   font-size: 36px;
               }
               >.large-data {
                   width:96%;
                   padding-top:20px;
                   padding-bottom: 30px;
                   margin-left:2%;
                   margin-right: 2%;
                   background-color: orange;
                   position: absolute;
                   top:200px;
                   left:0px;
                   border-radius: 10px;
               }
           }
           >.detail {
               margin-top:200px;
           }
           >.query-now {
               width:92%;
               margin-left: 4%;
               margin-right: 4%;
                background-color: orange;
                padding:20px 0px;
                text-align: center;
                color:white;
                border-radius:10px;
           }
       }
   }
</style>
