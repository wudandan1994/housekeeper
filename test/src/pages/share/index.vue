<template>
    <div id="share-component">
        <header>
            <span class="left-arrow">
               
            </span>
            <span>分享</span>
            <span class="right-arrow">
                <van-icon name="ellipsis" />
            </span>
        </header>
        <div class="contain">
            <div class="poster">
                <ul class="top">
                    <li>
                        <span class="logo">
                            <van-icon name="http://bc.91dianji.com.cn/401.png" />
                        </span>
                        <p>特色海报</p>
                    </li>
                    <li>
                        <span class="logo">
                            <van-icon name="http://bc.91dianji.com.cn/402.png" />
                        </span>
                        <p>推广原则</p>
                    </li>
                    <li>
                        <span class="logo">
                            <van-icon name="http://bc.91dianji.com.cn/403.png" />
                        </span>
                        <p>团队数据</p>
                    </li>
                </ul>
                <ul class="bottom">
                    <li>
                        <span>0</span>
                        <p>推广锁粉</p>
                    </li>
                    <li>
                        <span>0</span>
                        <p>实名认证</p>
                    </li>
                    <li class="fans">
                        <span>0</span>
                        <p>正式升级</p>
                    </li>
                </ul>
            </div>
            <div class="notice">
                <div class="bell-txt">
                    <span>
                        <van-icon name="bell" />
                    </span>
                    <p>紧急通知</p>
                </div>
                <p>一个普通人,在人生遭遇低谷时,碰到神秘台湾财团交给的一个月花光十亿资金的挑战</p>
            </div>
            <div class="business">
                <ul>
                    <li>
                        <p><van-icon name="http://bc.91dianji.com.cn/404.png" /></p>
                        <p>新闻资讯</p>
                        <p>文章可植入广告、锁粉</p>
                    </li>
                    <router-link tag="li" to="/share/poster">
                        <p><van-icon name="http://bc.91dianji.com.cn/405.png" /></p>
                        <p>推广海报图</p>
                        <p>分享二维码、快速增粉</p>
                    </router-link>
                    <li>
                        <p><van-icon name="http://bc.91dianji.com.cn/406.png" /></p>
                        <p>邀请好友</p>
                        <p>邀请新人注册,有红包奖励</p>
                    </li>
                    <li>
                        <p><van-icon name="http://bc.91dianji.com.cn/407.png" /></p>
                        <p>名片玩家视频</p>
                        <p>钱夹报视频.一键分享</p>
                    </li>
                    <li>
                        <p><van-icon name="http://bc.91dianji.com.cn/408.png" /></p>
                        <p>名片推广</p>
                        <p>分享名片.快速增粉</p>
                    </li>
                    <li>
                        <p><van-icon name="http://bc.91dianji.com.cn/409.png" /></p>
                        <p>生成短链接</p>
                        <p>快速分享短链接</p>
                    </li>
                    <li>
                        <p><van-icon name="http://bc.91dianji.com.cn/410.png" /></p>
                        <p>链接转化二维码</p>
                        <p>快速转粉.一键分享</p>
                    </li>
                    <li>
                        <p><van-icon name="http://bc.91dianji.com.cn/411.png" /></p>
                        <p>信用卡链接</p>
                        <p>分享带锁粉功能哦!</p>
                    </li>
                    <router-link to="/share/shareLink" tag="li">
                        <p><van-icon name="http://bc.91dianji.com.cn/412.png" /></p>
                        <p>分享链接</p>
                        <p>分享钱夹宝链接</p>
                    </router-link>
                    <li>
                        <p><van-icon name="http://bc.91dianji.com.cn/413.png" /></p>
                        <p>推广素材图</p>
                        <p>各种视频+图片</p>
                    </li>
                    <li>
                        <p><van-icon name="http://bc.91dianji.com.cn/414.png" /></p>
                        <p>信用卡推广图</p>
                        <p>信用卡推广图.一键锁粉</p>
                    </li>
                    <li @click="flagDown">
                        <p><van-icon name="http://bc.91dianji.com.cn/415.png" /></p>
                        <p>物料下载</p>
                        <p>海量宣传资料</p>
                    </li>
                    <div class="tips" v-show="showFlag">
                        <h3>温馨提示</h3>
                        <p>如您想下载百度网盘的物料，请先下载百度网盘客户端或者APP，并且先注册百度账号，如您有账号可直接下载物料！</p>
                        <p>
                            <span>下载说明</span>
                            <span>去下载</span>
                        </p>
                    </div>
                </ul>
            </div>
        </div>
        <footerMenu :active="active" @getChange="changeActive"></footerMenu>
    </div>
</template>

<script>
import footerMenu from '@/components/footer'
export default {
     components:{
      footerMenu
  },
    data(){
        return{
            showFlag:false,
            active: 3
        }
    },
    methods:{
        flagDown(){
            this.showFlag=!this.showFlag
        },
        changeActive(obj){
            console.log('obj', obj);
        }
    }
    
}
</script>

<style lang="less" scoped >
  #share-component {
      >header {
          height: 86px;
          line-height: 86px;
          font-size: 28px;
          background-color: #4B66AF;
          padding-top:10px;
          color:white;
          z-index:999;
          width:100%;
           position: fixed;
           display: flex;
           justify-content: space-between;
           >.left-arrow {
               margin-left:20px;
           }
           >.right-arrow {
               margin-right:20px;
           }
      }
      >.contain {
          padding-top:96px;
          padding-bottom: 50px;
          >.poster {
              background: linear-gradient(#4B66AF,#6883C1);
              >.top {
                  display: flex;
                  justify-content: space-between;
                  padding-top:50px;
                  padding-bottom: 10px;
                  >li {
                      text-align: center;
                      width:33.33%;
                     >.logo {
                         font-size:60px;
                         margin-bottom:30px;
                         color:white;
                     } 
                     > p {
                         margin-bottom: 10px;
                         color:#ddd;
                     }
                  }
              }
              >.bottom {
                  color:#eee;
                  display: flex;
                  justify-content: space-between;
                  padding-top:30px;
                  >li {
                      width:33.33%;
                      text-align: center;
                      border-right: 1px solid #fff;
                      margin-top:20px;
                      margin-bottom: 30px;
                      &.fans {
                          border:none;
                      }
                      >span {
                          margin-bottom: 20px;
                      }
                      >P{
                          margin-top:20px;
                          margin-bottom:10px;
                      }
                  }
              }
          }
          >.notice {
              display: flex;
              padding:10px 20px;
              border-left:1px solid #000;
              border-right:1px solid #000;

              >p {
                  margin-top:20px;
                  line-height: 40px;
                  margin-left:20px;
              }
              >.bell-txt {
                  color:#BB3D37;
                  text-align: center;
                  width:210px;
                  >span {
                      font-size: 30px;
                  }
              }
          }
          >.business {
              padding-bottom: 20px;
              >ul{
                  display: flex;
                  flex-wrap: wrap;
                  position: relative;
                  margin-bottom:200px;
                  >li {
                      width:33%;
                      margin-top:5px;
                      font-size: 14px;
                      color:#eee;
                      text-align: center;
                      padding-top: 20px;
                      padding-bottom: 40px;
                      >p{
                          &:nth-of-type(1){
                              font-size: 50px;                                                                       
                          }
                          &:nth-of-type(2){
                              margin-top:30px;
                              margin-bottom: 20px;
                              font-size: 28px;
                          }
                          &:nth-of-type(3){
                              font-size: 24px;
                              margin-bottom: 10px;
                          }
                      }
                      &:nth-of-type(2),
                      &:nth-of-type(5),
                      &:nth-of-type(8),
                      &:nth-of-type(11) {
                         margin-left:0.5%;
                         margin-right: 0.5%;
                      }
                    &:nth-of-type(1){
                        background-color: #6798FF;
                    }
                    &:nth-of-type(2){
                        background-color: #655DA6;
                    }
                    &:nth-of-type(3){
                        background-color: #3366FF;
                    }
                    &:nth-of-type(4){
                        background-color: #2E3C66;
                    }
                    &:nth-of-type(5){
                        background-color: #999868;
                    }
                    &:nth-of-type(6){
                        background-color: #44808F;
                    }
                    &:nth-of-type(7){
                        background-color: #C86F51;
                    }
                    &:nth-of-type(8){
                        background-color: #CF9D5E;
                    }
                    &:nth-of-type(9){
                        background-color: #986766;
                    }
                    &:nth-of-type(10){
                        background-color: #9C9ACC;
                    }
                    &:nth-of-type(11){
                        background-color: #BF3D3F;
                    }
                    &:nth-of-type(12){
                        background-color: #878787;
                    }
                  }
                 >.tips {
                    width:80%;
                    height: 500px;
                    margin-left:10%;
                    position: absolute;
                    bottom:6%;
                    left:0px;
                    >h3 {
                        text-align: center;
                        padding:20px 0;
                        background-color: #E8E8E8;
                        border-bottom: 1px solid #ccc;
                        color:#3B3B3D;
                        font-weight: bold;
                    }
                    >p {
                        &:nth-of-type(1){
                            line-height: 40px;
                            background-color: #fff;
                            padding:20px;
                        }
                        &:nth-of-type(2){
                            padding-bottom: 20px;
                            line-height: 40px;
                            background-color: #fff;
                            display: flex;
                            justify-content: space-around;
                            >span {
                                border:2px solid #ccc;
                                padding:10px 30px;
                                border-radius:20px;
                                &:nth-of-type(2){
                                    background-color: #BD9B5B;
                                    color:#fff;
                                }
                            }
                        }
                    }
                 }

              }
          }
      }
  }
</style>
