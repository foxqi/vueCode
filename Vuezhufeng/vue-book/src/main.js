// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

import VueAwesomeSwiper from 'vue-awesome-swiper';//导入轮播图插件
// require styles
import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper);//使用轮播图插件

//图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4033403235,737701004&fm=26&gp=0.jpg',
  loading: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564394638635&di=6d58f2fd6dd64e56eea5c18b020354f4&imgtype=0&src=http%3A%2F%2Fwww.missyuan.net%2Fuploads%2Fallimg%2F120703%2F1F4543522-0.jpg',
  attempt: 1
});
//进入路由之前，每一次都会执行此方法,全局钩子
router.beforeEach(function (to,from,next) {
  document.title=to.meta.title;
  //点击列表页但实际去添加页，具有拦截功能
  // if(to.path=='/list'){
  //   next({path:'/add'})
  // }else{
  //
  // }
  next();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
