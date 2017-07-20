import Vue from 'vue'
import Resource from 'vue-resource'
Vue.use(Resource)
Vue.http.options.xhr = { withCredentials: true }
Vue.http.options.emulateJSON = true
Vue.http.options._timeout = 10000
Vue.http.interceptors.push((request, next) => {
    let timeout;
    // 這裡改用 _timeout
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
        return response;
    })
})
function Res(url,body,cb) {
    if (url) {
        Vue.http.get(url, body).then((response) => {
            if (typeof (eval(cb)) == 'function') {
                let body = response.bodyText;
                if(typeof body !== 'object'){
                    body = JSON.parse(body);
                }
                cb(body)
            } else {
                console.error('cb is not a function');
            }
        }, (response) => {

        });
    } else {
    }
}
export const getList = function (body, cb) {
    const url = './src/mock/list.json'
    Res(url,body,cb)
}
