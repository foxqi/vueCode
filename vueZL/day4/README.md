### 需要安装的插件
- webpack: webpack webpack-dev-server 
- vue的编译： vue-loader  vue-template-compiler(模板编辑器) 
- babel:(支持es6，css，less,图片)
  - babel-core （babel的工具）
  - babel-cli （babel的工具）
  - babel-loader （编译js）
  - babel-preset-es2015 （支持es6）
  - babel-preset-stage-0 （为了支持es6里面的语法，比如箭头函数等）
  - style-loader （编译css）
  - css-loader（编译css）
  - less,less-loader(支持less语法)
- vue上线后的产品：vue  vue-router
-配置：html-webpack-plugin  
  
- 在package.json中的相关配置
```
   "scripts": {
         "test": "echo \"Error: no test specified\" && exit 1",
        //跑服务：一般是npm run dev,可以写成npm run start ;webpack-dev-server运行webpack --progress --colors运行颜色 ;--port 3000运行端口号;--content-base dist从哪个目录下开始编译,但是也可以不写，毕竟以后要打包到线上的dist目录了
         "start":"webpack-dev-server --progress --colors --port 3000"
         //上线之后的;-p压缩（在package上进行压缩）
         "build":"webpack -p"
       },
```
 
### 子组件和样式 
- 一个.vue的文件：template style script
- scoped 把样式私有化
- less
  - 下载 less less-loader
```
<!--scoped 私有域   lang="less"代表的是语言  rel="stylesheet"关联的是什么类型-->
<style scoped lang="less" rel="stylesheet">
```  
### vue里面的动画
- transition组件，让谁动，就用transition把谁包裹了；
- 配合第三方库来设置样式：animate.css
  - 使用 style上来天剑  enter-active-class="animated fadeIn" leave-active-class="animated fadeOut"
```
<template>
    <div>
        <h1>about 页面</h1>
        <button @click="bok=!bok">点击显示和隐藏</button>
        <!--方法一：<transition name="lei">-->

        <!--方法二：用animate-->
        <transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
            <h2 v-show="bok">你能看见我？</h2>
        </transition>

    </div>

</template>

<script>
    export default {
       data(){
           return {bok:true}
       }
    }
</script>

<style scoped>
    /* 方法一：自己写
    .lei-enter{
         opacity: 0;
     }
     .lei-enter-active{
         transition:all 1s;
         opacity: 1;
     }
    .lei-leave-active{
        transition:all 1s;
        opacity: 0;
    }*/
</style>
```    
 
 ### 数据请求
 - vue-resource
 - 通过Vue.use(VueResource) 注册为公共组件
   - this.$http.get()
   - this.$http.post()
   - this.$http.jsonp()
- axios
- 不能使用Vue.use来注册公共组件，必须使用Vue.portotype.$http=axios;
   - this.$http.get()
   - this.$http.post()
   - (jsonp这里它有些问题，自己去查)
 
 
  