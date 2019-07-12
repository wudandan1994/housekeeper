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
            <switchTab :options="options" @changeChecked="handleChangeChecked"></switchTab>
            <!-- 下级浏览数 -->
            <div class="type row" v-if="id == '0'">
                <div class="type-left">
                    <div class="type-icon center-end"><van-icon name="http://pay.91dianji.com.cn/303-check.png" size="100px"></van-icon></div>
                    <div class="type-title center">{{title}}</div>
                    <div class="type-number center">{{number}}</div>
                    <div class="type-vip center">VIP会员卡</div>
                </div>
                <div class="type-right">
                    <div class="per-type">
                        <div class="row">
                            <div><van-checkbox icon-size="12px" v-model="credit">信用卡办理</van-checkbox></div>
                            <div class="center">674839</div>
                        </div>
                        <div class="row">
                            <div><van-checkbox v-model="shoukuan">在线收款</van-checkbox></div>
                            <div class="center">674839</div>
                        </div>
                        <div class="row">
                            <div><van-checkbox v-model="zhineng">智能管家</van-checkbox></div>
                            <div class="center">674839</div>
                        </div>
                        <div class="row">
                            <div><van-checkbox v-model="daikuan">我要贷款</van-checkbox></div>
                            <div class="center">674839</div>
                        </div>
                    </div>
                     <div class="per-type">
                        <div class="row">
                            <div><van-checkbox icon-size="12px" v-model="shengji">升级</van-checkbox></div>
                            <div class="center">674839</div>
                        </div>
                    </div>
                    <div class="per-type">
                        <div class="row">
                            <div><van-checkbox icon-size="12px" v-model="huangjin">黄金会员</van-checkbox></div>
                            <div class="center">674839</div>
                        </div>
                        <div class="row">
                            <div><van-checkbox v-model="zuanshi">钻石会员</van-checkbox></div>
                            <div class="center">674839</div>
                        </div>
                        <div class="row">
                            <div><van-checkbox v-model="hehuoren">合伙人</van-checkbox></div>
                            <div class="center">674839</div>
                        </div>
                        <div class="row">
                            <div><van-checkbox v-model="oem">OEM</van-checkbox></div>
                            <div class="center">674839</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 新增客户 -->
            <div class="type row" v-if="id == '1'">
                <div class="type-left">
                    <div class="type-icon center-end"><van-icon name="http://pay.91dianji.com.cn/304-check.png" size="100px"></van-icon></div>
                    <div class="type-title center">{{title}}</div>
                    <div class="type-number center">{{number}}</div>
                </div>
                <div class="type-right">
                    <div class="per-type">
                        <div class="row">
                            <div><van-checkbox icon-size="12px" v-model="huangjin">黄金会员</van-checkbox></div>
                            <div class="center">674839</div>
                        </div>
                        <div class="row">
                            <div><van-checkbox v-model="weichongzhi">已实名未充值</van-checkbox></div>
                            <div class="center">674839</div>
                        </div>
                        <div class="row">
                            <div><van-checkbox v-model="weizhuce">未注册</van-checkbox></div>
                            <div class="center">674839</div>
                        </div>
                    </div>
                    <div class="per-type">
                        <div class="row">
                            <div>钻石会员</div>
                            <div class="center">674839</div>
                        </div>
                        <div class="row">
                            <div><van-checkbox v-model="zhichong">直冲</van-checkbox></div>
                            <div class="center">674839</div>
                        </div>
                        <div class="row">
                            <div><van-checkbox v-model="shengji">升级</van-checkbox></div>
                            <div class="center">674839</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 被点击次数 -->
            <div class="type row" v-if="id == '2'">
                <div class="type-left">
                    <div class="type-icon center-end"><van-icon name="http://pay.91dianji.com.cn/304-check.png" size="100px"></van-icon></div>
                    <div class="type-title center">{{title}}</div>
                    <div class="type-number center">{{number}}</div>
                </div>
                <div class="type-right">
                    <div class="per-type">
                        <div class="row">
                            <div><van-checkbox icon-size="12px" v-model="huangjin">拨打上级</van-checkbox></div>
                            <div class="center">674839</div>
                        </div>
                    </div>
                    <div class="per-type">
                        <div class="row">
                            <div><van-checkbox v-model="zhujinli">朱经理</van-checkbox></div>
                            <div class="center">674839</div>
                        </div>
                        <div class="row">
                            <div><van-checkbox v-model="dianhuas">400电话</van-checkbox></div>
                            <div class="center">674839</div>
                        </div>
                        <div class="row">
                            <div><van-checkbox v-model="fuzhi">复制微信号</van-checkbox></div>
                            <div class="center">674839</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 我的团队 -->
            <div class="type row" v-if="id == '3'">
                <div class="type-left">
                    <div class="type-icon center-end"><van-icon name="http://pay.91dianji.com.cn/305-check.png" size="100px"></van-icon></div>
                    <div class="type-title center">{{title}}</div>
                    <div class="type-number center">{{number}}</div>
                </div>
                <div class="type-right">
                    <div class="per-type">
                        <div class="row">
                            <div><van-checkbox icon-size="12px" v-model="huangjin">黄金会员</van-checkbox></div>
                            <div class="center">674839</div>
                        </div>
                    </div>
                    <div class="per-type">
                        <div class="row">
                            <div><van-checkbox v-model="zuanshi">钻石会员</van-checkbox></div>
                            <div class="center">674839</div>
                        </div>
                    </div>
                    <div class="per-type">
                        <div class="row">
                            <div><van-checkbox v-model="weichongzhi">已实名未充值</van-checkbox></div>
                            <div class="center">674839</div>
                        </div>
                    </div>
                    <div class="per-type">
                        <div class="row">
                            <div><van-checkbox v-model="weizhuce">未注册</van-checkbox></div>
                            <div class="center">674839</div>
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
export default {
    data(){
        return{
            id: '',
            title: '',
            number: 2462566,
            credit: false,
            shoukuan: false,
            zhineng: false,
            daikuan: false,
            shengji: false,
            huangjin: false,
            zuanshi: false,
            hehuoren: false,
            weizhuce: false,
            weichongzhi: false,
            zhichong: false,
            shengji: false,
            oem: false,
            zhujinli: false,
            dianhuas: false,
            fuzhi: false,
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
        },
    },
    created(){
        this.title = this.$route.query.title;
        this.number = this.$route.query.number;
        this.id = this.$route.query.id;
        console.log('VUEX',this.$store.state.wechat);
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
