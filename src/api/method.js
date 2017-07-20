import Vue from 'vue'
import Resource from 'vue-resource'
Vue.use(Resource)
Vue.http.options.xhr = { withCredentials: true }
Vue.http.options.emulateJSON = true
Vue.http.options._timeout = 10000
Vue.http.interceptors.push((request, next) => {
    let timeout;
    // 这里改用 _timeout
    if (request._timeout) {
        timeout = setTimeout(() => {
            //自定义响应体 status:408,statustext:"请求超时"，并返回给下下边的next
            next(request.respondWith(request.body, {
                status: 408,
                statusText: '请求超时'
            }));
        }, request._timeout);
    }
    next((response) => {
        clearTimeout(timeout)
        return response
    })
})

/*公共的resource请求方法*/
export default function ({url,method='POST',params,json = false}){
    const methods = method.toLowerCase() == 'post' ? 'post' : method.toLowerCase() == 'get' ? 'get' :'post'
    return Vue.http[methods](url,params,{emulateJSON:json}).then((res) => {
        return Promise.resolve(res.body)
    }).catch((err) => {
        return Promise.reject(err);
    })
}
