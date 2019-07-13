<template>
    <div id="page-nextlist">
        <header class="header-top row">
            <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">详情</div>
            <div class="right-icon center"></div>
        </header>
        <div class="search-order">
            <div class="search center-end">
                <input type="text" placeholder="搜索"/>
            </div>
            <div class="order">
                <div class="start-center">共2条</div>
                <div class="end-center">最后访问时间<van-icon name="arrow-down"/></div>
                <div class="end-center">筛选</div>
            </div>
        </div>
        <div class="per-list">
            <div class="top">
                <div class="avator center"><img src="http://pay.91dianji.com.cn/avator.jpg" alt=""></div>
                <div class="nickname-type">
                    <div class="start-center">Giovanni</div>
                    <div class="start-center">来自扫码</div>
                </div>
                <div class="type center-start"><span>信用卡办理</span></div>
            </div>
            <div class="middle">
               <div>
                   <div class="center">45265</div>
                   <div class="center">充值人数</div>
               </div>
               <div>
                   <div class="center">45265</div>
                   <div class="center">直推人数</div>
               </div>
            </div>
            <div class="bottom">
                <div>最近访问 07-11 15:15</div>
                <div>打电话</div>
            </div>
        </div>
    </div>
</template>
<script>
import {axiosPost} from '@/lib/http'
export default {
    data(){
        return{
            type: '',
            page: 1,
            pageSize: 10,
        }
    },
    methods:{
        handleReturnHome(){
            this.$router.go(-1);
        },
        // 根据参数获取对应列表
        handleDetailByType(){
            let params = {
                page: this.page,
                pageSize: this.pageSize,
                type: this.type
            };
            let url = '/behavior/getCustomerByLevel';
            axiosPost(url,params).then(res =>{
                if(res.data.success){
                    console.log('我的团队请求成功',res);
                }else{
                    console.log('我的团队请求失败',res);
                }
            }).catch(res =>{
                console.log('我的团队请求失败',res);
            })
        }
    },
    created(){
        this.type = this.$route.query.type;
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
        height: auto;
        box-sizing: border-box;
        padding-top: 30px;
        background: #fff;
        .search{
            input{
                width: 80%;
                height: 80px;
                border: none;
                border-radius: 50px;
                text-align: center;
                line-height: 80px;
                font-size: 30px;
                box-sizing: border-box;
                background: #F0F6F6;
            }
        }
        .order{
            width: 95%;
            height: 100px;
            margin: auto;
            display: flex;
            display: -webkit-flex;
            justify-content: space-between;
            -webkit-justify-content: space-between;
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
                    width: 13vw;
                    height: 13vw;
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
        }
    }
}
</style>
