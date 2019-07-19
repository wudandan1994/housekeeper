<template>
    <div id="page-nextlist">
        <header class="header-top row">
            <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">详情</div>
            <div class="right-icon center"></div>
        </header>
        <div class="search-order">
            <div class="search center">
                <input type="text" placeholder="搜索" v-model="nickname" @blur="handleDetailByType"/>
            </div>
            <div class="order">
                <div class="start-center">共{{count}}条</div>
                <!-- <div class="end-center" @click="handleOrderByParams" v-if="orderby == 'date'">注册时间<van-icon name="arrow-down"/></div>
                <div class="end-center" @click="handleOrderByParams" v-if="orderby == 'vipdate'">充值时间<van-icon name="arrow-down"/></div> -->
                <div class="end-center" @click="screen = true">筛选</div>
            </div>
        </div>
        <div class="list-container" id="list" @scroll="handleMonitorScroll">
            <div class="per-list" v-for="(item,index) in list" :key="index">
                <div class="top">
                    <div class="avator start-center"><img :src="item.photo" alt=""></div>
                    <div class="nickname-type">
                        <div class="start-center" style="overflew: hidden">{{(item.nickname).substr(0,7)}}</div>
                        <div class="start-center">来自扫码</div>
                    </div>
                    <div class="type end-start">
                        <span v-if="type == '1'">黄金会员</span>
                        <span v-if="type == '2'">钻石会员</span>
                        <span v-if="type == '3'">已实名未充值</span>
                        <span v-if="type == '4'">未实名未充值</span>
                    </div>
                </div>
                <div class="middle">
                <div>
                    <div class="center">{{item.vcount}}</div>
                    <div class="center">充值人数</div>
                </div>
                <div>
                    <div class="center">{{item.dcount}}</div>
                    <div class="center">直推人数</div>
                </div>
                </div>
                <div class="bottom">
                    <div v-if="type == '1' || type == '2'">充值日期 {{item.vipdate}}</div>
                    <div v-if="type == '3' || type == '4'">注册日期 {{item.date}}</div>
                    <div v-if="item.mobile !== null"><a :href="'tel:' + item.mobile">打电话</a></div>
                    <div v-else>未绑定手机号</div>
                </div>
            </div>
        </div>
        <div class="loading center" v-show="loading"><van-loading type="spinner" color="#1989fa" size="32px"/></div>
        <order :order_show="order_show" @closeOrder="handleCloseOrder" @changeCheck="handlechangeOrder"></order>
         <!-- 筛选弹出层 -->
        <div class="screen" v-if="screen" v-on:click.self="screen = false">
            <div class="left">
                <div class="start-center" @click="handleDetailByTypeCheck('1')">
                    <span class="start-center">
                        <van-icon name="checked" color="#4b66af" size="18px" v-if="type == '1'"/>
                        <van-icon name="circle" color="#cccccc" size="18px" v-else/>
                    </span>
                    <span class="start-center" style="box-sizing:border-box;padding-left:4px">黄金会员</span>
                </div>
                <div class="start-center" @click="handleDetailByTypeCheck('2')">
                    <span class="start-center">
                        <van-icon name="checked" color="#4b66af" size="18px" v-if="type == '2'"/>
                        <van-icon name="circle" color="#cccccc" size="18px" v-else/>
                    </span>
                    <span class="start-center" style="box-sizing:border-box;padding-left:4px">钻石会员</span>
                </div>
                <div class="start-center" @click="handleDetailByTypeCheck('3')">
                    <span class="start-center">
                        <van-icon name="checked" color="#4b66af" size="18px" v-if="type == '3'"/>
                        <van-icon name="circle" color="#cccccc" size="18px" v-else/>
                    </span>
                    <span class="start-center" style="box-sizing:border-box;padding-left:4px">已实名未充值</span>
                </div>
                <div class="start-center" @click="handleDetailByTypeCheck('4')">
                    <span class="start-center">
                        <van-icon name="checked" color="#4b66af" size="18px" v-if="type == '4'"/>
                        <van-icon name="circle" color="#cccccc" size="18px" v-else/>
                    </span>
                    <span class="start-center" style="box-sizing:border-box;padding-left:4px">未实名未充值</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {axiosPost} from '@/lib/http'
import order from "@/components/radar/order"
export default {
    data(){
        return{
            type: '',
            page: 1,
            pageSize: 10,
            total: 0,
            list: [],
            count: 0,
            loading: false,
            startdate: '',
            enddate: '',
            order_show: false,
            orderby: 'date',
            nickname: '',
            screen: false,
        }
    },
    components:{
        order
    },
    methods:{
        handleReturnHome(){
            this.$router.go(-1);
        },
        // 根据参数获取对应列表
        handleDetailByType(obj){
            this.screen = false;
            let params = {
                page:       this.page,
                pageSize:   this.pageSize,
                type:       this.type,
                startdate:  this.startdate,
                enddate:    this.enddate,
                nickname:   this.nickname,
                orderby:    this.orderby,
                order:      'desc'
            };
            let url = '/behavior/getCustomerByLevel';
            axiosPost(url,params).then(res =>{
                if(res.data.success){
                   if(res.data.data.count == '0'){  
                        this.$toast('暂无数据');
                        this.list = res.data.data.data;
                        this.total = Math.ceil(res.data.data.count/this.pageSize);
                        this.count = res.data.data.count;
                   }else{
                        // console.log('我的团队请求成功',res);
                        this.list = res.data.data.data;
                        this.total = Math.ceil(res.data.data.count/this.pageSize);
                        this.count = res.data.data.count;
                   }
                }else{
                    // console.log('我的团队请求失败',res);
                }
            }).catch(res =>{
                // console.log('我的团队请求失败',res);
            })
        },
        // 监听滚动条函数
        handleMonitorScroll(){
            // 滚动条距离顶部的位置
            var toHeight = document.getElementById('list').scrollTop; 
            // 滚动条的高度
            var scrollHeight = document.getElementById('list').scrollHeight;
            // list-container可视区域高度
            var clientHeight = document.getElementById('list').clientHeight;
            if((toHeight + clientHeight) == scrollHeight ){
                // 到底了
                if(this.page == this.total){
                    this.$toast('没有更多数据了');
                }else{
                    this.loading = true;
                    this.page = parseInt(this.page + 1);
                    let params = {
                        page:       this.page,
                        pageSize:   this.pageSize,
                        type:       this.type,
                        startdate:  this.startdate,
                        enddate:    this.enddate,
                        nickname:   this.nickname,
                        orderby:    this.orderby,
                        order:      'desc'
                    };
                    let url = '/behavior/getCustomerByLevel';
                    axiosPost(url,params).then(res =>{
                        if(res.data.success){
                            this.list = (this.list).concat(res.data.data.data);
                            this.total = Math.ceil(res.data.data.count/this.pageSize);
                            this.count = res.data.data.count;
                            setTimeout(() =>{
                                this.loading = false;
                            },500)
                        }else{
                            this.$toast('请求失败');
                            setTimeout(() =>{
                                this.loading = false;
                            },500)
                        }
                    }).catch(res =>{
                        this.$toast('请求失败');
                        setTimeout(() =>{
                            this.loading = false;
                        },500)
                    })
                }
            }
        },
        // 筛选条件
        handleOrderByParams(){
            this.order_show = true;
        },
        handleCloseOrder(){
            this.order_show = false;
        },
        handlechangeOrder(obj){
            this.order_show = false;
            if(this.type == '1' || this.type == '2'){
                this.orderby = 'date';
            }
            else if(this.type == '3' || this.type == '4'){
                this.orderby = 'vipdate'
            }else{
                this.orderby = 'count';
            }
            this. handleDetailByType();
        },
        handleDetailByTypeCheck(obj){
            this.type = obj;
            this.handleDetailByType();
        }
    },
    created(){
        this.type = this.$route.query.type;
        this.startdate = this.$route.query.startdate;
        this.enddate = this.$route.query.enddate;
        this.handleDetailByType();
    }    
}
</script>
<style lang="less" scoped>
#page-nextlist{
    width: 100vw;
    height: calc(100vh - 86px);
    padding-top: 86px;
    background: #F0F6F6;
    .search-order{
        width: 100vw;
        height: 200px;
        box-sizing: border-box;
        padding-top: 30px;
        background: #fff;
        .search{
            width: 100%;
            height: 60%;
            input{
                width: 80%;
                height: 80px;
                border: none;
                border-radius: 50px;
                text-align: center;
                font-size: 30px;
                box-sizing: border-box;
                background: #F0F6F6;
            }
        }
        .order{
            width: 95%;
            height: 40%;
            margin: auto;
            display: flex;
            display: -webkit-flex;
            justify-content: space-between;
            -webkit-justify-content: space-between;
            font-size: 26px;
            >div:nth-child(1){
                width: 50%;
                height: 100%;
            }
            >div:nth-child(2){
                width: 40%;
                height: 100%;
            }
            >div:nth-child(3){
                width: 10%;
                height: 100%;
            }
        }
    }
    .list-container{
        width: 100%;
        height: calc(100vh - 300px);
        overflow-y: scroll;
        -webkit-overflow-scrolling : touch; 
        .per-list{
            width: 90vw;
            height: 320px;
            background: #fff;
            margin: 30px auto;
            box-shadow: 0px 0px 2px 1px #ccc;
            box-sizing: border-box;
            padding-top: 20px;
            .top{
                width: 95%;
                height: 40%;
                margin: auto;
                display: flex;
                display: -webkit-flex;
                justify-content: space-between;
                -webkit-justify-content: space-between;
                .avator{
                    width: 20%;
                    height: 100%;
                    img{
                        width: 100px;
                        height: 100px;
                        border-radius: 50%;
                    }
                }
                .nickname-type{
                    width: 45%;
                    height: 100%;
                    box-sizing: border-box;
                    padding-top: 25px;
                    font-size: 28px;
                    >div{
                        width: 100%;
                        height: 40%;
                    }
                }
                .type{
                    width: 35%;
                    height: 100%;
                    box-sizing: border-box;
                    padding-top: 20px;
                    span{
                        padding: 15px 20px;
                        background: #4367B5;
                        color: #fff;
                        font-size: 28px;
                        border-radius: 10px;
                    }
                }
            }
            .middle{
                width: 95%;
                height: 35%;
                margin: auto;
                display: flex;
                display: -webkit-flex;
                justify-content: space-between;
                -webkit-justify-content: space-between;
                align-items: center;
                border-bottom: solid 1px #DFDFDF;
                >div{
                    >div{
                        width: auto;
                        height: 45px;
                        font-size: 26px;
                    }
                    >div:nth-child(1){
                        color: rgb(67, 103, 181);
                        font-weight: 700;
                    }
                }
            }
            .bottom{
                width: 95%;
                height: 25%;
                margin: auto;
                display: flex;
                display: -webkit-flex;
                justify-content: space-between;
                -webkit-justify-content: space-between;
                align-items: center;
                font-size: 26px;
            }
        }
    }
    .loading{
        position: fixed;
        width: 100vw;
        height: 100vh;
        z-index: 2;
        top: 0;
        left: 0;
    }
    .screen{
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,0.5);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        padding-top: 86px;
        .left{
            width: 60%;
            height: 100%;
            background: #fff;
            box-sizing: border-box;
            padding-top: 86px;
            padding-left: 50px;
            color: #000;
            font-size: 28px;
            >div{
                height: 80px;
            }
        }
    }
}
</style>
