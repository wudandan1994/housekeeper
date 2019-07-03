const state = {
    openid: '',
    headimg: '',
    nickname: '',
    promotioncode: '',
    recommendedcode: '',
    mobile: '',
    vip: '',
    level: '免费粉丝',
    iscertification: '0',
    amount: '0',
    city: '',
    notice: true,
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
    },
    city(state,city){
        state.city = city;
    },
    notice(state,notice){
        state.notice = notice;
    }
}
export default {state,mutations}