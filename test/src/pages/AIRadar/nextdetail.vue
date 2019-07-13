<template>
    <div id="page-next">
        <header class="header-top row">
            <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">{{title}}</div>
            <div class="right-icon center"></div>
        </header>
        <div class="scroll center">
           <DigitRoll ref='digitroll' :rollDigits='number'/>
        </div>
        <div class="big-title start-center">{{title}}</div>
        <div class="Statistics">
            <switchTab :options="options" @changeTime="handleChangeTime" @changeChecked="handleChangeChecked"></switchTab>
            <!-- 下级浏览数 -->
            <div class="type row" v-if="id == '0'">
                <div class="type-left">
                    <div class="type-icon center-end"><van-icon name="http://pay.91dianji.com.cn/303-check.png" size="100px"></van-icon></div>
                    <div class="type-title center">{{title}}</div>
                    <div class="type-number center">{{number}}</div>
                    <div class="type-vip center">VIP会员卡</div>
                </div>
                <div class="type-right">
                    <van-radio-group v-model="radio" @change="handleSeeDetail">
                        <div class="per-type">
                            <div class="row">
                                <div><van-radio name="1" icon-size="2rem">信用卡办理</van-radio></div>
                                <div class="center">{{credit_number}}</div>
                            </div>
                            <div class="row">
                                <div><van-radio name="2">在线收款</van-radio></div>
                                <div class="center">{{shoukuan_number}}</div>
                            </div>
                            <div class="row">
                                <div><van-radio name="3">智能管家</van-radio></div>
                                <div class="center">{{zhineng_number}}</div>
                            </div>
                            <div class="row">
                                <div><van-radio name="4">我要贷款</van-radio></div>
                                <div class="center">{{daikuan_number}}</div>
                            </div>
                        </div>
                        <div class="per-type">
                            <div class="row">
                                <div><van-radio name="9">升级</van-radio></div>
                                <div class="center">{{shengji_number}}</div>
                            </div>
                        </div>
                        <div class="per-type">
                            <div class="row">
                                <div><van-radio name="5">黄金会员</van-radio></div>
                                <div class="center">{{huangjin_number}}</div>
                            </div>
                            <div class="row">
                                <div><van-radio name="6">钻石会员</van-radio></div>
                                <div class="center">{{zuanshi_number}}</div>
                            </div>
                            <div class="row">
                                <div><van-radio name="7">合伙人</van-radio></div>
                                <div class="center">{{hehuoren_number}}</div>
                            </div>
                            <div class="row">
                                <div><van-radio name="8">OEM</van-radio></div>
                                <div class="center">{{oem_number}}</div>
                            </div>
                        </div>
                    </van-radio-group>
                </div>
            </div>
            <!-- 我的团队 -->
            <div class="type row" v-if="id == '3'">
                <div class="type-left">
                    <div class="type-icon center-end"><van-icon name="http://pay.91dianji.com.cn/304-check.png" size="100px"></van-icon></div>
                    <div class="type-title center">{{title}}</div>
                    <div class="type-number center">{{number}}</div>
                </div>
                <div class="type-right">
                    <van-radio-group v-model="myteam" @change="handleSeeNewAdd">
                        <div class="per-type">
                            <div class="row">
                                <div><van-radio name="1">黄金会员</van-radio></div>
                                <div class="center">{{huangjin_vip_number}}</div>
                            </div>
                            
                            <div class="row">
                                <div><van-radio name="2">钻石会员</van-radio></div>
                                <div class="center">{{zuanshi_vip_number}}</div>
                            </div>
                        </div>
                        <div class="per-type">
                            <div class="row">
                                <div><van-radio name="3">已实名未充值</van-radio></div>
                                <div class="center">{{yishiming_weichongzhi_number}}</div>
                            </div>
                            <div class="row">
                                <div><van-radio name="4">未实名未充值</van-radio></div>
                                <div class="center">{{weishiming_weichongzhi_number}}</div>
                            </div>
                        </div>
                    </van-radio-group>
                </div>
            </div>
            <!-- 点击联系方式 -->
            <div class="type row" v-if="id == '2'">
                <div class="type-left">
                    <div class="type-icon center-end"><van-icon name="http://pay.91dianji.com.cn/304-check.png" size="100px"></van-icon></div>
                    <div class="type-title center">{{title}}</div>
                    <div class="type-number center">{{number}}</div>
                </div>
                <div class="type-right">
                    <van-radio-group v-model="clickContact" @change="handleSeeDetail">
                        <div class="per-type">
                            <div class="row">
                                <div><van-radio name="10">拨打上级</van-radio></div>
                                <div class="center">{{bodasahngji_number}}</div>
                            </div>
                        </div>
                        <div class="per-type">
                            <div class="row">
                                <div><van-radio name="11">联系我们</van-radio></div>
                                <div class="center">{{lianxiwomen_number}}</div>
                            </div>
                            <div class="row">
                                <div><van-radio name="12">400电话</van-radio></div>
                                <div class="center">{{dianhuas_number}}</div>
                            </div>
                            <div class="row">
                                <div><van-radio name="13">复制微信</van-radio></div>
                                <div class="center">{{fuzhi_number}}</div>
                            </div>
                        </div>
                    </van-radio-group>
                </div>
            </div>
            <!-- 新增客户 -->
            <div class="type row" v-if="id == '1'">
                <div class="type-left">
                    <div class="type-icon center-end"><van-icon name="http://pay.91dianji.com.cn/305-check.png" size="100px"></van-icon></div>
                    <div class="type-title center">{{title}}</div>
                    <div class="type-number center">{{number}}</div>
                </div>
                <div class="type-right">
                    <van-radio-group v-model="newAdd" @change="handleSeeNewAdd">
                        <div class="per-type">
                            <div class="row">
                                <div><van-radio name="1">黄金会员</van-radio></div>
                                <div class="center">{{huangjin_add_number}}</div>
                            </div>
                        </div>
                        <div class="per-type">
                            <div class="row">
                                <div><van-radio name="2">钻石会员</van-radio></div>
                                <div class="center">{{zuanshi_add_number}}</div>
                            </div>
                        </div>
                        <div class="per-type">
                            <div class="row">
                                <div><van-radio name="3">已实名未充值</van-radio></div>
                                <div class="center">{{add_yishiming_weichongzhi_number}}</div>
                            </div>
                        </div>
                        <div class="per-type">
                            <div class="row">
                                <div><van-radio name="4">未实名未充值</van-radio></div>
                                <div class="center">{{add_weishiming_weichongzhi_number}}</div>
                            </div>
                        </div>
                    </van-radio-group>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import DigitRoll from '@huoyu/vue-digitroll'
import switchTab from '@/components/radar/switch'
import {axiosPost} from '@/lib/http'
export default {
    data(){
        return{
            radio: '',
            newAdd: '',
            clickContact: '',
            myteam: '',
            id: '',
            title: '',
            number: 2462566,
            credit: false,
            credit_number: '',
            shoukuan: false,
            shoukuan_number: '',
            zhineng: false,
            zhineng_number: '',
            daikuan: false,
            daikuan_number: '',
            shengji: false,
            shengji_number: '',
            huangjin: false,
            huangjin_number: '',
            zuanshi: false,
            zuanshi_number: '',
            hehuoren: false,
            hehuoren_number: '',
            oem: false,
            oem_number: '',
            bodasahngji_number: '',
            shengji: false,
            lianxiwomen: false,
            lianxiwomen_number: '',
            dianhuas: false,
            dianhuas_number: '',
            fuzhi: false,
            fuzhi_number: '',
            huangjin_vip: false,
            huangjin_vip_number: '',
            zuanshi_vip: '',
            zuanshi_vip_number: '',
            yishiming_weichongzhi: false,
            yishiming_weichongzhi_number: '',
            weishiming_weichongzhi: false,
            weishiming_weichongzhi_number: '',
            add_huangjin_vip: false,
            huangjin_add_number: '',
            add_zuanshi_vip: false,
            zuanshi_add_number: '',
            add_yishiming_weichongzhi: false,
            add_weishiming_weichongzhi: false,
            add_yishiming_weichongzhi_number: '',
            add_weishiming_weichongzhi_number: '',
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
            browseDetailCount: '1',
            starttime: '',
            endtime: '',
        }
    },
    components: { DigitRoll,switchTab },
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
            console.log('选择日期',obj);
            if(obj.id == '0'){
                // 选择今天
                var now = new Date();
                var a = now.toLocaleDateString().split('/');
                this.starttime = this.handleTransferTime(a);
                this.endtime = this.handleTransferTime(a);
                // 根据id判断执行分类函数
                switch (this.id) {
                    case '0':
                        this.handleBrowseDetailCount();
                        break;
                    case '1':
                        this.handleNewRegisterDetailCount();
                        break;
                    case '2':
                        this.handleClickDetailCount();
                        break;
                    default:
                    this.handleMyTeamDetailCount();
                    break;
                }
            }else{
                // 选择全部
                this.starttime = '';
                this.endtime = '';
                switch (this.id) {
                    case '0':
                        this.handleBrowseDetailCount();
                        break;
                    case '1':
                        this.handleNewRegisterDetailCount();
                        break;
                    case '2':
                        this.handleClickDetailCount();
                        break;
                    default:
                    this.handleMyTeamDetailCount();
                    break;
                }
            }
        },
        // 查询下级浏览数
        handleBrowseDetailCount(){
            let params = {
                starttime: this.starttime,
                endtime: this.endtime
            };
            let url = '/behavior/getBrowseDetailCount';
            axiosPost(url,params).then(res =>{
                if(res.data.success){
                    this.credit_number = res.data.data.browseDetailCount[0].count;
                    this.shoukuan_number = res.data.data.browseDetailCount[1].count;
                    this.zhineng_number = res.data.data.browseDetailCount[2].count;
                    this.daikuan_number = res.data.data.browseDetailCount[3].count;
                    this.shengji_number = res.data.data.browseDetailCount[8].count;
                    this.huangjin_number = res.data.data.browseDetailCount[4].count;
                    this.zuanshi_number = res.data.data.browseDetailCount[5].count;
                    this.hehuoren_number = res.data.data.browseDetailCount[6].count;
                    this.oem_number = res.data.data.browseDetailCount[7].count;
                }else{
                    this.$toast('数据加载失败');
                }
            }).catch(res =>{
                this.$toast('数据加载失败');
            })
        },
        // 查询点击联系方式数
        handleClickDetailCount(){
            let params = {
                starttime: this.starttime,
                endtime: this.endtime
            };
            let url = '/behavior/getClickDetailCount';
            axiosPost(url,params).then(res =>{
                if(res.data.success){
                    console.log('查询点击联系方式成功',res);
                    this.bodasahngji_number = res.data.data.browseDetailCount[0].count;
                    this.lianxiwomen_number = res.data.data.browseDetailCount[1].count;
                    this.dianhuas_number = res.data.data.browseDetailCount[2].count;
                    this.fuzhi_number = res.data.data.browseDetailCount[3].count;
                }else{
                    console.log('查询点击联系方式失败',res);
                }
            }).catch(res =>{
                console.log('查询点击联系方式失败',res);
            })
        },
        // 查询我的团队
        handleMyTeamDetailCount(){
            let params = {
                starttime: this.starttime,
                endtime: this.endtime
            };
            let url = '/behavior/getMyTeamDetailCount';
            axiosPost(url,params).then(res =>{
                if(res.data.success){
                    console.log('查询我的团队成功',res);
                    this.huangjin_vip_number = res.data.data.teamDetailCount[0].count;
                    this.zuanshi_vip_number = res.data.data.teamDetailCount[1].count;
                    this.yishiming_weichongzhi_number = res.data.data.teamDetailCount[2].count;
                    this.weishiming_weichongzhi_number = res.data.data.teamDetailCount[3].count;
                }else{
                    console.log('查询我的团队失败',res);
                }
            }).catch(res =>{
                console.log('查询我的团队失败',res);
            }) 
        },
        // 查询新增客户
        handleNewRegisterDetailCount(){
            let url = '/behavior/getNewRegisterDetailCount';
            axiosPost(url).then(res =>{
                if(res.data.success){
                    console.log('查询新增客户成功',res);
                    this.huangjin_add_number = res.data.data.teamDetailCount[0].count;
                    this.zuanshi_add_number = res.data.data.teamDetailCount[1].count;
                    this.add_yishiming_weichongzhi_number = res.data.data.teamDetailCount[2].count;
                    this.add_weishiming_weichongzhi_number = res.data.data.teamDetailCount[3].count;
                }else{
                    console.log('查询新增客户失败',res);
                }
            }).catch(res =>{
                console.log('查询新增客户失败',res);
            })
        },
        // 日期格式转换
        handleTransferTime(obj){
            var origin = [];
            obj.forEach((item,index) => {
                if(item.length == '1'){
                    item = '0' + item;
                    origin.push(item);
                }else{
                    origin.push(item);
                }
            });
            return origin.join('-');
        },
        // 根据日期搜索查询
        handleChangeTime(item){
            this.starttime = this.handleTransferTime((item.starttime).split('/'));
            this.endtime = this.handleTransferTime((item.endtime).split('/'));
            switch (this.id) {
                case '0':
                    this.handleBrowseDetailCount();
                    break;
                case '1':
                    this.handleNewRegisterDetailCount();
                    break;
                case '2':
                    this.handleClickDetailCount();
                    break;
                default:
                this.handleMyTeamDetailCount();
                break;
            }
        },
        // 根据选择参数查看下级浏览数以及点击联系方式列表明细
        handleSeeDetail(item){
            console.log('参数',item);
            setTimeout(() =>{
                this.$router.push({
                    path: '/nextList',
                    query:{
                        type: item
                    }
                })
            },200);
        },
        // 根据选择参数查下新增客户,我的团队列表明细
        handleSeeNewAdd(item){
            setTimeout(() =>{
                this.$router.push({
                    path: '/nextOtherList',
                    query:{
                        type: item
                    }
                })
            })
        }
    },
    created(){
        this.title = this.$route.query.title;
        this.number = this.$route.query.number;
        this.id = this.$route.query.id;
        console.log('VUEX',this.$store.state.wechat);
        if(this.$route.query.id == '0'){
            // 下级浏览数
            this.handleBrowseDetailCount();
        }
        else if(this.$route.query.id == '2'){
            // 点击次数
            this.handleClickDetailCount();
        }
        else if(this.$route.query.id == '3'){
            // 我的团队
            this.handleMyTeamDetailCount();
        }else{
            // 新增客户
            this.handleNewRegisterDetailCount();
        }
    }
}
</script>
<style lang="less" scoped>
    #page-next{
        width: 100vw;
        height: calc(100vh - 86px);
        padding-top: 86px;
        background: rgb(241, 245, 246);
        .scroll{
           width: 85%;
           height: 100px;
           background: #4b66af;
           overflow: hidden;
           margin: 20px auto auto auto;
           color: #fff;
           font-size: 50px;
           font-weight: 700;
           border-radius: 10px;
           box-shadow: 0px 0px 8px 2px #008080;
       }
       .big-title{
            width: 85%;
            height: 100px;
            margin: auto;
            font-size: 32px;
       }
       .Statistics{
           width: 85%;
           height: 900px;
           background: #fff;
           margin: auto;
           border-radius: 50px;
           .type{
               width: 90%;
               height: 800px;
               margin: auto;
               .type-left{
                   width: 40%;
                   height: 100%;
                   .type-icon{
                       width: 100%;
                       height: auto;
                       margin: 40px auto auto auto; 
                   }
                   .type-title{
                       width: 100%;
                       height: 60px;
                       font-size: 28px;
                   }
                   .type-number{
                        width: 100%;
                        height: auto;
                        font-size: 32px;
                        font-weight: 700;
                   }
                   .type-vip{
                        width: 100%;
                        height: 80px;
                        margin-top: 250px;
                   }
               }
               .type-right{
                   width: 60%;
                   height: 100%;
                   .per-type{
                       width: 98%;
                       height: auto;
                       margin: 40px auto;
                       border: solid 2px rgb(228, 228, 228);
                       border-radius: 24px;
                       >div{
                            padding: 15px 20px;
                            display: flex;
                            display: -webkit-flex;
                            justify-content: space-between;
                            -webkit-justify-content: space-between;
                       }
                   }
               }
           }
       }
    }
</style>
