<template>
    <div id="business-cooperation">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>商务合作</span>
            <span><van-icon name="ellipsis"/></span>
        </header>
        <div class="container">
           <div class="info">
               <p><span>&nbsp;</span>填写商务合作信息</p>
               <ul class="phone">
                   <li>
                       <span><van-icon name="location"/></span>
                       <div>
                            <span>姓名</span>
                            <input type="text" placeholder="可乐-5-2">
                       </div>
                   </li>
                   <li>
                       <span><van-icon name="location"/></span>
                       <div>
                            <span>手机</span>
                            <input type="number" placeholder="请输入11位手机号码">
                       </div>
                   </li>
                   <li>
                       <span><van-icon name="location"/></span>
                       <div>
                            <span>邮箱</span>
                            <input type="email" placeholder="请输入您的邮箱">
                       </div>
                   </li>
               </ul>
               <ul class="city">
                   <li>
                        <span><van-icon name="location"/></span>
                        <div>
                            <span>城市</span>
                            <input type="text" placeholder="未设置">
                            <span><van-icon name="arrow"/></span>
                        </div>
                   </li>
                    <li>
                        <span><van-icon name="location"/></span>
                        <div>
                            <span>业务类型</span>
                            <input type="text" placeholder="信用卡">
                            <span><van-icon name="arrow"/></span>
                        </div>
                   </li>
                    <li>
                        <span><van-icon name="location"/></span>
                        <div>
                            <span>合作银行</span>
                            <input type="text" placeholder="请输入合作银行名称">
                        </div>
                   </li>
                    <li>
                        <span><van-icon name="location"/></span>
                        <div>
                            <span>方式</span>
                            <input type="text" placeholder="公司">
                            <span><van-icon name="arrow"/></span>
                        </div>
                   </li>
                    <li>
                        <span><van-icon name="location"/></span>
                        <div>
                            <span>公司名称</span>
                            <input type="text" placeholder="请输入您的公司名称">
                        </div>
                   </li>
               </ul>
                <p><span>&nbsp;</span>备注信息</p>
                <div class="contact">
                    <textarea   placeholder="如果您想对接我们渠道资源，或是您有好的资源渠道，请留下您的联系方式，我们会尽快与您联系"></textarea>
                </div>
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
            this.$router.push('/home/cardCenter')
        }
    }
}
</script>

<style lang="less">
   #business-cooperation {
       >header {
           background: #000;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           color:#fff;
           display: flex;
           position: fixed;
           z-index:999;
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
       .container {
           background-color: #EEEEEE;
           padding-top:96px;
           padding-bottom: 50px;
           >.info {
               >p {
                   padding:20px;
                   display: flex;
                   >span {
                       display: block;
                       width:8px;
                       height: 100%;
                       margin-right:20px;
                       background-color:#836D29; 
                 }
               }
               >.phone {
                   background-color: #fff;
                   padding-left:20px;
                    >li {
                        display: flex;
                        justify-content: space-between;
                        padding-top:20px;
                        padding-bottom:20px;
                        font-size: 30px;
                        >span {
                            color:red;
                            
                        }
                        >div {
                            flex: 1;
                            display: flex;
                            justify-content: space-between;
                            margin-left:10px;
                            padding-right:20px;
                            padding-bottom:20px;
                            border-bottom: 1px solid #ccc;
                            >input {
                                border:none;
                                text-align: right;
                                margin-bottom: 5px;
                            }
                        }
                    }
                }
              >.city {
                margin-top:20px;
                background-color: #fff;
                padding-left:20px;
                >li {
                    display: flex;
                    justify-content: space-between;
                    padding-top:20px;
                    padding-bottom:20px;
                    font-size: 30px;
                    &:last-child{
                        border:none;
                    }
                    >span {
                        color:red;
                        
                    }
                    >div {
                        flex: 1;
                        display: flex;
                        justify-content: space-between;
                        margin-left:10px;
                        padding-right:20px;
                        padding-bottom:20px;
                        border-bottom: 1px solid #ccc;
                        >input {
                            border:none;
                            text-align: right;
                            margin-bottom: 5px;
                        }
                        }
                    }
           }
           >.contact {
               background-color: #fff;
               padding:30px 20px 50px 20px;
               line-height: 40px;
               >textarea {
                   border:none;
                   width:100%;
               }
           }
         }
           
       }
   }
</style>
