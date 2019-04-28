<template>
    <div id="page-incomedetail">
        <header class="header-top row">
            <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">收益明细</div>
            <div class="right-icon center"></div>
        </header>
        <div class="tabs">
             

            <van-tabs v-model="active" @click="handleChangeTabs">
                <van-tab title="所得佣金">
                   <div class="income-tab">
                        <div class="per-list" v-for="(item,index) in list" :key="index">
                            <div class="avator center"><img :src="item.photo" alt=""></div>
                            <div class="nickname">{{item.nickname}}</div>
                            <div class="time">{{item.date}}</div>
                            <div class="amount center">
                                <span v-if="item.type == 5">提现收益</span>
                                <span v-if="item.type == 3">代还收益</span>
                                <span v-if="item.type == 4">商户收款收益</span>
                                <span>+{{item.amount}}</span>
                            </div>
                        </div>
                    </div> 
                </van-tab>
                <van-tab title="推广收益">
                    <div class="income-tab">
                        <!-- <div class="top-tab row">
                            <div class="money center">总额： <span>65522.00</span></div>
                            <div class="money center">可提现：<span>54242.00</span></div>
                            <div class="info center"><van-icon name="info" size="1.5em" color="#BD3B3C"/></div>
                        </div> -->

                        <div class="Invitation-reward row">
                            <div class="per-reward">
                                <div class="Invitation-number center">{{directlyCount}}</div>
                                <div class="Invitation-title center">邀请成功(人)</div>
                            </div>
                            <div class="per-reward">
                                <div class="Invitation-number center">{{promoteSum}}</div>
                                <div class="Invitation-title center">红包奖励(元)</div>
                            </div>
                        </div>

                        <div class="tabs-switch row">
                            <div class="per-switch center" :class="{checked: now}" @click="handleChange">
                                邀请成功
                            </div>
                            <div class="per-switch center" :class="{checked: !now}" @click="handleChange">
                                邀请中({{notVipCount}}人)
                            </div>
                        </div>
                        <div class="Invitation row" v-if="Invitationing">
                            <div class="direct-invitation" :class="{checked: indirect}" @click="handleDirectInvitation">
                                <div class="center">直接邀请(人)</div>
                                <div class="center">{{directlyCount}}</div>
                                <div class="triangle-black" v-if="indirect" @click.stop="handleInvitationType"></div>
                            </div>
                            <div class="indirect-invitation" :class="{checked: !indirect}" @click="handleInDirectInvitation">
                                <div class="center">间接邀请</div>
                                <div class="center">{{indirectCount}}</div>
                                <div class="triangle-black" v-if="!indirect" @click.stop="handleInvitationType"></div>
                            </div>
                            <div class="hidden-menu row">
                                <div class="hidden-small-title center" :class="[level == '' ? 'actives' : '']" @click="handleGetSmallType('')">
                                    <div class="right-line center">全部</div>
                                </div>
                                <div class="hidden-small-title center" :class="[level == '1' ? 'actives' : '']" @click="handleGetSmallType('1')">
                                    <div class="right-line center">黄金</div>
                                </div>
                                <div class="hidden-small-title center" :class="[level == '2' ? 'actives' : '']" @click="handleGetSmallType('2')">
                                    <div class="center">钻石</div>
                                </div>
                            </div>
                        </div>
                        <div class="invitation-list">
                            <div class="list-per-record row" v-for="(item,index) in DirectInvitationList" :key="index">
                                <div class="list-icon center"><van-icon name="stop-circle" color="#4b66af"/></div>
                                <div class="name-time">
                                    <div class="list-name start-center">{{item.nickname}}</div>
                                    <div class="list-time start-center">{{item.date}}</div>
                                </div>
                                <div class="reward-havedone" v-if="Invitationing">
                                    <div class="list-reward end-center">奖励红包 &nbsp;<span>+{{item.amount}}</span></div>
                                    <div v-if="indirect" class="list-havedone end-center">已邀请 <span>+{{item.count}}人</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </van-tab>
                <van-tab title="招商收益">
                    
                </van-tab>
            </van-tabs>
        </div>
        <!-- <loading :componentload='componentload'></loading> -->
    </div>
</template>
<script>
import loading from'@/components/loading'
import storage from '@/lib/storage'
import { axiosPost } from '../../lib/http';
export default {
    components: {
        loading
    },
    data(){
        return{
            componentload: true,
            active: 0,
            now: true,
            menus: false,
            list: [],
            directlyCount: '',
            indirectCount: '',
            notVipCount: '',
            promoteSum: '',
            page: '1',
            pageSize: '1000',
            level: '',
            DirectInvitationList: [],
            indirect: false,
            Invitationing: true,
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
            // console.log('当前状态',this.now);
            let now = this.now;
            now == true ? this.now = false : this.now = true;
            if(now){
                // 邀请中
                this.handleInvitationing();
                this.Invitationing = false;
            }else{
                // 邀请成功，也就是直接邀请
                this.handleDirectInvitation();
                this.Invitationing = true;
            }
        },
        // 邀请分类
        handleInvitationType(){
            // console.log('邀请分类');
            this.menus = true;
        },
        // 获取当前选中小标题分类
        handleGetSmallType(val){
            // console.log('当前分类',val);
            this.level = val;
            this.menus = false;
            // console.log('邀请类型',this.indirect);
            if(this.indirect){
                // 直接邀请
                this.handleDirectInvitation();
            }else{
                // 间接邀请
                this.handleInDirectInvitation();
            }
        },
        // 所得佣金
        handleFlowDetails(){
            this.componentload = true;
            let url = 'http://pay.91dianji.com.cn/api/customer/getAmountFrom';
            let params = {
                page: 1,
                pageSize: 1000
            };
            axiosPost(url,params).then(res =>{
                // console.log('流水请求成功',res);
                if(res.data.success){
                    if(res.data.data.list.data.length == '0'){
                        this.$toast('查询结果为空');
                    }else{
                        this.list = res.data.data.list.data;
                    }
                    setTimeout(() =>{
                        this.componentload = false;
                    },500)
                }else{
                    setTimeout(() =>{
                        this.componentload = false;
                        this.$toast('查询失败');
                    },500)
                }
            }).catch(res =>{
                // console.log('流水请求失败',res);
            })
        },
        // 推广收益
        handlePromotionalBenefits(){
            this.componentload = true;
            let url = 'http://pay.91dianji.com.cn/api/customer/getPromoteTotal';
            let params = {};
            axiosPost(url,params).then(res =>{
                if(res.data.success){
                    this.directlyCount = res.data.data.directlyCount
                    this.indirectCount = res.data.data.indirectCount
                    this.notVipCount = res.data.data.notVipCount
                    this.promoteSum = res.data.data.promoteSum
                    setTimeout(() =>{
                        this.componentload = false;
                    },500)
                }else{
                    setTimeout(() =>{
                        this.componentload = false;
                    },500)
                    this.$toast('查询失败');
                }
            }).catch(res =>{
                setTimeout(() =>{
                    this.componentload = false;
                },500)
                this.$toast('查询失败');
            })
        },
        // 直接邀请列表
        handleDirectInvitation(){
            this.componentload = true;
            this.indirect = true;
            let url = 'http://pay.91dianji.com.cn/api/customer/getDirectlyList';
            let params = {
                page: this.page,
                pageSize: this.pageSize,
                level: this.level
            };
            axiosPost(url,params).then(res =>{
                if(res.data.data){
                    this.DirectInvitationList = res.data.data.data;
                    setTimeout(() =>{
                        this.componentload = false;
                    },500)
                }else{
                    setTimeout(() =>{
                        this.componentload = false;
                    },500)
                    this.$toast('查询失败');
                }
            }).catch(res =>{
                setTimeout(() =>{
                    this.componentload = false;
                },500)
                this.$toast('查询失败');
            })
        },
        // 间接邀请列表
        handleInDirectInvitation(){
            this.componentload = true;
            this.indirect = false;
            let url = 'http://pay.91dianji.com.cn/api/customer/getIndirectList';
            let params = {
                page: this.page,
                pageSize: this.pageSize,
                level: this.level
            };
            axiosPost(url,params).then(res =>{
                if(res.data.data){
                    this.DirectInvitationList = res.data.data.data;
                    setTimeout(() =>{
                        this.componentload = false;
                    },500)
                }else{
                    setTimeout(() =>{
                        this.componentload = false;
                    },500)
                    this.$toast('查询失败');
                }
            }).catch(res =>{
                setTimeout(() =>{
                    this.componentload = false;
                },500)
                this.$toast('查询失败');
            })
        },
        // 邀请中
        handleInvitationing(){
             this.componentload = true;
            let url = 'http://pay.91dianji.com.cn/api/customer/getNotVipList';
            let params = {
                page: this.page,
                pageSize: this.pageSize,
            };
            axiosPost(url,params).then(res =>{
                if(res.data.data){
                    this.DirectInvitationList = res.data.data.data;
                    setTimeout(() =>{
                        this.componentload = false;
                    },500)
                }else{
                    setTimeout(() =>{
                        this.componentload = false;
                    },500)
                    this.$toast('查询失败');
                }
            }).catch(res =>{
                setTimeout(() =>{
                    this.componentload = false;
                },500)
                this.$toast('查询失败');
            })
        },
        handleChangeTabs(obj){
            if(obj == '0'){
                // 所得佣金
                this.handleFlowDetails();
            }
            else if(obj == '1'){
                // 推广收益
                this.handlePromotionalBenefits();
                this.handleDirectInvitation();
            }else{
                // 招商收益
            }
        }
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
                height: 120px;
                border-bottom: solid 1px #ccc;
                position: relative;
                .avator{
                    width: auto;
                    height: 100%;
                    position: absolute;
                    top: 0px;
                    left: 10px;
                    img{
                        width: 100px;
                        height: 100px;
                        border-radius: 50%;
                    }
                }
                .nickname{
                    width: 50%;
                    height: auto;
                    color: black;
                    font-size: 30px;
                    position: absolute;
                    top: 15px;
                    left: 140px;
                }
                .time{
                    position: absolute;
                    left: 140px;
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
                    span:nth-child(2){
                        margin-left: 20px;
                    }
                }
            }
            .Invitation-reward{
                width: 100%;
                height: 100px;
                margin-top: 60px;
                .per-reward{
                    width: 50%;
                    height: 100%;
                    .Invitation-number{
                        width: 100%;
                        height: 50%;
                        color: #4b66af;
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
                width: 95vw;
                height: 100px;
                margin-left: auto;
                margin-right: auto;
                border: solid 1px #4b66af;
                position: relative;
                .per-switch{
                    width: 50%;
                    height: 100%;
                }
                .checked{
                    background: #4b66af;
                    color: white;
                }
            }
            .Invitation{
                width: 95vw;
                height: 100px;
                margin-left: auto;
                margin-right: auto;
                border-bottom: solid 2px #ccc;
                position: relative;
                .checked{
                    background: #4b66af;
                    color: white;
                }
                .direct-invitation,.indirect-invitation{
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
                        border-width: 20px;
                        border-style: solid;
                    }
                    div{
                        width: 100%;
                        height: 50%;
                    }
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
                        border-bottom: solid 5px #4b66af;
                    }
                }
            }
            .invitation-list{
                width: 95vw;
                height: auto;
                margin-left: auto;
                margin-right: auto;
                margin-top: 100px;
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
                            font-size: 32px;
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
                            font-size: 32px;
                            span{
                                color: #4b66af;
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

