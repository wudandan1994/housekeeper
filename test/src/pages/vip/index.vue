<template>
    <div id="vip">
        <header>升级代理</header>
        <div class="containt">
            <ul>
                <li>
                    <img src="../../../static/images/flower.jpg.jpg" alt="">
                     <div class="diamonds">
                         <div class="card">钱夹宝钻石卡</div>
                         <div class="instructions">
                             <span>权益说明</span>
                             <span>退换规则</span>
                         </div>
                     </div>
                     <div class="qualifications">
                         <span>授权还款额度</span>
                         <span>授权实习会员资格</span>
                         <span>只能还款分润万38-60</span>
                    </div>  
                     <div class="price">
                        <span class="new-price">￥998.00</span>
                        <span class="old-price">1680</span>
                        <span class="buy">立即购买</span>
                        <!-- <span class="buy-he">帮他购买</span> -->
                     </div>
                </li>
                <li>
                    <img src="../../../static/images/flower.jpg.jpg" alt="">
                     <div class="diamonds">
                         <div class="card">钱夹宝钻石卡</div>
                         <div class="instructions">
                             <span>权益说明</span>
                             <span>退换规则</span>
                         </div>
                     </div>
                     <div class="qualifications">
                         <span>授权还款额度</span>
                         <span>授权实习会员资格</span>
                         <span>只能还款分润万38-60</span>
                    </div>  
                     <div class="price">
                        <span class="new-price">￥998.00</span>
                        <span class="old-price">1680</span>
                        <span class="buy">立即购买</span>
                        <!-- <span class="buy-he">帮他购买</span> -->
                     </div>
                </li>
                <li>
                    <img src="../../../static/images/flower.jpg.jpg" alt="">
                     <div class="diamonds">
                         <div class="card">钱夹宝钻石卡</div>
                         <div class="instructions">
                             <span>权益说明</span>
                             <span>退换规则</span>
                         </div>
                     </div>
                     <div class="qualifications">
                         <span>授权还款额度</span>
                         <span>授权实习会员资格</span>
                         <span>只能还款分润万38-60</span>
                    </div>  
                     <div class="price">
                        <span class="new-price">￥998.00</span>
                        <span class="old-price">1680</span>
                        <span class="buy">立即购买</span>
                        <!-- <span class="buy-he">帮他购买</span> -->
                     </div>
                </li>
            </ul>
        </div>
        <footerMenu :active="active" @getChange="changeActive"></footerMenu>
    </div>
</template>

<script>
import footerMenu from '@/components/footer'
export default {
    components: {
        footerMenu
    },
    data(){
        return{
            active: 1
        }
    },
    methods:{
        changeActive(obj){
            console.log('obj', obj);
        }
    }
}
</script>

<style lang="less" scoped>
 #vip {
     >header {
         width:100%;
         height: 46px;
         background-color: #000;
         line-height: 46px;
         color:white;
         text-align: center;
         position: fixed;
     }
     >.containt {
         padding-top:46px;
         padding-bottom: 46px;
         >ul {
             padding:20px 30px;
             >li {
                 >img {
                     display: block;
                     width:100%;
                     background-color: #fff;
                 }
                 >.diamonds {
                     margin-top:20px;
                     display: flex;
                     justify-content: space-between;
                     >.card {
                         font-weight: bolder;
                         font-size: 30px;
                         color:#000;
                         margin-top:10px;
                     }
                     >.instructions {
                         display: flex;
                         >span {
                             width:50%;
                             border:2px solid #D5AC7D;
                             color:#D5AC7D;
                             padding:7px 10px 4px 10px;
                             border-radius:8px;
                             margin-left:20px;
                         }
                     }
                 }
                 >.qualifications {
                     margin-top:20px;
                     display: flex;
                     justify-content: space-between;
                     >span {
                         border:1px solid #D5AC7D;
                         color:#000;
                          background-color: #D9B786;
                          padding:10px 3px;
                          font-size: 16px;
                          border-radius:13px;
                     }
                 }
                 >.price {
                     display: flex;
                     margin-top:30px;
                     justify-content: space-between;
                     margin-bottom: 15px;
                     >.new-price {
                         color:#C7363F;
                         font-weight: bolder;
                         font-size: 36px;
                     }
                     >.old-price {
                         text-decoration: line-through;
                         margin-top:10px;
                         color:#000;
                         font-weight: bolder;
                         margin-left:-20%;
                     }
                     >.buy {
                         color:white;
                         background-color: #C7363F;
                         border-radius: 10px;
                         padding:10px 20px;
                         font-size: 14px;
                     }
                     >.buy-he {
                         color:white;
                         background-color: #DAB17D;
                         border-radius: 10px;
                         padding:10px 20px;
                         font-size: 14px;
                     }
                 }
             }
         }
     }
 }
</style>
