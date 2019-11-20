//这是测试文件
// import Vue from 'vue/dist/vue.js';//1.这样写是可以的；但它很麻烦
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import route from './route';
import VueResource from 'vue-resource';//像这种npm下载的包不需要路径引入
import 'animate.css';
//因为在Button文件中是index的名称的js，所以在下面引入的时候不需要写成./components/Button
import leiButton from './components/Button'
/*axios
基于promise用于浏览器和node.js的http客户端
特点
支持浏览器和node.js
支持promise
能拦截请求和响应
能转换请求和响应数据
能取消请求
自动转换JSON数据
浏览器端支持防止CSRF(跨站请求伪造)*/
import axios from 'axios' //这种第三方模块可以直接引入

Vue.use(VueRouter);//可以把这个组件变成全局公用的组件
Vue.use(leiButton);
//Vue.use(VueResource);
Vue.prototype.$http=axios;//公共方法应用axios,就可以和resource相同的用法

//1.创建实例，并且引入配置
var router=new VueRouter(route);
var app=new Vue({
    router,//把router放入app实例
    el:"#app",
    // ...App  //3.扩展运算符 需要用到 stage-0
    //2.
    render:(h)=>h(App)
  /*1.  components:{//问题
        App
    }*/
})
