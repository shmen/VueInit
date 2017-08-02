<template>
    <div class="list">
        <h4>
            文章分类：{{active_list.name}}
            <div class="fr">
                <label class="check-icon" for="checkedAll" :class="checkAll && 'checked'" v-if="isManage"></label>
                <span class="label-text" v-if="isManage">全选</span>
                <input
                    v-model="checkAll"
                    type="checkbox"
                    id="checkedAll"
                    class="hidden"
                    @click="checkAllFun"
                    v-if="isManage"/>
                <span
                    class="label-text cur"
                    :disabled="noCheck"
                    :class="noCheck && 'no-check'"
                    @click="remove"
                    v-if="isManage">删除选中</span>
                <button class="manage" @click="isManage = !isManage">管理</button>
            </div>
        </h4>
        <ul>
            <li v-for="(el,index) in active_list.list" :key="el.id">
                <h2>
                    <label
                        :for="'v-'+el.id"
                        :class="{'checked': checkbox.indexOf(el.id)!=-1}"
                        class="check-icon"
                        v-if="isManage"></label>
                    <input
                        :id="'v-'+el.id"
                        v-model="checkbox"
                        :value="el.id"
                        class="hidden"
                        type="checkbox"
                        @click="checkFun"
                        v-if="isManage"/>
                    <a :href="el.url" target="_blank">{{el.name}}</a>
                </h2>
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
            ...mapGetters(['active_list']),
            noCheck(){
                return this.checkbox.length == 0
            }
        },
        methods:{
            checkAllFun() {
                this.checkbox = []
                if(this.checkAll) {
                    this.active_list.list.forEach((el) => {
                        this.checkbox.push(el.id)
                    })
                }
            },
            checkFun() {
                this.checkAll = false
                if(this.checkbox.length == 0 || this.checkbox.length == this.active_list.list.length){
                    this.checkAll = true
                }
            },
            remove() {
                this.checkbox.forEach((el) => {
                    this.active_list.list.forEach((val,index) => {
                        if(val.id == el) {
                            this.active_list.list.splice(index,1)
                        }
                    })
                })
                //这个时候 this.active_list.list 里面的值就变化了 那么就会触发 $watch监听这个数据的函数
            }
        },
        mounted() {
            //$watch 监听函数 用来监听数据值的变化，在数据更改的时候执行
            this.$watch('active_list.list',function(){
                this.checkAll = false
                this.checkAllFun()
            })
        },
        data() {
            return {
                checkAll:false,
                checkbox:[],
                isManage:false
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    @import '../assets/style/common/_theme.scss';
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
                background: $theme;
            }
            .manage {
                margin-left: 10px;
                background: $theme;
                border:none;
                font-size: 14px;
                color:#f1f1f1;
                padding: 4px 10px;
                border-radius: 6px;
                cursor: pointer;
                outline: none
            }
        }
        .label-text {
            font-size: 14px;
            display: inline-block;
            text-indent: 0;
            color: $theme
        }
        .no-check {
            color: #ccc
        }
        .check-icon {
            display: inline-block;
            width: 20px;
            height: 20px;
            vertical-align: middle;
            margin-top: -2px;
            background-color: #ccc;
            border-radius: 4px;
            cursor: pointer;
            &.checked {
                background-image: url(../assets/images/blue.png);
                background-position: 4px 6px;
                background-repeat: no-repeat;
                background-color: $theme
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
                    transition: all ease-in-out .2s;
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
