<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-03 18:17:00
 * @LastEditTime: 2019-09-03 18:17:00
 * @LastEditors: your name
 -->
<template>
    <div id="card-center">
        <header>
            <p @click="goBack">
                <span>
                    <van-icon name="arrow-left" size="16px" />
                </span>
            </p>
            <p>信用卡办理</p>
            <p>
                <span></span>
            </p>
        </header>
        <div class="container">
            <!-- <div class="housekeeper">
                <div class="consultation">钱夹<br>
                    资讯</div>
                <div class="ring">
                    <van-notice-bar
                        text="恭喜初级合伙人陈**于09：40:25完成智能还款计划  订单尾号 8888，推荐人获得7.5元总收益。"
                    />
                </div>
            </div> -->
            <div class="center">
                <ul>
                    <li v-show="item.state==='1'"  v-for="(item, index) in cardList" :key="index" >
                        <div class="card">
                            <van-icon :name="url+item.icon" size="60px" />
                            <p>
                                <span>{{item.title}}</span>
                            </p>
                            <p>{{item.labelTitle}}</p>
                        </div>
                        <div class="ads">
                            <p @click="changeLink(item.link)"><span class="handle">立即办卡</span></p>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </div>
        <loading :componentload="componentload"></loading>
    </div>
</template>

<script>
import loading from '@/components/loading'
import {axiosPost} from '@/lib/http'
export default {
    components:{
      loading
    },
    data(){
        return {
            componentload: false,
            cardList:[],
            url:"http://pay.91dianji.com.cn/"
        }
    },
    methods:{
        goBack(){
            this.$router.go(-1)
        },
       
        getCardList(){
             axiosPost("/content/getCreditCardUrl ")
            .then(res=>{
                if(res.data.success){
                    this.cardList=res.data.data
                    this.cardList=JSON.parse(this.cardList)
                } else {
                    this.$toast(res.data.message)
                }
            })
        },
         changeLink(url){
                 location.href=url
        },
      
    },
    created() {
        this.getCardList()
    },
}
</script>

<style lang="less" >
    #card-center {
        >header {
            height: 86px;
            line-height: 86px;
            width:100%;
            background-color: #4965AE;
            display: flex;
            justify-content: space-between;
            color:#fff;
            padding-top:10px;
            position:fixed;
            z-index:999;
            font-size:28px;
            >p {
                &:nth-of-type(1){
                    margin-left:10px;
                }
                &:nth-of-type(3){
                    margin-right: 10px;
                }
            }
        }
        >.container {
            width:100%;
            overflow-x: hidden;
            padding-top:96px;
            padding-bottom: 50px;
            background-color: #ECF0F3;
            height: calc(100vh - 86px);
            overflow-y: scroll;
            >.center {
                margin-top:10px;
                 width:100%;
                >ul{
                    width:100%;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    padding:5px 15px;
                    >li {
                        width:49%;
                        padding-bottom:25px;
                        margin-bottom: 10px;
                        background-color: #fff;
                        >.card {
                            text-align: center;
                            padding-top:10px;
                            width:100%;
                            border-bottom: 1px dashed #DADADA;
                            >img {
                                width:100%;
                            }
                            >p {
                                &:nth-of-type(1) {
                                    padding-top:10px;
                                    margin-bottom:20px;
                                }
                            }>p {
                                &:nth-of-type(2){
                                    padding-bottom: 10px;
                                    font-weight: bold;
                                }
                            }
                        }
                        >.ads {
                            >.bottom {
                                display: flex;
                                justify-content: space-around;
                                margin-top:15px;
                                margin-bottom: 10px;
                                padding-bottom: 10px;
                            }
                            >P {
                                text-align: center;
                                >.handle {
                                background-color: #4965AE;
                                padding:15px 35px;
                                border-radius: 10px;
                                color:#eee;
                                margin-bottom: 5px;
                            }
                          }
                        }
                    }
                }
            }
            >.bottom {
                margin-top:40px;
                margin-bottom: 20px;
                >ul{
                    background-color: #fff;
                    box-sizing: border-box;
                    display: flex;
                    flex-wrap: wrap;
                    >li{
                        width:49.5%;
                        padding-top:20px;
                        display: flex;
                        padding-bottom: 20px;
                        justify-content: space-around;
                        border-bottom: 1px solid #ccc;
                        &:nth-of-type(1),
                        &:nth-of-type(3) {
                            border-right:5px solid #ddd;
                        }
                        >h3 {
                            >p{
                                &:nth-of-type(1){
                                    font-size:34px;
                                    font-weight: bold;
                                }
                                &:nth-of-type(2) {
                                    color:#BEBEBE;
                                    margin-top:20px;
                                }
                            }
                        }
                        >span {
                                font-size:80px;
                        }
                    }
                }
            }
        }
    }
</style>
