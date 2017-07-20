<template>
    <div class="sidebar">
        <h4 class="titlebar">文章分类</h4>
        <ul class="categorylist">
            <li v-for="(el,index) in list" @click="active(el)">{{el.name}}</li>
        </ul>
    </div>
</template>
<script>
    import { mapGetters,mapActions } from "vuex"
    export default {
        name:'sidebar',
        computed:{
            ...mapGetters(['list'])
        },
        methods:{
            ...mapActions(['updateData']),
            active(el){
                this.updateData({
                    path:'active_list',
                    data:el
                })
            }
        },
        data(){
            return {

            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    .sidebar {
        padding: 14px;
        background: #fff;
        width:290px;
        margin:10px;
        h4 {
            margin-bottom: 16px;
            height: 40px;
            padding-bottom: 10px;
            font-size: 18px;
            line-height: 30px;
            font-weight: 700;
            text-indent: 10px;
            position: relative;
            border-bottom:1px solid #ececec;
            &:before {
                content: '';
                position: absolute;
                top: 5px;
                left: 0;
                width: 5px;
                height: 20px;
                background: #3498db;
            }
        }
        li {
            height: 36px;
            line-height: 36px;
            font-size: 14px;
            color: #333;
            cursor: pointer;
            transition: all ease-in-out .2s;
            &:hover {
                padding-left: 10px
            }
        }
    }
</style>
