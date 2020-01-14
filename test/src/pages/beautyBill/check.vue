<template>
    <div id="check">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>选择</span>
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
                        <p class="prov" @click="provide(item)">
                          去验证 <van-icon name="arrow" color="#2D74FF"  />
                       </p>
                   </li>
               </ul>
           </div>
           <div class="cover" v-show="showCover" @click.self="showCover=false">
               <div class="info">
                   <div class="title">
                       <p></p>
                       <p>信用卡信息</p>
                       <p @click="showCover=false"> <van-icon name="close" size="20px"  /></p>
                   </div>
                   <div class="cardnumber">
                       <div class="number">信用卡号:</div>
                       <input type="number" placeholder="请输入您要验证的信用卡卡号">
                   </div>
                   <div class="tips">
                       <p>特别说明:</p>
                       <p>支付将跳转银联页面完成，为完成支付验证，需要先确定您需要验证的信用卡卡号。</p>
                   </div>
                   <div class="sure">
                       <van-button type="info" size="large">确定</van-button>
                   </div>
               </div>
           </div>
        </div>
    </div>

</template>


<script>
import { axiosPost } from '../../lib/http'
export default {
    data() {
        return {
            showCover:false,
            list:[],
            url:"http://pay.91dianji.com.cn/"
        }
    },
    methods:{
        goBack() {
            this.$router.go(-1)
        },
        provide(i){
            // this.showCover=true
            this.getGoods(i)
        },
        getGoods(i){
              axiosPost("/creditCard/getBillProduct")
              .then(res=>{
                  let data=res.data.data.list
                  let arr=[]
                  data.forEach(item=>{
                      if(item.currercyCode===i.baseCurrencyCode){
                          arr.push(item)
                      }
                  })
                  this.$router.push({
                      path:"/home/beautyBill/detailbill",
                      query:{
                          array:arr,
                          info:i
                      }
                  })
              })
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
            })
        }
    },
    created () {
        this.getRate()
    }
}
</script>

<style lang="less">
   #check {
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
                               font-size: 26px;
                              &:nth-of-type(1){
                                 padding-bottom: 10px;
                              }
                           }
                       }
                       .prov{
                           color:#2D74FF;
                           font-size: 30px;
                       }
                   }
               }
           }
           .cover{
               position: fixed;
               top:0;
               right:0;
               bottom:0;
               left:0;
               z-index: 1000;
               background-color: rgba(0, 0, 0, 0.2);
             
               .info{
                   width:80%;
                   margin-top:40%;
                   background-color: #fff;
                   margin-left:10%;
                   padding:30px;
                   box-sizing: border-box;
                   border-radius: 15px;
                   .title{
                       display: flex;
                       align-items: center;
                       justify-content: space-between;
                       p{
                           &:nth-of-type(2){
                               font-size: 34px;
                               font-weight: bold;
                           }
                       }
                       margin-bottom: 10px;
                   }
                   .cardnumber{
                       border-top:1px solid #ddd;
                       border-bottom:1px solid #ddd;
                       padding-top:80px;
                       padding-bottom: 20px;
                       display: flex;
                       align-items: center;
                       margin-bottom: 30px;
                       input{
                           border:none;
                           padding-left:30px;
                       }
                   }
                   .tips{
                       margin-top:40px;
                       p{
                           line-height: 40px;
                       }
                   }
                   .sure{
                       margin-top:40px;
                       .van-button--info{
                           background-color: #2F65FF;
                           border:1px solid #2F65FF;
                           border-radius: 10px;
                           height:80px;
                           line-height: 80px;
                       }
                   }
               }
           }
       }
   }
</style>
