const Home = resolve => {
    require.ensure(['../views/Home.vue'], () => {
        resolve(require('../views/Home.vue'));
    }, 'js/Home');
};
const Login = resolve => {
    require.ensure(['../views/Login.vue'], () => {
        resolve(require('../views/Login.vue'));
    }, 'js/Login');
};
export default [
    {path: '/', name:'login', component: Login},
    {path: '/page', name: 'page', component: Home}
]
