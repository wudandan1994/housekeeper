<template>
    <div id="switch_page">
        <header class="header-top row">
            <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="black" size="20px" name="arrow-left"/></div>
            <div class="top-title center">AI雷达</div>
            <div class="right-icon center"></div>
        </header>
        <div class="top">
            <div class="avator"><img src="http://pay.91dianji.com.cn/touxiang.jpg" alt=""></div>
            <div class="nickname">霸王别急</div>
            <div class="slogan">我的获客工具——AI雷达</div>
        </div>
        <body class="body">
            <div class="switch"><switchTab :options="options" @changeChecked="handleChangeChecked"></switchTab></div>
            <div class="contain">
                <div class="title start-end">下级关键数据</div>
                <div class="menus">
                    <div class="per_menus row" v-for="(item,index) in details" :key="index" @click="hanleNextDetail(item)">
                        <div class="icon center"><van-icon size="40px" name="chart-trending-o"/></div>
                        <div class="title_number">
                            <div class="desc center">{{item.title}}</div>
                            <div class="number center">{{item.number}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    </div>
</template>
<script>
import switchTab from '@/components/radar/switch'
export default {
    data(){
        return{
            options:[
                {
                    id: '0',
                    title: '今天',
                    checked: true
                },
                {
                    id: '1',
                    title: '全部',
                    checked: false
                },
            ],
            details:[
                {
                    id: '0',
                    title: '下级浏览数',
                    number: '234234'
                },
                {
                    id: '1',
                    title: '新增客户',
                    number: '76867'
                },
                {
                    id: '2',
                    title: '点击联系方式',
                    number: '46467'
                },
                {
                    id: '4',
                    title: '我的团队',
                    number: '245321'
                }
            ],
        }
    },
    components: {
        switchTab
    },
    methods:{
        handleReturnHome(){
            this.$router.go(-1);
        },
        reverse(flag){  
            return ~flag + 2;  
        },
        // 更换选择
        handleChangeChecked(obj){
            var other = this.reverse(obj.id);
            this.options[obj.id].checked = true;
            this.options[other].checked = false;
        },
        // 查看下级明细
        hanleNextDetail(item){
            console.log('查看下级明细参数',item);
        }
    },
    mounted(){

    }
}
</script>
<style lang="less" scoped>
    #switch_page{
        width: 100vw;
        height: calc(100vh - 86px);
        padding-top: 86px;
        background: rgb(241, 245, 246);
        .header-top{
            background: #fff;
            .top-title{
                color: #000;
                font-weight: bolder;
            }
            
        }
        .top{
            width: 95%;
            height: 172px;
            background-color: rgb(93, 115, 184);
            margin: 30px auto auto auto;
            border-radius: 12px;
            position: relative;
            .avator{
                width: 132px;
                height: 132px;
                position: absolute;
                left: 20px;
                top: 20px;
                img{
                    width: 100%;
                    height: auto;
                    border-radius: 50%;
                }
            }
            .nickname{
                font-size: 32px;
                color: #fff;
                font-weight: 700;
                position: absolute;
                top: 45px;
                left: 165px;
            }
            .slogan{
                font-size: 30px;
                color: #fff;
                font-weight: 700;
                position: absolute;
                top: 100px;
                left: 165px;
            }
        }
        .body{
            width: 100%;
            height: auto;
            margin-top: 40px;
            background: #fff;
            .title{
                width: 100%;
                height: auto;
            }
            .contain{
                width: 100%;
                height: auto;
                .title{
                    width: 90%;
                    padding-left: 10%;
                    height: 60px;
                    font-size: 30px;
                }
                .menus{
                    width: 100%;
                    height: auto;
                    display: flex;
                    display: -webkit-flex;
                    flex-wrap: wrap;
                    -webkit-flex-wrap: wrap;
                    justify-content: space-around;
                    -webkit-justify-content: space-around;
                    padding-bottom: 30px;
                    .per_menus{
                       width: 45%;
                        height: 155px;
                        background-color: #ffffff;
                        box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.35);
                        border-radius: 10px;
                        margin-top: 30px;
                        .icon{
                            width: 40%;
                            height: 100%;
                        }
                        .title_number{
                            width: 60%;
                            height: 120px;
                            padding-top: 18px;
                            .desc{
                                width: 100%;
                                height: 50%;
                                font-size: 30px;
                                font-weight: 700;
                            }
                            .number{
                               width: 100%;
                                height: 50%; 
                                font-size: 28px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
