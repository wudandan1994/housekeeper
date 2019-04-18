<template>
    <div id="card-center">
        <header>
            <p @click="goBack">
                <span>
                    <van-icon name="arrow-left" />
                </span>
                <span>首页</span>
            </p>
            <p>信用卡办理</p>
            <p>
                <span>
                    <van-icon name="share" />
                </span> &nbsp;&nbsp;
                <span>
                    <van-icon name="ellipsis" />
                </span>
            </p>
        </header>
        <div class="container">
            <div class="housekeeper">
                <!-- <router-link to='/home/cardCenter/consultation' tag="div" class="consultation" >
                     <img src="../../../static/images/flower.jpg.jpg" alt=""> 
                </router-link> -->
                <div class="consultation">钱夹<br>
                    咨询</div>
                <div class="ring">
                    <van-notice-bar
                        text="恭喜黄金会员陈**于09：40:25完成智能还款计划  订单尾号 8888，推荐人获得7.5元总收益。"
                        left-icon="volume-o"
                    />
                </div>
            </div>
            <div class="center">
                <ul>
                    <li v-for="(item, index) in cardList" :key="index" >
                        <div class="card">
                            <img :src="item.merCardImg" > 
                            <p>
                                <span>{{item.merCardName}}</span>
                            </p>
                            <p>{{item.labelTitle}}</p>
                        </div>
                        <div class="ads">
                            <div class="bottom">
                                <p><span>通过率：{{item.througRate}}</span> </p>
                                <p> 
                                    <span><van-icon name="gold-coin" />
                                    </span><span>高额奖金</span>
                                </p>
                                
                            </div>
                            <p @click="getCard(item)"><span class="handle">免费办卡</span></p>
                        </div>
                    </li>
                    
                </ul>
            </div>
             <div class="bottom">
                 <ul>
                     <router-link tag="li" to="/home/cardCenter/businessCooperation">
                         <h3>
                             <p>信用卡商务合作</p>
                             <p>可上传当地银行业务</p>
                         </h3>
                         <span><van-icon name="column" /></span>
                     </router-link>
                      <router-link tag="li"  to="/home/cardCenter/noviceGuide">
                         <h3>
                             <p>新手指南</p>
                             <p>快速掌握办卡秘籍</p>
                         </h3>
                         <span><van-icon name="column" /></span>
                      </router-link>
                      <router-link to="/home/cardCenter/liftingAmount" tag="li">
                         <h3>
                             <p>信用卡提额</p>
                             <p>在线免费提额</p>
                         </h3>
                         <span><van-icon name="column" /></span>
                      </router-link>
                      <router-link to="/home/cardCenter/progressQuery" tag="li">
                         <h3>
                             <p>进度查询</p>
                             <p>快速查询办卡详情</p>
                         </h3>
                         <span><van-icon name="column" /></span>
                      </router-link>
                 </ul>
             </div>
        </div>
    </div>
</template>

<script>
import {axiosPost} from '@/lib/http'
export default {
    data(){
        return {
            cardList:[]
        }
    },
    methods:{
        goBack(){
            this.$router.push('/home')
        },
        getCardList(){
            let that= this
            axiosPost("http://pay.91dianji.com.cn/api/creditCard/getBankList")
            .then(function(res){
                if(!res.data.success){
                    that.$toast({
                        message:res.data.message
                    })
                    return
                }
                let data=res.data.data.data
                that.cardList.push(...data.notSingleCardList)
                that.cardList.push(...data.singleCardList)
              
            })
            .catch(function(err){
                console.log(err,"error")
            })
        },
        getCard(item){
            this.$router.push({
                path:"/home/cardCenter/applyCard",
                query:{
                    info:item
                }
            })

            
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
            background-color: #4B66AF;
            display: flex;
            justify-content: space-between;
            color:#fff;
            padding-top:10px;
            position:fixed;
            z-index:999;
            font-size:28px;
        }
        >.container {
            background-color: #ECF0F3;
            padding-top:96px;
            padding-bottom: 50px;
            >.housekeeper {
                display: flex;
                height: 100px;
                justify-content: space-between;
                background-color: #fff;
                border-bottom: 3px solid #ccc;
                >.consultation {
                    width:100px;
                    font-size: 36px;
                   text-align: center;
                   padding-top:20px;
                   .van-notice-bar{
                       color:red;
                   }
                    >img {
                        width:100%;
                    }
                }
                >.ring {
                    flex:1;
                    margin-top:25px;
                    margin-left:20px;
                    margin-bottom: 25px;
                    padding-left:10px;
                    border-left: 2px solid #ccc;
                }
            }
            >.center {
                margin-top:10px;
                >ul{
                    display: flex;
                    flex-wrap: wrap;
                  justify-content: space-between;
                    >li {
                        width:49%;
                        padding-bottom:25px;
                        margin-bottom: 5px;
                        background-color: #fff;
                        >.card {
                            text-align: center;
                            padding-top:15px;
                            width:100%;
                            border-bottom: 1px dashed #DADADA;
                            >img {
                                width:80%;
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
                                background-color: #957635;
                                padding:10px 30px;
                                border-radius: 10px;
                                color:#eee;
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
