- npm info vue  查看vue有多少版本

- 1：后台mvc
  + M 数据
  + v 视图
  + c 控制器
- 2：vue.js 是MVVM框架
  - 数据可以影响视图；视图也能影响数据  

- 3:体验vue.js
  - 1）模板渲染 表达式{{}}  
  - 2）动态操作DOM属性 v-bind:title 简写 :title="动态的数据"  :class="动态的数据"
  - 3）条件判断 v-if
  - 4）基本事件 v-on:click(会报红但是不影响使用) 简写 @click
  - 5）循环 v-for="(key,index) in ary"
  - 6）阻止冒泡和阻止默认事件
    - 阻止冒泡：
      - e.stopPropagation?e.stopPropagation():e.cancelBubble=true;
      -  @click.stop vue提供的
    - 阻止默认事件：
       - e.preventDefault?e.preventDefaule();e.returnValue=true;
       -  @click.prevent vue提供的 
  - 7）键盘事件
    - @keydown @keyup @keypress
    - 使用指定的键
      - @keydown.enter  点击enter才会触发事件
      - @keydow.13      点击enter才会触发事件
      - @keydow.enter.ctrl 点击enter+ctrl才会触发事件
  - 8）动态绑定样式
    - ：class  非行间样式
      - {样式名：boolean} boolean从data数据中拿到的；
      - ：class="obj"
      ```
      // obj中可以通过boolean控制让哪个样式显示，不让哪个样式显示
       obj:{
          bg1:true,
          bg2:false,
      },

      ``` 
      - 以数组的形式，数组中的每一项，都相当于变量，变量中存真正的非行间样式；
      ```
         <h1 :class="[bg1Class,bg2Class]">你好222！！</h1>
          data:{ 
                 bg1Class:"bg1",
                 bg2Class:"bg2",
             },
      ```
    - ：style  非行间样式 
      - :style="{color:col1,background:col2}" 
      - :style="obj" 
      ```
         var app = new Vue({
                 el: "#app",
                 data: {
                     col1: "green",
                     col2: 'red',
                     obj: {
                         color: 'white',
                         background: 'blue'
                     }
                 },
             })
      ```
      
          
  
#### 01声明式渲染 
动态绑定DOM属性用v-bind:title，但是它会报红，所以写成:title="tip"  
```
<div id="app">
    <p title="我是提示">测试title</p>
    {{msg}}
    <!--动态绑定DOM属性用v-bind:title，但是它会报红，所以写成:title="tip"-->
    <!--<p v-bind:title="tip">鼠标悬停几秒钟查看此处动态绑定的提示信息！</p>-->
    <p :title="tip">鼠标悬停几秒钟查看此处动态绑定的提示信息！</p>
</div>

<script src="js/vue.js"></script>
<script>
    var app=new Vue({
        el:'#app',
        data:{//data中专门用来存数据
            msg:'你好',
            tip:'测试提示信息'
        }
    })
</script>

```  

#### 02条件，事件和循环：v-on； v-for如果是数组遍历，那么index就是数字;v-if
```
<div id="app">
    <!--绑定事件v-on:事件名，但是它会报红，应简写成@事件名=""-->
    <!--<button type="button" v-on:click="bok=!bok">点击显示和隐藏</button>-->
    <button type="button" @click="bok=!bok">点击显示和隐藏</button>
    <h1 v-if="bok">你能看到我</h1>
    <h1>你爱吃什么水果呢？</h1>
    <ul>
        <!--<li v-for="key in friuts">{{key}}</li>-->
        <!--<li v-for="(key,index) in friuts">{{key}}，我的索引是{{index}}</li>-->
        <li v-for="(key,index) in friuts">{{key.name}}，我的索引是{{index}}</li>
    </ul>
</div>
<script src="js/vue.js"></script>
<script>
    var app=new Vue({
        el:"#app",
        data:{
            bok:true,
            // friuts:['西瓜','荔枝','榴莲','芒果']//数组
            friuts:[//对象
                {name:'西瓜'},
                {name:'荔枝'},
                {name:'榴莲'},
                {name:'芒果'},
            ]
        }
    })
</script>

```  

#### 03事假绑定:methods
```
<div id="app">
    <p>{{msg}}</p>
    <button @click="reverseMessage">点击按钮翻转文字</button>
</div>
<script src="js/vue.js"></script>
<script>
    var app=new Vue({
        el:"#app",
        data:{//所有数据都写在data里面
            msg:'hello,奇ha!'
        },
        methods:{//所有的函数都写在methods里
            reverseMessage(){
                this.msg=this.msg.split('').reverse().join('')
            }
        }
    })
</script>
```

#### 04视图影响数据:v-once
```
<div id="app">
    <input type="text" v-model="msg">
    <h1>{{msg}}</h1>
    <h2 v-once>{{msg}}</h2>
</div>
<script src="js/vue.js"></script>
<script>
    var app=new Vue({
        el:"#app",
        data:{//所有数据都写在data里面
            msg:'我是默认数据'
        }
    })
</script>
```

#### 05vue自定义组件:component
```
<div id="app">
    <ol>
        <!--2.直接使用自定义的组件-->
        <!--3.通过自定义的属性，给自定义组件传数组-->
        <!--<ymy-leilei :todo="msg" ></ymy-leilei>-->
        <ymy-leilei v-for="item in ary" :todo="item.title" ></ymy-leilei>
    </ol>

</div>
<script src="js/vue.js"></script>
<script>
    //1.注册一个组件
    Vue.component('ymy-leilei',{
       props:['todo'],
       template:'<li>{{todo}}</li>'
    });
    var app=new Vue({
        el:'#app',
        data:{
            // msg:'hahah'
            // ary:["茴香饺子","凉皮","韭菜鸡蛋","油泼面"]
            ary:[
                {title:'茴香饺子'},
                {title:'凉皮'},
                {title:'油泼面'},
                {title:'油泼面'}
            ]
        }
    })
</script>
```

#### 06表达式和遍历对象:v-html,v-for如果是对象遍历，那么index就是属性名；
```
<div id="app">
    <!--{{}}是表达式，支持 msg 赋值 三目（三元表达式）-->
    <h1>{{msg}} {{msg=321}} {{bok?"leilei":"ynm"}}</h1>
    <!--v-html标签进行渲染，{{}}其实是数据渲染-->
    <div v-html="msg2"></div>
    <p v-for="(item,index) in obj">{{index}}:{{item}}</p>
</div>
<script src="js/vue.js"></script>
<script>

    var app=new Vue({
        el:'#app',
        data:{
           msg:'hah',
           bok:false,
            msg2:'<h1>我是文章的标题</h1>',
            obj:{
               name:'ymey',
                age:13
            }
        }
    })
</script>
```

#### 07区分v-show(把元素display:none)和v-if(把元素彻底删除)

#### day2 04动态绑定样式-class 
  - 1 :class="{bg1:bok,bg2:!bok};
  - 2 :class="obj";
  - 3 :class="[bg1Class,bg2Class]";
```
<style>
        .bg1{
            background: red;
        }
        .bg2{
            color:blue;
        }
    </style>

<div id="app">
    <!--<button @click="bok=!bok">变</button>-->
   <!--<h1 :class="{bg1:bok,bg2:!bok}">你好，圆梦源！！</h1>-->

    <button @click="fn">变1</button>
   <!--<h1 :class="obj">你好！！</h1>-->

    <h1 :class="[bg1Class,bg2Class]">你好222！！</h1>

</div>
<script src="js/vue.js"></script>
<script>
    var app=new Vue({
        el:"#app",
        data:{
            bok:true,
            obj:{
                bg1:true,
                bg2:false,
            },
            bg1Class:"bg1",
            bg2Class:"bg2",
        },
        methods:{
            fn(){
                this.obj.bg1=false;
                this.obj.bg2=true;
            }
        }

    })
</script>
```


#### 前端请求有三种
- body-parse也是表单提交，但是只能传小型的表单
- formidable也是表单提交，但是能传大型文件的表单
- vue-resource是vue的一款插件，它可以通过XMLHttpRequest或JSONP发起请求并处理响应。也就是说，$.ajax能做的事情，vue-resource插件一样也能做到


#### 生命周期
```
 beforeCreate(){
         alert('beforeCreate创建前')
       },
       created(){
           alert('created创建后')
       },
       beforeMount(){
           alert('beforeMount挂载前')
       },
       mounted(){
           alert('mounted挂载后')
       },
       beforeUpdate(){
           alert('beforeUpdate更新前')
       },
       updated(){
           alert('updated更新后')
       },
       beforeDestroy(){
           alert('beforeDestroy销毁前')
       },
       destroyed(){
           alert('destroyed销毁后')
       }
```
- app.$destroy();//手动销毁
  - 完全销毁一个实例。清理它与其它实例的连接，解绑它的全部指令及事件监听器。
  - 触发 beforeDestroy 和 destroyed 的钩子。  
  - 在大多数场景中你不应该调用这个方法。最好使用 v-if 和 v-for 指令以数据驱动的方式控制子组件的生命周期。


#### v-cloak 防止闪烁问题，需要俩步
- 1在标签上，添加属性 v-cloak
- 2在style样式中，设置[v-cloak]{display:none}

#### 计算属性 computed
- getter
```
        computed:{
            //虽然这里放的是函数，但是，可以把total当做变量来使用；
            /*total(){//只是得到计算后的结果  getter（得到）
                return this.n*this.m
            }*/
            total:{
                get:function () {//getter（得到）
                    return this.n*this.m
                },
                set:function (newValue) {
                    //newValue:新的total的值，变量更新之后的值
                    // this.n=Math.round(this.total/this.m);//这里的this.total是旧数据
                    // this.n=Math.round(newValue/this.m);
                    this.m=Math.round(newValue/this.n);
                }
            }
        }
```

- 实例上的一些常用方法
  - 拿到元素：app.#el
  - 拿到数据
    - app.$data.属性名
    - app.属性名
  - 拿到自定义属性
    - app.$options.自定义的属性名  

- 公共组件
  - 多个实例都能使用这个组件

- 基本组件封装涉及的知识
  - 注册组件：如果通过Vue.component注册是公用组件
  - 组件自己内部的数据
    data(){
     return{ msg:123}  
     }
  - 组件接受父组件传过来的数据，通过props属性
    -动态属性操作 :n="name"  这个的name是个变量，它取决于父组件data中的值
    ```
    data:{
       name:xxx
    }
    ```
    +接收的时候，子组件
      - props:['n']=>不限制传过来的数据类型
      - props:{n:String}=>限制传过来的必须是字符串类型
      
    
    
 ```
<div id="app">
    <!--动态操作dom的属性-->
    <hello :n="name"></hello>
</div>
<div id="app2">
    <hello></hello>
</div>
</body>
<script src="js/vue.js"></script>
<script>
    //注册组件-共用组件
    Vue.component('hello',{
        // props:['n'],//通过属性接受父组件传过来的数据
        props:{n:String},//通过属性接受父组件传过来的数据,规定了数据类型，如果不同，则会报错
        template:'<h1>{{msg}}!{{n}}</h1>',
        data(){//data函数中，放的就是 "组件自己" 的数据
            return{msg:'hello11'}
        }
    });
    var app=new Vue({
        el:'#app',
        data:{
            name:'leil'
        }
    })
    var app2=new Vue({
        el:'#app2'
    })
</script>
```    

- 父组件通过props给子组件传递数据
- 子组件通过事件发射给父组件传递数据  this.$emit
- 兄弟组件之间的数据传递  event.$emit进行发射； event.$on进行绑定
- 数据同步，核心：传递对象利用的是引用数据类型对地址的引用
- 数据不同步，核心：1）返回的必须是基本数据类型 2）找一个临时的变量接受父组件传过来的数据；更改的其实是临时变量的值；

#### 父子组件 components
```
<div id="app">
    <parent :bb="leili"></parent>
</div>
<template id="temp1">
    <div>
        <h1>{{msg}}父组件{{bb}}</h1>
        <children :aa="msg"></children>
    </div>
</template>
<script src="js/vue.js"></script>
<script>
    var app=new Vue({
        el:'#app',
        data:{
            leili:'nihaoya'
        },
        components:{//一个实例中，可以有多个组件
            parent:{
                props:{bb:String},
                template:'#temp1',//模板
                data(){//parent的数据
                    return {msg:'hello!'}
                },
                components:{//一个父组件里面可以包含多个子组件
                    children:{
                        props:['aa'],
                        template:'<h2>{{aa}}子组件</h2>'
                    }
                }
            }
        }
    })
</script>
```
 
#### 子组件给父组件传递参数 $emit
```
<div id="app">
    <parent></parent>
</div>
<template id="parent">
    <div>
        <h1>parent父组件,{{name}}</h1>
        <children @s="aaa"></children>
    </div>
</template>
<script src="js/vue.js"></script>
<script>
    var app=new Vue({
        el:'#app',
        components:{
            parent:{
                template:'#parent',
                data(){
                    return {name:'糖宝'}
                },
                methods:{
                    aaa(data){
                        this.name=data;//接收子组件传过来的数据，同时更改父组件的数据
                    }
                },
                components:{
                    children:{
                        template:'<h2 @click="changeName">children子组件</h2>',
                        methods:{
                            changeName(){
                                //$emit发射了子组件的数据，'s'自定义事件名，vivian事件值
                                this.$emit('s','vivian')
                            }
                        }
                    }
                }
            }
        }
    })
</script>
```

#### 数据同步的核心：父组件给子组件传递 “引用数据类型的数据”
```
<div id="app">
  <parent></parent>
</div>
<template id="parent">
    <div>
        <h1>父组件 <mark>{{msg.name}}</mark></h1>
        <children :n="msg"></children>
    </div>
</template>
<template id="children">
    <div>
        <h2 @click="changData">子组件 <mark>{{n.name}}</mark></h2>
    </div>
</template>
<script src="js/vue.js"></script>
<script>
    //数据同步的核心：父组件给子组件传递 “引用数据类型的数据”
    var app=new Vue({
        el:"#app",
        components:{
            parent:{
                template:'#parent',
                data(){
                    return {msg:{name:'哈哈哈'}}
                },
                components:{
                    children:{
                        props:{n:Object},
                        template:"#children",
                        methods:{
                            changData(){
                                this.n.name='xixixixi'
                            }
                        }
                    }
                }
            }
        }
    })
</script>
```

#### 数据不同步的核心：找一个空值，将变量覆给空值
```
<div id="app">
    <parent></parent>
</div>
<template id="parent">
    <div>
        <h1>我是parent组件 <mark>{{msg}}</mark></h1>
        <children :n="msg"></children>
    </div>
</template>
<script src="js/vue.js"></script>
<script>
    var app=new Vue({
        el:"#app",
        components:{
            parent:{
                template:"#parent",
                data(){
                    return {msg:'tangbao'}
                },
                components:{
                    children:{
                        props:['n'],
                        template:'<h2 @click="sync">我是children <mark>{{b}}</mark></h2>',
                        data(){//先找一个变量，来接收传过来的数据，因为数据是基本数据类型，就相当于多复制了一份
                            return {b:this.n}
                        },
                        methods:{
                            sync(){
                                //当事件触发的时候，修改b的值
                               this.b="vivian"
                            }
                        }
                    }
                }
            }
        }
    })
</script>
```

#### 切换组件  重点component标签是核心，必须要写，它通过is决定显示哪个组件
```
<div id="app">
  <button @click="comp='zujian1'">显示组件1</button>
  <button @click="comp='zujian2'">显示组件2</button>
    <!--component标签是核心，必须要写，它通过is决定显示哪个组件-->
    <component :is="comp"></component>
</div>
<script src="js/vue.js"></script>
<script>
    var app=new Vue({
        el:"#app",
        data:{
            //显示哪个组件
          comp:'zujian1'
        },
        components:{
            zujian1:{
                template:'<h1>组件111</h1>'
            },
            zujian2:{
                template:'<h1>组件2</h1>'
            }
        }
    })
</script>
```

#### slot插槽
```
<div id="app">
    <hello>niyaoya!!
        <!--先给slot起好名字-->
    <div slot="div1">3333</div>
    <div slot="div2">4444</div>
    </hello>
</div>
<template id="temp1">
         <!--这是无名插槽-->   <!--有名插槽：根据名字决定插槽的顺序-->
    <h1>hello! <slot></slot> <slot name="div2"></slot> <slot name="div1"></slot></h1>
</template>
<script src="js/vue.js"></script>
<script>
    var app=new Vue({
        el:"#app",
        components:{
            hello:{
                template:'#temp1'
            }
        }
    })
</script>
```

#### 兄弟组件之间的数据传递  event.$emit进行发射； event.$on进行绑定
```
<div id="app">
    <tmp1></tmp1>
    <tmp2></tmp2>
</div>
<script src="js/vue.js"></script>
<script>
    var event=new Vue;//实例身上有  event.$emit  event.$on
    var app=new Vue({
        el:'#app',
        components:{
                tmp1:{
                    template:'<h1>组件1 {{msg}}</h1>',
                    data(){
                        return {msg:''}
                    },
                    mounted(){
                        //页面一加载进来的时候，就绑定好了
                        event.$on('leilei',(data)=>{
                            this.msg=data;
                        })
                    }
                },
                tmp2:{
                    template:'<h1 @click="sendData"> 组件2 {{msg}}</h1>',
                    data(){
                        return {msg:"hello"}
                    },
                    methods:{
                        sendData(){
                            //发布数据
                            event.$emit('leilei',this.msg)
                        }
                    }
                },

        }
    })

</script>
```

#### vue-router
- 基本路由配置，5步走
  - 1.创建一个实例，并进行配置
    ```javascript
    var Home={template:'<h1>home</h1>'};//#home 即使template模板的id
    var router=new VueRouter({
     routes:[
         {path:'/home',component:Home}
     ]
    })
    ```
  - 2.把配置好的router放入app的实例中
    ```javascript
    var app=new Vue({
        router,
        el:"#app"
    })    
    ```
  - 3.添加路由跳转
    ```
    在link中写具体路由
    <router-link to="/home">首页</router-link>
    ```    
  - 4.显示组件
    ```
    <router-view></router-view>
    ``` 
    - 5.设置默认路由
    ```javascript
     var router=new VueRouter({
         routes:[
             {path:'/home',component:Home},
             {path:'*',component:Home},
         ]
        })
    ```

- 子路由：
  - 1.需求，如果要在首页展示登录和注册按钮
    - 1）在Home组件的模板中设置如下
  ```
    在link中写具体路由
    <router-link to="/home/login">登录</router-link>
    <router-link to="/home/reg">注册</router-link>
    <router-view></router-view>
    ``` 
    - 2）到routers进行设置路由和模板
    ```javascript
         var router=new VueRouter({
             routes:[
                 {path:'/home',component:Home,
                  children:[
                      //注意：千万不要加"/",否则程序无法执行
                      {path:'/home/login',component:Login},
                      {path:'/home/reg',component:Reg},
                  ]
                 },
                 
             ]
            })
    ```
- 路由参数
  - 1.在router中设置模糊路由：'list/nems/:id'
  - 2.在router-link中设置具体路由：'/list/news/1111'
  - 3.通过$route.params.id来获取路由参数
  - 4.JS中通过
    ```
    //通过js获取路由参数（也就是id）
      berforeEnter(to,from,next){
        //接收参数  to.params.id
       next();//水流往下走，内容也会显示
        
    }
    ```
//day4的项目
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
 
 ### 数据请求components
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

### vue-cli
- 先安装 npm i -g -vue-cli
- 安装 vue init <template-name> <project-name>(你所起的名字)
  - e.g vue init webpack my-project

- <template-name>表示安装那什么样项目的vue(以下只是一部分)
  - webpack(有webpack的项目,一般用于大型项目)
  - webpack-simple(有webpack的单页面)
  - simple(单页面)

- 当运行完成上面的程序，就可以写项目了

