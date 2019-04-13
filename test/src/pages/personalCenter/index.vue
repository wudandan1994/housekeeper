<template>
    <div id="personal-center-component">
        <header class="header">
            <div class="top row">
                <div class="avator"><img :src="headimg" alt=""></div>
                <div class="name-code">
                    <div class="name start-center">{{nickname}}</div>
                    <div class="unset start-center">
                        <router-link tag="div" class="center" to="/register">未设置</router-link>
                    </div>
                </div>
            </div>
            <div class="operator end-center">
                <van-icon name="medel" size="20px" color="#dab17b"/>
                <span>运营商</span>
            </div>
            <div class="position">
                <div class="recomcode center">推荐码:98787654</div>
                <router-link to="/home/verified" class="authentication center" tag="div">实名认证</router-link>
                <div class="isvip end-center"><img :src="vip" alt=""></div>
                <div class="position-detail row">
                    <div class="per-position shou right">
                        <div class="title start-center">收益</div>
                        <div class="title bold start-center">3456</div>
                    </div>
                    <div class="per-position yu right">
                        <div class="title start-center">余额</div>
                        <div class="title bold start-center">3456</div>
                    </div>
                    <div class="per-position fen">
                        <div class="title start-center">分佣</div>
                        <div class="title bold start-center">3456</div>
                    </div>
                </div>
            </div>
        
            <div class="bottom row">
                <div class="per-menu">
                    <div class="per-icon center"><van-icon name="http://pay.91dianji.com.cn/303-check.png" size="30px" color="#dab17b"/></div>
                    <router-link tag="div" class="per-title center" to="/personalCenter/incomedetail/integralCash">积分</router-link>
                </div>
                 <div class="per-menu">
                    <div class="per-icon center"><van-icon name="http://pay.91dianji.com.cn/304-check.png" size="30px" color="#dab17b"/></div>
                    <router-link tag="div" to="/personalCenter/incomedetail/cash" class="per-title center">可结算</router-link>
                </div>
                 <div class="per-menu">
                    <div class="per-icon center"><van-icon name="http://pay.91dianji.com.cn/305-check.png" size="30px" color="#dab17b"/></div>
                    <router-link tag="div" to="/ponserCenter/userAccountManage" class="per-title center">总收益</router-link>
                </div>
            </div>
        </header>
        <div class="menu-title start-center">特约服务</div>
        <div class="per-list row">
            <router-link tag="div" class="per-menu-list line" to="/ponserCenter/userAccountManage">
                <div class="menu-icon center"><van-icon name="http://pay.91dianji.com.cn/303.png" size="30px" color="#dab17b"/></div>
                <div class="per-menu-title center">账户管理</div>
            </router-link>

            <router-link tag="div" class="per-menu-list line" to="/personalCenter/previous">
                <div class="menu-icon center"><van-icon name="http://pay.91dianji.com.cn/304.png" size="30px" color="#dab17b"/></div>
                <div class="per-menu-title center">上级推荐人</div>
            </router-link>

            <div class="per-menu-list">
                <div class="menu-icon center"><van-icon name="http://pay.91dianji.com.cn/305.png" size="30px" color="#dab17b"/></div>
                <div class="per-menu-title center">微名片</div>
            </div>

        </div>
        <div class="per-list row">
            <div class="per-menu-list line">
                <div class="menu-icon center"><van-icon name="http://pay.91dianji.com.cn/306.png" size="30px" color="#dab17b"/></div>
                <div class="per-menu-title center">商务合作</div>
            </div>

            <div class="per-menu-list line">
                <div class="menu-icon center"><van-icon name="http://pay.91dianji.com.cn/307.png" size="30px" color="#dab17b"/></div>
                <div class="per-menu-title center">共享佣金池</div>
            </div>

            <div class="per-menu-list">
                <div class="menu-icon center"><van-icon name="http://pay.91dianji.com.cn/308.png" size="30px" color="#dab17b"/></div>
                <div class="per-menu-title center">营销课堂</div>
            </div>
        </div>
        <div class="menu-title m-top start-center">实时工具</div>
        <div class="per-list row">
            <div class="per-menu-list line">
                <div class="menu-icon center"><van-icon name="http://pay.91dianji.com.cn/309.png" size="30px" color="#dab17b"/></div>
                <div class="per-menu-title center">VIP视频</div>
            </div>

            <div class="per-menu-list line">
                <div class="menu-icon center"><van-icon name="http://pay.91dianji.com.cn/310.png" size="30px" color="#dab17b"/></div>
                <div class="per-menu-title center">流程说明</div>
            </div>

            <div class="per-menu-list">
                <div class="menu-icon center"><van-icon name="http://pay.91dianji.com.cn/311.png" size="30px" color="#dab17b"/></div>
                <div class="per-menu-title center">平台手册</div>
            </div>
        </div>
        <div class="per-list row">
            <div class="per-menu-list line">
                <div class="menu-icon center"><van-icon name="http://pay.91dianji.com.cn/311.png" size="30px" color="#dab17b"/></div>
                <div class="per-menu-title center">百问百答</div>
            </div>

            <div class="per-menu-list line">
                <div class="menu-icon center"><van-icon name="http://pay.91dianji.com.cn/312.png" size="30px" color="#dab17b"/></div>
                <div class="per-menu-title center">退换说明</div>
            </div>

            <div class="per-menu-list">
                <div class="menu-icon center"><van-icon name="http://pay.91dianji.com.cn/313.png" size="30px" color="#dab17b"/></div>
                <div class="per-menu-title center">名片夹</div>
            </div>
        </div>
        <footerMenu :active="active" @getChange="changeActive"></footerMenu>
    </div>
</template>

<script>
import footerMenu from '@/components/footer'
import {axiosPost,axiosGet} from '../../lib/http.js'
import storage from '@/lib/storage'
export default {
    components:{
      footerMenu
    },
    data(){
        return {
            active:2,
            nickname: 'Giovanni',
            headimg: 'http://img2.imgtn.bdimg.com/it/u=1000195578,2796948806&fm=11&gp=0.jpg',
            recommendedcode: '',
            vip: 'http://pay.91dianji.com.cn/301-1.png',
        }
    },
    methods:{
        changeActive(obj){
            console.log('obj', obj);
        }
    },
    created(){
        // this.nickname = this.$store.state.wechat.nickname;
        // this.headimg  = this.$store.state.wechat.headimg;
        // this.recommendedcode  = this.$store.state.wechat.recommendedcode; 
        // if(this.$store.state.wechat.vip == '1'){
        //     this.vip ='http://pay.91dianji.com.cn/301.png';
        // }else{
        //     this.vip = 'http://pay.91dianji.com.cn/301-1.png';
        // }
    }
}
</script>

<style lang="less" scoped>
  #personal-center-component {
      width: 100%;
      height: 90vh;
      overflow: scroll;
      padding-bottom: 5vh;
      background: #F2F2F2;
      .header{
          width: 100vw;
          height: 450px;
          position: relative;
          background: linear-gradient(#4B66AF,#6883C1);  
          padding-top: 60px;  
          .top{
              width: 90%;
              height: 120px;
              margin-left: auto;
              margin-right: auto;
              .avator{
                  width: 18%;
                  height: 100%;
                  >img{
                      width: 120px;
                      height: 120px;
                      border-radius: 50%;
                  }
              }
              .name-code{
                  width: 72%;
                  margin-left: 15px;
                  height: 100%;
                  .name{
                      height: 50px;
                      margin-top: 10px;
                      font-size: 40px;
                      font-weight: 700;
                      color:#ffffff;
                  }
                  .unset{
                      width: 100%;
                      height: 50px;
                      margin-top: 5px;
                      font-size: 28px;
                      color:#ffffff; 
                      >div{
                        width: auto;
                        border: solid 0.02rem #ccc;
                        border-radius: 20px; 
                        padding: 5px 20px;
                      }

                  }
              }
          }
          .operator{
              width: auto;
              height: 100px;
              position: absolute;
              right: 0px;
              top: 70px;
              background: #798bc5;
              padding-left: 20px;
              padding-right: 20px;
              color: #ccc;
              border-top-left-radius: 60px;
              border-bottom-left-radius: 60px;
          }
          .position{
              width: 90%;
              height: 350px;
              position: relative;
              margin-top: 100px;
              margin-left: auto;
              margin-right: auto;
              background: #ffffff;
              border-radius: 15px;
              .recomcode{
                  width: 220px;
                  height: 50px;
                  padding-left: 10px;
                  padding-right: 10px;
                  border: solid 0.02rem  rgb(101, 121, 254);
                  color: rgb(101, 121, 254);
                  position: absolute;
                  left: 20px;
                  top: 30px;
                  font-size: 24px;
                  border-radius: 60px;
              }
              .authentication{
                  width: 120px;
                  height: 55px;
                  position: absolute;
                  left: 300px;
                  top: 30px;
                  color: rgb(101, 121, 254);
                  font-weight: 700;
                  font-size: 28px;
              }
              .isvip{
                  width: 120px;
                  height: 60px;
                  position: absolute;
                  right: 20px;
                  top: 20px;
                  >img{
                      width: 60px;
                      height: 60px;
                  }
              }
              .position-detail{
                  width: 95%;
                  height: 200px;
                  position: absolute;
                  left: 2.5%;
                  bottom: 20px;
                  
                  .per-position{
                      width: 33%;
                      height: 100%;
                      .title{
                          width: 90%;
                          height: 50px;
                          padding-left: 10%;
                          font-size: 30px;
                      }
                      .bold{
                          font-weight: bold;
                          font-size: 34px;
                      }
                      
                  }
                  .shou{
                      background: url('http://pay.91dianji.com.cn/3-shou.jpg') no-repeat;
                      background-size: 80% 60%;
                      background-position: 15% 100%;
                  }
                  .yu{
                      background: url('http://pay.91dianji.com.cn/3-yu.jpg') no-repeat;
                      background-size: 80% 60%;
                      background-position: 15% 100%;
                  }
                  .fen{
                      background: url('http://pay.91dianji.com.cn/3-fen.jpg') no-repeat;
                      background-size: 80% 60%;
                      background-position: 15% 100%;
                  }
                  .right{
                    border-right: solid 1px #f2f2f2;
                  }
              }
          }
          .bottom{
              width: 100vw;
              height: 180px;
              background: white;
              margin-top: 30px;
              .per-menu{
                  width: 33%;
                  height: 160px;
                  margin-top: 10px;
                  .per-icon{
                      width: 100%;
                      height: 60%;
                  }
                  .per-title{
                      width: 100%;
                      height: 40%;
                      font-size: 30px;
                  }
              }
          }
      }
       .menu-title{
            width: 98%;
            padding-left: 2%;
            height: 80px;
            border-bottom: solid 1px #ccc;
            background: white;
            font-size: 30px;
            color: #000;
            margin-top: 360px;
        }
        .m-top{
            margin-top: 15px;
        }
        .per-list{
            background: white;
            border-bottom: solid 1px #ccc;
            .per-menu-list{
                width: 33%;
                height: 180px;
                padding-top:10px;
                .menu-icon{
                    width: 100%;
                    height: 60%;
                    font-size: 24px;
                }
                .per-menu-title{
                    font-size: 28px;
                    width: 100%;
                    height: 40%;
                    color: #666;
                }
            }
            .line{
                    border-right: solid 1px #ccc;
            }
        }
        
}
</style>
