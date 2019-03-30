<template>
    <div id="personal-center-component">
        <header class="header">
            
            <div class="top">
                <div class="title center">个人中心</div>
                <div class="authentication">实名认证</div>
                <router-link to="/home/verified"> <div class="authentication">实名认证</div></router-link>
            </div>

            <div class="middle row">
                <div class="avator center"><img src="http://img2.imgtn.bdimg.com/it/u=1122649470,955539824&fm=26&gp=0.jpg" alt=""></div>
                <div class="name-details">
                    <div class="name-vip row">
                        <div class="name center">纪康</div>
                        <div class="vip center">
                            <van-icon name="gem" size="20px" color="#ccc"/>
                        </div>
                        <div class="operator end-center">
                            <van-icon name="medel" size="20px" color="#dab17b"/>
                            <span>运营商</span>
                        </div>
                    </div>
                    <div class="set row">
                        <div class="unset center">未设置</div>
                        <div class="code center">推荐码: 46578356</div>
                    </div>
                </div>
            </div>

            <div class="bottom row">
                <div class="per-menu">
                    <div class="per-icon center"><van-icon name="star" size="20px" color="#dab17b"/></div>
                    <div class="per-title center">积分</div>
                </div>
                 <div class="per-menu">
                    <div class="per-icon center"><van-icon name="bill" size="20px" color="#dab17b"/></div>
                    <div class="per-title center">可结算</div>
                </div>
                 <div class="per-menu">
                    <div class="per-icon center"><van-icon name="gift-card" size="20px" color="#dab17b"/></div>
                    <div class="per-title center">总收益</div>
                </div>
            </div>
        </header>
        <div class="menu-title start-center">特约服务</div>
        <div class="per-list row">
            <router-link tag="div" class="per-menu-list line" to="/ponserCenter/userAccountManage">
                <div class="menu-icon center"><van-icon name="gift-card" size="30px" color="#dab17b"/></div>
                <div class="per-menu-title center">账户管理</div>
            </router-link>

            <div class="per-menu-list line">
                <div class="menu-icon center"><van-icon name="gift-card" size="30px" color="#dab17b"/></div>
                <div class="per-menu-title center">账户管理</div>
            </div>

            <div class="per-menu-list">
                <div class="menu-icon center"><van-icon name="gift-card" size="30px" color="#dab17b"/></div>
                <div class="per-menu-title center">账户管理</div>
            </div>

        </div>
        <div class="per-list row">
            <div class="per-menu-list line">
                <div class="menu-icon center"><van-icon name="gift-card" size="30px" color="#dab17b"/></div>
                <div class="per-menu-title center">账户管理</div>
            </div>

            <div class="per-menu-list line">
                <div class="menu-icon center"><van-icon name="gift-card" size="30px" color="#dab17b"/></div>
                <div class="per-menu-title center">账户管理</div>
            </div>

            <div class="per-menu-list">
                <div class="menu-icon center"><van-icon name="gift-card" size="30px" color="#dab17b"/></div>
                <div class="per-menu-title center">账户管理</div>
            </div>
        </div>
        <div class="menu-title m-top start-center">实时工具</div>
        <div class="per-list row">
            <div class="per-menu-list line">
                <div class="menu-icon center"><van-icon name="gift-card" size="30px" color="#dab17b"/></div>
                <div class="per-menu-title center">账户管理</div>
            </div>

            <div class="per-menu-list line">
                <div class="menu-icon center"><van-icon name="gift-card" size="30px" color="#dab17b"/></div>
                <div class="per-menu-title center">账户管理</div>
            </div>

            <div class="per-menu-list">
                <div class="menu-icon center"><van-icon name="gift-card" size="30px" color="#dab17b"/></div>
                <div class="per-menu-title center">账户管理</div>
            </div>
        </div>
        <div class="per-list row">
            <div class="per-menu-list line">
                <div class="menu-icon center"><van-icon name="gift-card" size="30px" color="#dab17b"/></div>
                <div class="per-menu-title center">账户管理</div>
            </div>

            <div class="per-menu-list line">
                <div class="menu-icon center"><van-icon name="gift-card" size="30px" color="#dab17b"/></div>
                <div class="per-menu-title center">账户管理</div>
            </div>

            <div class="per-menu-list">
                <div class="menu-icon center"><van-icon name="gift-card" size="30px" color="#dab17b"/></div>
                <div class="per-menu-title center">账户管理</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods:{

    }
}
</script>

<style lang="less" scoped>
  #personal-center-component {
      width: 100%;
      height: auto;
      padding-bottom: 5vh;
      background: #F2F2F2;
      .header{
          width: 99vw;
          height: auto;
          margin-left: auto;
          margin-right: auto;
          background-color: rgb(0, 0, 0);
          border: 1px solid rgb(102, 102, 102);
          .top{
            position: relative;
            .title{
                width: 100%;
                height: auto;
                line-height: 80px;
                font-size: 18px;
                font-weight: 400;
                color: rgb(212, 214, 221);
            }
            .authentication{
                width: auto;
                height: 20px;
                position: absolute;
                top: 25px;
                right: 10px;
                z-index: 1;
                font-size: 12px;
                font-weight: 400;
                color: rgb(212, 214, 221);
            }
          }
          .middle{
                width: 100%;
                height: 120px;
                margin-top: 50px;
                color: white;
                .avator{
                    width: 20vw;
                    height: auto;
                    >img{
                        width: 100px;
                        height: 100px;
                        border-radius: 50%;
                    }
                }
                .name-details{
                    width: 80vw;
                    height: auto;
                }
                .name-vip{
                    width: 100%;
                    height: 50%;
                    .name{
                        width: 10%;
                        height: 100%;
                        font-size: 25px;
                        font-weight: 700;
                        color: rgb(218, 177, 123);
                        overflow: hidden;
                    }
                    .vip{
                        width: 12%;
                        height: 100%;
                    }
                    .operator{
                        width: 76%;
                        height: 100%;
                        font-size: 9px;
                        font-weight: 400;
                        color: rgb(255, 255, 255);
                    }
                }
                .set{
                    width: 100%;
                    height: 50%;
                    .unset{
                        width: 100px;
                        height: 50%;
                        border: solid 0.02rem rgb(102, 102, 102);
                        margin-top: 15px;
                        color: #ccc;
                        font-size: 15px;
                        border-radius: 20px;
                    }
                    .code{
                        width: 200px;
                        height: 50%;
                        border: solid 0.02rem rgb(102, 102, 102);
                        margin-top: 15px;
                        margin-left: 30px;
                        padding-left: 15px;
                        padding-right: 15px;
                        color: #ccc;
                        backface-visibility: white;
                        font-size: 0.2em;
                        border-radius: 20px;
                    }
                }
           }
           .bottom{
               width: 100%;
               height: 150px;
               margin-top: 50px;
               .per-menu{
                   color: white;
                   width: 30%;
                   height: 100%;
                   margin-left: 2.5%;
                   .per-icon{
                       width: 100%;
                       height: 60%;
                   }
                   .per-title{
                       width: 100%;
                       height: 40%;
                   }
               }
           }
      }
       .menu-title{
            width: 99%;
            padding-left: 1%;
            height: 80px;
            border-bottom: solid 1px #ccc;
            background: white;
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
                .menu-icon{
                    width: 100%;
                    height: 60%;
                }
                .per-menu-title{
                    width: 100%;
                    height: 40%;
                }
            }
            .line{
                    border-right: solid 1px #ccc;
            }
        }
        
}
</style>
