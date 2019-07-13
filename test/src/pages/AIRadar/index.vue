<template>
    <div id="switch_page" class="fold">
        <header class="header-top row">
            <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="black" size="20px" name="arrow-left"/></div>
            <div class="top-title center">AI雷达</div>
            <div class="right-icon center"></div>
        </header>
        <div class="top">
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
                    number: '10'
                },
                {
                    id: '1',
                    title: '新增客户',
                    number: '11'
                },
                {
                    id: '2',
                    title: '点击联系方式',
                    number: '12'
                },
                {
                    id: '3',
                    title: '我的团队',
                    number: '13'
                }
            ],
            starttime: '',
            endtime: '',
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
            console.log('更换选择',obj);
            var other = this.reverse(obj.id);
            this.options[obj.id].checked = true;
            this.options[other].checked = false;
            if(obj.id == '0'){
                // 选中日期为今天
                var now = new Date();
                var arr = now.toLocaleDateString().split('/');
                this.starttime =  this.handleTransferTime(arr);
                this.endtime =  this.handleTransferTime(arr);
                this.handleAIRadarTotal();
            }else{
                // 选中时间为全部
                this.starttime = '';
                this.endtime = '';
                this.handleAIRadarTotal();
            }
        },
        // 查看下级明细
        hanleNextDetail(item){
            console.log('查看下级明细参数',item);
            this.$router.push({
                path: '/nextLevel',
                query: {
                    title: item.title,
                    number: item.number,
                    id: item.id
                }
            })
        },
        // 获取统计数据
        handleAIRadarTotal(){
            let params = {
                starttime: this.starttime,
                endtime: this.endtime
            };
            let url = '/behavior/getTotalRecord';
            axiosPost(url,params).then(res =>{
                if(res.data.success){
                    console.log('统计数据请求成功',res);
                    this.details[0].number = res.data.data.browseCount;
                    this.details[1].number = res.data.data.newRegister;
                    this.details[2].number = res.data.data.clickContact;
                    this.details[3].number = res.data.data.teamCount;
                }else{
                    console.log('统计数据请求失败',res);
                }
            }).catch(res =>{
                console.log('统计数据请求失败',res);
            })
        },
        // 选择时间查询
        handleChildChangeTime(item){
            console.log('时间参数',item);
            var start = (item.starttime).split('/');
            var end = (item.endtime).split('/');
            
            console.log('开始时间',this.handleTransferTime(start));
            console.log('结束时间',this.handleTransferTime(end));
            this.starttime = this.handleTransferTime(start);
            this.endtime = this.handleTransferTime(end);
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
    }
</style>
