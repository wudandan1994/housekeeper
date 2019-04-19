<template>
    <div id="page-incomedetail">
        <header class="header-top row">
            <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">收益明细</div>
            <div class="right-icon center"></div>
        </header>
        <div class="tabs">

             <div class="income-tab">
                        <!-- <div class="top-tab row">
                            <div class="money center">总额： <span>65522.00</span></div>
                            <div class="money center">可提现：<span>54242.00</span></div>
                            <div class="info center"><van-icon name="info" size="1.5em" color="#BD3B3C"/></div>
                        </div> -->
                        <div class="per-list" v-for="(item,index) in list" :key="index">
                            <div class="type">{{item.nickname}}</div>
                            <div class="time">{{item.mobile}}</div>
                            <div class="amount center">+{{item.amount}}</div>
                        </div>
                    </div>
            <!-- <van-tabs v-model="active">
                <van-tab title="业务收入">
                   
                </van-tab>
                <van-tab title="招商收入">
                    <div class="income-tab">
                        <div class="top-tab row">
                            <div class="money center">总额： <span>65522.00</span></div>
                            <div class="money center">可提现：<span>54242.00</span></div>
                            <div class="info center"><van-icon name="info" size="1.5em" color="#BD3B3C"/></div>
                        </div>

                        <div class="Invitation-reward row">
                            <div class="per-reward">
                                <div class="Invitation-number center">2544</div>
                                <div class="Invitation-title center">邀请成功(人)</div>
                            </div>
                            <div class="per-reward">
                                <div class="Invitation-number center">2544</div>
                                <div class="Invitation-title center">红包奖励(元)</div>
                            </div>
                        </div>

                        <div class="tabs-switch row">
                            <div class="per-switch center" :class="{checked: now}" @click="handleChange">
                                邀请成功
                                <div class="triangle-black" @click.stop="handleInvitationType"></div>
                            </div>
                            <div class="per-switch center" :class="{checked: !now}" @click="handleChange">
                                邀请中(68人)
                            </div>
                            <div class="hidden-menu row" v-if="menus">
                                <div class="hidden-small-title center" :class="[smallcheck == 'all' ? 'actives' : '']" @click="handleGetSmallType('all')">
                                    <div class="right-line center">全部</div>
                                </div>
                                <div class="hidden-small-title center" :class="[smallcheck == 'gold' ? 'actives' : '']" @click="handleGetSmallType('gold')">
                                    <div class="right-line center">金牌</div>
                                </div>
                                <div class="hidden-small-title center" :class="[smallcheck == 'silver' ? 'actives' : '']" @click="handleGetSmallType('silver')">
                                    <div class="center">银牌</div>
                                </div>
                            </div>
                        </div>
                        <div class="Invitation row">
                            <div class="direct-invitation">
                                <div class="center">直接邀请(人)</div>
                                <div class="center">566</div>
                            </div>
                            <div class="indirect-invitation">
                                <div class="center">间接邀请</div>
                                <div class="center">198</div>
                            </div>
                        </div>
                        <div class="invitation-list">
                            <div class="list-per-record row">
                                <div class="list-icon center"><van-icon name="stop-circle" color="#D09F60"/></div>
                                <div class="name-time">
                                    <div class="list-name start-center">Giovanni</div>
                                    <div class="list-time start-center">2019-04-04 11:11:14</div>
                                </div>
                                <div class="reward-havedone">
                                    <div class="list-reward end-center">奖励红包 &nbsp;<span>+20</span></div>
                                    <div class="list-havedone end-center">已邀请 <span>+10人</span></div>
                                </div>
                                <router-link tag="div" class="list-more center" to="/personalCenter/incomedetail/personalIncomeDetail">
                                    <i class="iconfont icon-more"></i>
                                </router-link>
                            </div>

                            <div class="list-per-record row">
                                <div class="list-icon center"><van-icon name="stop-circle" color="#D09F60"/></div>
                                <div class="name-time">
                                    <div class="list-name start-center">Giovanni</div>
                                    <div class="list-time start-center">2019-04-04 11:11:14</div>
                                </div>
                                <div class="reward-havedone">
                                    <div class="list-reward end-center">奖励红包 &nbsp;<span>+20</span></div>
                                    <div class="list-havedone end-center">已邀请 <span>+10人</span></div>
                                </div>
                                <router-link tag="div" class="list-more center" to="/personalCenter/incomedetail/personalIncomeDetail">
                                    <i class="iconfont icon-more"></i>
                                </router-link>
                            </div>

                            <div class="list-per-record row">
                                <div class="list-icon center"><van-icon name="stop-circle" color="#D09F60"/></div>
                                <div class="name-time">
                                    <div class="list-name start-center">Giovanni</div>
                                    <div class="list-time start-center">2019-04-04 11:11:14</div>
                                </div>
                                <div class="reward-havedone">
                                    <div class="list-reward end-center">奖励红包 &nbsp;<span>+20</span></div>
                                    <div class="list-havedone end-center">已邀请 <span>+10人</span></div>
                                </div>
                                <router-link tag="div" class="list-more center" to="/personalCenter/incomedetail/personalIncomeDetail">
                                    <i class="iconfont icon-more"></i>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </van-tab>
                <van-tab title="分销佣金">内容 3</van-tab>
            </van-tabs> -->
        </div>
    </div>
</template>
<script>
import storage from '@/lib/storage'
import { axiosPost } from '../../lib/http';
export default {
    data(){
        return{
            active: 0,
            now: true,
            smallcheck: 'all',
            menus: false,
            list: [],
        }
    },
    methods:{
        // 返回首页
        handleReturnHome(){
            this.$router.go(-1);
        },
        // 更多
        handleMore(){
            this.$toast('尽请期待');
        },
        // 切换样式
        handleChange(){
            console.log('当前状态',this.now);
            let now = this.now;
            now == true ? this.now = false : this.now = true;
        },
        // 邀请分类
        handleInvitationType(){
            console.log('邀请分类');
            this.menus = true;
        },
        // 获取当前选中小标题分类
        handleGetSmallType(val){
            console.log('当前分类',val);
            this.smallcheck = val;
            this.menus = false;
        },
        // 流水明细
        handleFlowDetails(){
            let url = 'http://pay.91dianji.com.cn/api/customer/getAmountFrom';
            let params = {
                page: 1,
                pageSize: 1000
            };
            axiosPost(url,params).then(res =>{
                console.log('流水请求成功',res);
                if(res.data.data.data.length == '0'){
                    this.$toast('流水为空');
                }else{
                    this.list = res.data.data.data;
                }
            }).catch(res =>{
                console.log('流水请求失败',res);
            })
        }
    },
    beforeRouteEnter(to,from,next){
        console.log('路由',from);
        next((vm)=>{ //参数vm就是当前组件的实例。
            storage.set('preRouters',from.fullPath);
        })
    },
    created(){
        this.handleFlowDetails();
    }
}
</script>
<style lang="less" scoped>
    #page-incomedetail{
        width: 100vw;
        height: auto;
        padding-top: 86px;
        .income-tab{
            .top-tab{
                width: 100%;
                height: 100px;
                border-bottom: solid 1px #ccc;
                .money{
                    width: 40%;
                    height: 100%;
                    span{
                        color: #bd3b3c;
                    }
                }
                .info{
                    width: 20%;
                    height:100%;
                }
            }
            .per-list{
                width: 100%;
                height: 100px;
                border-bottom: solid 1px #ccc;
                position: relative;
                .type{
                    width: 50%;
                    height: auto;
                    // border: solid 1px red;
                    color: black;
                    font-size: 30px;
                    position: absolute;
                    top: 15px;
                    left: 20px;
                }
                .time{
                    position: absolute;
                    left: 20px;
                    bottom: 15px;
                }
                .amount{
                    width: auto;
                    height: 100%;
                    font-size: 30px;
                    font-weight: 700;
                    color: #bd3b3c;
                    position: absolute;
                    right: 20px;
                    bottom: 0px;
                }
            }
            .Invitation-reward{
                width: 100%;
                height: 100px;
                .per-reward{
                    width: 50%;
                    height: 100%;
                    .Invitation-number{
                        width: 100%;
                        height: 50%;
                        color: rgb(207, 158, 94);
                        font-weight: bold;
                        font-size: 30px;
                    }
                    .Invitation-title{
                        width: 100%;
                        height: 50%;
                    }
                }
            }
            .tabs-switch{
                width: 99%;
                height: 100px;
                margin-left: auto;
                margin-right: auto;
                border: solid 1px #D09F60;
                position: relative;
                .per-switch{
                    width: 50%;
                    height: 100%;
                    position: relative;
                    .triangle-black{
                        width: 0;
                        height: 0;
                        position: absolute;
                        right: 0;
                        bottom: 0;
                        z-index: 2;
                        border-color: transparent #000 #000 transparent;
                        border-width: 18px;
                        border-style: solid;
                    }
                }
                .checked{
                    background: #D09F60;
                    color: white;
                }
                .hidden-menu{
                    width: 100%;
                    height: 100px;
                    background: white;
                    position: absolute;
                    top: 100px;
                    left: 0;
                    .hidden-small-title{
                        width: 33%;
                        height: 100%;
                    }
                    .right-line{
                        width: 100%;
                        height: 60px;
                        margin-top: 20px;
                        border-right: solid 1px #ccc;
                    }
                    .actives{
                        border-bottom: solid 5px #D09F60;
                    }
                }
            }
            .Invitation{
                width: 95vw;
                height: 100px;
                margin-left: auto;
                margin-right: auto;
                border-bottom: solid 2px #ccc;
                .direct-invitation,.indirect-invitation{
                    width: 50%;
                    height: 100%;
                    div{
                        width: 100%;
                        height: 50%;
                    }
                }
            }
            .invitation-list{
                width: 95vw;
                height: auto;
                margin-left: auto;
                margin-right: auto;
                .list-per-record{
                    width: 100%;
                    height: 120px;
                    border-bottom: solid 2px #ccc;
                    .list-icon{
                        width: 5%;
                        height: 100%;
                    }
                    .name-time{
                        width: 43%;
                        height: 100%;
                        margin-left: 2%;
                        div{
                            width: 100%;
                            height: 50%;
                        }
                        .list-name{
                            font-size: 35px;
                        }
                        .list-time{
                            color: #999;
                        }
                    }
                    .reward-havedone{
                        width: 43%;
                        height: 100%;
                         div{
                            width: 100%;
                            height: 50%;
                        }
                        .list-reward{
                            font-size: 35px;
                            span{
                                color: #D09F60;
                            }
                        }
                        .list-havedone{
                            color: #999;
                        }

                    }
                    .list-more{
                        width: 5%;
                        height: 100%;
                        margin-left: 2%;
                    }
                }
            }
        }
    }
</style>

