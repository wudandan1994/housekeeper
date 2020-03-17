<template>
    <div id="page-next">
        <header class="header-top row">
            <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">{{title}}</div>
            <div class="right-icon center"></div>
        </header>
        <div class="scroll center">
           <DigitRoll ref='digitroll' :rollDigits='rollDigits'/>
        </div>
        <div class="big-title start-center">{{title}}</div>
        <div class="Statistics">
            <switchTab v-if="id != '1'" :options="options" @changeTime="handleChangeTime" @changeChecked="handleChangeChecked"></switchTab>
            <!-- 下级浏览数 -->
            <div class="type row" v-if="id == '0'">
                <div class="type-left">
                    <div class="type-icon center-end"><van-icon name="http://pay.91dianji.com.cn/liulan.png" size="100px"></van-icon></div>
                    <div class="type-title center">{{title}}</div>
                    <div class="type-number center">{{number}}</div>
                    <div class="type-vip center">VIP会员卡</div>
                </div>
                <div class="type-right">
                    <div class="per-type">
                        <!-- 信用卡办理 -->
                        <div class="row" @click="handleSeeDetail('1')">
                            <div class="start-center">
                                <span class="start-center">
                                    <van-icon name="checked" color="#4b66af" size="18px" v-if="type == '1'"/>
                                    <van-icon name="circle" color="#cccccc" size="18px" v-else/>
                                </span>
                                <span class="start-center" style="box-sizing:border-box;padding-left:4px">信用卡办理</span>
                                
                            </div>
                            <div class="center">{{credit_number}}</div>
                        </div>
                        <!-- 在线收款 -->
                        <div class="row" @click="handleSeeDetail('2')">
                            <div class="start-center">
                                <span class="start-center">
                                    <van-icon name="checked" color="#4b66af" size="18px" v-if="type == '2'"/>
                                    <van-icon name="circle" color="#cccccc" size="18px" v-else/>
                                </span>
                                <span class="start-center" style="box-sizing:border-box;padding-left:4px">在线收款</span>
                                
                            </div>
                            <div class="center">{{shoukuan_number}}</div>
                        </div>
                        <!-- 智能管家 -->
                        <div class="row" @click="handleSeeDetail('3')">
                            <div class="start-center">
                                <span class="start-center">
                                    <van-icon name="checked" color="#4b66af" size="18px" v-if="type == '3'"/>
                                    <van-icon name="circle" color="#cccccc" size="18px" v-else/>
                                </span>
                                <span class="start-center" style="box-sizing:border-box;padding-left:4px">智能管家</span>
                                
                            </div>
                            <div class="center">{{zhineng_number}}</div>
                        </div>
                        <!-- 我要贷款 -->
                        <div class="row" @click="handleSeeDetail('4')">
                            <div class="start-center">
                                <span class="start-center">
                                    <van-icon name="checked" color="#4b66af" size="18px" v-if="type == '4'"/>
                                    <van-icon name="circle" color="#cccccc" size="18px" v-else/>
                                </span>
                                <span class="start-center" style="box-sizing:border-box;padding-left:4px">我要贷款</span>
                                
                            </div>
                            <div class="center">{{daikuan_number}}</div>
                        </div>
                    </div>
                    <div class="per-type">
                        <!-- 升级 -->
                        <div class="row" @click="handleSeeDetail('9')">
                            <div class="start-center">
                                <span class="start-center">
                                    <van-icon name="checked" color="#4b66af" size="18px" v-if="type == '9'"/>
                                    <van-icon name="circle" color="#cccccc" size="18px" v-else/>
                                </span>
                                <span class="start-center" style="box-sizing:border-box;padding-left:4px">升级</span>
                                
                            </div>
                            <div class="center">{{shengji_number}}</div>
                        </div>
                    </div>
                    <div class="per-type">
                        <!-- 黄金会员 -->
                        <div class="row" @click="handleSeeDetail('5')">
                            <div class="start-center">
                                <span class="start-center">
                                    <van-icon name="checked" color="#4b66af" size="18px" v-if="type == '5'"/>
                                    <van-icon name="circle" color="#cccccc" size="18px" v-else/>
                                </span>
                                <span class="start-center" style="box-sizing:border-box;padding-left:4px">黄金会员</span>
                                
                            </div>
                            <div class="center">{{huangjin_number}}</div>
                        </div>
                        <!-- 钻石会员 -->
                        <div class="row" @click="handleSeeDetail('6')">
                            <div class="start-center">
                                <span class="start-center">
                                    <van-icon name="checked" color="#4b66af" size="18px" v-if="type == '6'"/>
                                    <van-icon name="circle" color="#cccccc" size="18px" v-else/>
                                </span>
                                <span class="start-center" style="box-sizing:border-box;padding-left:4px">钻石会员</span>
                                
                            </div>
                            <div class="center">{{zuanshi_number}}</div>
                        </div>
                        <!-- 合伙人 -->
                        <div class="row" @click="handleSeeDetail('7')">
                            <div class="start-center">
                                <span class="start-center">
                                    <van-icon name="checked" color="#4b66af" size="18px" v-if="type == '7'"/>
                                    <van-icon name="circle" color="#cccccc" size="18px" v-else/>
                                </span>
                                <span class="start-center" style="box-sizing:border-box;padding-left:4px">合伙人</span>
                                
                            </div>
                            <div class="center">{{hehuoren_number}}</div>
                        </div>
                        <!-- 运营商 -->
                        <div class="row" @click="handleSeeDetail('8')">
                            <div class="start-center">
                                <span class="start-center">
                                    <van-icon name="checked" color="#4b66af" size="18px" v-if="type == '8'"/>
                                    <van-icon name="circle" color="#cccccc" size="18px" v-else/>
                                </span>
                                <span class="start-center" style="box-sizing:border-box;padding-left:4px">运营商</span>
                                
                            </div>
                            <div class="center">{{oem_number}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 我的团队 -->
            <div class="type row" v-if="id == '3'">
                <div class="type-left">
                    <div class="type-icon center-end"><van-icon name="http://pay.91dianji.com.cn/tuandui.png" size="100px"></van-icon></div>
                    <div class="type-title center">{{title}}</div>
                    <div class="type-number center">{{number}}</div>
                </div>
                <div class="type-right">
                        <div class="per-type">
                            <!-- 黄金会员 -->
                            <div class="row" @click="handleSeeNewAdd('1')">
                                <div class="start-center">
                                    <span class="start-center">
                                        <van-icon name="checked" color="#4b66af" size="18px" v-if="type == '1'"/>
                                        <van-icon name="circle" color="#cccccc" size="18px" v-else/>
                                    </span>
                                    <span class="start-center" style="box-sizing:border-box;padding-left:4px">黄金会员</span>
                                    
                                </div>
                                <div class="center">{{huangjin_vip_number}}</div>
                            </div>
                            
                            <!-- 钻石会员 -->
                            <div class="row" @click="handleSeeNewAdd('2')">
                                <div class="start-center">
                                    <span class="start-center">
                                        <van-icon name="checked" color="#4b66af" size="18px" v-if="type == '2'"/>
                                        <van-icon name="circle" color="#cccccc" size="18px" v-else/>
                                    </span>
                                    <span class="start-center" style="box-sizing:border-box;padding-left:4px">钻石会员</span>
                                    
                                </div>
                                <div class="center">{{zuanshi_vip_number}}</div>
                            </div>
                            
                        </div>
                        <div class="per-type">
                            <!-- 已实名未充值 -->
                            <div class="row" @click="handleSeeNewAdd('3')">
                                <div class="start-center">
                                    <span class="start-center">
                                        <van-icon name="checked" color="#4b66af" size="18px" v-if="type == '3'"/>
                                        <van-icon name="circle" color="#cccccc" size="18px" v-else/>
                                    </span>
                                    <span class="start-center" style="box-sizing:border-box;padding-left:4px">已实名未充值</span>
                                    
                                </div>
                                <div class="center">{{yishiming_weichongzhi_number}}</div>
                            </div>
                            
                            <!-- 未实名未充值 -->
                            <div class="row" @click="handleSeeNewAdd('4')">
                                <div class="start-center">
                                    <span class="start-center">
                                        <van-icon name="checked" color="#4b66af" size="18px" v-if="type == '4'"/>
                                        <van-icon name="circle" color="#cccccc" size="18px" v-else/>
                                    </span>
                                    <span class="start-center" style="box-sizing:border-box;padding-left:4px">未实名未充值</span>
                                    
                                </div>
                                <div class="center">{{weishiming_weichongzhi_number}}</div>
                            </div>
                            
                        </div>
                </div>
            </div>
            <!-- 点击联系方式 -->
            <div class="type row" v-if="id == '2'">
                <div class="type-left">
                    <div class="type-icon center-end"><van-icon name="http://pay.91dianji.com.cn/dianji.png" size="100px"></van-icon></div>
                    <div class="type-title center">{{title}}</div>
                    <div class="type-number center">{{number}}</div>
                </div>
                <div class="type-right">
                        <div class="per-type">
                            <!-- 拨打上级 -->
                            <div class="row" @click="handleSeeDetail('10')">
                                <div class="start-center">
                                    <span class="start-center">
                                        <van-icon name="checked" color="#4b66af" size="18px" v-if="type == '10'"/>
                                        <van-icon name="circle" color="#cccccc" size="18px" v-else/>
                                    </span>
                                    <span class="start-center" style="box-sizing:border-box;padding-left:4px">拨打上级</span>
                                    
                                </div>
                                <div class="center">{{bodasahngji_number}}</div>
                            </div>
                            
                        </div>
                        <div class="per-type">
                            <!-- 联系我们 -->
                            <div class="row" @click="handleSeeDetail('11')">
                                <div class="start-center">
                                    <span class="start-center">
                                        <van-icon name="checked" color="#4b66af" size="18px" v-if="type == '11'"/>
                                        <van-icon name="circle" color="#cccccc" size="18px" v-else/>
                                    </span>
                                    <span class="start-center" style="box-sizing:border-box;padding-left:4px">联系我们</span>
                                    
                                </div>
                                <div class="center">{{lianxiwomen_number}}</div>
                            </div>

                            <!-- 400电话 -->
                            <div class="row" @click="handleSeeDetail('12')">
                                <div class="start-center">
                                    <span class="start-center">
                                        <van-icon name="checked" color="#4b66af" size="18px" v-if="type == '12'"/>
                                        <van-icon name="circle" color="#cccccc" size="18px" v-else/>
                                    </span>
                                    <span class="start-center" style="box-sizing:border-box;padding-left:4px">400电话</span>
                                    
                                </div>
                                <div class="center">{{dianhuas_number}}</div>
                            </div>

                            <!-- 复制微信 -->
                            <div class="row" @click="handleSeeDetail('13')">
                                <div class="start-center">
                                    <span class="start-center">
                                        <van-icon name="checked" color="#4b66af" size="18px" v-if="type == '13'"/>
                                        <van-icon name="circle" color="#cccccc" size="18px" v-else/>
                                    </span>
                                    <span class="start-center" style="box-sizing:border-box;padding-left:4px">复制微信</span>
                                    
                                </div>
                                <div class="center">{{fuzhi_number}}</div>
                            </div>
                        </div>
                </div>
            </div>
            <!-- 新增客户 -->
            <div class="type row" v-if="id == '1'">
                <div class="type-left">
                    <div class="type-icon center-end"><van-icon name="http://pay.91dianji.com.cn/xinzeng.png" size="100px"></van-icon></div>
                    <div class="type-title center">{{title}}</div>
                    <div class="type-number center">{{number}}</div>
                </div>
                <div class="type-right">
                        <div class="per-type">
                            <!-- 黄金会员 -->
                            <div class="row" @click="handleSeeNewAdd('1')">
                                <div class="start-center">
                                    <span class="start-center">
                                        <van-icon name="checked" color="#4b66af" size="18px" v-if="type == '1'"/>
                                        <van-icon name="circle" color="#cccccc" size="18px" v-else/>
                                    </span>
                                    <span class="start-center" style="box-sizing:border-box;padding-left:4px">黄金会员</span>
                                    
                                </div>
                                <div class="center">{{huangjin_add_number}}</div>
                            </div>
                            <!-- 钻石会员 -->
                            <div class="row" @click="handleSeeNewAdd('2')">
                                <div class="start-center">
                                    <span class="start-center">
                                        <van-icon name="checked" color="#4b66af" size="18px" v-if="type == '2'"/>
                                        <van-icon name="circle" color="#cccccc" size="18px" v-else/>
                                    </span>
                                    <span class="start-center" style="box-sizing:border-box;padding-left:4px">钻石会员</span>
                                    
                                </div>
                                <div class="center">{{zuanshi_add_number}}</div>
                            </div>
                        </div>
                        <div class="per-type">
                            <!-- 已实名未充值 -->
                            <div class="row" @click="handleSeeNewAdd('3')">
                                <div class="start-center">
                                    <span class="start-center">
                                        <van-icon name="checked" color="#4b66af" size="18px" v-if="type == '3'"/>
                                        <van-icon name="circle" color="#cccccc" size="18px" v-else/>
                                    </span>
                                    <span class="start-center" style="box-sizing:border-box;padding-left:4px">已实名未充值</span>
                                    
                                </div>
                                <div class="center">{{add_yishiming_weichongzhi_number}}</div>
                            </div>
                            <!-- 未实名未充值 -->
                            <div class="row" @click="handleSeeNewAdd('4')">
                                <div class="start-center">
                                    <span class="start-center">
                                        <van-icon name="checked" color="#4b66af" size="18px" v-if="type == '4'"/>
                                        <van-icon name="circle" color="#cccccc" size="18px" v-else/>
                                    </span>
                                    <span class="start-center" style="box-sizing:border-box;padding-left:4px">未实名未充值</span>
                                    
                                </div>
                                <div class="center">{{add_weishiming_weichongzhi_number}}</div>
                            </div>
                        </div>
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
            type: '',
            radio: '',
            newAdd: '',
            clickContact: '',
            myteam: '',
            id: '',
            title: '',
            number: 0,
            rollDigits: '00000000',
            credit_number: '',
            shoukuan_number: '',
            zhineng_number: '',
            daikuan_number: '',
            shengji_number: '',
            huangjin_number: '',
            zuanshi_number: '',
            hehuoren_number: '',
            oem_number: '',
            bodasahngji_number: '',
            lianxiwomen_number: '',
            dianhuas_number: '',
            fuzhi_number: '',
            huangjin_vip_number: '',
            zuanshi_vip: '',
            zuanshi_vip_number: '',
            yishiming_weichongzhi_number: '',
            weishiming_weichongzhi_number: '',
            huangjin_add_number: '',
            zuanshi_add_number: '',
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
            startdate: '',
            enddate: '',
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
            if(obj.id == '0'){
                // 选择今天
                var now = new Date();
                var a = now.toLocaleDateString().split('/');
                this.startdate = this.handleTransferTime(a);
                this.enddate = this.handleTransferTime(a);
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
                this.startdate = '';
                this.enddate = '';
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
                startdate: this.startdate,
                enddate: this.enddate
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
                    this.number = 0;
                    (res.data.data.browseDetailCount).forEach((item,index) =>{
                        this.number = this.number + parseInt(res.data.data.browseDetailCount[index].count);
                    })
                    this.rollDigits = this.handleAutoShiftZero(this.number);
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
                startdate: this.startdate,
                enddate: this.enddate
            };
            let url = '/behavior/getClickDetailCount';
            axiosPost(url,params).then(res =>{
                if(res.data.success){
                    console.log('查询点击联系方式成功',res);
                    this.bodasahngji_number = res.data.data.browseDetailCount[0].count;
                    this.lianxiwomen_number = res.data.data.browseDetailCount[1].count;
                    this.dianhuas_number = res.data.data.browseDetailCount[2].count;
                    this.fuzhi_number = res.data.data.browseDetailCount[3].count;
                    this.number = 0;
                    (res.data.data.browseDetailCount).forEach((item,index) =>{
                        this.number = this.number + parseInt(res.data.data.browseDetailCount[index].count);
                    })
                    this.rollDigits = this.handleAutoShiftZero(this.number);
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
                startdate: this.startdate,
                enddate: this.enddate
            };
            let url = '/behavior/getMyTeamDetailCount';
            axiosPost(url,params).then(res =>{
                if(res.data.success){
                    console.log('查询我的团队成功',res);
                    this.huangjin_vip_number = res.data.data.teamDetailCount[0].count;
                    this.zuanshi_vip_number = res.data.data.teamDetailCount[1].count;
                    this.yishiming_weichongzhi_number = res.data.data.teamDetailCount[2].count;
                    this.weishiming_weichongzhi_number = res.data.data.teamDetailCount[3].count;
                    this.number = 0;
                    (res.data.data.teamDetailCount).forEach((item,index) =>{
                        this.number = parseInt(this.number) + parseInt(res.data.data.teamDetailCount[index].count);
                    })
                    this.rollDigits = this.handleAutoShiftZero(this.number);
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
            let params = {
                startdate: this.startdate,
                enddate: this.enddate
            };
            axiosPost(url,params).then(res =>{
                if(res.data.success){
                    console.log('查询新增客户成功',res);
                    this.huangjin_add_number = res.data.data.teamDetailCount[0].count;
                    this.zuanshi_add_number = res.data.data.teamDetailCount[1].count;
                    this.add_yishiming_weichongzhi_number = res.data.data.teamDetailCount[2].count;
                    this.add_weishiming_weichongzhi_number = res.data.data.teamDetailCount[3].count;
                    this.number = 0;
                    (res.data.data.teamDetailCount).forEach((item,index) =>{
                        this.number = parseInt(this.number) + parseInt(res.data.data.teamDetailCount[index].count)
                    })
                    this.rollDigits = this.handleAutoShiftZero(this.number);
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
            this.startdate = this.handleTransferTime((item.startdate).split('/'));
            this.enddate = this.handleTransferTime((item.enddate).split('/'));
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
            this.type = item;
            setTimeout(() =>{
                this.$router.push({
                    path: '/nextList',
                    query:{
                        type: item,
                        startdate: this.startdate,
                        enddate: this.enddate
                    }
                })
            },500);
        },
        // 根据选择参数查下新增客户,我的团队列表明细
        handleSeeNewAdd(item){
            console.log('选择参数');
            this.type = item;
            setTimeout(() =>{
                this.$router.push({
                    path: '/nextOtherList',
                    query:{
                        type: item,
                        startdate: this.startdate,
                        enddate: this.enddate
                    }
                })
            })
        },
        // 自动补0函数
        handleAutoShiftZero(item){
            var array = (item.toString()).split("");
            var length = 8 - (array.length);
            for(var i = 0; i < length; i++){
                array.unshift('0');
            }
            console.log('组合后的数据',array.join(""));
            return array.join("");

        }
    },
    created(){
        this.title = this.$route.query.title;
        this.id = this.$route.query.id;
        this.startdate = this.$route.query.startdate;
        this.enddate = this.$route.query.enddate;
        console.log('VUEX',this.$route.query);
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
            // 默认将时间调整为今天
            var now = new Date();
            var a = now.toLocaleDateString().split('/');
            this.startdate = this.handleTransferTime(a);
            this.enddate = this.handleTransferTime(a);
            this.handleNewRegisterDetailCount();
        }
    }
}
</script>
<style lang="less" scoped>
    #page-next{
        width: 100vw;
        height: 100vh;
        padding-top: 106px;
        box-sizing: border-box;
        background: rgb(241, 245, 246);
        .scroll{
           width: 85%;
           height: 8%;
           box-sizing: border-box;
           background: #4b66af;
           overflow: hidden;
           color: #fff;
           font-size: 50px;
           font-weight: 700;
           border-radius: 10px;
           margin: auto;
       }
       .big-title{
            width: 85%;
            height: 7%;
            margin: auto;
            font-size: 32px;
       }
       .Statistics{
           width: 85%;
           height: 80%;
           background: #fff;
           margin: auto;
           border-radius: 20px;
           .type{
               width: 90%;
               height: calc(100% - 100px);
               margin: auto;
               .type-left{
                   width: 40%;
                   height: 100%;
                   box-sizing: border-box;
                   .type-icon{
                       width: 100%;
                       height: 28%;
                   }
                   .type-title{
                       width: 100%;
                       height: 6%;
                       font-size: 28px;
                   }
                   .type-number{
                        width: 100%;
                        height: 6%;
                        font-size: 32px;
                        font-weight: 700;
                   }
                   .type-vip{
                        width: 100%;
                        height: 48%;
                        font-size: 28px;
                   }
               }
               .type-right{
                   width: 60%;
                   height: 100%;
                   box-sizing: border-box;
                   .per-type{
                       width: 98%;
                       height: auto;
                       margin: 40px auto;
                       border: solid 2px rgb(228, 228, 228);
                       border-radius: 24px;
                       >div{
                            height: 60px;
                            font-size: 26px;
                            display: flex;
                            display: -webkit-flex;
                            justify-content: space-between;
                            -webkit-justify-content: space-between;
                            box-sizing: border-box;
                            padding: 0px 20px;
                            >div{
                                >span{
                                    height: 100%;
                                    // border: solid 1px red;
                                }
                            }
                       }
                   }
               }
           }
       }
    }
</style>
