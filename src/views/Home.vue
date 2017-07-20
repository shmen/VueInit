<template>
    <div class="home">
        <home-top></home-top>
        <animate-layer></animate-layer>
        <div class="home-content">
            <div class="avatar">
                <img src="../assets/images/shmen'.jpg" alt="shmen" />
            </div>
            <div class="home-name">
                {{user}} 的个人主页
            </div>
            <div class="wrapper">
                <div class="fl">
                    <sidebar></sidebar>
                </div>
                <div class="fr">
                    <list></list>
                </div>
            </div>
        </div>
        <foot></foot>
    </div>
</template>

<script>
// 引入需要的组建
import homeTop from "../components/top.vue"
import sidebar from "../components/sidebar.vue"
import list from "../components/list.vue"
import animateLayer from "../components/animate.vue"
import foot from "../components/footer.vue"
// 引入定义好的接口请求方法
import { getList } from "../api"
// 引入 mapActions
import { mapActions } from "vuex"
export default {
    name: 'home',
    components: {
        /*将引入的Bus组件注入我们的组件对象中 import进来是不够的 还要让组件对象知道 */
        homeTop,
        sidebar,
        list,
        animateLayer,
        foot
    },
    methods:{ // methods参数用来声明组件下的方法
        // ...是es6的扩展符  ...mapActions我的理解是把vuex 上的写的action 拓展到methods上
        ...mapActions(['updateData'])
    },
    mounted(){ //
        console.log("组建加载好之后执行的函数")
    },
    created(){ // 在组件被创建时候将会执行此函数  相当于进入页面的自执行
        this.user = window.sessionStorage.uid
        getList({},(res) => {
            //这个就是刚才从mapActions上面拓展过来的方法 用来触发updateData函数
            this.updateData({
                path:"list",
                data:res
            })
            this.updateData({
                path:"active_list",
                data:res[0]
            })
        })
    },
    data() { // data用于存放组件的数据，必须是一个function，并且返回一个对象
        return {
            user: '这是home'
        }
    }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    .home-content {
        position: relative;
        z-index: 10;
        .avatar {
            margin: 30px auto 20px;
            padding: 4px;
            width: 110px;
            height: 110px;
            background: #fff;
            background: rgba(255,255,255,.8);
            position: relative;
            overflow: hidden;
            border-radius: 100%;
            img {
                width: 102px;
                height: 102px;
                display: block;
                border-radius: 100%;
            }
        }
        .home-name {
            display: block;
            margin: 0 auto 10px;
            width: 500px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            font-size: 24px;
            color: #333;
            z-index: 3;
        }
        .wrapper {
            width: 1300px;
            padding-bottom: 10px;
            background:#fafafa;
            margin: 190px auto 0;
            overflow: hidden;
        }
    }

</style>
