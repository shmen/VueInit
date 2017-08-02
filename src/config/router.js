//AMD组建懒加载
const Home = resolve => require(['../views/Home.vue'], resolve)
const Login = resolve => require(['../views/Login.vue'], resolve)

export default [
    {path: '/', name:'login', component: Login},
    {path: '/page', name: 'page', component: Home}
]
