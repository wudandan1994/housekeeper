<template>
    <div id="switch_page" class="fold">
        <header class="header-top row">
            <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="black" size="20px" name="arrow-left"/></div>
            <div class="top-title center">AI雷达</div>
            <div class="right-icon center"></div>
        </header>
        <div class="tops">
            <div class="avator"><img :src="headimg" alt=""></div>
            <div class="nickname">{{nickname}}</div>
            <div class="slogan">我的获客工具——AI雷达</div>
        </div>
        <body class="body">
            <div class="switch"><switchTab :options="options" @changeTime="handleChildChangeTime" @changeChecked="handleChangeChecked"></switchTab></div>
            <div class="contain">
                <div class="title start-end">下级关键数据</div>
                <div class="menus">
                    <div class="per_menus row" v-for="(item,index) in details" :key="index" @click="hanleNextDetail(item)">
                        <div class="icon center"><van-icon size="40px" :name="item.icon"/></div>
                        <div class="title_number">
                            <div class="desc center">{{item.title}}</div>
                            <div class="number center">{{item.number}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
        <div class="list-container" id="list">
            <div class="per-list" v-for="(item,index) in list" :key="index">
                <div class="top">
                    <div class="avator start-center"><img :src="item.photo" alt=""></div>
                    <div class="nickname-type">
                        <div class="start-center">{{( item.nickname).substr(0,7)}}</div>
                        <div class="start-center">来自扫码</div>
                    </div>
                    <div class="type end-start">
                        <span v-if="item.type == '1'">信用卡办理</span>
                        <span v-if="item.type == '2'">在线收款</span>
                        <span v-if="item.type == '3'">智能管家</span>
                        <span v-if="item.type == '4'">我要贷款</span>
                        <span v-if="item.type == '5'">黄金会员</span>
                        <span v-if="item.type == '6'">钻石会员</span>
                        <span v-if="item.type == '7'">合伙人</span>
                        <span v-if="item.type == '8'">OEM</span>
                        <span v-if="item.type == '9'">升级</span>
                        <span v-if="item.type == '10'">拨打上级</span>
                        <span v-if="item.type == '11'">联系我们</span>
                        <span v-if="item.type == '12'">400电话</span>
                        <span v-if="item.type == '13'">复制微信</span>
                        
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
    </div>
</template>
<script>
import switchTab from '@/components/radar/switch'
import {axiosPost} from '@/lib/http'
export default {
    data(){
        return{
            nickname: '',
            headimg: '',
            options:[
                {
                    id: '0',
                    title: '今天',
                    checked: false
                },
                {
                    id: '1',
                    title: '全部',
                    checked: true
                },
            ],
            details:[
                {
                    id: '0',
                    title: '下级浏览数',
                    number: '10',
                    icon: 'http://pay.91dianji.com.cn/liulan.png'
                },
                {
                    id: '1',
                    title: '新增客户',
                    number: '11',
                    icon: 'http://pay.91dianji.com.cn/xinzeng.png'
                },
                {
                    id: '2',
                    title: '点击联系方式',
                    number: '12',
                    icon: 'http://pay.91dianji.com.cn/dianji.png'
                },
                {
                    id: '3',
                    title: '我的团队',
                    number: '13',
                    icon: 'http://pay.91dianji.com.cn/tuandui.png'
                }
            ],
            startdate: '',
            enddate: '',
            list: [],
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
            // console.log('更换选择',obj);
            var other = this.reverse(obj.id);
            this.options[obj.id].checked = true;
            this.options[other].checked = false;
            if(obj.id == '0'){
                // 选中日期为今天
                var now = new Date();
                var arr = now.toLocaleDateString().split('/');
                this.startdate =  this.handleTransferTime(arr);
                this.enddate =  this.handleTransferTime(arr);
                this.handleAIRadarTotal();
            }else{
                // 选中时间为全部
                this.startdate = '';
                this.enddate = '';
                this.handleAIRadarTotal();
            }
        },
        // 查看下级明细
        hanleNextDetail(item){
            // console.log('查看下级明细参数',item);
            this.$router.push({
                path: '/nextLevel',
                query: {
                    title: item.title,
                    number: item.number,
                    id: item.id,
                    startdate: this.startdate,
                    enddate: this.enddate
                }
            })
        },
        // 获取统计数据
        handleAIRadarTotal(){
            let params = {
                startdate: this.startdate,
                enddate: this.enddate
            };
            let url = '/behavior/getTotalRecord';
            axiosPost(url,params).then(res =>{
                if(res.data.success){
                    // console.log('统计数据请求成功',res);
                    this.details[0].number = res.data.data.browseCount;
                    this.details[1].number = res.data.data.newRegister;
                    this.details[2].number = res.data.data.clickContact;
                    this.details[3].number = res.data.data.teamCount;
                    this.list = res.data.data.list;
                }else{
                    // console.log('统计数据请求失败',res);
                }
            }).catch(res =>{
                // console.log('统计数据请求失败',res);
            })
        },
        // 选择时间查询
        handleChildChangeTime(item){
            // console.log('时间参数',item);
            var start = (item.startdate).split('/');
            var end = (item.enddate).split('/');
            
            // console.log('开始时间',this.handleTransferTime(start));
            // console.log('结束时间',this.handleTransferTime(end));
            this.startdate = this.handleTransferTime(start);
            this.enddate = this.handleTransferTime(end);
            this.handleAIRadarTotal();
        },
        // 时间格式转换函数
        handleTransferTime(obj){
            var origin = [];
            obj.forEach((item,index) =>{
                if(item.length == '1'){
                    item = '0' + item;
                    origin.push(item);
                }else{
                    origin.push(item);
                }
            })
            return origin.join('-');
        }
    },
    created(){
        this.nickname = this.$store.state.wechat.nickname;
        this.headimg = this.$store.state.wechat.headimg;
        this.handleAIRadarTotal();
        
    }
}
</script>
<style lang="less" scoped>
    #switch_page{
        width: 100vw;
        height: auto;
        padding-top: 86px;
        background: rgb(241, 245, 246);
        .header-top{
            background: #fff;
            .top-title{
                color: #000;
                font-weight: bolder;
            }
            
        }
        .tops{
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
                left: 185px;
            }
            .slogan{
                font-size: 30px;
                color: #fff;
                font-weight: 700;
                position: absolute;
                top: 100px;
                left: 185px;
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
        .list-container{
            width: 100vw;
            height: auto;
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
    }
</style>
