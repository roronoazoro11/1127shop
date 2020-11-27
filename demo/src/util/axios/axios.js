import axios from 'axios'

import router from "../../router";

const http = axios.create({
    baseURL: '/api'
});

console.log(http, "实例");
http.interceptors.request.use(req => {
    let userInfo = sessionStorage.getItem("userInfo")
    ? JSON.parse(sessionStorage.getItem("userInfo"))
    : {};
    console.log(sessionStorage.getItem("userInfo"), "登录信息");
    req.headers.authorization = userInfo.token;
    return req;
});

http.interceptors.response.use(res => {
    console.log(res, "响应结果666");
    if (res.data.code == 403) {
        alert(res.data.msg);
        router.push("/login");
        return res;
    }else if (res.data.code == 500){
        alert(res.data.msg);
        router.push("/login");
        return res;
    }else{
        return res
    }
});


export default http