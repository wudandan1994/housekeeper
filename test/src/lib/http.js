import axios from 'axios'
import qs from 'qs'
// 封装POST请求
export const axiosPost = (url, params = {}) =>{;
    const _axios = axios.create({
        headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}
    });
    return _axios.post(url,qs.stringify(params)).then(res =>{
        if(res.data.code == -1){
            this.$toast('请重新登陆');
            setTimeout(()=>{
                window.location.href = '#/logIn';
            },1000);
        }
         return res; 
    }).catch(res =>{
        return res;
    })
}
// 封装GET请求
export const axiosGet = (url,params = {}) =>{
    const _url = url;
    const _axios = axios.create({
        timeout: 20000, //设置请求超时时间
    })
    return _axios.get(_url,qs.stringify(params)).then(res=>{
        return res;
    }).catch(res=>{
        return res;
    })
}