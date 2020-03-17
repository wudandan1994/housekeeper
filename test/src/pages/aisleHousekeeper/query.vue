<template>
    <div id="query">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>账单查询</span>
            <span></span>
        </header>
        <div class="container">
            <div class="banks">
                <ul>
                    <li v-for="(item,index) of list" :key="index">
                        <p><van-icon size="26px" :name="item.icon" /></p>
                        <div>
                             <p>{{item.title}}</p>
                             <p>{{item.phone}}</p>
                        </div>
                        <!-- <p @click="call(item.phone)">拨打</p> -->
                        <!-- <p @click="call(item.phone)">拨打</p> -->
                       <a :href="'tel:'+item.phone">拨打</a>
                        <!-- <a  :href="'tel:'+mobile.content">拨打</a> -->
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
            list:[
                {
                    icon:"http://pay.91dianji.com.cn/bank6.png",
                    title:"浦发银行",
                    phone:"95528",
                },
                 {
                    icon:"http://pay.91dianji.com.cn/bank13.png",
                    title:"上海银行",
                    phone:"95594",
                },
                 {
                    icon:"http://pay.91dianji.com.cn/bank15.png",
                    title:"兴业银行",
                    phone:"95561",
                },
                
                {
                    icon:"http://pay.91dianji.com.cn/bank2.png",
                    title:"招商银行",
                    phone:"95555",
                },
                 {
                    icon:"http://pay.91dianji.com.cn/bank12.png",
                    title:"中国银行",
                    phone:"95566",
                },
                 {
                    icon:"http://pay.91dianji.com.cn/bank10.png",
                    title:"中信银行",
                    phone:"95558",
                },
                 {
                    icon:"http://pay.91dianji.com.cn/bank11.png",
                    title:"工商银行",
                    phone:"95588",
                },
                 {
                    icon:"http://pay.91dianji.com.cn/bank16.png",
                    title:"光大银行",
                    phone:"95595",
                },
                 {
                    icon:"http://pay.91dianji.com.cn/bank3.png",
                    title:"广发银行",
                    phone:"95508",
                },
                 {
                    icon:"http://pay.91dianji.com.cn/bank14.png",
                    title:"华夏银行",
                    phone:"95577",
                },
                 {
                    icon:"http://pay.91dianji.com.cn/bank9.png",
                    title:"平安银行",
                    phone:"95511",
                },
                 {
                    icon:"http://pay.91dianji.com.cn/bank8.png",
                    title:"农业银行",
                    phone:"95599",
                },
                 {
                    icon:"http://pay.91dianji.com.cn/bank5.png",
                    title:"民生银行",
                    phone:"95568",
                },
                 {
                    icon:"http://pay.91dianji.com.cn/bank1.png",
                    title:"交通银行",
                    phone:"95559",
                },
                 {
                    icon:"http://pay.91dianji.com.cn/bank7.png",
                    title:"建设银行",
                    phone:"95533",
                },
            ]
        }
    },
    methods:{
        goBack() {
            this.$router.go(-1)
        },
       
    }
}
</script>

<style lang="less">
   #query{
       >header {
           background: #4B66AF;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           color:#fff;
           display: flex;
           position: fixed;
           font-size:28px;
           z-index:999;
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
           .banks{
               padding:15px;
               ul{
                   li{
                       border-bottom:1px solid #ccc;
                       display: flex;
                       align-items: center;
                       padding:20px 20px 10px 30px;
                       >div{
                           flex:1;
                           padding:0 20px;
                           >p{
                               &:nth-of-type(1){
                                   padding-bottom: 10px;
                                   font-size: 30px;
                                   font-weight: bold;
                               }
                               &:nth-of-type(2){
                                   color:#969696;
                               }
                           }
                       }
                       >a{ 
                           display: block;
                           background-color: #4B66AF;
                           color:#fff;
                           width:100px;
                           height: 50px;
                           line-height: 50px;
                           text-align: center;
                       }
                   }
               }
           }
       }
   }
</style>
