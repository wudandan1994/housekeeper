const state = {
    openid: '',
    headimg: '',
    nickname: '',
    promotioncode: '',
    recommendedcode: '',
    mobile: ''
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
    }

}
export default {state,mutations}