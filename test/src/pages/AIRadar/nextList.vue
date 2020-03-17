<template>
    <div id="page-nextlist">
        <header class="header-top row">
            <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">详情</div>
            <div class="right-icon center"></div>
        </header>
        <div class="search-order">
            <div class="search center">
                <input type="text" placeholder="搜索" v-model="nickname" @blur="handleGetListByType"/>
            </div>
            <div class="order">
                <div class="start-center">共{{count}}条</div>
                <div class="end-center" @click="handleOrderByParams()" v-if="orderby == 'date'">最后访问时间<van-icon name="arrow-down"/></div>
                <div class="end-center" @click="handleOrderByParams()" v-if="orderby == 'count'">访问次数<van-icon name="arrow-down"/></div>
                <div class="end-center" @click="screen = true">筛选</div>
            </div>
        </div>
        <div class="list-container" id="list" @scroll="handleMonitorScroll">
            <div class="per-list" v-for="(item,index) in list" :key="index">
                <div class="top">
                    <div class="avator start-center"><img :src="item.photo" alt=""></div>
                    <div class="nickname-type">
                        <div class="start-center">{{( item.nickname).substr(0,7)}}</div>
                        <div class="start-center">来自扫码</div>
                    </div>
                    <div class="type end-start">
                        <span v-if="type == '1'">信用卡办理</span>
                        <span v-if="type == '2'">在线收款</span>
                        <span v-if="type == '3'">智能管家</span>
                        <span v-if="type == '4'">我要贷款</span>
                        <span v-if="type == '5'">黄金会员</span>
                        <span v-if="type == '6'">钻石会员</span>
                        <span v-if="type == '7'">合伙人</span>
                        <span v-if="type == '8'">OEM</span>
                        <span v-if="type == '9'">升级</span>
                        <span v-if="type == '10'">拨打上级</span>
                        <span v-if="type == '11'">联系我们</span>
                        <span v-if="type == '12'">400电话</span>
                        <span v-if="type == '13'">复制微信</span>
                        
                    </div>
                </div>
                <div class="middle">
                    <div>访问次数&nbsp;({{item.count}})</div>
                    <div>
                        <div class="center" v-if="item.level == '0'">免费粉丝</div>
                        <div class="center" v-if="item.level == '1'">黄金会员</div>
                        <div class="center" v-if="item.level == '2'">钻石会员</div>
                    </div>
                </div>
                <div class="bottom">
                    <div>最近访问 {{item.date}}</div>
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
                <div class="start-center" @click="handleGetListByType('1')">
                    <span class="start-center">
                        <van-icon name="checked" color="#4b66af" size="18px" v-if="type == '1'"/>
                        <van-icon name="circle" color="#cccccc" size="18px" v-else/>
                    </span>
                    <span class="start-center" style="box-sizing:border-box;padding-left:4px">信用卡办理</span>
                </div>
                <div class="start-center" @click="handleGetListByType('2')">
                    <span class="start-center">
                        <van-icon name="checked" color="#4b66af" size="18px" v-if="type == '2'"/>
                        <van-icon name="circle" color="#cccccc" size="18px" v-else/>
                    </span>
                    <span class="start-center" style="box-sizing:border-box;padding-left:4px">在线收款</span>
                </div>
                <div class="start-center" @click="handleGetListByType('3')">
                    <span class="start-center">
                        <van-icon name="checked" color="#4b66af" size="18px" v-if="type == '3'"/>
                        <van-icon name="circle" color="#cccccc" size="18px" v-else/>
                    </span>
                    <span class="start-center" style="box-sizing:border-box;padding-left:4px">我要贷款</span>
                </div>
                <div class="start-center" @click="handleGetListByType('4')">
                    <span class="start-center">
                        <van-icon name="checked" color="#4b66af" size="18px" v-if="type == '4'"/>
                        <van-icon name="circle" color="#cccccc" size="18px" v-else/>
                    </span>
                    <span class="start-center" style="box-sizing:border-box;padding-left:4px">智能管家</span>
                </div>
                <div class="start-center" @click="handleGetListByType('5')">
                    <span class="start-center">
                        <van-icon name="checked" color="#4b66af" size="18px" v-if="type == '5'"/>
                        <van-icon name="circle" color="#cccccc" size="18px" v-else/>
                    </span>
                    <span class="start-center" style="box-sizing:border-box;padding-left:4px">黄金会员</span>
                </div>
                <div class="start-center" @click="handleGetListByType('6')">
                    <span class="start-center">
                        <van-icon name="checked" color="#4b66af" size="18px" v-if="type == '6'"/>
                        <van-icon name="circle" color="#cccccc" size="18px" v-else/>
                    </span>
                    <span class="start-center" style="box-sizing:border-box;padding-left:4px">钻石会员</span>
                </div>
                <div class="start-center" @click="handleGetListByType('7')">
                    <span class="start-center">
                        <van-icon name="checked" color="#4b66af" size="18px" v-if="type == '7'"/>
                        <van-icon name="circle" color="#cccccc" size="18px" v-else/>
                    </span>
                    <span class="start-center" style="box-sizing:border-box;padding-left:4px">合伙人</span>
                </div>
                <div class="start-center" @click="handleGetListByType('8')">
                    <span class="start-center">
                        <van-icon name="checked" color="#4b66af" size="18px" v-if="type == '8'"/>
                        <van-icon name="circle" color="#cccccc" size="18px" v-else/>
                    </span>
                    <span class="start-center" style="box-sizing:border-box;padding-left:4px">OEM</span>
                </div>
                <div class="start-center" @click="handleGetListByType('9')">
                    <span class="start-center">
                        <van-icon name="checked" color="#4b66af" size="18px" v-if="type == '9'"/>
                        <van-icon name="circle" color="#cccccc" size="18px" v-else/>
                    </span>
                    <span class="start-center" style="box-sizing:border-box;padding-left:4px">升级</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {axiosPost} from '@/lib/http'
import order from '@/components/radar/order' 
export default {
    data(){
        return{
            type: '',
            page: 1,
            pageSize: 10,
            startdate: '',
            enddate: '',
            count: 0,
            total: 0,
            list: [],
            loading: false,
            nickname: '',
            orderby: 'date',
            order_show: false,
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
        // 查询下级浏览数以及点击方式
        handleGetListByTypeCheck(){
            console.log('参数',this.type);
            let params = {
                page: this.page,
                pageSize: this.pageSize,
                type: this.type,
                startdate: this.startdate,
                enddate: this.enddate,
                nickname: this.nickname,
                orderby: this.orderby,
                order: 'desc'
            };
            let url = '/behavior/getCustomerByBrowse';
            axiosPost(url,params).then(res =>{
                if(res.data.success){
                    // console.log('请求成功',res);
                    if(res.data.data.count == '0'){
                        this.$toast('暂无数据');
                        this.list = res.data.data.data;
                        this.count = res.data.data.count;
                        this.total = Math.ceil(res.data.data.count/this.pageSize);
                    }else{
                        this.list = res.data.data.data;
                        this.count = res.data.data.count;
                        this.total = Math.ceil(res.data.data.count/this.pageSize);
                    }
                }else{
                    // console.log('请求失败',res);
                }
            }).catch(res =>{
                // console.log('请求失败',res);
            })
        },
        handleGetListByType(obj){
            // this.type = obj;
            this.handleGetListByTypeCheck();
        },
        // 下拉分页
        handleMonitorScroll(){
            // 滚动条距离顶部位置
            var scrollTop = document.getElementById('list').scrollTop;
            // 滚动条高度
            var scrollHeight = document.getElementById('list').scrollHeight;
            // 窗口可视区域高度
            var ClientHeight = document.getElementById('list').clientHeight;
            if(scrollTop + ClientHeight == scrollHeight){
                // 触底
                // console.log('触底')
                if(this.page == this.total){
                    this.$toast('没有更多数据了');
                }else{
                    this.loading = true;
                    this.page = parseInt(this.page) + 1;
                    let params = {
                        page: this.page,
                        pageSize: this.pageSize,
                        type: this.type,
                        startdate: this.startdate,
                        enddate: this.enddate,
                        nickname: this.nickname,
                        orderby: this.orderby,
                        order: 'desc'
                    };
                    let url = '/behavior/getCustomerByBrowse';
                    axiosPost(url,params).then(res =>{
                        if(res.data.success){
                            // console.log('请求成功',res);
                            
                            if(res.data.data.count == '0'){
                                this.$toast('暂无数据');
                            }else{
                                this.list = (this.list).concat(res.data.data.data);
                                setTimeout(() =>{
                                    this.loading = false;
                                },500)
                            }
                        }else{
                            // console.log('请求失败',res);
                            setTimeout(() =>{
                                this.loading = false;
                            },500)
                        }
                    }).catch(res =>{
                        // console.log('请求失败',res);
                        setTimeout(() =>{
                            this.loading = false;
                        },500)
                    })
                }
            }
        },
        // 排序函数
        handleOrderByParams(item){
            this.order_show = true;
            // console.log('访问次数排序',this.list);
        },
        handleCloseOrder(){
            this.order_show = false;
        },
        handlechangeOrder(obj){
            setTimeout(() =>{
                this.order_show = false;
            },500);
            this.orderby = obj;
            this. handleGetListByTypeCheck();
        }
    },
    created(){
        this.type = this.$route.query.type;
        this.startdate = this.$route.query.startdate;
        this.enddate = this.$route.query.enddate;
        this.handleGetListByTypeCheck();
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
                font-size: 28px;
                box-sizing: border-box;
                background: #F0F6F6;
            }
            input::-webkit-input-placeholder{
                font-size: 28px;
                padding-top: 5px;
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
            font-size: 28px;
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
        width: 100vw;
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
                    width: auto;
                    height: 100%;
                    img{
                        width: 100px;
                        height: 100px;
                        border-radius: 50%;
                    }
                }
                .nickname-type{
                    width: 50%;
                    height: 100%;
                    box-sizing: border-box;
                    padding-top: 25px;
                    font-size: 28px;
                    >div{
                        width: 100%;
                        height: 40%;
                    }
                    >div:nth-child(2){
                        color: #666;
                        font-size: 26px;
                    }
                }
                .type{
                    width: 30%;
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
                >div:nth-child(1){
                    font-size: 26px;
                }
                >div:nth-child(2){
                    div{
                        width: 80px;
                        height: 80px;
                        border: solid 1px #ccc;
                        font-size: 28px;
                        text-align: center;
                        color: #4367B5;
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
                >div{
                    font-size: 26px;
                }
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
            background: #ffffff;
            box-sizing: border-box;
            padding-top: 86px;
            padding-left: 50px;
            color: #000000;
            font-size: 28px;
            >div{
                height: 80px;
            }
        }
    }
}
</style>
