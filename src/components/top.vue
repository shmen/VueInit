<template>
    <div class="home-top">
        <div class="logo fl">
            <img src="../assets/images/logo.png" />
            {{name}}的博客
        </div>

        <div class="tool fr">
            <a href="javascript:">设置</a>
            <a href="javascript:" @click="signOut">退出登录</a>
        </div>
    </div>
</template>
<script>
    export default {
        name:'home-top',
        methods:{
            signOut(){
                this.$router.push({
                    name:'login'
                })
                delete sessionStorage.uid
            }
        },
        created(){
            this.name = sessionStorage.uid
        },
        data(){
            return {
                name:null,
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    .home-top {
        height: 50px;
        background: #3e4147;
        overflow: hidden;
        .logo {
            height: 50px;
            line-height: 50px;
            margin-left: 40px;
            font-size: 20px;
            color: #fafafa;
            img {
                vertical-align: middle;
                height: 30px;
                margin-top: -2px;
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
