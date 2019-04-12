<template>
    <div id="storage">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>实名认证</span>
            <span><van-icon name="ellipsis"/></span>
        </header>
        <div class="container">
            <div class="message">
                <div class="wallet">钱夹宝咨询</div>
                <div class="horn">
                    <van-notice-bar
                        text="商户收款秒到通道需要实名认证，本人银行卡。"
                        left-icon="volume-o"
                        />
                </div>
            </div>
            <div class="info">
               <div class="card">
                  <ul>
                      <li>
                          <p>持卡人</p>
                          <input type="text" placeholder="请如实填写持卡人姓名">
                      </li>
                       <li>
                          <p>身份证号</p>
                          <input type="number" placeholder="请如实填写持卡人身份证号码">
                      </li>
                  </ul>
               </div>
               <div class="area">
                   <ul>
                       <li>
                           <p>银行卡号</p>
                          <input type="number" placeholder="请输入银行储蓄卡卡号">
                       </li>
                        <li>
                           <p>发卡行</p>
                           <p>
                               <input type="text" placeholder="请选择"> <span><van-icon name="arrow" /></span>
                           </p>
                       </li>
                       <li>
                           <p>支行地区</p>
                           <p>
                               <input type="text" placeholder="请选择"> <span><van-icon name="arrow" /></span>
                           </p>
                       </li>
                       <li>
                           <p>所属支行</p>
                           <p>
                               <input type="text" placeholder="请选择"> <span><van-icon name="arrow" /></span>
                           </p>
                       </li>
                   </ul>
               </div>
               <div class="phone">
                   <ul>
                       <li>
                          <p>手机号</p>
                          <input type="number" placeholder="请填写信用卡预留手机号码">
                       </li>
                       <li>
                          <p>验证码</p>
                          <p><input type="number" placeholder="请填写验证码"><span>获取验证码</span></p>
                       </li>
                   </ul>
               </div>
             
            </div>
            <div class="safe">
                <div>
                    <span><van-icon name="bag"/></span>
                    <h3>
                          <p>信息安全</p>
                          <p>金融级加密体系</p>
                    </h3>
                </div>
                <div>
                    <span><van-icon name="bill"/></span>
                    <h3>
                          <p>资金安全</p>
                          <p>PICC全程联保</p>
                    </h3>
                </div>
            </div>
            <div class="next">
                <span>下一步</span>
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
            this.$router.push('/home/receivables')
        }
    }
}
</script>

<style lang="less">
   #storage {
       >header {
           background-color: #4B66AF;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           font-size:28px;
           color:#fff;
           z-index:999;
           display: flex;
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
           background-color:#E2E3E5; 
           >.message {
               background-color: #fff;
               padding-top:20px;
               padding-bottom: 10px;
               display: flex;
               border-bottom: 1px solid #ccc;
               padding-bottom: 10px;
               >.wallet {
                    border-right:2px solid #ccc;
                    padding-right:10px;
               }
               >.horn {
                   flex:1;
                   padding-left:10px;
               }
           }
           >.info {
               >.card {
                   background-color: #fff;
                   padding-left:15px;
                   >ul{
                       >li {
                           display: flex;
                           justify-content: space-between;
                           padding-top:30px;
                           padding-right:15px;
                           padding-bottom: 30px;
                           &:nth-of-type(1) {
                               border-bottom: 1px solid #ccc;
                           }
                           >input {
                               border:none;
                               flex: 1;
                               text-align: right;
                           }
                       }
                   }
               }
               >.area {
                   margin-top:20px;
                   padding-left:15px;
                   background-color: #fff;
                   >ul {
                       >li {
                           display: flex;
                           justify-content: space-between;
                           border-bottom: 1px solid #ccc;
                           padding-top:30px;
                           padding-bottom:30px;
                           input {
                               border:none;
                               text-align: right;
                           }
                       }
                   }
               }
               >.phone {
                   margin-top: 20px;
                   background-color: #fff;
                   padding-left: 15px;
                   >ul{
                       >li{
                           display: flex;
                           justify-content: space-between;
                           padding-top:30px;
                           padding-bottom:30px;
                           margin-right: 10px;
                           &:nth-of-type(1){
                              border-bottom: 1px solid #ccc;
                           }
                            input {
                               border:none;
                               text-align: right;
                           }
                           span {
                               background-color: #4B66AF;
                               color:#ddd; 
                               margin-left: 20px;
                               padding:15px 20px;
                               border-radius: 10px;
                           }
                       }
                   }
               }
              
           }
           >.safe {
              display: flex;
              padding-top:20px;
              justify-content: space-around; 
              >div {
                  display: flex;
                  >span {
                      font-size:60px;
                  }
                  >h3 {
                      margin-left:15px;
                      color:#999;
                      >p {
                          margin-bottom: 20px;
                      }
                  }
              }
           }
           >.next {
              margin-top:30px;
              margin-bottom: 40px;
              padding-top:30px;
              padding-bottom: 30px;
              text-align: center;
              color:#fff;
              background-color: #4B66AF;
              width:90%;
              margin:0 auto;
              border-radius: 15px;

           }
       }
   }
</style>
