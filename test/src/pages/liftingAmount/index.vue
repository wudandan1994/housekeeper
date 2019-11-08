<template>
    <div id="lifting-amount">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>信用卡提额</span>
            <span></span>
        </header>
        <div class="container">
           <div class="online">
               <p><span>&nbsp;</span>在线提额</p>
               <ul>
                   <li @click="changeLink('https://html.m.cmbchina.com/MobileHtml/Login/LoginC.aspx?FJID=9GCo8CT1BWI_','')">
                       <p><span><van-icon name="http://pay.91dianji.com.cn/bank1.png"/></span></p>
                       <p>交通银行</p>
                   </li>
                   <li  @click="changeLink('https://creditcardapp.bankcomm.com/member/member/home/index.html','')">
                       <p><span><van-icon name="http://pay.91dianji.com.cn/bank2.png"/></span></p>
                       <p>招商银行</p>
                   </li>
                   <li @click="changeLink('https://wap.cgbchina.com.cn/mbChangeLimits.do?seqno=YEtxf-pvcwSsuyQtfPRdeTU49BD9m_maBmb5B9B9B&from=singlemessage&isappinstalled=0','')">
                       <p><span><van-icon name="http://pay.91dianji.com.cn/bank3.png"/></span></p>
                       <p>广发银行</p>
                   </li>
                   <li @click="changeLink('https://www.citibank.com.cn/WeChat/CLI/form.html','')">
                       <p><span><van-icon name="http://pay.91dianji.com.cn/bank4.png"/></span></p>
                       <p>花旗银行</p>
                   </li>
                   <li @click="changeLink('https://kefu.creditcard.cmbc.com.cn/wdxykindex.shtml#loginMD','')">
                       <p><span><van-icon name="http://pay.91dianji.com.cn/bank5.png"/></span></p>
                       <p>民生银行</p>
                   </li>
                   <li @click="changeLink('https://image.spdbccc.com.cn/group1/M00/01/17/wKhmJlmDZieAb-25AAACrhyVbnA98.html','')">
                       <p><span><van-icon name="http://pay.91dianji.com.cn/bank6.png"/></span></p>
                       <p>浦发银行</p>
                   </li>
                   <li @click="changeLink('http://m.ccb.com/cn/mobile/weixin/include/201309101378782722.html?wParam=QMerSTmogaHKx%2FJD4S7Cw8BvnMJJtd1ZGQzJZ%2Bhi4s%2Be7YDkX53RZNjb1ctXDbs8kBaS%2BEfbdhCaVt6BoLxuMkGrmnatgQEsi3HIFYSUqsTnBukZdzK7fT%2BJquHFWtVUDIwtGNNPZtEMLSPDB1jYsgA1YRNsfJZezlaOK9wAVdxol9iUYERkBJWA5IRP8y7UATJv7E26uJVEHg0O9s%2FlDQ%3D%3D','')">
                       <p><span><van-icon name="http://pay.91dianji.com.cn/bank7.png"/></span></p>
                       <p>建设银行</p>
                   </li>
               </ul>
           </div>
           <div class="image">
               <img src="http://pay.91dianji.com.cn/bank17.png" alt="">
           </div>
           <div class="artificial">
                <p><span>&nbsp;</span>人工提额</p>
               <ul>
                   <router-link :to="{path:'/home/liftingAmount/bankservice',query:{title:'交通银行',type:'1',urlone:'http://pay.91dianji.com.cn/jiaotong.jpg',urltwo:'http://pay.91dianji.com.cn/jiaotong02.jpg',phone:'4008009888'}}" tag="li">
                       <p><span><van-icon name="http://pay.91dianji.com.cn/bank1.png"/></span></p>
                       <p>交通银行</p>
                   </router-link>

                   <router-link :to="{path:'/home/liftingAmount/bankservice',query:{title:'招商银行',type:'2',urlone:'http://pay.91dianji.com.cn/zhaoshang.jpg',urltwo:'http://pay.91dianji.com.cn/zhaoshang02.jpg',phone:'4008205555'}}" tag="li">
                       <p><span><van-icon name="http://pay.91dianji.com.cn/bank2.png"/></span></p>
                       <p>招商银行</p>
                   </router-link>


                 <router-link :to="{path:'/home/liftingAmount/bankservice',query:{title:'广发银行',type:'3',urlone:'http://pay.91dianji.com.cn/guangfa01.jpg',urltwo:'http://pay.91dianji.com.cn/guangfa01.jpg',phone:'95508'}}" tag="li">
                       <p><span><van-icon name="http://pay.91dianji.com.cn/bank3.png"/></span></p>
                       <p>广发银行</p>
                 </router-link>
                  <router-link :to="{path:'/home/liftingAmount/bankservice',query:{title:'农业银行',type:'4',urlone:'http://pay.91dianji.com.cn/nongye02.jpg',urltwo:'http://pay.91dianji.com.cn/nongye.jpg',phone:'4006695599'}}" tag="li">
                       <p><span><van-icon name="http://pay.91dianji.com.cn/bank8.png"/></span></p>
                       <p>农业银行</p>
                   </router-link>
                     <router-link :to="{path:'/home/liftingAmount/bankservice',query:{title:'平安银行',type:'5',urlone:'http://pay.91dianji.com.cn/pingan.jpg',urltwo:'http://pay.91dianji.com.cn/pingan02.jpg',phone:'95511'}}" tag="li">
                       <p><span><van-icon name="http://pay.91dianji.com.cn/bank9.png"/></span></p>
                       <p>平安银行</p>
                   </router-link>
                    <router-link :to="{path:'/home/liftingAmount/bankservice',query:{title:'中信银行',type:'6',urlone:'http://pay.91dianji.com.cn/zhongxin.jpg',urltwo:'http://pay.91dianji.com.cn/zhongxin02.jpg',phone:'4008895558'}}" tag="li">
                       <p><span><van-icon name="http://pay.91dianji.com.cn/bank10.png"/></span></p>
                       <p>中信银行</p>
                    </router-link>
                   <router-link :to="{path:'/home/liftingAmount/bankservice',query:{title:'工商银行',type:'7',urlone:'http://pay.91dianji.com.cn/gongshang.jpg',urltwo:'http://pay.91dianji.com.cn/gongshang02.jpg',phone:'95588'}}" tag="li">
                       <p><span><van-icon name="http://pay.91dianji.com.cn/bank11.png"/></span></p>
                       <p>工商银行</p>
                   </router-link>
                   <router-link :to="{path:'/home/liftingAmount/bankservice',query:{title:'中国银行',type:'8',urlone:'http://pay.91dianji.com.cn/zhongguo.jpg',urltwo:'',phone:'4006695566'}}" tag="li">
                       <p><span><van-icon name="http://pay.91dianji.com.cn/bank12.png"/></span></p>
                       <p>中国银行</p>
                   </router-link>
                   <router-link :to="{path:'/home/liftingAmount/bankservice',query:{title:'上海银行',type:'9',urlone:'http://pay.91dianji.com.cn/shanghai.jpg',urltwo:'',phone:'95594'}}" tag="li">
                       <p><span><van-icon name="http://pay.91dianji.com.cn/bank13.png"/></span></p>
                       <p>上海银行</p>
                   </router-link>
                   <router-link :to="{path:'/home/liftingAmount/bankservice',query:{title:'华夏银行',type:'10',urlone:'http://pay.91dianji.com.cn/huaxia.jpg',urltwo:'',phone:'4006695577'}}" tag="li">
                       <p><span><van-icon name="http://pay.91dianji.com.cn/bank14.png"/></span></p>
                       <p>华夏银行</p>
                   </router-link>
                   <router-link :to="{path:'/home/liftingAmount/bankservice',query:{title:'浦发银行',type:'11',urlone:'http://pay.91dianji.com.cn/pufa.jpg',urltwo:'http://pay.91dianji.com.cn/pufa02.jpg',phone:'4008208788'}}" tag="li">
                       <p><span><van-icon name="http://pay.91dianji.com.cn/bank6.png"/></span></p>
                       <p>浦发银行</p>
                   </router-link>
                   <router-link :to="{path:'/home/liftingAmount/bankservice',query:{title:'兴业银行',type:'12',urlone:'http://pay.91dianji.com.cn/xingye.jpg',urltwo:'',phone:'95561'}}" tag="li">
                       <p><span><van-icon name="http://pay.91dianji.com.cn/bank15.png"/></span></p>
                       <p>兴业银行</p>
                   </router-link>
                    <router-link :to="{path:'/home/liftingAmount/bankservice',query:{title:'民生银行',type:'13',urlone:'http://pay.91dianji.com.cn/minsheng.jpg',urltwo:'',phone:'4006695568'}}" tag="li">
                       <p><span><van-icon name="http://pay.91dianji.com.cn/bank5.png"/></span></p>
                       <p>民生银行</p>
                    </router-link>
                   <router-link :to="{path:'/home/liftingAmount/bankservice',query:{title:'光大银行',type:'14',urlone:'http://pay.91dianji.com.cn/guangda.jpg',urltwo:'',phone:'4007888888'}}" tag="li">
                       <p><span><van-icon name="http://pay.91dianji.com.cn/bank16.png"/></span></p>
                       <p>光大银行</p>
                   </router-link>
                   <router-link :to="{path:'/home/liftingAmount/bankservice',query:{title:'建设银行',type:'15',urlone:'http://pay.91dianji.com.cn/jianshe.jpg',urltwo:'http://pay.91dianji.com.cn/jianshe02.jpg',phone:'4008200588'}}" tag="li">
                       <p><span><van-icon name="http://pay.91dianji.com.cn/bank7.png"/></span></p>
                       <p>建设银行</p>
                   </router-link>
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
            this.$router.go(-1)
        },
         changeLink(url,title){
            //   this.$router.push({
            //          path:"/loan/form/myOrder",
            //          query:{
            //              info:url,
            //              title:title
            //          }
            //      })

            
             if (!navigator.userAgent.match(/iPad|iPhone/i)){
                 this.$router.push({
                     path:"/loan/form/myOrder",
                     query:{
                         info:url,
                         title:title
                     }
                 })
             } else {
                 location.href=url
             }
        },
    }
}
</script>

<style lang="less">
   #lifting-amount {
       >header {
           background: #4965AE;
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
                       &:nth-of-type(12){
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
                img {
                    width:100%;
                }
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
                       &:nth-of-type(6){
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
