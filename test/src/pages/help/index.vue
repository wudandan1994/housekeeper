<template>
    <div id="page-income">
        <header class="header-top row">
            <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="#333333" size="20px" name="arrow-left"/></div>
            <div class="top-title center">帮助中心</div>
            <div class="right-icon center"></div>
        </header>
        <div class="big_title start-center">常见问题</div>
        <div class="help_container">
            <div class="per_help van-hairline--bottom row">
                <router-link tag="div" to="/personalCenter/manual" class="help_detail van-hairline--right row">
                    <div class="icon end-center"><van-icon name="flag-o" color="#ffffff" size="32px"/></div>
                    <div class="detail">
                        <div class="title center">平台手册</div>
                        <div class="open center">点击查看</div>
                    </div>
                </router-link>
                <div class="help_detail row">
                    <div class="icon end-center"><van-icon name="flag-o" color="#ffffff" size="32px"/></div>
                    <div class="detail">
                        <div class="title center">流程说明</div>
                        <div class="open center">点击查看</div>
                    </div>
                </div>
            </div>
            <div class="per_help van-hairline--bottom row">
                <div class="help_detail van-hairline--right row">
                    <div class="icon end-center"><van-icon name="flag-o" color="#ffffff" size="32px"/></div>
                    <div class="detail">
                        <div class="title center">购买问题</div>
                        <div class="open center">点击查看</div>
                    </div>
                </div>
                <div class="help_detail row">
                    <div class="icon end-center"><van-icon name="flag-o" color="#ffffff" size="32px"/></div>
                    <div class="detail">
                        <div class="title center">推广问题</div>
                        <div class="open center">点击查看</div>
                    </div>
                </div>
            </div>
            <div class="per_help van-hairline--bottom row">
                <div class="help_detail van-hairline--right row">
                    <div class="icon end-center"><van-icon name="flag-o" color="#ffffff" size="32px"/></div>
                    <div class="detail">
                        <div class="title center">佣金问题</div>
                        <div class="open center">点击查看</div>
                    </div>
                </div>
                <div class="help_detail row">
                    <div class="icon end-center"><van-icon name="flag-o" color="#ffffff" size="32px"/></div>
                    <div class="detail">
                        <div class="title center">收款问题</div>
                        <div class="open center">点击查看</div>
                    </div>
                </div>
            </div>
            <div class="per_help van-hairline--bottom row">
                <div class="help_detail van-hairline--right row">
                    <div class="icon end-center"><van-icon name="flag-o" color="#ffffff" size="32px"/></div>
                    <div class="detail">
                        <div class="title center">提出问题</div>
                        <div class="open center">点击查看</div>
                    </div>
                </div>
                <div class="help_detail van-hairline--right row">
                    <div class="icon end-center"><van-icon name="flag-o" color="#ffffff" size="32px"/></div>
                    <div class="detail">
                        <div class="title center">反馈BUG</div>
                        <div class="open center">点击查看</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hot">
            <div class="title start-center">热门分类</div>
            <div class="per_question row">
                <div class="center">
                    <span class="dot"></span>
                </div>
                <div class="problem start-center van-ellipsis van-hairline--bottom">升级之后，钱夹宝APP数据同步</div>
                <div class="more start-center van-hairline--bottom"><van-icon name="arrow"/></div>
            </div>
            <router-link tag="div" class="per_question row" to="/personalCenter/questionandanswers">
                <div class="center">
                    <span class="dot"></span>
                </div>
                <div class="problem start-center van-hairline--bottom">钱夹宝APP百问百答</div>
                <div class="more start-center van-hairline--bottom"><van-icon name="arrow"/></div>
            </router-link>
            <div class="per_question row">
                <div class="center">
                    <span class="dot"></span>
                </div>
                <div class="problem start-center van-hairline--bottom">钱夹宝APP官方声明</div>
                <div class="more start-center start-center van-hairline--bottom"><van-icon name="arrow"/></div>
            </div>
        </div>
        <div class="contact">
            <div class="title">联系我们</div>
            <div class="contact_us row">
                <div class="contact_title">电话:</div>
                <div class="contact_detail" @click="contact"><a href="tel:400-1059-769">400-1059-769</a></div>
            </div>
            <div class="contact_us row">
                <div class="contact_title">邮箱:</div>
                <div class="contact_detail"> chuanbangdai@126.com</div>
            </div>
            <div class="contact_us row">
                <div class="contact_title">地址:</div>
                <div class="contact_detail"> 上海市宝山区泰和路2038号A座303室</div>
            </div>
        </div>
        <loading :componentload='componentload'></loading>
    </div>
</template>
<script>
import loading from'@/components/loading'
import { axiosPost } from '../../lib/http';
export default {
    components: {
        loading
    },
    data(){
        return{
            componentload: true
        }
    },
    methods:{
        handleReturnHome(){
            this.$router.go(-1);
        },
        contact(){
            let data={
                type:'11'
            }
             axiosPost("/behavior/insertBehavior",data)
            .then(res=>{
                
            })
        }
    },
    created(){
        setTimeout(() =>{
            this.componentload = false;
        },700)
    }
}
</script>
<style lang="less" scoped>
    #page-income{
        width: 100vw;
        height: auto;
        padding-top: 90px;
        .header-top{
            background: #ffffff;
            .top-title{
                color: #333333 !important;
            }
        }
        .big_title{
            width: calc(100% - 20px);
            height: 80px;
            padding-left: 20px;
            color: #ffffff;
            font-size: 30px;
            background: linear-gradient(90deg,#4B66AF,#6883C1);
        }
        .help_container{
            .per_help{
                background: linear-gradient(90deg,#4B66AF,#6883C1);
                width: 100%;
                height: 120px;
                .help_detail{
                    width: 50%;
                    height: 100%;
                    .icon{
                        width: 40%;
                        height: 100%;
                    }
                    .detail{
                        width: 60%;
                        height: 100%;
                        color: #ffffff;
                        .title{
                            width: 100%;
                            height: 55%;
                            font-size: 30px;
                        }
                        .open{
                            width: 100%;
                            height: 45%;
                            font-size: 26px;
                        }
                    }
                }
            }
        }
        .hot{
            width: 90%;
            height: auto;
            margin: 20px auto auto auto;
            .title{
                width: 100%;
                height: 80px;
                font-size: 28px;
                color: #333333;
                font-weight: 600;
            }
            .per_question{
                width: 100%;
                height: 80px;
                div:nth-child(1){
                    width: 5%;
                    height: 100%;
                    .dot{
                        display: inline-block;
                        width: 20px;
                        height: 20px;
                        background: #4B66AF;
                    }
                }
                .problem{
                    width: 88%;
                    height: 100%;
                    margin-left: 2%;
                }
                .more{
                    width: 5%;
                    height: 100%;
                }
            }
        }
        .contact{
            width: 90%;
            height: auto;
            margin: 30px auto auto auto;
            .title{
                width: 100%;
                height: 80px;
                font-size: 28px;
                color: #333333;
                font-weight: 600;
            }
            .contact_us{
                width: 100%;
                height: 50px;
                font-size: 26px;
                .contact_detail{
                    margin-left: 10px;
                    color: #333333;
                }
            }
        }
    }
</style>
