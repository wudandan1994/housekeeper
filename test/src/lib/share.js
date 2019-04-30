
import wx from 'weixin-jsapi'
import {axiosPost,axiosGet} from 'http'

export default {
    
  shareApp(){
    let url="http://pay.91dianji.com.cn/wxApi/cgi-bin/token?grant_type=client_credential&appid=wx779a30a563ad570d&secret=d89c480f3181c49cbee43d4cec49b4b0"
        axiosGet(url)
        .then(res=>{
            console.log(res,"app分享至微信好友及朋友圈")
        })
  }


}