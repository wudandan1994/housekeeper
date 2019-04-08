<template>
    <div id="credit-card-link">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>分享链接</span>
            <span><van-icon name="ellipsis"/></span>
        </header>
        <div class="container">
            <ul>
                <li>
                    <p><span><van-icon name="like"/></span></p>
                    <div>
                        <div>
                            <p>中信黑金&nbsp;&nbsp;信用卡分享链接</p>
                             <p>网络推广、需真诚与执着，打动潜在客户</p>
                        </div>
                        <p><van-icon name="like"/></p>
                    </div>
                </li>
                 <li>
                    <p><span><van-icon name="like"/></span></p>
                    <div>
                        <div>
                            <p>民生银行&nbsp;&nbsp;信用卡分享链接</p>
                             <p>网络推广、需真诚与执着，打动潜在客户</p>
                        </div>
                        <p><van-icon name="like"/></p>
                    </div>
                </li>
                 <li>
                    <p><span><van-icon name="like"/></span></p>
                    <div>
                        <div>
                            <p>浦发银行&nbsp;&nbsp;信用卡分享链接</p>
                             <p>网络推广、需真诚与执着，打动潜在客户</p>
                        </div>
                        <p><van-icon name="like"/></p>
                    </div>
                </li>
                 <li>
                    <p><span><van-icon name="like"/></span></p>
                    <div>
                        <div>
                            <p>兴业银行&nbsp;&nbsp;信用卡分享链接</p>
                             <p>网络推广、需真诚与执着，打动潜在客户</p>
                        </div>
                        <p><van-icon name="like"/></p>
                    </div>
                </li>
                 <li>
                    <p><span><van-icon name="like"/></span></p>
                    <div>
                        <div>
                            <p>招商银行&nbsp;&nbsp;信用卡分享链接</p>
                             <p>网络推广、需真诚与执着，打动潜在客户</p>
                        </div>
                        <p><van-icon name="like"/></p>
                    </div>
                </li>
                 <li>
                    <p><span><van-icon name="like"/></span></p>
                    <div>
                        <div>
                            <p>华夏银行&nbsp;&nbsp;信用卡分享链接</p>
                             <p>网络推广、需真诚与执着，打动潜在客户</p>
                        </div>
                        <p><van-icon name="like"/></p>
                    </div>
                </li>
                 <li>
                    <p><span><van-icon name="like"/></span></p>
                    <div>
                        <div>
                            <p>广发银行&nbsp;&nbsp;信用卡分享链接</p>
                             <p>网络推广、需真诚与执着，打动潜在客户</p>
                        </div>
                        <p><van-icon name="like"/></p>
                    </div>
                </li>
                 <li>
                    <p><span><van-icon name="like"/></span></p>
                    <div>
                        <div>
                            <p>平安银行&nbsp;&nbsp;信用卡分享链接</p>
                             <p>网络推广、需真诚与执着，打动潜在客户</p>
                        </div>
                        <p><van-icon name="like"/></p>
                    </div>
                </li>
                 <li>
                    <p><span><van-icon name="like"/></span></p>
                    <div>
                        <div>
                            <p>上海银行&nbsp;&nbsp;信用卡分享链接</p>
                             <p>网络推广、需真诚与执着，打动潜在客户</p>
                        </div>
                        <p><van-icon name="like"/></p>
                    </div>
                </li>
            </ul>
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
   #credit-card-link {
       >header {
           background: #000;
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
           >ul {
               padding-left:10px;
               >li {
                   display: flex;
                   padding:20px 0px;
                   border-bottom: 1px solid #ccc;
                   >p {
                       padding-top:10px;
                   }
                   >div {
                       flex: 1;
                       display: flex;
                       margin-left:20px;
                       padding-right: 20px;
                       justify-content: space-between;
                       >p {
                            padding-top:10px;
                       }
                       >div {
                           >p {
                               &:nth-of-type(1){
                                   color:#38393B;
                                   padding-bottom: 15px;
                                   font-size: 36px;
                               }
                                &:nth-of-type(2){
                                   color:#C9CACC;
                                   padding-bottom: 10px;
                                   font-size: 20px;
                               }
                           }
                       }
                   }

               }
           }
       }
   }
</style>
