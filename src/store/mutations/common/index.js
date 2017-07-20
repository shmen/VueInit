export const UPDATE_DATA = (state, payload) => {
    let data = payload.data
    let hierarchy = payload.path.split('.')
    let stringKey = '';
    hierarchy.forEach(function (el) {
        stringKey += '["' + el + '"]';
    })
    //拼装语句
    let actionString = 'state' + stringKey + '='+'data'
    //执行语句
    eval(actionString)
};