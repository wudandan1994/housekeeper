<template>
    <div id="question">
        <header class="header-top row">
            <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">百问百答</div>
            <div class="right-icon varify center"></div>
        </header>
        <div class="big-title">一:信用卡问题</div>
        
        <div class="small-title">信用卡佣金怎么结算？</div>
        <div class="content">交通银行可以核卡秒结。光大普卡，光大白金卡，兴业，浦发，民生，是客户下卡后7-12个工作日自动结算，不需要查进度。上海，华夏是10-30个工作日自动结算，不需要查进度。中信，中国银行，平安标准卡，广州，广发银行，需要查进度核卡，核卡后10-30个工作日结算佣金。</div>
        
        <div class="small-title">实习会员办卡有佣金吗？</div>
        <div class="content">实习会员办卡没有佣金，实习会员办任何业务都没有佣金。</div>
        
        <div class="small-title">自己办卡有佣金吗？</div>
        <div class="content">正式代理自己办卡有佣金，实习会员办卡，上级正式代理拿佣金。</div>

        <div class="small-title">办信用卡到手了为什么没有佣金?</div>
        <div class="content">信用卡有佣金的条件: 1.首次申请该家银行卡； 2.审批通过有下卡短信；3.在钱夹包的申请人信息和跳转到银行页面的申请人信息保持完全正确并且一致；4.正式代理在自己的系统办卡有佣金，实习会员办卡，佣金分给上级正式代理。</div>

        <div class="small-title">申请的信用卡什么时候能下卡？</div>
        <div class="content">有三种情况：秒批，秒拒和待审核。都是银行根据申请人的资质条件来决定的，跟平台没有关系。</div>


        <div class="small-title">为什么申请办卡失败了？</div>
        <div class="content">信用卡申请后银行会根据客户提交的资料审核客户的资质，满足银行发卡条件的情况下，银行才会批卡。首页→信用卡办理→新手指南，可以参考学习一下，具体的审批进度你可以通过银行官网去查看下。</div>

        <div class="big-title">二. 智能还款问题</div>

        <div class="small-title">消费成功还款不到账？</div>
        <div class="content">请先确认银行信用卡网银明细是否到账（有没有绑定其他渠道自动扣款），如确实未到账，请提供推荐码+未到账订单给客服处理。</div>

        <div class="small-title">智能费率多少？</div>
        <div class="content">万70+1，例如你要还1万，需要70元的刷卡手续费，还款1笔加1元，还款10笔加10元。</div>

        <div class="small-title">超过计划时间两小时以上计划还未执行？</div>
        <div class="content">请提供推荐码给客服，需要删除计划重新制定计划。</div>

        <div class="small-title">逾期的信用卡可以使用吗?</div>
        <div class="content">不可以的，并且还款计划需要在账单日后，还款日前7天制定。</div>

        <div class="small-title">选择消费的城市和实际刷卡的城市不一致？</div>
        <div class="content">提供城市名字给客服，公司会签约更多的商户</div>


        <div class="small-title">卡内预留多少额度来还款比较好？</div>
        <div class="content">建议预留10%以上的额度，促进大额度还款，有助于快速提额。</div>

        <div class="small-title">智还的手续费是怎么扣的？</div>
        <div class="content">手续费是直接在信用卡额度里面扣的，预览账单后显示出的周转金包含了手续费；还款成功一笔，扣除这笔的手续费。</div>

        <div class="small-title">还款计划提前多久执行最好？</div>
        <div class="content">建议最好预留10天左右，最少为7天，10天以上的话可以在还款日3天前执行完毕，万一有任何问题也有充足的时间处理。</div>

        <div class="big-title">三. 商户收款问题</div>

        <div class="small-title">没到账怎么办？</div>
        <div class="content">请您先确认银行卡网银明细是否到账，如确实未到账，请您提供推荐码+未到账订单给客服处理。</div>

        <div class="small-title">商户收款可以一次绑定几张卡？</div>
        <div class="content">没有限制张数</div>

        <div class="small-title">商户收款费率多少？</div>
        <div class="content">大部分银行为0.65%+1.5/笔，根据会员级别最高可省0.14%+0.4/笔，实际费率0.51%+1.1/笔；招商，光大，邮政，浦发，交通银行是0.75%+1.5/笔，最高可省0.14%+0.4/笔，实际费率0.16%+1.1/笔。</div>

        <div class="small-title">商户收款不支持那些银行？</div>
        <div class="content">目前落地商户通道支持兴业，中信，中国，华夏，建设，民生，北京，广发，上海，平安，招商，光大，邮政，浦发，交通银行，其他银行陆续开放中</div>

        <div class="small-title">选择消费的城市额实际刷卡的城市不一致？</div>
        <div class="content">请提供一下所在的城市，我们部分地区的商户还没上传完。</div>

    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    methods:{
        handleReturnHome() {
            this.$router.push({path:'/personalCenter'})
        },
    }
}
</script>
<style scoped lang="less">
    #question{
        width: 100vw;
        height: auto;
        padding-top: 90px;
        padding-bottom: 50px;
        .big-title{
            width: 96%;
            height: auto;
             margin-left: auto;
            margin-right: auto;
            margin-top: 50px;
            font-size: 34px;
            font-weight: bold;
        }
        .small-title{
            width: 94%;
            height: auto;
             margin-left: auto;
            margin-right: auto;
            margin-top: 50px;
            font-size: 30px;
            font-weight: bold;
        }
        .content{
            width: 92%;
            height: auto;
            margin-left: auto;
            margin-right: auto;
            margin-top: 20px;
            font-size: 26px;
            text-align: justify;
            line-height: 30px;
            letter-spacing: 2px;
        }
    }
</style>
