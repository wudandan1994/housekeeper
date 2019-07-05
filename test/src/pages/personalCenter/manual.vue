<template>
    <div id="manual">
        <header class="header-top row">
            <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">平台手册</div>
            <div class="right-icon varify center"></div>
        </header>
        <div class="big-title">概述-——首页简介</div>
        
        <div class="small-title">
            （1）菜单栏：点击可完善个人资料，展示个人信息</br>
            （2）主要功能区：此版块包括平台最重要功能，用户可在此版块进行在线收款、智能还款</br>
            （3）特色功能区：APP和各平台合作的功能区，用户可在此享受申请卡测评、违章查询、保险购买等功能</br>
            （4）精品功能：可快速进入相应的功能页面</br>
            <!-- （5）底部栏：可快速进入相应的功能页面</br> -->
        </div>

        <div class="big-title">VIP</div>
        <div class="small-title">
            会员升级区：用户可在此页面根据自身需求选择需要升级的会员身份
        </div>

        <div class="big-title">个人中心</div>
        <div class="small-title">
            （1）个人信息区：显示个人资料。并在此修改个人资料</br>
            （2）特约服务区 ：用户可在此进行账户管理、查看上级推荐人、分享名片、营销课堂等的功能</br>
            （3） 实用工具区：用户可在此功能区查看流程说明、退款说明及使用手册</br>
        </div>

        <div class="big-title">AI雷达</div>
        <div class="small-title">
           （1）个人信息区：显示个人资料。并在此修改个人资料</br>
           （2）可在此生成专属海报进行推广</br>
        </div>

        <!-- <div class="big-title">分享</div>
        <div class="small-title">
           （1）推广信息展示：此版块显示您的推广锁粉等粉丝信息</br>
           （2）可在此生成专属海报进行推广</br>
        </div> -->

        <div class="big-title">首页</div>
        <div class="small-title">
            <div class="per-bold-content"><span class="bold-title">收益明细：</span>在平台首页特色功能区点击（收支明细）进入详情页面，可在此页面查看你的收益信息</br></div>
            <div class="per-bold-content"><span class="bold-title">我的消息：</span>在平台首页特色功能区点击（消息）进入详情页面，可查看系统公告及佣金信息等推送消息</br></div>
            <div class="per-bold-content"><span class="bold-title">新人教程：</span>在平台首页点击（新人教程）进入详情页面，可在此页面查看钱夹宝操作教程</br></div>
             <div class="per-bold-content"><span class="bold-title">升级代理：</span>在平台首页点击（升级代理）直接跳转至VIP页面，可在此页面升级所需要的会员等级</br></div>
             <div class="per-bold-content"><span class="bold-title">签到打卡：</span>在平台首页点击（签到打卡）进入详情页面，可在此页面进行每日签到</br></div>
            <div class="per-bold-content"><span class="bold-title">信用卡办理：</span>在平台首页主要功能区点击（信用卡办理）进入详情页面，可在此页面申请办理信用卡</br></div>
            <div class="per-bold-content"><span class="bold-title">在线收款：</span>在平台首页主要功能区点击（在线收款）进入详情页面，可在此页面查看费率、交易记录等</br></div>
            <div class="per-bold-content"><span class="bold-title">信息咨询：</span>在平台首页主要功能区点击（信息咨询）进入详情页面，可在此页面贷款获取佣金</br></div>
            <div class="per-bold-content"><span class="bold-title">智能还款：</span>在平台首页主要功能区点击（智能还款）进入详情页面，可在此页面设定您的还款计划</br></div>
            <div class="per-bold-content"><span class="bold-title">卡测评：</span>在平台首页特色服务区点击（卡测评）进入详情页面，可在此页面测评你的卡片</br></div>
            <div class="per-bold-content"><span class="bold-title">垃圾分类：</span>在平台首页特色服务区点击（垃圾分类）进入详情页面，可在此页面搜索垃圾所属种类</br></div>
            <div class="per-bold-content"><span class="bold-title">汽车保险：</span>在平台首页精品功能区点击（汽车保险）进入详情页面，可在此页面办理汽车保险</br></div>
            <div class="per-bold-content"><span class="bold-title">意外险：</span>在平台首页精品功能区点击（意外险）进入详情页面，可在此页面在线办理意外险</br></div>
            <div class="per-bold-content"><span class="bold-title">商城：</span>在平台首页精品功能区点击（商城）进入详情页面，可在此页面进行商品上传</br></div>
            <div class="per-bold-content"><span class="bold-title">违章查询：</span>在平台首页精品功能区点击（违章查询）进入详情页面，可在此页面查询车辆违章信息</br></div>
        </div>

        <div class="big-title">个人中心</div>
        <div class="small-title">
            <div class="per-bold-content"><span class="bold-title">个人中心：</span>点击平台底部栏（个人中心）图标进入个人中心版块，此版块包含团队管理及收益、推广等功能</br></div>
            <!-- <div class="per-bold-content"><span class="bold-title">个人设置：</span>在个人信息区点击（头像）进入个人资料设置页面，在此页面修改资料及信息等</br></div> -->
            <div class="per-bold-content"><span class="bold-title">积分：</span>在个人中心点击（积分）进入详情页，查看个人积分情况</br></div>
            <div class="per-bold-content"><span class="bold-title">可结算：</span>在个人中心点击（可结算）进入详情页，查看个人可结算佣金</br></div>
            <div class="per-bold-content"><span class="bold-title">总收益：</span>在个人中心点击（总收益）进入详情页，查看个人总收益</br></div>
            <div class="per-bold-content"><span class="bold-title">账户管理：</span>在特约服务区点击（账户管理）进入个人账户管理页面，在此页面查看账单、提现等</br></div>
            <div class="per-bold-content"><span class="bold-title">上级推荐人：</span>在个人中心特约服务区点击（上级推荐人）进入详情页面，查看并与您的上级推荐人进行沟通</br></div>
            <div class="per-bold-content"><span class="bold-title">微名片：</span>在个人中心特约服务区点击（微名片）进入详情页面，进行名片分享</br></div>
            <div class="per-bold-content"><span class="bold-title">营销课堂：</span>在个人中心特约服务区点击（营销课堂）进入详情页面，在此页面你可学习充电，更早走向金融大咖</br></div>
            <div class="per-bold-content"><span class="bold-title">商务合作：</span>在个人中心特约服务区点击（商务合作）进入详情页面，如果你想对我们的渠道资源或是您有好的资源渠道，请留下您的联系方式，我们会尽快与您联系</br></div>
            <!-- <div class="per-bold-content"><span class="bold-title">共享佣金池：</span>在个人中心特约服务区点击（共享佣金池）进入详情页面，查看奖金池奖金额度，分配</br></div> -->
            <!-- <div class="per-bold-content"><span class="bold-title">VIP视频：</span>在个人中心实时工具区点击（VIP视频），可观看VIP专属视频福利</br></div> -->
            <div class="per-bold-content"><span class="bold-title">流程说明：</span>在个人中心实时工具区点击（流程说明）进入详情页面，在此页面您可查看平台业务操作流程</br></div>
            <div class="per-bold-content"><span class="bold-title">平台手册：</span>在个人中心实时工具区点击（平台手册）进入详情页面，在此页面您可查看平台业务板块说明</br></div>
            <div class="per-bold-content"><span class="bold-title">百问百答：</span>在个人中心实时工具区点击（百问百答）进入详情页面，在此页面可为您答疑解惑</br></div>
            <!-- <div class="per-bold-content"><span class="bold-title">退换说明：</span>在个人中心实时工具区点击（退换说明）查看平台保证金退还机制，保障自身权益</br></div> -->
            <div class="per-bold-content"><span class="bold-title">名片夹：</span>在个人中心实时工具区点击（名片夹）进入详情页面，在此页面查看收藏的名片</br></div>
            <!-- <div class="per-bold-content"><span class="bold-title">金融圈：</span>在平台底部栏点击（金融圈）进入进入广告页面，在此页面您可添加同行精英合作共赢</br></div> -->
            <div class="per-bold-content"><span class="bold-title">联系我们：</span>在个人中心实时工具区点击（联系我们）查看平台联系方式</br></div>
        </div>


          <div class="big-title">VIP</div>
        <div class="small-title">
            <div class="per-bold-content"><span class="bold-title">VIP：</span>底部栏点击（vip）直接跳转至VIP详情页，选择相应的会员等级进行升级。</br></div>                    
        </div>

        <div class="big-title">AI雷达</div>
        <div class="small-title">
            <div class="per-bold-content"><span class="bold-title">数据分析：</span>点击平台底部栏（AI雷达）图标进入模块，用户可在查看锁粉信息，浏览数量、点击次数等</br></div>
            <div class="per-bold-content"><span class="bold-title">新闻资讯：</span>在AI雷达页面点击（新闻资讯）详情页面，可在文章中植入广告用以锁粉</br></div>
            <div class="per-bold-content"><span class="bold-title">推广海报圈：</span>在AI雷达页面点击（推广海报图）进入详情页面，用户可在此生成专属推广海报</br></div>

            <div class="per-bold-content"><span class="bold-title">邀请好友：</span>在AI雷达页面点击（邀请好友）进入详情页面，用户可在此邀请好友</br></div>
            <div class="per-bold-content"><span class="bold-title">钱夹宝视频：</span>在AI雷达页面点击（钱夹宝视频）进入详情页面，用户可在此分享钱夹宝视频</br></div>
            <div class="per-bold-content"><span class="bold-title">名片推广：</span>在AI雷达页面点击（名片推广）进入详情页面，分享名片，快速增粉</br></div>
            <div class="per-bold-content"><span class="bold-title">生成短链接：</span>在AI雷达页面点击（生成短链接）进入详情页面，用户可在此快速生成短链接分享链接锁粉</br></div>
            <div class="per-bold-content"><span class="bold-title">链接转化二维码：</span>在AI雷达页面点击（链接转化二维码）进入详情页面，用户可再次快速生成二维码分享锁粉</br></div>
            <div class="per-bold-content"><span class="bold-title">分享链接：</span>在AI雷达页面点击（分享链接）进入详情页面，用户在此生链接分享给客户引流锁粉</br></div>
            <div class="per-bold-content"><span class="bold-title">信用卡链接：</span>在AI雷达页面点击（信用卡链接）进入详情页面，在此生成信用卡链接分享带锁粉功能</br></div>
            <div class="per-bold-content"><span class="bold-title">分享链接：</span>在AI雷达页面点击（分享链接）进入详情页面，在此生成分享钱夹宝链接</br></div>
            <div class="per-bold-content"><span class="bold-title">推广素材图：</span>在AI雷达页面点击（推广素材图）进入详情页面，在此可下载各种视频和图片进行推广</br></div>
            <div class="per-bold-content"><span class="bold-title">信用卡推广图：</span>在AI雷达页面点击（信用卡推广图）进入详情页面，生成信用卡推广图，一件锁粉</br></div>
            <div class="per-bold-content"><div class="per-bold-content"><span class="bold-title">物资下载：</span>在AI雷达页面点击（物资下载）进入详情页面，用户可在此下载宣传物料制作易拉宝、海报等</br></div></div>
        </div>


       


    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    methods:{
        handleReturnHome() {
            this.$router.go(-1);
        },
    }
}
</script>
<style lang="less" scoped>
    #manual{
        width: 100vw;
        height: auto;
        padding-top: 90px;
        padding-bottom: 50px;
        .big-title{
            width: 95%;
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
            margin-top: 20px;
            font-size: 28px;
            line-height: 40px;
            letter-spacing: 3px;
            .per-bold-content{
                margin-top: 20px;
                .bold-title{
                    font-weight: bold;
                }
            }
            
        }
        .content{
            width: 92%;
            height: auto;
            margin-left: auto;
            margin-right: auto;
            margin-top: 20px;
            font-size: 26px;
            text-align: justify;
        }
    }
</style>
