const state = {
    openid: '',
    headimg: 'http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83ergq6eofyl10xQLzxvIY7HBUeQJiaDec2lWGkqiaoL78kkNtHUEBjaehuZd6Qbjicj9RVPfvpqHhnW8w/132',
    nickname: '',
    promotioncode: '',
    recommendedcode: '',
    mobile: '',
    vip: '',
    level: '实习',
    iscertification: '0',
    amount: '0',
}
const mutations = {
    openid(state,openid){
        state.openid = openid;
    },
    headimg(state,headimg){
        state.headimg = headimg;
    },
    nickname(state,nickname){
        state.nickname = nickname;
    },
    promotioncode(state,promotioncode){
        state.promotioncode = promotioncode;
    },
    recommendedcode(state,recommendedcode){
        state.recommendedcode = recommendedcode;
    },
    mobile(state,mobile){
        state.mobile = mobile;
    },
    vip(state,vip){
        state.vip = vip;
    },
    level(state,level){
        state.level = level;
    },
    iscertification(state,iscertification){
        state.iscertification = iscertification;
    },
    amount(state,amount){
        state.amount = amount;
    }

}
export default {state,mutations}