import axios from 'axios'
import qs from 'qs'
import { hostUrl } from './config.js'
// 封装POST请求
export const axiosPost = (url, params = {}) =>{
    const _url = hostUrl + url;
    const _axios = axios.create({
        // timeout: 5000, //设置请求超时时间
        headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}
    });
    return _axios.post(_url,qs.stringify(params)).then(res =>{
        if(res.data.code == -1){
            // window.location.href = '#/logIn'
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