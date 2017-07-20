import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions/index.js';
import mutations from './mutations/index.js';
import * as getters from './getters/index.js';

Vue.use(Vuex);

const state = { //仓库里面的数据放在这里
    list:{},
    active_list:{}
};

export default new Vuex.Store({ //创建一个仓库
    state,
    actions,
    getters,
    mutations
});
