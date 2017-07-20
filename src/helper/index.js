export function JSONString(data) {
    return JSON.parse(JSON.stringify(data));
}
//时间格式转成字符串
export function formatDate(date) {
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    let d = date.getDate();
    let h = date.getHours()
    let min = date.getMinutes()
    let s = date.getSeconds()
    d = d < 10 ? ('0' + d) : d;
    h = h<10 ? ('0' + h) : h
    min = min<10 ? ('0' + min) :min
    s = s<10 ? ('0' + s) :s
    return y + '-' + m + '-' + d + ' ' + h + ':' + min+':'+s;
}
/*
 *获取时间
 *standTime(timeStrap,'yyyy-MM-dd hh:mm:ss')
 *timeStrap 可以是UTC格式数据，也可以是时间戳
 ＊注意：时间戳需要传number类型
 *
 */
export function standTime(date,format){
    Date.prototype.format = function(format) {
        var date = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes() < 10 ? ('0' + this.getMinutes()) : this.getMinutes(),
            "s+": this.getSeconds() < 10 ? ('0' + this.getSeconds()) : this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            "S+": this.getMilliseconds()
        };
        if (/(y+)/i.test(format)) {
            format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        for (var k in date) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
            }
        }
        return format;
    };
    return new Date(date).format(format);
}

//根据ID，去对象数组中取得对应的名称（想要哪个字段就要哪个）
//用法在Merchart/detailed/market/market.vue
export function getNamefromId (id,arr,arrName,arrId) {
    if(arr.length){
        for(let i = 0; i < arr.length; i++) {
            if(arr[i][arrId] == id) {
                return arr[i][arrName];
            }
        }
    } else {
        return '';
    }
}


//验证不能为空
/*
 *const messageSuggest = [
 *  {name:' 商户名称',key:'merchantName',desc:'字数在4-50个字之间'},
 *  {name:' 商户地址',key:'aPrince'},
 *  {name:' 商户区域',key:'cityId'}
 *]
 *
 *datas为要验证的数据所在的对象
 ＊_this写死（this指向，调用$message）
 *callback为回调函数，用于执行后面的方法
 *suggestMessage(messageSuggest,datas,_this,callback)
 *具体用法看newAddvue模块
 *
 *
 */
export function suggestMessage(arr,obj,self,callback) {
    if(Object.prototype.toString.call(arr) === '[object Array]'){
        if(Object.prototype.toString.call(obj) == "[object Object]"){
            for(let i=0;i<arr.length;i++){
                if(!obj[arr[i].key]){
                    arr[i].desc = !!arr[i].desc?arr[i].desc:'不能为空';
                    self.$message({
                        message:arr[i].name+arr[i].desc,
                        type:'warning'
                    })
                    return false;
                }
            }
        } else {
            console.error('obj is not a object');
        }
    } else {
        console.error('arr is not a array');
    }
    if (typeof (eval(callback)) == 'function') {
        callback();
    }else {
        console.error('callback is not a function')
    }
}
