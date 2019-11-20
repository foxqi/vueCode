import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import List from '../components/List.vue';
Vue.use(VueRouter);//和以前不一样的地方引入vue必须使用use,注册一些全局的内容
export default new VueRouter({
    routes:[
        {path:'/home',component:Home},
        {path:'/list',component:List},
    ]
});