import axios from "axios";


export function request(config) {
    const instance = axios.create({
        baseURL: 'http://127.0.0.1:8000',
        timeout: 15000,
        headers: {
            'Authorization':  window.localStorage.getItem('token')
        }
    })

    console.log("本次发送的token:", window.localStorage.getItem('token'))
    instance.interceptors.request.use(config => {
        return config;
    }, error => {
        console.log(error);
    })

    // 拦截响应
    instance.interceptors.response.use(res => {
        return res.data
    }, error => {
        console.log(error);
    })

    // 发送真正的网络请求
    return instance(config);
}


export function login (userInfo) {
    return request({
        method: 'post',
        url:    '/users/login',
        params:   {
            userName: userInfo.username,
            password: userInfo.password
        }
    })
}

export function signUp (userInfo) {
    return request({
        method: 'post',
        url:    '/users/signup',
        params: {
            userName: userInfo.username,
            password: userInfo.password,
        }
    })
}

export function addArticle(articleInfo) {
    return request({
        method: 'post',
        url:    '/articles/new_article',
        params: {
            articleTitle: articleInfo.articleTitle,
            articleContent : articleInfo.articleContent
        }
    })
}

export function showAllArticle() {
    return request({
        method: 'get',
        url:    '/articles/showAll',
        data: {

        }
    })
}


/*
export function deleteArticle(articleID) {
    return request({
        method: 'get',
        url:    '/articles/delete_article',
        params: {
            articleID: articleID
        }
    })
}


export function setCookie(name, value, Days)
{
    const exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}

export function getCookie(name)
{
    let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if(arr === document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}
 */