<template>
    <div class="login">
        <div class="login-win">
            <h2>请登录</h2>
            <div class="from">
                <label for="">用户名：</label><input v-model="user" placeholder="请输入用户名" />
            </div>
            <div class="from">
                <label for="">密码：</label><input v-model="password" type="password" placeholder="请输入密码" />
            </div>
            <button v-on:click="loading">登录</button>
            <!-- @click是v-on:click的简写方式 -->
            <button @click="reset">重置</button>
        </div>

    </div>
</template>
<script>
export default {
    name: 'login',
    data() {
        return {
            user:'',
            password:null
        }
    },
    methods: {
        loading(){
            this.$router.push({
                name:'page',
                query:{
                    uid:"shmen"
                }
            })
        },
        reset(){
            this.user = ""
            this.password = null
        }
    },
    mounted() {

    }
}
</script>
<style lang="scss" rel="stylesheet/scss">
.login {
    width: 100%;
    height: 100%;
    position: relative;
    .login-win {
        position: absolute;
        top:50%;
        left: 50%;
        width: 500px;
        padding: 20px 0 30px;
        margin-left: -250px;
        transform: translateY(-50%);
        text-align: center;
        box-shadow: 0 0 10px 2px #ccc;
        border-radius: 20px;
        h2 {
            font-size: 30px;
            line-height: 50px;
        }
        .from {
            margin-top: 30px;
            label {
                display: inline-block;
                width: 64px;
                text-align: right;
            };
            input {
                height: 30px;
                padding-left: 10px;
                border-radius: 4px;
                border:1px solid #ccc;
                outline: none
            }
        }
        button {
            width: 60px;
            height:30px;
            line-height: 30px;
            background: blue;
            color: #fff;
            border:none;
            margin: 30px 10px 0;
            border-radius: 4px;
            cursor: pointer;
        }
    }
}
</style>
