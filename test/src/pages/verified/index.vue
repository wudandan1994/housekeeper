<template>
    <div id="verified">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>实名认证</span>
            <span></span>
        </header>
        <div class="container">
            <div class="introduction">
                <p>认证介绍</p>
                 <h3>尊敬的用户您好：</h3>
                 <p>根据中华人民共和国，国家相关法律规定会员搭建商城需要通过实名认证，为确保您账户安全及
                     正常使用，如您还未实名，请尽快完成实名，否则您在名片玩家中无法完成添加商品，体现余额到
                     银行卡等功能，感谢您的理解及支持！
                 </p>
                 <p>认证通过后，将能正常使用发布商品，提现等功能。</p>
            </div>
             <div class="methods">
                 <p>如何认证</p>
                 <p>实名认证需要填写真实姓名和身份证号码；上传身份证正反面照片。</p>
                 <p>提交申请号，我们会在1-5个工作日内完成对您的实名认证审核。</p>
                 <p>
                     您可在"我的"，"名片"页面或"我的"->&nbsp;"详情"->"实名认证"查看您的实名认证进度及结果
                 </p>
             </div>
             <router-link to="/home/verified/verifiedName" tag="span" class="at-once">
                     立即实名
             </router-link>
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
   #verified {
       >header {
            background-color: #4965AE;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           color:#fff;
           z-index:999;
           font-size:28px;
           display: flex;
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
           padding:96px 20px 50px 20px;
            font-size: 30px;
            line-height:40px;
            color:#8D8D8D;
           >.introduction {
               >p {
                   &:nth-of-type(1){
                       font-size:36px;
                       color:#000;
                       font-weight: bold;
                       padding:15px 0px;
                   }
                   &:nth-of-type(3){
                       padding:15px 0px;
                   }
               }
           }
           >.methods {
               padding-top:10px;
               margin-bottom: 200px;
               >p{
                   &:nth-of-type(1) {
                       font-size: 36px;
                       color:#000;
                       padding:10px 0;
                       font-weight: bold;
                   }
                   margin-bottom: 20px;
               }
           }
           >.at-once {
               color:white;
                background-color: #4965AE;
               padding:30px 200px;
               border-radius: 10px;
               text-align: center;
               display: block;
           }
       }
   }
</style>
