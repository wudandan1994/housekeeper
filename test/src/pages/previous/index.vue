<template>
    <div id="previous">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>专属服务经理</span>
            <span><van-icon name="ellipsis"/></span>
        </header>
        <div class="container">
             <div class="image">
                  <img src="http://pay.91dianji.com.cn/Superior.jpg" alt="">
                  <div class="info">
                      <div>
                            <div class="picture">
                                <img src="http://pay.91dianji.com.cn/icon_62.png" alt="">
                            </div>
                            <div>
                                <p class="recommend gray">推荐人</p>
                                <p>{{nickname}}</p>
                            </div>
                      </div>
                      <div>
                          <p class="recommend ">级别：<span class="gray">{{level}}</span></p>
                          <p>推荐码：<span class="gray">{{recommendedcode}}</span></p>
                      </div>
                  </div>
             </div>
              <div class="phone">
                  <ul>
                      <li>
                          <p><van-icon name="phone"/></p>
                          <div> 
                              <p class="gray">打电话</p>
                              <a :href="'tel:' + mobile">和上级电话联系</a>
                          </div>
                      </li>
                       <li @click="handleMorePreviousDetail">
                          <p><van-icon name="manager"/></p>
                          <div> 
                              <p class="gray">我的上级</p>
                              <p>直属上级信息</p>
                          </div>
                      </li>
                  </ul>
              </div>
             <div class="tips">
                 <h3>1.温馨提示</h3>
                 <p>专属服务经理是平台对用户的第一责任人，在享用平台相关权益的同时，也肩负指导、培训和为用户排忧解难的责任和义务，投诉电话：400-105-9769</p>
             </div>
        </div>
    </div>

</template>


<script>
import storage from '@/lib/storage'
import { axiosPost } from '@/lib/http';
export default {
    data() {
        return {
            nickname: '',
            mobile: '',
            level: '',
            recommendedcode: '',
        }
    },
    methods:{
        goBack() {
            this.$router.push('/personalCenter')
        },
        // 上级详细信息
        handleMorePreviousDetail(){
            this.$toast('暂无更多信息');
        },
        // 查询上级
        handlePrevious(){
            let url = 'http://pay.91dianji.com.cn/api/customer/getCustomerUP';
            let params = {
                recommendedcode: this.$store.state.wechat.recommendedcode
            };
            axiosPost(url,params).then(res =>{
                console.log('上级请求成功',res);
                if(res.data.success){
                    this.nickname = res.data.data.nickname;
                    this.mobile = res.data.data.mobile,
                    this.recommendedcode = res.data.data.promotioncode,
                    res.data.data.level == '0' ?  this.level = '实习' : (res.data.data.level == '1' ? this.level = '黄金会员' : this.level = '钻石会员');
                }
            }).catch(res =>{
                console.log('上级请求失败',res);
            })
        }
    },
   created(){
        this.handlePrevious();
    }
}
</script>

<style lang="less">
   #previous{
       >header {
           background-color: #4B66AF;
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
           background-color: #EFEDEF;
           >.image {
               width:100%;
               position: relative;
                background-color: gray;
               >img {
                   width:100%;
               }
               >.info{
                   position: absolute;
                   bottom: 0px;
                   left:0px;
                   right:0px;
                   margin-left:30px;
                   margin-right:30px;
                   transform: translateY(50%);
                   background-color: #fff;
                   border-radius: 10px;
                   border:2px solid #ccc;
                   display: flex;
                   justify-content: space-between;
                    align-items: center;
                   padding:50px;
                   .recommend {
                       margin-bottom: 20px;
                   }
                   .gray{
                       color:#000;
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
                                margin-right:20px;
                                >img {
                                    width:100%;
                                }
                            }
                       }
                   }
               }
           }
           >.phone{
               margin-top: 20%;
                >ul{
                   display: flex;
                   justify-content: space-between;
                   background-color: #fff;
                   >li {
                       padding:60px;
                       display: flex;
                       align-items: center;
                       border-top:1px solid #ccc;
                       border-bottom:1px solid #ccc;
                       width:50%;
                       color:#000;
                       >p {
                           margin-right:10px;
                           font-size: 40px;
                       }
                       &:nth-of-type(1){
                           border-right: 1px solid #ccc;
                       }
                       .gray {
                           padding-bottom: 20px;
                       }
                   }
               }
            }
           >.tips {
               margin-top:8%;
               padding-left:20px;
               padding-right:20px;
               >h3 {
                   color:#000;
                   padding-bottom: 30px;
               }
               >p {
                   line-height:40px;
                   color:#999;
               }
           }
       }
   }
</style>
