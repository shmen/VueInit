<template>
    <div class="top">
        <div class="logo fl">
            <img src="../assets/images/logo.png" />
            Epoint
        </div>
        <div class="tool fr">
            <div v-if="type">
                <a href="javascript:">设置</a>
                <a href="javascript:" @click="signOut">退出登录</a>
            </div>
            <div v-else>
                <a href="javascript:">注册</a>
                <a href="javascript:">登录</a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'top',
        props:{
            type:{
                default:true,
                type:Boolean
            }
        },
        methods:{
            signOut(){
                this.$router.push({
                    name:'login'
                })
            }
        },
        created(){
            this.name = this.$route.query.uid
        },
        data(){
            return {
                name:null,
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    .top {
        height: 50px;
        background: #3e4147;
        overflow: hidden;
        .logo {
            height: 50px;
            line-height: 50px;
            margin-left: 40px;
            font-size: 24px;
            color: #fafafa;
            img {
                vertical-align: middle;
                height: 40px;
                margin-top: -6px;
                margin-right: 10px;
            }
        }

        .tool {
            color: #fff;
            line-height: 50px;
            margin-right: 40px;
            a {
                display: inline-block;
                margin-left: 20px
            }
        }
    }
</style>
