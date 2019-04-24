<template>
    <div id="page-incomedetail">
        <header class="header-top row">
            <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">收益明细</div>
            <div class="right-icon center"></div>
        </header>
        <div class="tabs">
             <div class="income-tab">
                <div class="per-list" v-for="(item,index) in list" :key="index">
                    <div class="avator center"><img :src="item.photo" alt=""></div>
                    <div class="nickname">{{item.nickname}}</div>
                    <div class="time">{{item.date}}</div>
                    <div class="amount center">
                        <span v-if="item.type == 2">分销收益</span>
                        <span v-if="item.type == 3">代还收益</span>
                        <span v-if="item.type == 4">商户收款收益</span>
                        <span>+{{item.amount}}</span>
                    </div>
                </div>
            </div>  
        </div>
        <loading :componentload='componentload'></loading>
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
                if(res.data.success){
                    if(res.data.data.data.length == '0'){
                        this.$toast('流水为空');
                    }else{
                        this.list = res.data.data.data;
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

