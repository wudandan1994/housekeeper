 <template>
    <div id="business-card">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span></span>
            <span><van-icon name="ellipsis"/></span>
        </header>
        <div class="container">
           <div class="info">
               <p>江辉</p>
               <p>技术总监</p>
               <p><span> <van-icon name="phone"/></span> 18217788778</p>
               <p><span> <van-icon name="manager"/></span> 190234568@qq.com</p>
               <p><span> <van-icon name="location"/></span> 上海市宝山区泰和路2038号</p>
               <p><span> <van-icon name="column"/></span> 传帮带（上海）网络科技有限公司</p>
           </div>
           <div class="cfo">
               <p>夏竹CFO（首席财务官）</p>
               <p class="number">
                   <span>13500100101</span>
                   <span>实名认证：未认证</span>
               </p>
               <p class="number">
                   <span>xxxxxxxxxxxxxx</span>
                   <span>企业认证：已认证</span>
               </p>
           </div>
           <div class="video">
               <video src=""></video>
           </div>
           <p>查看更多</p>
           <div class="detail">
               <p>
                   <span><van-icon name="phone"/></span>
                   <span>13500100101</span>
                   <span>拨打</span>
               </p>
               <p>
                   <span><van-icon name="phone"/></span>
                   <span>40000000000</span>
                   <span>拨打</span>
               </p>
               <p>
                   <span><van-icon name="phone"/></span>
                   <span>xiazhu_wdy</span>
                   <span>复制</span>
               </p>
               <p>
                   <span><van-icon name="phone"/></span>
                   <span>xiazhu@xx.com</span>
                   <span>复制</span>
               </p>
               <p>
                   <span><van-icon name="phone"/></span>
                   <span>xx投资管理股份有限公司</span>
                   <span>复制</span>
               </p>
               <p>
                   <span><van-icon name="location"/></span>
                   <span>上海市xx区xx大夏xxxx号</span>
                   <span>复制</span>
               </p>
           </div>
           <div class="views">
               <p>
                   <span>20798人浏览</span>
                   <span>18633</span>
               </p>
               <p>
                   <span>20798人浏览</span>
                   <span><van-icon name="like"/></span>
               </p>
               <ul>
                   <li>
                       <p><van-icon name="ellipsis"/></p>
                       <p>分享</p>
                   </li>
                   <li>
                       <p><van-icon name="like"/></p>
                       <p>收藏</p>
                   </li>
                   <li>
                       <p><van-icon name="ellipsis"/></p>
                       <p>交换</p>
                   </li>
                   <li>
                       <p><van-icon name="ellipsis"/></p>
                       <p>保存</p>
                   </li>
               </ul>
           </div>
           <p class="introduce">我的简介</p>
           <div class="poem">
               <p>久客缝余闰，他乡别故人。</p>
               <p>自然堪下泪，谁忍望征尘。</p>
               <p>江上风烟积，山幽云雾多。</p>
               <p>久客缝余闰，他乡别故人。</p>
               <p>自然堪下泪，谁忍望征尘。</p>
               <p>江上风烟积，山幽云雾多。</p>
           </div>
           <div class="more">
               <p>我的业务</p>
               <p>更多</p>
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
   #business-card {
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
           margin-bottom:300px;
           background-color: #F2F2F2;
           padding:30px;
           >.info {
               padding-top:50px;
               margin-top:50px;
               background-color: #333333;
               color:#fff;
               border-radius:20px;
               padding-left: 20px;
               >p{
                   padding-bottom:20px;
                   >span {
                       color:#F7A63D;
                   }
                   &:nth-of-type(1){
                       font-size: 36px;
                   }
                   &:nth-of-type(2){
                       font-size:20px;
                       padding-left:100px;
                       padding-bottom: 20px;
                   }
               }
           }
           >.cfo {
               padding-top:30px;
               padding-left: 10px;
               >p {
                   &:nth-of-type(1){
                       font-size: 40px;
                       padding-bottom:20px;
                   }
                   &.number {
                       display: flex;
                       justify-content: space-between;
                       padding-bottom: 10px;
                       >span {
                           &:nth-of-type(2){
                               color:#F7A071;
                           }
                       }
                   }
               }
           }
           >.video {
               margin-top:20px;
               background-color: #fff;
               border-radius: 15px;
           }
           >p {
               text-align: center;
               padding-top:30px;
               padding-bottom:30px;
           }
           >.detail {
               background-color: #fff;
               >p {
                   padding:30px;
                   display: flex;
                   justify-content: space-between;
                   >span {
                      &:nth-of-type(1){
                           margin-right:-20%;
                            color:#E2921D;
                      }
                       &:nth-of-type(2){
                           text-align: left;
                      }
                      &:nth-of-type(3){
                          background-color: #D9B07B;
                          
                           color:#fff;
                           padding:10px 20px;
                           border-radius: 10px;
                      }
                   }
               }
           }
           >.views {
               padding:50px ;
               >p {
                   display: flex;
                   justify-content: space-between;
                   padding-bottom:20px;
               }
               >ul{
                   margin-top:10px;
                   display: flex;
                   >li {
                       color: #F7A63D;
                       width:16%;
                       border:2px solid #F7A63D;
                       text-align: center;
                       border-radius: 5px;
                       margin-right:13%;
                       padding-bottom: 5px;
                       &:nth-of-type(4){
                           margin-right: 0px;
                       }
                       >p {
                           &:nth-of-type(1){
                               padding-top:15px;
                                padding-bottom:15px;
                           }
                       }
                   }
               }
           }
           >.introduce {
               background-color: #fff;
               text-align: left;
               padding-left: 10px;
           }
           >.poem {
               padding-top:60px;
               padding-left:100px;
               padding-bottom:100px;
               line-height: 40px;
           }
           >.more {
               padding:20px 10px;
               background-color: #fff;
               display: flex;
               justify-content: space-between;
           }
       }
   }
</style>
