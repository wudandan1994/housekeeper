<template>
    <div id="page-component-loan">
        <header class="header-top row">
            <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">信用贷款</div>
            <div class="right-icon center"><van-icon color="white" size="20px" name="weapp-nav"/></div>
        </header>
        <div class="screen row">
            <div class="line"></div>
            <div class="per-screen center" @click="intelligentSort">智能排序&nbsp;&nbsp;&nbsp;<van-icon name="arrow-down" /></div>
            <div class="per-screen center" @click="advancedScreening">高级筛选&nbsp;&nbsp;&nbsp;<van-icon name="arrow-down" /></div>
             <!-- 智能排序 -->
             <div class="pop-clause" v-if="sort == true"> 
               <div class="con-title center" @click="handleNowCheck(item.key)" v-for="(item,index) in condition" :key="index">{{item.title}}<span>{{item.con}}</span><van-icon v-if="item.key == key" :id="item.key" name="success" size="1.2em" color="#DA6F43"/></div>
            </div>
            <!-- 高级筛选 -->
            <van-popup v-model="show" position="right" :overlay="false">
                <div class="advanced">EAgargaergaevzdfgr4gerg</div>
            </van-popup>
        </div>
        <div class="news row">
            <div class="news-title column">
                <div class="center-end">钱夹宝</div>
                <div class="center-start">资讯</div>
            </div>
            <div class="news-icon center"><van-icon name="volume" size="1.6em" color="#9A9A9A" /></div>
            <div class="news-detail start-center"><marquee behavior="" direction="">{{title}}</marquee></div>
        </div>
        <div class="loan-goods">
            <router-link tag="div" to="/loan/detail">
                <div class="load-container column">
                    <div class="top-con row">
                        <div class="mini-img center">
                            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553589849490&di=7ad436eeeaa03f0822e500d1e1e8453d&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fd1160924ab18972b0aa9c1d2e8cd7b899e510a13.jpg" alt="">
                        </div>
                        <div class="top-detail column">
                            <div class="loan-detail-title start-center">任性付</div>
                            <div class="loan-detail-price start-center">200,000</div>
                            <div class="loan-detail-desc start-center">最高额度（元）</div>
                        </div>
                    </div>
                    <div class="bottom-con row">
                        <div class="bonus start-center">奖金:<span>35</span></div>
                        <div class="bonus end-center">通过率:<span>51%</span></div>
                    </div>
                </div>
            </router-link>

            <router-link to="/loan/detail" tag="div">
                <div class="load-container column">
                    <div class="top-con row">
                        <div class="mini-img center">
                            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553589849490&di=7ad436eeeaa03f0822e500d1e1e8453d&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fd1160924ab18972b0aa9c1d2e8cd7b899e510a13.jpg" alt="">
                        </div>
                        <div class="top-detail column">
                            <div class="loan-detail-title start-center">你我贷</div>
                            <div class="loan-detail-price start-center">50,000</div>
                            <div class="loan-detail-desc start-center">最高额度（元）</div>
                        </div>
                    </div>
                    <div class="bottom-con row">
                        <div class="bonus start-center">奖金:<span>1.5%</span></div>
                        <div class="bonus end-center">通过率:<span>51%</span></div>
                    </div>
                </div>
            </router-link>

            <router-link tag="div" to="/loan/detail">
                <div class="load-container column">
                    <div class="top-con row">
                        <div class="mini-img center">
                            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553589849490&di=7ad436eeeaa03f0822e500d1e1e8453d&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fd1160924ab18972b0aa9c1d2e8cd7b899e510a13.jpg" alt="">
                        </div>
                        <div class="top-detail column">
                            <div class="loan-detail-title start-center">任性付</div>
                            <div class="loan-detail-price start-center">200,000</div>
                            <div class="loan-detail-desc start-center">最高额度（元）</div>
                        </div>
                    </div>
                    <div class="bottom-con row">
                        <div class="bonus start-center">奖金:<span>1.5%</span></div>
                        <div class="bonus end-center">通过率:<span>51%</span></div>
                    </div>
                </div>
            </router-link>        
        </div>
       
    </div>    
</template>
<script>
export default {
    data(){
        return{
            title:'最近关于我公司的不实报道已经严重影响我公司的声誉',
            show: false,
            condition:[
                {title: '默认', con: '(综合排序)',key: '0'},
                {title: '按额度',con: '(从高到低)',key: '1'},
                {title: '按放款速度',con: '(从快到慢)',key: '2'},
                {title: '按上新时间',con: '(从新到旧)',key: '3'},
                {title: '申请成功率',con: '(从高到底)',key: '4'},
            ],
            key: 0,
            sort: false
        }
    },
    methods:{
        // 返回首页
        handleReturnHome(){
            this.$router.push({
                path:'/home'
            })
        },
        // 更多
        handleMore(){
            this.$toast('尽请期待');
        },
        // 智能排序
        intelligentSort() {
            let sort = this.sort;
            sort == true ? this.sort = false : this.sort = true;
        },
        // 智能排序选择
        handleNowCheck(val){
            console.log('当前选择',val);
            this.key = val;
            this.sort = false;
        },
        // 高级筛选
        advancedScreening(){
            let show = this.show;
            show == true ? this.show = false : this.show = true;
        }
    }
}
</script>
<style lang="less" scoped>
    #page-component-loan{
            width: 100vw;
            height: 100vh;
            background: #EBF1F1;
            padding-top: 86px;
        .screen{
            width: 100vw;
            height: 80px;
            background: white;
            border-bottom: solid 1px #ccc;
            position: relative;
            >.per-screen{
                width: 50%;
                height: 100%;
                font-size: 28px;
            }
            >.line{
                height: 99%;
                width: 1px;
                position: absolute;
                top: 0;
                left: 50%;
                border: solid 1px #ccc;
            }
            .pop-clause{
                width: 100%;
                height: auto;
                background: white;
                position: absolute;
                top: 60px;
                left: 0;
                z-index: 2;
                animation: myfirst 0.5s ease-in-out;
                -o-animation: myfirst 0.5s ease-in-out;
                -moz-animation: myfirst 0.5s ease-in-out;
                -webkit-animation: myfirst 0.5s ease-in-out;
                .con-title{
                    width: 100%;
                    height: 80px;
                    border-bottom: solid 1px #ccc;
                    font-size: 25px;
                    >span{
                        font-size: 15px;
                        color: #ccc;
                        padding-right: 50px;
                    }
                }
            }
            @keyframes myfirst
            {
                from {top: 100px;}
                to { top: 60px;}
            }

            @-moz-keyframes myfirst /* Firefox */
            {
                from {top: 100px;}
                to { top: 60px;}
            }

            @-webkit-keyframes myfirst /* Safari 和 Chrome */
            {
                from {top: 100px;}
                to { top: 60px;}
            }

            @-o-keyframes myfirst /* Opera */
            {
                from {top: 100px;}
                to { top: 60px;}
            }
            .advanced{
                width: 100vw;
                height: 70vh;
                margin-top: 30vh;
                background: red;
            }
            
        }
        .news{
            width: 100vw;
            height: 90px;
            border-bottom: solid 1px #ccc;
            background: white;
            .news-title{
                width: 18vw;
                height: 100%;
                color: rgb(133, 107, 48);
                font-size: 30px;
                font-weight: 700;
                >div{
                    width: 100%;
                    height: 50%;
                }
            }
            .news-icon{
                width: 12vw;
                height: 70px;
                border-left: solid 1px #DBD9D9;
                margin-top: 10px;
            }
            .news-detail{
                width: 70vw;
                height: 100%;
                font-size: 30px;
            }
        }
        .loan-goods{
            width: 100vw;
            height: auto;
            .load-container{
             background: white;
             width: 47vw;
             height: 170px;
             margin-left: 2vw;  
             margin-top: 15px; 
             float: left;
             .top-con{
                 width: 100%;
                 height: 70%;
                 .mini-img{
                     width: 40%;
                     height: 100%;
                     >img{
                         width: 90px;
                         height: 90px;
                         border-radius: 10px;
                     }
                 }
                 .loan-detail-title{
                     width: 100%;
                     height: 40%;
                     font-size: 32px;
                     font-weight: 700;
                 }
                 .loan-detail-price{
                     width: 100%;
                     height: 30%;
                     font-size: 30px;
                     font-weight: 700;
                     color: red;
                 }
                 .loan-detail-desc{
                     width: 100%;
                     height: 30%;
                     font-size: 26px;
                     color: #999;
                 }
             }
             .bottom-con{
                 width: 100%;
                 height: 30%;
                 .bonus{
                     width: auto;
                     height: 100%;
                     padding-left: 4%;
                     padding-right: 4%;
                     font-size: 24px;
                     font-weight: 400;
                     overflow: hidden;
                     >span{
                         color: red;
                     }
                 }
             }
            }
        }
        .picker{
            clear: both;
            width: 100vw;
            height: auto;
        }
    }
</style>
