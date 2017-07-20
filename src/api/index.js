import commonResource from './method' //引入封装好的resources请求方法
import config from './config' //引入接口地址配置文件

/**
 * [commonResource method里面封装好的方法]
 * @param  {[type]} params [对象参数]
 * params {
     url,           地址            必传
     method,        方法           不传默认post
     params,        参数           没参数就不传
     json,          是否是json     不传默认false
   }
 */

//无参数写法
const getList = (params) => commonResource({
    url: config.getList,
    method:'GET'
})

/*  有参数写法
    const getList = (params) => commonResource({
        url: config.getList,
        params:params,  参数详见上面的注释
        method:'GET'
    })
*/
export {
    getList
}
