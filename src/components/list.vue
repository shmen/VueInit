<template>
    <div class="list">
        <h4>文章分类：{{active_list.name}}</h4>
        <ul>
            <li v-for="(el,index) in active_list.list" :key="index">
                <h2><a :href="el.url" target="_blank">{{el.name}}</a></h2>
                <p>{{el.des}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
    import { mapGetters } from "vuex"
    export default {
        name:'list',
        computed:{
            ...mapGetters(['active_list'])
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    .list {
        width: 980px;
        background: #fff;
        margin-top:10px;
        margin-right: 10px;
        padding: 14px;
        h4 {
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
        ul {
            li {
                border-bottom: 1px solid #ececec;
                padding: 20px 0;
                h2 {
                    font-size: 18px;
                    font-weight: bold;
                    line-height: 30px;
                    min-height: 30px;
                    margin-bottom: 4px;
                    a:hover {
                        text-decoration: underline;
                    }
                }
                p {
                    color: #888;
                    line-height: 24px;
                    font-size: 14px;
                }
            }
        }
    }

</style>
