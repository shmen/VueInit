<template>
<div class="login">
    <top :type='false'></top>
    <div class="banner"></div>
    <div class="main">
        <h2 class="tip-title">
            <span class="fl">欢迎回来</span>
            <small class="fr">还没账号？
                <a href="#" >立即注册</a>
            </small></h2>
        </h2>
        <div class="login-win">
            <div class="from-group">
                <label for="name">我的账号</label><input id="name" v-model="user" placeholder="请输入用户名" />
            </div>
            <div class="from-group">
                <label for="password">登录密码</label><input id="password" v-model="password" type="password" placeholder="请输入密码" />
            </div>
            <button v-on:click="loading">登录</button>
            <!-- @click是v-on:click的简写方式 -->
        </div>
    </div>
</div>
</template>
<script>
import top from '../components/top.vue'
export default {
    name: 'login',
    components: {
        top
    },
    data() {
        return {
            user: '',
            password: null
        }
    },
    methods: {
        loading() {
            if(this.user.trim() == ''){
                alert('请输入用户名')
                return false
            }
            this.$router.push({
                name: 'page',
                query: {
                    uid: this.user
                }
            })
        },
        reset() {
            this.user = ""
            this.password = null
        }
    },
    mounted() {

    }
}
</script>
<style lang="scss" rel="stylesheet/scss">
@import '../assets/style/common/_theme.scss';
.login {
    width: 100%;
    height: 100%;
    position: relative;
    .banner {
        height: 60px;
        margin-bottom: 40px;
        background:$login center bottom no-repeat;
        position: relative;
    }
    .main {
        width: 800px;
        margin: 0 auto;
        .tip-title {
            height: 30px;
            line-height: 30px;
            margin-top: 60px;
            margin-bottom: 40px;
            span {
                font-size: 36px;
                color: $login;
            }
        }
    }
    .login-win {
        .from-group {
            margin: 25px 0 0;
            padding-left: 116px;
            border: 1px #ededed solid;
            position: relative;
            height: 34px;
            line-height: 32px;
            font-size: 14px;
            label {
                position: absolute;
                top: 0;
                left: 0;
                width: 115px;
                height:100%;
                border-right: 1px #ededed solid;
                color: #666;
                background: #fafafa;
                text-align: center;
                overflow: hidden;
            };
            input {
                width: 100%;
                height: 100%;
                padding-left: 20px;
                border:none;
                outline: none;
            }
        }
        button {
            width: 288px;
            height: 46px;
            line-height: 46px;
            background: $login;
            color: #fff;
            border: none;
            margin: 30px 0;
            cursor: pointer;
        }
    }
}
</style>
