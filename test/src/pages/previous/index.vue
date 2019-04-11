<template>
    <div id="previous">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>专属服务经理</span>
            <span><van-icon name="ellipsis"/></span>
        </header>
        <div class="container">
             <div class="image">
                  <img src="../../../static/images/logo.png" alt="">
                  <div class="info">
                      <div>
                            <div class="picture">
                                <img src="../../../static/images/wx-logo.png" alt="">
                            </div>
                            <div>
                                <p class="recommend gray">推荐人</p>
                                <p>Laomeng</p>
                            </div>
                      </div>
                      <div>
                          <p class="recommend ">级别：<span class="gray">实习会员</span></p>
                          <p>推荐码：<span class="gray">60472697</span></p>
                      </div>
                  </div>
             </div>
             <div class="tips">
                 <h3>1.温馨提示</h3>
                 <p>专属服务经理是平台对用户的第一责任人，在享用平台相关权益的同时，也肩负指导、培训和为用户排忧解难的责任和义务，投诉电话：400-801-5636</p>
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
            // this.$router.push('/personalCenter')
            console.log(222);
            
        }
    },
    created () {
        
    },
}
</script>

<style lang="less">
   #previous{
       >header {
           background: #000;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           font-size:28px;
           color:#fff;
           display: flex;
           position: fixed;
           z-index:999;
           justify-content: space-between;
           >span {
               &:nth-of-type(1) {
                   margin-left: 20px;
               }
               &:nth-of-type(3) {
                   margin-right: 20px;
               }
           }
       }
       >.container {
           padding-top:96px;
           padding-bottom: 50px;
           >.image {
               width:100%;
               background-color:red;
               position: relative;
               >img {
                   width:100%;
               }
               >.info{
                   position: absolute;
                   bottom: 0px;
                   left:0px;
                   right:0px;
                   margin-left:10px;
                   margin-right:10px;
                   transform: translateY(50%);
                   background-color: #fff;
                   border-radius: 10px;
                   border:2px solid #ccc;
                   display: flex;
                   justify-content: space-between;
                    align-items: center;
                   padding:30px;
                   .recommend {
                       margin-bottom: 20px;
                   }
                   .gray{
                       color:#ccc;
                   }
                   >div {
                       &:nth-of-type(1){
                           display: flex;
                           justify-content: space-between;
                           align-items: center;
                            >.picture {
                                width:100px;
                                height: 100px;
                                border-radius: 50%;
                                background-color: orange;
                                margin-right:20px;
                                >img {
                                    width:100%;
                                }
                            }
                       }
                   }
               }
           }
       }
   }
</style>
