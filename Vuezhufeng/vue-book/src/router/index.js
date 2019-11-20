import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/*
因为下面开始动态加载，所以不需要这些了
import Add from '../components/Add.vue';
import Home from '../components/Home.vue';
import Collect from '../components/Collect.vue';
import Detail from '../components/Detail.vue';
import List from '../components/List.vue';*/


export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },//重定向
    {
      path:'/home',
      component:()=>import('../components/Home.vue'),
      meta:{keepAlive:true,title:'首页'}
      },
    {
      path:'/add',
      component:()=>import('../components/Add.vue'),
      meta:{title:'添加'}
    },
    {
      path:'/collect',
      component:()=>import('../components/Collect.vue'),
      meta:{title:'收藏'}
    },
    //  /detail/1  {bid:1} 路径参数  必须有但是可以随机
    {
      path:'/detail/:bid',
      component:()=>import('../components/Detail.vue'),
      name:'detail'
    },
    {
      path:'/list',
      component:()=>import('../components/List.vue')
    },
    {
      path:'*',
      redirect:'/home'
    },//瞎写跳首页
  ],
});
