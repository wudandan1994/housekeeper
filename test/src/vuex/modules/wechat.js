const state = {
    openid: '',
    headimg: '',
    nickname: ''
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
    }
}
export default {state,mutations}