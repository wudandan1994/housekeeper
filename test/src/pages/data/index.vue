<template>
    <div id="data">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>我的团队</span>
            <span><van-icon name="ellipsis"/></span>
        </header>
        <div class="container">
            <div class="team">
                <ul>
                    <li>
                        <p>0</p>
                        <p>正式团队</p>
                    </li>
                     <li>
                        <p>0</p>
                        <p>今日锁粉</p>
                    </li>
                     <li>
                        <p>0</p>
                        <p>今日成交</p>
                    </li>
                </ul>
            </div>
            <div class="info">
                <div class="all">
                    <p>
                        <span>&nbsp;</span>
                        <span>我的团队</span>
                    </p>
                    <p>全部：1人</p>
                </div>
                <ul>
                    <li>
                        <p><van-icon name="star"/></p>
                        <p>全部信息</p>
                    </li>
                     <li>
                        <p><van-icon name="star"/></p>
                        <p>业绩停滞</p>
                    </li>
                     <li>
                        <p><van-icon name="star"/></p>
                        <p>LV1</p>
                    </li>
                     <li>
                        <p><van-icon name="star"/></p>
                        <p>LV2</p>
                    </li>
                     <li>
                        <p><van-icon name="star"/></p>
                        <p>LV3</p>
                    </li>
                     <li>
                        <p><van-icon name="star"/></p>
                        <p>失效粉丝</p>
                    </li>
                     <li>
                        <p><van-icon name="star"/></p>
                        <p>我的直推</p>
                    </li>
                     <li>
                        <p><van-icon name="star"/></p>
                        <p>授权代理</p>
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
            this.$router.push('/share')
        }
    }
}
</script>

<style lang="less">
   #data {
       >header {
           background: #000;
           width:100%;
           height: 86px;
           padding-top:10px;
           line-height:86px;
           z-index:999;
           color:#fff;
           display: flex;
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
           background-color: #EDEDED;
           >.team {
               padding:30px 0px;
               border-bottom: 1px solid #ccc;
               background-color: #fff;

               >ul{
                   height: 200px;
                   background-color: #251813;
                   margin:0px 30px;
                   border-radius: 30px;
                   display: flex;
                   text-align: center;
                   color:#DDD3CC;
                   >li{
                       width:33%;
                       padding-top:50px;
                       margin-bottom: 20px;
                       margin-top: 20px;
                       border-right: 1px solid #fff;
                       &:last-child{
                           border:none;
                       }
                       >p {
                           &:nth-of-type(1){
                            padding-bottom: 20px;
                           }
                           &:nth-of-type(2){
                               padding-top: 20px;
                           }
                       }
                   }
               }
           }
           >.info {
               padding:0 30px;
               background-color: #fff;
               >.all{
                   display: flex;
                  >p {
                     margin:30px 0px;
                     &:nth-of-type(1){
                         margin-right: 40px;
                         font-size: 30px;
                         font-weight: bold;
                         display: flex;
                         >span {
                             &:nth-of-type(1){
                                display: block;
                                width:5px;
                                height: 100%;
                                background-color: #AF9B4D;
                                margin-right:20px;
                             }
                            
                         }
                     }
                  }
               }
               >ul{
                   display: flex;
                   flex-wrap: wrap;
                   text-align: center;
                   >li{
                       width:22%;
                       border:2px solid #ccc;
                       background-color: #F6F6F6;
                       border-radius:8px;
                       margin-right:3%;
                       margin-bottom:4%;
                       &:nth-of-type(4),
                       &:nth-of-type(8),
                       {
                           margin-right: 0px;
                       }
                       >p{
                           &:nth-of-type(1){
                               font-size: 40px;
                               margin:15px 0px;
                           }
                           &:nth-of-type(2){
                               margin-bottom: 10px;
                           }
                       }
                   }
               }
           }
       }
   }
</style>
