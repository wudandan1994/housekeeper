<template>
    <div id="exchangerate">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>实时汇率</span>
            <span></span>
        </header>
        <div class="container">
           <div class="list">
               <ul>
                   <li v-for="(item,index) in list" :key="index">
                       <p><van-icon :name="url+item.icon"  size="40px" /></p>
                       <div>
                           <p>{{item.titl}}{{item.baseCurrencyCode}}</p>
                           <p>实时汇率：{{item.baseAmount}} <span>{{item.titl}}</span> = <span>{{item.cnyAmount}}</span>人民币</p>
                       </div>
                   </li>
               </ul>
           </div>
        </div>
    </div>

</template>


<script>
import { axiosPost } from '../../lib/http'
export default {
    data() {
        return {
            list:[],
            url:"http://pay.91dianji.com.cn/"
        }
    },
    methods:{
        goBack() {
            this.$router.go(-1)
        },
        getRate(){
            axiosPost("/creditCard/getExchangeRate")
            .then(res=>{
                  let   data=res.data.data.list
                  data.forEach(item => {
                      item.icon=item.baseCurrencyCode+'.png'
                      if(item.baseCurrencyCode==="JPY"){
                          item.titl="日元"
                      }else if(item.baseCurrencyCode==="USD"){
                           item.titl="美元"
                      }else if(item.baseCurrencyCode==="HKD"){
                           item.titl="港币"
                      }else if(item.baseCurrencyCode==="EUR"){
                           item.titl="欧元"
                      }else if(item.baseCurrencyCode==="GBP"){
                           item.titl="英镑"
                      }
                  });
                  this.list=data
                //   console.log(this.list,"list")
            })
        }
    },
    created () {
         this.getRate()
    }
}
</script>

<style lang="less">
   #exchangerate {
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
           .list{
            //    padding:20px 30px;
               ul{
                   li{
                       display: flex;
                       border-bottom: 1px solid #eee;
                       padding:20px 30px;
                       align-items: center;
                       div{
                           flex:1;
                           padding-left:20px;
                           p{
                              &:nth-of-type(1){
                                 padding-bottom: 10px;
                              }
                           }
                       }
                   }
               }
           }
       }
   }
</style>
