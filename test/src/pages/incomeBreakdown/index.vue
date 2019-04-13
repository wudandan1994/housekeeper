<template>
    <div id="income-breakdown">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>收益明细</span>
            <span></span>
        </header>
        <div class="container">
           <div class="time">
              <div class="picker">
                    <p><van-icon name="arrow-left"/></p>
                    <p>2019-02</p>
                    <p><van-icon name="arrow"/></p>
              </div>
              <div class="income">
                  <p>上月总收益（元）</p>
                  <p>0</p>
                  <ul>
                      <li>
                          <p>平均每天收益（元）</p>
                          <p>0.00</p>
                      </li>
                       <li>
                          <p>运营商收益（元）</p>
                          <p>0.00</p>
                      </li>
                       <li>
                          <p>正式会员（人）</p>
                          <p>0.00</p>
                      </li>
                  </ul>
                   <p @click="lookMine" class="mine">查看我的</p>
              </div>
               <ul class="number">
                   <li>
                       <p><van-icon name="like"/><span>业务收益</span></p>
                       <p>今日：0笔</p>
                   </li>
                   <li>
                       <p><van-icon name="like"/><span>招商收益</span></p>
                       <p>今日：0笔</p>
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
            this.$router.push('/home')
        },
        lookMine(){
             this.$router.push('/personalCenter/income')
        }
    }
}
</script>

<style lang="less">
   #income-breakdown {
       >header {
             background-color:#8E9CCE;
           width:100%;
           height:86px;
           line-height:86px;
           font-size:28px;
           padding-top:10px;
           z-index:999;
           color:#fff;
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
           padding-top:96px;
           padding-bottom: 50px;
           >.time {
               border:2px solid #ccc;
               border-radius:8px;
               margin-left:10px;
               margin-right: 10px;
               >.picker {
                   display:flex;
                   justify-content: space-between;
                   padding-top:10px;
                   padding-bottom: 10px;
                   border-bottom: 1px solid #ccc;
               }
               >.income {
                    background-color:#8E9CCE;
                   position: relative;
                   margin:20px;
                   border-radius: 10px;
                   color:#fff;
                   >p {
                       text-align: center;
                       padding:15px 0px;
                   }
                   >ul {
                       margin-top:30px;
                       display: flex;
                       justify-content: space-between;
                       text-align: center;
                       font-size: 20px;
                       >li {
                           padding-bottom:15px;
                           >P{
                               padding-bottom: 15px;
                           }
                       }
                   }
                   >.mine {
                       position: absolute;
                       right:-1%;
                       padding:10px 15px;
                       top:10%;
                       border-radius: 10px;
                       background-color: #fff;
                       color:#8E9CCE;
                   }
               }
               >.number {
                   display: flex;
                   justify-content: space-between;
                   padding:20px 60px;
                   >li {
                       text-align: center;
                       width:49%;
                       &:nth-of-type(1){
                           border-right:1px solid #ccc;
                      }
                      >p {
                          &:nth-of-type(1){
                              padding-bottom:20px;
                          }
                          &:nth-of-type(2){
                             color:#000;
                             font-weight: bold;
                          }
                      }
                   }
               }
           }
       }
   }
</style>
