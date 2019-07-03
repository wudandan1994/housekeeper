<template>
    <div id="page-component-form">
         <header class="header-top row">
            <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">申请贷款</div>
            <div class="right-icon center"></div>
        </header>
        <!-- 轮播图 -->
        <div class="swipe">
          <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item,index) in images" :key="index"><img class="imgs" :src="item" alt=""></van-swipe-item>
          </van-swipe>
        </div>
        <div class="title center">选择或添加申请人信息</div>
        <div class="detail">请确保选择或添加的申请人信息与贷款申请表所填信息保持真实一致，以免影响信用贷款进度；本平台对此信息保密，仅作提交金融机构工作人员审核，审核通知将以短信形式发送至该号码</div>
        <div class="per-input top row">
            <div class="icon end-center"><van-icon name="manager" size="1.5em" /></div>
            <div class="label start-center">姓名</div>
            <div class="user-input"><input type="text" v-model='form.name' placeholder="请填写申请人姓名"/></div>
        </div>

        <div class="per-input  row">
            <div class="icon end-center"><van-icon name="card" size="1.5em" /></div>
            <div class="label start-center">证件</div>
            <div class="user-input"><input type="text" v-model="form.idcardnumber" placeholder="请填写申请人身份证号码"/></div>
        </div>

        <div class="per-input  row">
            <div class="icon end-center"><van-icon name="graphic" size="1.5em" /></div>
            <div class="label start-center">电话</div>
            <div class="user-input"><input type="number" v-model="form.mobile" placeholder="请填写申请人手机号码"/></div>
        </div>

        <div class="per-input  row">
            <div class="icon end-center"><van-icon name="coupon" size="1.5em" /></div>
            <div class="label start-center">验证码</div>
            <div class="user-code"><input type="text" v-model="form.code" placeholder="请输入验证码"/></div>
            <div class="safe-code center" @click="changeCode">{{realCode}}</div>
        </div>

        <div class="btns row">
            <van-button type="default" class="cancel">取消</van-button>
            <van-button type="primary" class="sure" @click="handleSubmit">确认</van-button>
        </div>
        <div class="clause">
            <div class="center"><van-checkbox v-model="checked" @change="handleAgree" shape="square" checked-color="#4b66af">阅读并同意<span @click="handleShow">《钱夹宝服务协议》</span></van-checkbox></div>
            <div class="remarks">{{remarks}}</div>
        </div>
        <van-popup class="popup" v-model="show" position="right">
           <div class="pop-clause"> 
               <div class="pop-close end-center"><van-icon name="cross" size="1.5em" @click="handleClose"/></div>
               <div class="pop-title center">钱夹宝服务协议</div>
                <div class="pop-content">
                <h1> 一、【协议的范围】</h1>
                    　　1.1本协议是用户与钱夹宝之间关于其使用钱夹宝的服务所订立的协议。“钱夹宝”是指钱夹宝和/或其相关服务可能存在的运营关联单位。“用户”是指钱夹宝的服务的使用人，在本协议中更多地称为“您”。<br/>
                    　　1.2钱夹宝的服务是指钱夹宝向用户提供的，具体服务以钱夹宝实际提供的为准（以下简称“本服务”）。<br/><br/>
                <h1>二、【帐号安全】</h1>
                    　　2.1你在使用本服务过程种，本服务需要你添加个人手机号码、身份证号码等信息。您应当保证这些信息的内容和形式符合法律法规（本协议中的“法律法规”指用户所属/所处地区、国家现行有效的法律、行政法规、司法解释、地方法规、地方规章、部门规章及其他规范性文件以及对于该等法律法规的不时修改和补充，以及相关政策规定等，下同。）、公序良俗、社会公德以及钱夹宝平台规则，且不会侵害任何主体的合法权益。<br/><br/>

                <h1>三、【用户个人信息保护】</h1>
                    　　3.1保护用户个人信息是钱夹宝的一项基本原则。钱夹宝将按照本协议及《钱夹宝隐私政策》（的规定收集、使用、储存和分享您的个人信息。本协议对个人信息保护相关内容未作明确规定的，均应以《钱夹宝隐私政策》的内容为准。<br/>

                    　　3.2您在注册帐号或使用本服务的过程中，可能需要填写一些必要的信息。若国家法律法规有特殊规定的，您需要填写真实的身份信息。若您填写的信息不完整，则可能无法使用本服务或在使用过程中受到限制。<br/>
                    　　3.3一般情况下，您可根据相关产品规则浏览、修改自己提交的信息，但出于安全性和身份识别（如号码申诉服务等）的考虑，您可能无法修改注册时提供的初始注册信息及其他验证信息。<br/>
                    　　3.4钱夹宝将尽可能运用各种安全技术和程序建立完善的管理制度来保护您的个人信息，以免遭受未经授权的访问、使用或披露。<br/>
                    　　3.5钱夹宝不会将您的个人信息转移或披露给任何第三方，除非：<br/>
                    　　（1）相关法律法规或司法机关、行政机关要求。<br/>
                    　　（2）为完成合并、分立、收购或资产转让而转移。<br/>
                    　　（3）为提供您要求的服务所必需。<br/>
                    　　3.6钱夹宝非常重视对未成年人个人信息的保护。若您不具备完全民事行为能力，在使用钱夹宝的服务前，应事先取得您的监护人的同意。<br/><br/>
                <h1>四、【使用本服务的方式】</h1>
                    　　4.1本服务仅为您个人非商业性质的使用，除非您与钱夹宝另有约定。<br/>
                    　　4.2您依本协议条款所取得的权利不可转让。<br/>
                    　　4.3您不得使用任何方式（包括但不限于第三方软件、插件、外挂、系统、设备等）对本服务进行干扰、破坏、修改或施加其他影响。<br/>
                    　　4.4您应当通过钱夹宝提供或认可的方式使用本服务，不得通过任何第三方软件、插件、外挂、系统、设备等登录或使用本服务。<br/>
                    　　4.5任何人未经钱夹宝授权不得使用任何第三方软件、插件、外挂、系统等查看、获取本服务中所包含的钱夹宝。<br/><br/>
                <h1>五、【管辖与法律适用】</h1>
                    　　5.1本协议的成立、生效、履行、解释及纠纷解决等相关事宜，均适用中华人民共和国大陆地区法律（不包括冲突法）。<br/>
                    　  5.2本协议签订地为中华人民共和国广东省深圳市南山区。<br/>
                    　　5.3若您和钱夹宝之间发生任何纠纷或争议，首先应友好协商解决；协商不成的，您同意将纠纷或争议提交本协议签订地（即中国广东省深圳市南山区）有管辖权的人民法院管辖。<br/>
                    　　5.4本协议所有条款的标题仅为阅读方便，本身并无实际涵义，不能作为本协议涵义解释的依据。<br/>
                    　　5.5本协议条款无论因何种原因部分无效或不可执行，其余条款仍有效，对双方具有约束力。<br/>
                    　　5.6若本协议有中文、英文等多个语言版本，相应内容不一致的，均以中文版的内容为准。<br/><br/>
                <h1>六、【未成年人使用条款】</h1>
                    　6.1若用户未满18周岁，则为未成年人，应在监护人监护、指导下阅读本协议和使用本服务。<br/>
                    　　6.2未成年人用户涉世未深，容易被网络虚像迷惑，且好奇心强，遇事缺乏随机应变的处理能力，很容易被别有用心的人利用而又缺乏自我保护能力。因此，未成年人用户在使用本服务时应注意以下事项，提高安全意识，加强自我保护：<br/>

                    　　（1）认清网络世界与现实世界的区别，避免沉迷于网络，影响日常的学习生活。<br/>
                    　　（2）填写个人资料时，加强个人保护意识，以免不良分子对个人生活造成骚扰。<br/>
                    　　（3）在监护人或老师的指导下，学习正确使用网络。<br/>
                    　　（4）避免陌生网友随意会面或参与联谊活动，以免不法分子有机可乘，危及自身安全。<br/>
                    　　6.3监护人、学校均应对未成年人使用本服务多做引导。特别是家长应关心子女的成长，注意与子女的沟通，指导子女上网应该注意的安全问题，防患于未然。<br/>
                    　　6.4已满18周岁的成年人因任何原因不具备完全民事行为能力的，参照适用本协议之未成年人使用条款之相关约定。<br/><br/>
                <h1>七、【其他】</h1>
                    　　7.1如果您对本协议或本服务有意见或建议，可与钱夹宝客户服务部门联系，我们会给予您必要的帮助。（正文完）<br/>
                    　<br/><br/>
                    
                     <div style="width:100%" class="end-center">传帮带（上海）网络科技有限公司</div>

                </div>
            </div>
        </van-popup>
        <loading :componentload="componentload"></loading>
    </div>
</template>
<script>
import {axiosPost} from '@/lib/http'
import loading from '@/components/loading'
export default {
     components:{
      loading
    },
    data(){
        return{
             componentload:false,
            fixed: true,
            images:[
                'http://pay.91dianji.com.cn/banner01.jpg',
                'http://pay.91dianji.com.cn/banner02.jpg',
                'http://pay.91dianji.com.cn/banner03.jpg',
                'http://pay.91dianji.com.cn/banner04.jpg',
                'http://pay.91dianji.com.cn/banner05.jpg'
            ],
            form:{
                name: '',
                idcardnumber: '',
                mobile: '',
                code: ''
            },
            checked: false,
            show: false,
            remarks: '注:在钱夹宝申请贷款一律不收取任何费用，如有向您索要手续费的请拨打400-1059-769向平台举报',
            codeLength: 4,
            realCode: ''
        }
    },
    methods:{
        // 返回首页
        handleReturnHome(){
            this.$router.push({
                path:'/loan/detail'
            })
        },
        // 更多
        handleMore(){
            this.$toast('尽请期待');
        },
        // 钱夹宝服务协议
        handleShow(){
            this.show = true;
        },
        // 关闭协议弹窗
        handleClose(){
            this.show = false;
        },
        // 验证码
        safeCode(){
            var codeLength = this.codeLength;
            var ran = new Array(0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z')
            for(var i = 0; i < codeLength; i++ ){
                var index = Math.floor(Math.random()*36);
                this.realCode += ran[index];
            }
            
        },
        // 切换验证码
        changeCode(){
            this.realCode = '';
            this.safeCode();
        },
        // 服务条款
        handleAgree(val){
        },
        // 表单提交
        handleSubmit(){
           if(this.form.name == ''){
               this.$toast('请填写申请人姓名');
           }else if(this.form.idcardnumber == ''){
               this.$toast('请填写申请人身份证号')
           }else if(this.form.mobile == ''){
               this.$toast('请填写申请人手机号')
           }
           else if((this.form.code).replace(/\s*/g,"") == '' || (this.form.code).replace(/\s*/g,"") != (this.realCode).replace(/\s*/g,"")){
               this.$toast('请检查验证码');
           }
           else if(this.checked == false){
               this.$toast('请阅读并同意服务协议');
           }
           else{
                //  let url="https://wallet.xiaoying.com/fe/wallet-landing/blueRegPage/index.html?landId=1017&source=100024443"
                // setTimeout(()=>{
                //             this.$router.push({
                //             path:"/home/online",
                //             query:{
                //                 info:url,
                //                 title:"贷款中心"
                //               }
                //           })
                //         },1000)
               let data={
                   realName:this.form.name,
                   mobile:this.form.mobile,
                   certcode:this.form.idcardnumber
               }
               axiosPost("/creditCard/getLoanUrl",data)
               .then(res=>{
                   if(!res.data.success){
                       this.$toast({
                           message:res.data.message
                       })
                       return
                   } else {
                    //    window.location.href=res.data.data;
                        let url=res.data.data;
                        this.componentload=true
                        setTimeout(()=>{
                            this.$router.push({
                            path:"/home/online",
                            query:{
                                info:url,
                                title:"贷款中心"
                              }
                          })


                        //  if (!navigator.userAgent.match(/iPad|iPhone/i)){
                        //         this.$router.push({
                        //             path:"/loan/form/myOrder",
                        //             query:{
                        //                 info:url,
                        //                 title:"贷款中心"
                        //             }
                        //         })
                        //         } else {
                        //             this.componentload=false
                        //             location.href=url
                        //         }

                        },1000)
                   }
               })
               .catch(err=>{
                   
               })
           }
        },
         // 获取实名认证信息
        handleGetAOuth(){
            let url = '/customer/getIdentification';
            let params = {};
            axiosPost(url,params).then(res =>{
                // console.log('获取实名认证状态成功',res);
                if(res.data.data.status != '0'){
                    this.form.name = res.data.data.name;
                    this.form.idcardnumber = res.data.data.idcardnumber;
                    this.form.mobile = this.$store.state.wechat.mobile;
                }
            }).catch(res =>{
                // console.log('获取实名认证状态失败',res);
            })
        }
    },
    created(){
        this.safeCode();
        this.handleGetAOuth();
    }
}
</script>
<style lang="less" >
    #page-component-form{
        width: 100vw;
        height: auto;
        padding-top: 86px;
        .swipe{
            width: 100vw;
            height: auto;
            .imgs{
                width: 100vw;
                height: 400px;
            }
        }
        .title{
            width: 100vw;
            height: 100px;
            font-size: 32px;
            font-weight: 600;
            margin-top: 30px;
        }
        .detail{
            width: 90vw;
            height: auto;
            margin-left: auto;
            margin-right: auto;
            padding: 20px;
            line-height: 40px;
            color: #4B66AF;
            font-size: 26px;
            background: #F5F5F4;
            -moz-box-shadow:0px 0px 15px #999 inset;               /* For Firefox3.6+ */
            -webkit-box-shadow:0px 0px 15px #999 inset;            /* For Chrome5+, Safari5+ */
            box-shadow:0px 0px 15px #999 inset;   
        }
        .top{
            margin-top: 30px;
        }
        .per-input {
            width: auto;
            height: 80px;
            .icon{
                width:8vw;
                height: 100%;
            }
            .label{
                width: 12vw;
                height: 100%;
                font-weight: 600;
                font-size: 26px;
                margin-left: 2vw;
            }
            .user-input{
                width: 73vw;
                height: 100%;
                >input::-webkit-input-placeholder{
                    font-size:24px;
                    padding-top: 10px;
                }
                >input{
                    width: 100%;
                    height: 99%;
                    border: none;
                    text-align: left;
                    font-size: 26px;
                    background: transparent;
                    padding-left: 10px;
                }
            }
            .user-code{
                width: 48vw;
                height: 100%;
               input::-webkit-input-placeholder{
                    font-size:24px;
                    padding-top: 10px;
                }
                >input{
                    width: 100%;
                    height: 92%;
                    border: none;
                    font-size: 26px;
                    text-align: left;
                    background: transparent;
                    padding-left: 10px;
                }
            }
            .safe-code{
                width: 25vw;
                height: 100%;
                margin-left: 2vw;
                font-size: 30px;
                letter-spacing: 5px;
                background:rgba(75,102,175,0.5);
                color: #f2f2f2;
                font-weight: 700;
            }
        }
        .btns{
            width: 85vw;
            height: 100px;
            margin-top: 20px;
            margin-left: auto;
            margin-right: auto;
            .cancel{
                width: 70%;
                height: 100%;
                background: #CACACA;
                color: white;
                font-size: 30px;
                border-radius: 10px;
                border: none;
            }
            .sure{
                width: 70%;
                height: 100%;
                margin-left: 10%;
                background: #4B66AF;
                color: white;
                font-size: 30px;
                border-radius: 10px;
                border: none;
            }
        }
        .clause{
            width: 100vw;
            height: 100px;
            margin-top: 50px;
            padding-top: 40px;
            padding-bottom: 50px;
            background: #F7F6FB;
            .van-checkbox__icon .van-icon{
                border:1px solid #000;
                margin-bottom: 8px !important;
            }
            span{
                color: #4B66AF;
            }
            .remarks{
                width: 90vw;
                height: auto;
                margin-left: auto;
                margin-right: auto;
                margin-top: 45px;
                line-height: 40px;
            }
        }
        .popup{
            .pop-clause{
                width: 100vw;
                height: 100vh;
                padding-top: 86px;
                background: white;
                .pop-close{
                    width: 98vw;
                    height: 50px;
                }
                .pop-title{
                    font-size: 35px;
                    font-weight: 700;
                    color: #4B66AF;
                }
                .pop-content{
                    padding: 5vw;
                    line-height: 40px;
                    text-align: justify;
                }
            }
        }
    }
</style>
