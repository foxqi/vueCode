import Vue from 'vue';//runtime不支持template,只支持render

//import Vue from 'vue/dist/vue.js';//如果引入的是这个，他里面包含compiler+runtime（此时router/index.js引入的是同一个Vue）
//compiler是用来生成template
//Vue实例中去除render,增加components:{App},template:'<App/>',
//但用这个不是很多，而且多了6kb

import App from './App.vue';//引入自定义组件
import router from './router/index.js';
import notify from './plugin/notify.js';
Vue.use(notify,{
    delay:2000
});//使用带有install的对象
new Vue({
    el:'#app',
    router,
    // components:{App},
    // template:'<App/>',
    render:h=>h(App)
});