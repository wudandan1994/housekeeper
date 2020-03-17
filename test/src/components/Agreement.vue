<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-23 14:35:05
 * @LastEditTime: 2019-08-23 15:30:40
 * @LastEditors: Please set LastEditors
 -->
<template>
    <transition name="van-fade">
        <div id="component-agree" v-if="agreeShow">
            <header>
                <div class="top">
                    <span class="start-center" @click="handleCloseAgree"><van-icon name="arrow-left" color="#ffffff" size="22px"/>返回</span>
                    <span class="end-center"></span>
                </div>
            </header>
            <div class="title center" v-if="type == 'agree'">钱夹宝加油服务协议</div>
            <div class="content" v-if="type == 'agree'">
                为明确双方的权利和义务，规范双方业务行为，在您（用户）使用本平台中石化/中石油加油卡委托办理及充值服务前，须仔细阅读本协议服务条款。本协议已对与您的权益有或可能具有重大关系的条款，及本公司具有或可能具有免责或限制责任的条款用粗体字予以标注，提请您注意。当您发起充值后，即表示您同意受本协议约束，承诺接受并遵守本协议的约定，同意并接受全部服务条款及条件。
                <h2 style="margin-top:15px;font-weight:700">一、协议订立、修订及终止</h2>
                1、用户在线确认或书面签署《中国石化/中国石油加油卡网上营业厅用户服务协议》及本协议后，方可使用本平台中石化/中石油加油卡委托充值服务（以下简称“服务”）</br>
                2、本平台在必要时可修改本协议，并在本网站进行公告，自公告之日起生效。如您继续使用网上充值服务，则视为您已接受修订的充值协议</br>
                3、如遇国家或中国石化销售有限公司/中国石油天然气集团公司政策调整的，本平台有权终止本协议，因该种情况终止本协议的，本平台不承担违约责任。</br>
                4、在下列情况下，本平台可以中断或拒绝对您的服务：</br>
                (1) 不可抗力；</br>
                (2) 为维护、检修、升级系统的需要以及相关第三方为维护、检修、升级系统所使用的主机、电力设备、公共网络等相关配套设施需要；</br>
                (3) 您存在违反法律法规及本协议内容的行为，经本凭条通知后在规定期限内不予更正的；</br>
                (4) 司法机关或政府行政机关依照法定程序要求本平台中断对您的服务的；</br>
                (5) 为公共利益的需要必须中断对您的服务的；</br>
                (6) 您拒绝提供代充值服务所必须的信息的；</br>
                (7) 其他必须中断服务的情况。</br>
                <h2 style="margin-top:15px;font-weight:700">二、服务内容</h2>
                1、充值服务仅支持中国石油化工股份有限公司（以下简称“中国石化”）、中国石油天然气集团公司（以下简称“中国石油”）发行的主卡、个人记名卡，以及由本平台发行的车队卡副卡；</br>
                2、您保证提供的身份证明、联系电话、加油卡卡号等信息真实，对于因您提供信息不真实或不完整所造成的损失由您承担且您对通过以上信息完成的一切交易负责。</br>
                3、充值完成后请您携带加油卡到中国石化/石油任意发卡充值网点，将网上充值资金圈存到加油卡中，即可使用充值资金。</br>
                4、您发现自身未按规定操作，或由于自身其他原因造成充值指令未执行、未适当执行、延迟执行的，应及时通过拨打客服电话。</br>
                <h2 style="margin-top:15px;font-weight:700">三、用户隐私保护</h2>
                1、本平台保证不对外公开或向第三方提供用户信息及用户在使用网络服务时存储在本网站上的非公开内容，但下列情况除外：</br>
                (1) 事先获得用户的明确授权；</br>
                (2) 根据有关的法律法规要求；</br>
                (3) 按照相关政府主管部门的要求；</br>
                (4) 为维护社会公众的利益；</br>
                (5) 为维护用户的合法权益；</br>
                (6) 不可抗力所导致的用户信息公开；</br>
                (7) 不能归咎于本站的客观情势，导致用户信息的公开；</br>
                (8) 由于本网站的硬件和软件的能力限制，所导致用户信息的公开；</br>
                (9) 符合用户利益要求的。</br>
                2、本平台已建立了合理的安全体系，包括数据加密体系、内部安全防范体系，以使用户数据保密。但用户了解并同意本平台在现有技术条件下无法完全杜绝全部的非安全因素，但本平台会及时更新体系，妥善维护网络及相关数据。</br>
                
                <h2 style="margin-top:15px;font-weight:700">四、免责声明：</h2>
                1、本平台提供的是中石化/中石油加油卡委托充值服务，您接受本协议，意味着您同意本平台使用您填写的充值信息进行代充值，包括但不限于授权使用您的充值信息执行查询、充值、验证等操作，同时您必须遵守中国石化/中国石油网上营业厅规定的服务条款(<a href="www.sinopecsales.com">www.sinopecsales.com</a>/<a href="www.95504.net">www.95504.net</a>中石化/中石油服务条款地址)；</br>
                2、如果您提供自有的中国石化/中国石油网上营业厅账号用于委托充值服务，表示您同意将您的中国石化/中国石油网上营业厅账号和密码授权给本平台托管，以方便为您执行查询、充值等操作，平台也将严格保护您的隐私信息。如发生账号及密码信息变更，请及时在本平台更新，本平台不对因此带来的查询、代充值等操作失败问题承担责任；</br>
                3、我司不对因中国石化/中国石油网上营业厅政策调整、系统升级等原因造成的用户损失承担任何责任，因上述原因、您自身原因或其他不可抗力发生的退款或差额以中国石化/中国石油网上营业厅实退或实收为准。</br>
              
                <h2 style="margin-top:15px;font-weight:700">  五、法律适用和管辖</h2>
                1、本协议之效力、解释、变更、执行与争议解决均适用中华人民共和国法律，法律无明文规定的，应适用本平台相关协议、附属规则及服务政策。</br>
                2、如缔约方就本协议内容或其执行发生任何争议，双方应尽力友好协商解决；协商不成时，任何一方均可向人民法院提起诉讼。
            </div>

            <div class="title center" v-if="type == 'Entrust'">授权委托书</div>
            <div class="content" v-if="type == 'Entrust'">
                委托人： </br>
                证件类型：身份证</br>
                证件号： </br>
                受托人：传帮带（上海）网络科技有限公司</br>
                证件类型：营业执照</br>
                证件号：91310113093702836l</br>
                1、委托人不可撤销的授权受托人将其身份信息资料提交给第三方电子签名服务商和第三方CA认证机构，由受托人协助委托人向第三方电子签名服务商申请由CA认证机构生成、第三方电子签名服务商代发的数字证书。</br>
                2、委托人不可撤销的授权受托人出于向委托人提供加油服务之需要，在钱夹宝平台进行加油卡充值业务交易时可以调用委托人的电子签章（CA证书）以委托人的名义用于相关服务协议的签署。</br>
                3、委托人调用该电子签名的行为视为受托人本人的操作，委托人对于受托人调用电子签章（CA证书）签订的前述电子合同产生的一切法律后果承担责任。</br>
                4、受托人超范围调用电子签名，给委托人造成损失的，应负责全部赔偿因此给委托人造成的经济损失。</br>
                5、委托人认可其在签订电子合同过程中提交的实名认证资料，并认可因上述操作产生的电子证据；若因合同履行产生纠纷，委托人认可本合同签订过程中产生的电子证据可直接作为纠纷处理依据。</br>
                6、本授权委托的有效期为  年  月  日起至  年  月  日止，授权有效期内禁止转委托。</br>
                7、本授权委托书自双方盖章后生效，二方各执一份，具有同等法律效力。</br>
                委托人(盖章)： </br>
                日期： 年  月  日</br>
                受托人(盖章)：传帮带（上海）网络科技有限公司</br>
                日期：年  月  日</br>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    data(){
        return{
            // agreeShow: false,
        }
    },
    props: {
        agreeShow: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: ''
        }
    },
    methods: {
        handleChangeShow(){
            this.agreeShow = !this.agreeShow;
        },
        handleCloseAgree(){
            this.$emit('closeAgree')
        }
    }
}
</script>
<style lang="less" scoped>
#component-agree{
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background: #fff;
    box-sizing: border-box;
    padding-top: 86px;
    overflow-x: hidden;
    overflow-y: auto;
    header{
        width: 100%;
        height: 86px;
        position: fixed;
        z-index: 2;
        top: 0;
        left: 0;
        background: rgba(60, 60, 60, 1);
        .top{
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            padding: 0px 20px;
            display: flex;
            display: -webkit-flex;
            justify-content: space-between;
            -webkit-justify-content: space-between;
            line-height: 86px;
            span{
                font-size: 30px;
                color: #ffffff;
            }
        }
    }
    .title{
        width: 100%;
        height: 8%;
        font-size: 32px;
        font-weight: 700;
    }
    .content{
        width: 100%;
        box-sizing: border-box;
        padding: 15px 30px;
        font-size: 28px;
        line-height: 45px;
        text-align: justify;
    }
}
</style>