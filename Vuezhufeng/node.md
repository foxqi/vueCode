### 特殊符快捷按钮 &tim就出现提示x，到时候可以选择
### 如果起的名字不是一个单词，他会有绿色的波浪下划线，解决方法：选中右键->Spelling->save（保存在自己的字典里），就没有绿色波浪线下划线了
### keydown和keyup差一个单词，keydown的时候内容没有进入输入框内
### created()只有这一个钩子函数，其他的几乎是对象


## webstorm面板用法
- 提示有星号修改过  `Editor->General->Editor Tabs->勾选 Mark modified tabs with asterisk。`
- 写新的快捷tab写法 
  `Editor->Code Style -> Live Templates ->选择是哪类快捷键->比如vue:选中html/xml，点击右边绿色的加号，选择第一个。在Abbreviation：写上你起的快捷键的名字，在Template text中写入，正确的模板或者代码的内容。写好后点击下面的Define，出现chaneg即可 `
- 创建新的模板比如vue,
`点击文件夹右键new,选择Edit File Templates,点击绿色加号，填写name就是你起得名字，Extension是什么类型的比如vue,html，java,空白的大块输入框是你填写的模板的内容， ` 

## vue数据驱动（主要操作的是数据）
- jquery主要操作dom

## JS数据类型
- 基本数据类型 number string boolean null undefined
- Object function..
- Symbol(es6)

## {} []
- 操作数据的方法 
  - pop(删除数组最后一项) 
  - push（给数组末尾添加新内容） 
  - unshift(给数组开头添加新内容) 
  - shift（删除数组第一项）
  - slice(n,m)(从索引n开始，到索引m，但不包含m；可以通过负数截取) 
  - splice
    - 删除  splice(n,m) 作用：从索引n开始，删除m个； 返回值：被删除的数据以一个新数组的形式返回；原数组发生改变；
    - 添加 ary.splice(n,0,x);作用：从索引n开始，删除0个；把x的新内容添加到索引n之前； 返回值：空数组； 原数组发生改变；
    - 替换 ary.splice(n,m,x); 作用：从索引n开始，删除m个，替换成x新内容；返回值：被删除的数据以一个新数组的形式返回；原数组发生改变；
  - reverse()返回值：翻转后的数组； 原数组发生改变；
  - sort:sort(function(a,b){return a-b})（a-b从小到大排列，b-a从大到小排列）返回值：排序后的数组； 原数组发生改变；如果sort（）里面不传参，只能实现1-10以内的 
  - indexOf()从前往后找，找到返回的当前字符对应的索引；找不到返回的都是-1
  - lastIndexOf()从后往前找，找到返回的当前字符,对应的索引；找不到返回的都是-1；
  - concat:数组拼接：ary1.concat(ary2,ary3...) 
  
## 
- es5:
  - forEach 循环,没有返回值
  ```javascript
    /*forEach相当于for循环*/
    
    let arr=[1,2,3,4,5];
    arr.b='100';//数组的私有属性
    
    for(let i=0;i<arr.length;i++){//编程式
        console.log(arr[i]);
    }
    //面试题：forEach ，for in，for， for of的区别
    //或
    /*forEach不支持return*/
    arr.forEach(function (item,index) {//声明式，不关心如何实现，
       console.log(item);
    });
    
    for(let key in arr){//key 会变成 字符串类型,包括数组的私有属性也可以打印出来
        console.log(typeof key)//string
    }
    
    //es6语法
    for(let val of arr){//支持return 并且值of数组(不能遍历对象)
        console.log(val)
    }
    let obj={school:'zfpx',age:8};
    /*for(let val of obj){//支持return 并且值of数组(不能遍历对象)
        console.log(val)//报错 obj is not iterable，obj不能被迭代
    }*/
    //解决办法//Object.keys将对象的key作为新的数组,['school','age']，强制遍历对象
    for(let val of Object.keys(obj)){
        console.log(val)
        console.log(obj[val])//不能用‘.’，因为会把val当成字符串，而val是变量，只能用[]
    }
    ```
  - filter 过滤
  ```javascript
    //2)filter(过滤，一般用于删除)  是否操作原数组：不；  返回结果：过滤后的新数组；   回调函数的返回结果：如果返回true表示这一项放到新数组中
    //
    let newAry=[1,2,3,4,5].filter(function (item,index) {
        //不能写成2<item<5,因为先会比较2<item，不管是大是小都会返回boolean类型，true=1,false=0,那么再和5进行比较，会一直未true
        return item>2&&item<5
    });
    console.log(newAry);
  ```
  - map  映射
  ```javascript
    //3)map （映射，一般用于更新）  将原有的数组映射成一个新数组[1,2,3]   需求<li>1</li><li>2</li><li>3</li>
    //是否操作原数组：不；  返回结果：返回新数组；   回调函数的返回结果：回调函数中返回什么这一项就是什么
    
    let arr1=[1,2,3].map(function (item,index) {
        return `<li>${item}</li>`//``是es6中的模板字符串，遇到变量用${}取值
    });
    console.log(arr1.join(''));
  ```
  - some 
  ```javascript
    //6)some  （找true,找到true后停止，返回true,找不到返回false）
    let result1=arr3.some(function (item,index) {
        //找到含5的
        return item.toString().indexOf(5)>-1
    });
    console.log(result1);
    ```
  - every 
  ```javascript
    //6)every （找false，找到false后停止，返回false）
    let result2=arr3.every(function (item,index) {
        //找到含5的
        return item.toString().indexOf(5)>-1
    });
    console.log(result2);
    ```
  - reduce 
  ```javascript
    //8)reduce 收敛 4个参数,返回的是叠加后的结果，原数组不发生变化，回调函数返回的结果：
    //第一次，prev代表的是数组的第一项，next是数组的第二项，
    //第二次，prev是undefined（因为没有写返回值），next是数组的第三项
    let sum=[1,2,3,4,5].reduce(function (prev,next,index,item) {
        //arguments是类数组
        // console.log(arguments)
        console.log(prev,next);
        // return 100;//本次的返回值  会作为下一次的prev
        return prev+next; //(求合)
    });
    console.log(sum);
    
    let sum2=[{price:30,count:2},{price:30,count:3},{price:30,count:4}].reduce(function (prev,next) {
        console.log(prev,next);
        //0 + 60
        //60 + 90
        //150 +120
         return prev+next.price*next.count
    },0);//这里的0是默认指定第一次的prev
    console.log(sum2);
    
    
    //[[1,2,3],[4,5,6],[7,8,9]]二维数组改成一维数组
    let flat=[[1,2,3],[4,5,6],[7,8,9]].reduce(function (prev,next) {
        return prev.concat(next);
    });
    console.log(flat);
    ```
- es6:
  - includes 
  ```javascript
    //4)includes 是否包含
    let arr3=[1,2,3,4,55,555];
    console.log(arr3.includes(5));//返回是boolean,
    ```
  - find 
  ```javascript
    //5)find (找到具体的某一项) 返回找到的那一项，不会改变原数组 回调函数中返回true表示找到了，找到后就停止循环，找不到返回的是undefined
    let result=arr3.find(function (item,index) {
        //找到含5的
      return item.toString().indexOf(5)>-1
    });
    console.log(result);
    ``` 
#### 扩展运输符   ...args 对象中的扩展运算符(...)用于取出参数对象中的所有可遍历属性，拷贝到当前对象之中
```
let bar = { a: 1, b: 2 };
let baz = { ...bar }; // { a: 1, b: 2 }

Girl.prototype.emit=function (eventName,...args) {//['我','你','他']
    // [].slice.call(arguments,1)//除去第一个的数组
    // Array.from(arguments).slice(1);
   if(this._events[eventName]){
       // this._events[eventName].forEach(cb=>cb.apply(this,args));
       this._events[eventName].forEach(cb=>cb(...args));
   }
};
```    
## 箭头函数
```
https://www.cnblogs.com/fanzhanxiang/p/8888963.html
普通函数下的this:

在普通函数中的this总是代表它的直接调用者，在默认情况下，this指的是window，
在严格模式下,没有直接调用者的函数中的this是 undefined使用
call,apply,bind(ES5新增)绑定的,this指的是 绑定的对象
箭头函数中的this:

 箭头函数没有自己的this, 它的this是继承而来; 默认指向在定义它时所处的对象(宿主对象),
 而不是执行时的对象, 定义它的时候,可能环境是window,也有可能是其他的。
```
```javascript
//箭头函数arrow fn 不具备this,arguments
//自己家没有this就找上一级的this


//如何更改this指向，
//1)call apply bind
//2)var that=this;
//3)=>

//如何确定this是谁  看谁调用的， ‘.’前面是谁this就是谁

/*function a(b){
    return b+1
}
//变成以下
let a = b => b+1;//去掉function关键字，参数有一个可以省略小括号，小括号和大括号之间有一个箭头，如果没有大括号则直接是返回值，有大括号必须写return*/

// function a(b) {
//     return function (c) {
//         return b+c
//     }
// }
//闭包：函数执行的一瞬间叫闭包，执行完了就消耗的了，就彻底完了。
//真正的闭包产生不销毁的作用域，造成内存泄漏，当执行后返回的结果必须是引用数据类型，被外界变量接受此时这个函数不会销毁闭包经常用来模块化
//如下
// let a=function (b) {
//     return function (c) {
//         return b+c
//     }
// }();

//变成以下箭头函数
let a = b => c => b+c;//高阶函数（  >=俩个箭头的叫高阶函数）

console.log(a(1)(2));

// console.log()前没return也会执行，所以去掉return
// [1,2,3].forEach(item=>console.log(item));

//在vue中很多时候不能用箭头函数

```  
## node版本（https://nodejs.org/en/download/官网上的LTS是标准版，current是最新版），一般>8.5版本
## 编辑器
  - webstorm >2017以上版本
   - 看是否能允许node环境的方法是，右键单击是否有run并且点击是否能运行，file->setting和配置npm
   - 配置javascript属性，file->setting->搜索language->javascript->ECMAScript 6(只支持es6语法)/ React JSX(react语法和es6语法都支持，推荐使用此方法)
  - vscode
  - sublime

## 框架和库
- 框架 拥有完整的解决方案，我们写好人家调用我
- 库 jquery underscore zepto animate.css，我们调用他

## 渐进式（渐进增强）
- 声明式渲染 Declarative Rendering（无需关心如何实现）
- 组件系统 Component System
- 客户端路由 Client-Side Routing（vue-router）
- 大规模状态管理 Large Scale State Management（vuex）
- 构建工具 Build System（vue-cli）


## vue

##### vue 的概念
- vue.js(读音/vju:/,类似于view)是一套构建用户界面的 渐进式框架
- vue的特点
  - 核心只关注视图层（view）
  - 易学，轻量，灵活的特点
  - 适用于移动端的项目
  - 渐进式框架
- vue全家桶  核心vue.js + vue-router(路由，页面跳转) + vuex（组件开发） + axios（ajax调用）
- 通过组合完成一个完整的框架
- vue的俩个核心点
  - 响应的数据变化
    - 当数据发生改变 -> 视图的自动更新
  - 组合的视图组件
    - ui页面映射为组件树
    - 划分组件可维护、可复用、可测试  
- mvvm模式（angular，vue）双向
  - m：Model数据模型
  - v：view视图模板
  - vm:view-Model视图模型
- MVC（backbone） 单向，形成一个闭环
  - model数据
  - view 视图
  - controller 控制器      
- 兼容性,因为Object.defineProperty(es5)的没有替代方案
  - 不支持IE8及其以下版本，因为vue.js使用了IE8不能模拟的ECMAScript 5 特性。vue.js支持所有兼容 ECMAScript 5的浏览器


## 安装vue
- 学习的时候是像jquery的方式引入：CDN
  - `<script src="https://cdn.jsdelivr.net/npm/vue"></script>`
- npm安装 node package manager(包管理器)
  - npm init初始化（这个命令会一直提示你是否要填写的内容）
  - 会在当前目录下产生一个pacakge.json（这个文件里不能写注释）的文件，
    - 这个文件用来描述项目的依赖,
    - 不能有大写，特殊字符，中午，而且不要和安装的包的名字相同
  - npm init -y（直接产生文件）

- MIT 免费的协议

##### 简单应用，el，data
```
<div id="app">
    <!--moustache 小胡子语法 表达式 可以放赋值，取值，三元-->
    {{msg}}
</div>
<script src="../node_modules/vue/dist/vue.js"></script>
<script>
    //引入vue后会白给你一个Vue构造函数
     let vm=new Vue({ //vm == viewModel
         el:'#app',//告诉vue能管理哪个部分，querySelector
         data:{//data中的数据会被vm所代理
             msg:'hello,foxqi'//可以通过vm.msg取到对应的内容
         }

    });//这主要是用了Object.defineProperty方法
</script>
```

##### v-model，v-text，v-once ，v-html,v-model.number（存入的数据为number数据类型）  v-model.lazy当输入框失去焦点时更新数据
```
<div id="app">
    {{msg}}
    <!--表单元素： input checkbox textarea radio select-->
    <!--vue的“指令directive” 只是dom上的行间属性，vue给这类属性赋予了一定的意义 来实现特殊的功能，所有指令都以v-开头，-->

    <!--v-model会将msg的值会赋予输入框，输入框的值改变了会影响数据-->
    <input type="text" v-model="msg"><!--value属性默认情况下回被vue忽略掉 ，selectde checked 都没有意义-->
    <!--Object.defineProperty ES5-->

    <!--v-text=== {{}} 防止{{}}出现在页面上-->
    <div v-text="msg"></div>

    <!--v-once 只绑定一次 当数据再次发生变化 也不导致页面刷新-->
    <div v-once>
        {{msg}}
    </div>

    <!--v-html 把html当做html渲染,一定是可以信任的html-->
    <div v-html="p">{{p}}</div>
    
    <input type="text" v-model.number="product.productCount">这样存入的数据为number数据类型
    
    <!--.number是让输入框的值变成数字类型，  .lazy当输入框失去焦点时更新数据-->
    <input type="text" v-model.number.lazy="product.productCount">
</div>
<script src="../node_modules/vue/dist/vue.js"></script>
<script>
     let vm=new Vue({
         el:'#app',
         data:{
           msg:'hello',
             p:'<p>nini</p>'
         }

    });
</script>
```

####  vm.$set
```
<div id="app">
       {{a.school}}
       {{b.teacher}}
   </div>
   <script src="../node_modules/vue/dist/vue.js"></script>
   <script>
       //vue会循环data中的数据（数据劫持） 依次的增加getter和setter
        let vm=new Vue({
            el:'#app',
            data:{
               a:{school:''},//1.
               b:{}
            }
   
       });
        //使用变量时 先要初始化，否则新加的属性不会导致页面刷新
   
       vm.$set(vm.b,'teacher','qiqi');//2.此方法可以给对象添加响应式的数据变化
       //3.替换原对象
       vm.b={teacher:'qiqi8',age:8,address:'xxxx'}
   </script>
```

##### 普通的数组方法改操作不了值，变异方法可以使用： pop,push,shift,unshift,sort,reserve,splice
```
<div id="app">
    {{arr}}
</div>
<script src="../node_modules/vue/dist/vue.js"></script>
<script>
     let vm=new Vue({
         el:'#app',
         data:{
            arr:[1,2,3,4,5]
         }

    });
     //不管用：vm.arr[0]=100;//去改变数组中的某一项是监控不到的
     //不管用：vm.arr.length-=2;//也不能使用改变数组长度的方法

    //变异方法可以使用： pop,push,shift,unshift,sort,reserve,splice
    vm.arr.reverse()//[ 5, 4, 3, 2, 1 ]
    vm.arr=vm.arr.map(item=>item*=3);//filter,map赋值给新数组可以改变其值
</script>
```
#### v-for解决循环问题的 更高效 会复用原有的结构,key表示区分每一个子元素不同，所以尽量用动态数据不要用死值
```
<!--以前：拼字符串innerHTML-->
<!--vue提供了一个指令 v-for 解决循环问题的 更高效 会复用原有的结构-->
<div id="app">
    <!--要循环谁，就在谁的身上增加v-for属性 用in 或 of 都可以，但of编辑器报错，所以还是用in比较好-->
  <!--默认是 value of 数组（value,in） of/in 数组-->
    <ul>
      <li v-for="(fruit,index) in fruits">{{index}}{{fruit.name}}
      <ul>
          <li v-for="(c,childIndex) in fruit.color">{{index+1}},{{childIndex}}:{{c}}</li>
      </ul></li>
  </ul>

    <div v-for="c in 'aaa'">{{c}}</div><!--出现三个a-->

    <div v-for="c in 30">{{c}}</div><!--出现1-30的数字-->

    <div v-for="(value,key,index) in obj">{{index}}{{key}}{{value}}</div>
</div>
<script src="../node_modules/vue/dist/vue.js"></script>
<script>
     let vm=new Vue({
         el:'#app',
         data:{
             obj:{name:'zfpx',age:8,address:'xxx'},
             fruits:[
                 {name:'香蕉',color:['green','yellow']},
                 {name:'苹果',color:['red','green','yellow']},
                 {name:'西瓜',color:['pink']}
                 ]
         }

    });
</script>
```
```
 <transition-group enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
        <!--key表示区分每一个子元素不同，所以尽量用动态数据不要用死值-->
        <!--<div v-for="(a,index) in newArr" :key="index">{{a}}</div>--><!--如果选中切换数字，动画效果没有用，它会觉得是同一个元素比如index为0，把已有的保存下来了-->
        <!--修改办法，只要他的索引不是同一个，他就不会认为他们是同一个-->
        <div v-for="(a,index) in newArr" :key="Math.random()">{{a}}</div>
        <!--原理：v-for会默认会复用原理的dom元素，如果加了key，而且key不同他认为就是俩个人了-->
    </transition-group>
```
#### v-on: === @  事件
```
<!--所有绑定的方法都是window上的，所以没有外面的自执行函数。并且fn并且要加括号，函数才执行-->
<div onclick="fn()" id="btn">点我</div>
<div id="app">
    <!-- v-on: === @,这里的fn有参数加括号，无参数不用加括号-->
    <!--如果不传递参数 则不要写括号会自动传入事件源，如果写括号了要手动传入$event属性-->
 <div @click="fn($event,1)">点我啊啊啊啊</div>
</div>
<script src="../node_modules/vue/dist/vue.js"></script>
<script>
    // (function () {
        function fn() {
            alert(1)
        }
    // })();
    console.log(btn.onclick);
    /*    ƒ onclick(event) {
            fn()
            }
    */

     let vm=new Vue({//根实例
         el:'#app',
         data:{//都是数据
            a:1
         },
         methods:{//methods和data中的数据会全部放到vm上，而且名字不能冲突，冲突会报错，methods中的this指向的都是实例，也就是vm
             fn(event,a){alert(this);console.log(event,this.a)}
             //fn:()=>alert(this)//不能用箭头函数,指向的为window

         }

    });
</script>
```

#### modifiers修饰符 @keyup.enter，@keyup.a,@keyup.13,@keyup.ctrl.a,@dblclick(双击)

```
<div id="app">
    <!--modifiers-->
    <!--修饰符 @keyup.enter，@keyup.a,@keyup.13,@keyup.ctrl.a-->
    <input type="text" v-model="val" @keyup.13="add">
    <ul>
        <li v-for="(a,index) in arr">{{a}} <button @click="remove(index)">删除</button></li>
    </ul>
</div>
<script src="../node_modules/vue/dist/vue.js"></script>
<script>
     let vm=new Vue({
         el:'#app',
         data:{
             arr:[],
             val:'',
         },
         methods:{
             add(e){
                 // if(e.keyCode===13) {上面有快捷修饰符
                     this.arr.unshift(this.val);
                     this.val='';
                 // }
             },
             remove(i){
                 this.arr=this.arr.filter((item,index)=>index!==i)
             }
         }

    });
</script>
```

#### 
- vm =>viewModel 数据最终都会被vm所代理
- {{a}} 取值表达式，通过{{}}来进行取值,默认可以不写this，表达式，赋值运算，计算，三元表达式。尽量少写逻辑(computed)，
#### 指令：
  - dom元素的行间属性，vue提供了内置的指令，必须v-开头，v-model='a',后面的值均为变量
      - v-model (表单元素) 忽略掉value，checked,selected,将数据绑定到视图上，视图修改后会影响数据的变化
      - v-text 取代{{}}，v-cloak解决闪烁（块级）问题(但必须加样式[v-cloak]{display: none}才生效)，后期都可以不采用
      - v-once 绑定一次，数据在变化不会导致视图刷新，写在不想刷新的标签上
      - v-html 将html字符串转化成html
      - v-for  循环(数组，对象，字符串，数字)
      ```
        <div v-for="value in/of 数组"></div>
        <div v-for="（value，index） in/of 数组"></div>
      ```
#### 自定义指令 directives多个指令，操作dom的。fn(el,bingings)//el指代的是button按钮,bingings大部分操作属性值都在这里;
  - v-color-put在自定义指令中要用驼峰colorPut
```
<div id="app">
    <button v-color="flag">变色</button>
    <button v-color-put="flag">变色</button>
    <div v-drag class="a"></div>
    <div v-drag class="a"></div>
</div>
<script src="../node_modules/vue/dist/vue.js"></script>
<script>
     let vm=new Vue({
         //多个指令，操作dom的
         directives:{
             colorPut(el){
                alert(el)
             },
             //v-color可以不写v-
             color(el,bingings){//el指代的是button按钮,bingings大部分操作属性值都在这里
                 console.log(arguments)
                 el.style.background=bingings.value
             },
             drag(el){
                 el.onmousedown=function (e) {
                     var disx=e.pageX-el.offsetLeft;
                     var disy=e.pageY-el.offsetTop;
                     document.onmousemove=function (e) {
                         el.style.left=e.pageX-disx+'px';
                         el.style.top=e.pageY-disy+'px';
                     };
                     document.onmouseup=function () {
                         document.onmousemove=document.onmouseup=null
                     };
                     e.preventDefault();
                 }
             }
         },
         el:'#app',
         data:{
            flag:'red'
         }

    });
</script>
```      
#### 事件v-on(@)
   - 绑定给dom元素,函数需要定义在methods中，不能和data里的内容重名，this指向的实例，不能使用箭头函数，事件源对象，如果不写括号，可以自动传入，否则只能手动传入$event
    ```
    <div @事件名="fn"></div>
    ```
    
#### 安装
```
npm install vue axios bootstrap
```

##### checkbox,radio(同理)如果是复选框，只有一个复选框的时候，会把此值转化成boolean类型，如果true则代表选中;如果是多个checkbox 要增加value属性，并且数据类型是数组
```
<div id="app">
    <!--如果是复选框，只有一个复选框的时候，会把此值转化成boolean类型，如果true则代表选中-->
    <input type="checkbox" v-model="a">{{a}} <br>

    <!--如果是多个checkbox 要增加value属性，并且数据类型是数组-->
    爱好: <input type="checkbox" v-model="b" value="游泳">游泳
          <input type="checkbox" v-model="b" value="爬山">爬山
          <input type="checkbox" v-model="b" value="睡觉">睡觉
    {{b}}
</div>
<script src="../node_modules/vue/dist/vue.js"></script>
<script>
     let vm=new Vue({
         el:'#app',
         data:{
            a:false,
            b:[],
         }

    });
</script>
```
#### 在谷歌中下载Vue.js devtools插件，方便调试
- 在控制台会出现vue,点击<Root>就会出现data里面的数据

#### axios它是独立存在的，是为了获取ajax,
#### 钩子函数created在数据被初始化后会调用，this指向指的也是vm实例
```
<!--基于promise的-->
<script src="../node_modules/axios/dist/axios.js"></script>
<script>
     let vm=new Vue({
         el:'#app',
         //专门用来发送ajax的方法
         created(){//在数据被初始化后会调用，this指向指的也是vm实例,钩子函数
             /*axios.get('./carts.json').then(function (res) {//success
                this.products=res.data;
             },function (err) {//error
                 console.log(err);
             })*/
         //    上面的是普通函数其实是回调函数，回调函数里面的this是指window，所以要换成箭头函数，箭头函数里面的this指的是实例
             axios.get('./carts.json').then(res => {//success
                this.products=res.data;
             },err =>{//error
                 console.log(err);
             })
         },
         data:{
           products:[]
         }

    });
</script>
```

#### :和v-bind等价  指令：动态绑定数据
`<img :src="product.productCover" :title="product.productName">`

##### :class 动态绑定class。
   - 第一种方式是对象对象绑定 {className:isActive}，
   - 第二种方式是数组绑定:class="[class1,class2,'z']",:class="[class1,class2,{z:false}]
```
<div id="app">
    <!--:class绑定的样式 和 class绑定的不冲突-->
    <!--1)对象绑定 {className:isActive}-->
    <!--<div class="x " :class="{z:flag,y:false}">我还好</div>-->
    <!--2) 数组绑定:class="[class1,class2,'z']",:class="[class1,class2,{z:false}]-->
    <div class="x " :class="[class1,class2,'z']">我还好</div>
    <div class="x " :class="[class1,class2,{z:false}]">我还好</div>

    <div v-for="(a,index) in 10" :class="{x:index%2}">{{a}}</div>

</div>
<script src="../node_modules/vue/dist/vue.js"></script>
<script>
    //class="a b c", style="background:color"
    //第一种方式是对象，第二种方式是数组
     let vm=new Vue({
         el:'#app',
         data:{
             class1:'x',
             class2:'y',
            flag:true
         }

    });
</script>
```
##### :style 动态绑定样式
```
<div id="app">
    <!--对象语法-->
    <div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
    <div :style="styleObject"></div>
    <!--数组语法-->
    <div :style="[baseStyles, overridingStyles]"></div>
</div>
<script src="../node_modules/vue/dist/vue.js"></script>
<script>
    //class="a b c", style="background:color"
    //第一种方式是对象，第二种方式是数组
     let vm=new Vue({
         el:'#app',
         data:{
             activeColor: 'red',
             fontSize: 30,
             styleObject: {
                 color: 'red',
                 fontSize: '13px'
             }
         }

    });
</script>
```

#### 过滤器  filters 实例上可以用{{'123' | my(1,2,3)}}
```
<!--过滤器  原数据不变的情况下，只是改变显示的效果  管道符 | ，-->
 <td>{{product.productCount*product.productPrice | toFixed(2)}}</td>
 
js
         el:'#app',
         filters:{//可以有好多的自定义过滤器
             toFixed(input,param1){//这里的this指向的是window
                 return '￥'+input.toFixed(param1);//input代表的是管道符前面的内容，param1代表的是toFixed传递的参数
             }
         },
         //专门用来发送ajax的方法
         created(){//在数据被初始化后会调用，this指向指的也是vm实例,钩子函数
             this.getData();
         },
```
##### Vue.filter('my',(data)=>{})//全局过滤器
```
<div id="app1">{{'hello' | my}}</div>
<div id="app2">{{'hello' | my}}</div>
<script src="../node_modules/vue/dist/vue.js"></script>
<script>
    Vue.filter('my',(data)=>{//全局过滤器，过滤器要放到页面的顶部
        return 'zq'+data
    })
     new Vue({
         el:'#app1',
        /*filters:{
             my(data){
                 return 'zq'+data
             }
        }*/

    });
     new Vue({
         el:'#app2',
         data:{

         }

     });
</script>
```
##### change
```
<!--click点击时  checkbox的状态还没有改变  所以拿到的总是相反的，change可以保证只当值变化后再触发函数-->
                    <th>全选 <input type="checkbox" v-model="checkAll" @change="changChecked"></th>
```

##### computed 计算“属性”不是方法，computed不支持异步
- 方法不会有缓存，computed会根据依赖（归vue管理的数据，可以响应式变化的）的属性进行缓存
- 两部分组成有get和set（不能只写set，但能只写get）一般情况下，通过js赋值影响其他人，或者表单元素设置值的时候可以调用set方法

```
 <!--{{sum()}}这样写  数据一变化就会重新调用此函数  算出最新的结果，不会缓存上一次的结果 computed可以解决这个问题-->
                    <td colspan="6">总价格:{{sum() | toFixed(2)}}</td>
                    
                    
//当给全选赋值时，要影响其他人的变化，当页面刷新时，获取全选值，是根据下面的checkbox计算出来的结果给全选赋值
     computed:{//放在computed中最后也会放在vm上，不能和methods和data重名
        checkAll:{
            //当products的值变化时会重新计算
            get(){//默认值，必须要有return；get 和 set this指向实例 默认v-model会获取checkAll的值，所以会调用get方法
                return this.products.every(p=>p.isSelected);
            },
            set(val){//更改值；当我们给checkbox赋值的时候
               this.products.forEach(p=>p.isSelected=val);//单个的选择checkOne()也不需要了
            }
        },
         sum(){//如何计算属性写成函数 默认调用的就是get方法
             return this.products.reduce((prev,next)=>{
                 if(!next.isSelected) return prev;//如果当前没有被选中，就不加当前这一项
                 return prev+next.productPrice*next.productCount;
             } ,0);
         }
        /* sum:{//求和函数,sum的结果会被缓存，如果依赖的数据没有变化就不会重新执行
            get(){
                    return this.products.reduce((prev,next)=>{
                        if(!next.isSelected) return prev;//如果当前没有被选中，就不加当前这一项
                        return prev+next.productPrice*next.productCount;
                    } ,0)
                },
         }*/
     },
```
##### watch(当需要在数据变化时执行异步或者开销较大（有延迟）的操作时，这个方法是最有用的) 只有值变化的时候才会触发，支持异步了,其他情况我们更善于使用computed
```
<div id="app">
    <input type="text" v-model="a">
    {{msg}}
</div>
<script src="../node_modules/vue/dist/vue.js"></script>
<script>
     let vm=new Vue({
         el:'#app',
        /* watch:{//只有值变化的时候才会触发，支持异步了,其他情况我们更善于使用computed
             a(newVal,oldVal){//watch的属性名要和观察的人的名字一致
                 // console.log(newVal,oldVal)
                 this.msg='......';//中间状态：在输入的时候会等待，这就是在等待的时候出现的值
               setTimeout(()=>{
                   if(newVal.length<3){
                       return this.msg='太少'
                   }
                   if(newVal.length>6){
                       return this.msg='太多'
                   }
                   this.msg='';
               },100)
             }
         },*/
         data:{
           msg:'',
             a:''
         }

    });
     //这个方法和上面等价,但是注意this要改成vm
     vm.$watch('a',(newVal,oldVal)=>{//watch的属性名要和观察的人的名字一致
         // console.log(newVal,oldVal)
         vm.msg='......';//中间状态：在输入的时候会等待，这就是在等待的时候出现的值
         setTimeout(()=>{
             if(newVal.length<3){
                 return vm.msg='太少'
             }
             if(newVal.length>6){
                 return vm.msg='太多'
             }
             vm.msg='';
         },100)

     },)
</script>


//day3/todoList.html和todo.js中
created(){//ajax获取， 初始化数据
       // 如果localStorage中有数据就用有的，没数据就用默认的
       this.todos = JSON.parse(localStorage.getItem('data')) || this.todos
    },
watch:{
    //下面如果是函数的话，watch默认只监控一层的数据变化，(能监控增加以下，减少一项，但是监控不到数组里面的某个值变化)，所以下面变为对象为深度监控
  todos:{
      handler(){//默认写成函数，就相当于默认写了个handler

       //   localStorage默认存的是字符串，如果只是存this.todos，存到的是数据类型[Object object],所以先要转成json格式的字符串
       localStorage.setItem('data',JSON.stringify(this.todos))
      },deep:true
  }
},
```
##### v-if操作的是dom（可以和v-else-if,v-else连写）；v-show操作的是样式；动画
```
    <style>
        div>div{
            width: 100px;
            height: 100px;
            background:red;
        }
      /*  .v-enter{
            opacity: 0;
        }
        .v-enter-active{
            transition:1s linear;
        }
        .v-leave-active{
            opacity: 0;
            transition:1s linear;
        }*/
        .jw-enter{
            opacity: 0;
        }
        .jw-enter-active{
            transition:1s linear;
        }
        .jw-leave-active{
            opacity: 0;
            transition:1s linear;
        }
    </style>
</head>
<body>
<div id="app">
    <!--v-if操作的是dom v-show操作的是样式-->
    <!--如果频繁的切换dom使用v-show，当数据一开始就确定线路使用v-if更好一些,如果if不通过内部指令不会在执行了-->
    <!--只有dom从显示到隐藏，或者隐藏到显示， 才能使用vue的动画-->
    <button @click="flag=!flag">切换</button>
    <!--vue自定义的标签  （组件）-->
    <transition name="jw"><!--name可以改变上面css的v- 开头命名-->
        <div v-show="flag">qq</div>
    </transition>

</div>
<script src="../node_modules/vue/dist/vue.js"></script>
<script>
     let vm=new Vue({
         el:'#app',
         data:{
            flag:true
         }

    });
</script>
```
##### template
```
<div id="app">
    <!--template标签  是vue提供给我们的没有任何实际的意义，用来包裹元素用的，v-show不支持template，只有v-if可以使用-->
    <template v-if="true">
        <div>我很帅</div>
        <div>我很帅</div>
        <div>我很帅</div>
        <div>我很帅</div>
    </template>

    <div v-else>我非常帅</div>

    <button @click="cut=!cut">点我啊</button>
    <!--默认情况下在切换dom时相同的结构会被复用，如果不需要复用 需要加key-->
    <template v-if="cut">
        <label>注册</label>
        <input type="text" key="1">
    </template>
    <template v-else>
        <label>登录</label>
        <input type="text" key="2">
    </template>
</div>
<script src="../node_modules/vue/dist/vue.js"></script>
<script>
     let vm=new Vue({
         el:'#app',
         data:{
             cut:true,
            flag:false
         }

    });
</script>

```
##### animate.css :npm install animate.css
```
 <transition enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
        <div v-show="flag">qq</div>
    </transition>
    
    
   //day5/12.transition.html 
    <!-- mode 动画模式  in-out  out-in-->
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" >
        <!--<router-view></router-view>-->
        <!--要缓存谁，就把谁包起来即可-->
        <keep-alive>
            <router-view style="position: absolute;top: 0;left: 0;width: 100%"></router-view>
        </keep-alive>

    </transition>
```

#### vue第二天复习
- v-model(如果checkbox,select多选是数组，提供一个value属性)(radio,checkbox分组靠的是v-model),checked,selected不存在
- 修饰符 .number数字，.lazy延迟
- 按键修饰符  .enter.ctrl.keyCode
- 事件 
  - @事件.stop//停止事件传播
  ```
     stopPropagation阻止冒泡（阻止事件传播），cancelBubble=true;
  ``` 
  - @事件.capture
  ```
    xxx.addEventListener('click',fn,true)
  ```
 - @事件.prevent//也可以阻止a链接跳转
   ```
     preventDefault阻止默认事件,returnValue=ture;
   ```
 - @事件.once只绑定一次
 ```
   on('click') off('click')
   
 ```
 - @事件.self
 ```
  e.srcElement&&e.target 判断事件源绑定事件
 ``` 
 
 #### 实现单页开发的方式
 - 通过hash(哈希值)记录跳转的路径（可以产生历史管理）
 - 浏览器自带的历史管理的方法：history
   - history.go(-1) 跳转回上一页
   - history.go(1) 跳转回下一页
   - history.push()
   - history.pushState('',''.'/adsc');eg.www.baidu.com/adsc,但是真的刷新的时候是没有这个网页的，可能会导致报404错误。
   
 > 开发时使用hash方式，上线的话我们会使用history的方式  
```
<ul class="nav nav-pills">
    <!--/a相对于根路径,所以要加#-->
    <li role="presentation" :class="{active:hash==='all'}"><a href="#/all" >全部</a></li>
    <li role="presentation" :class="{active:hash==='finish'}"><a href="#/finish" >已完成</a></li>
    <li role="presentation" :class="{active:hash==='unfinish'}"><a href="#/unfinish" >未完成</a></li>
</ul>

    created(){//ajax获取， 初始化数据
      
    //   监控hash(哈希值)的变化,如果页面已经有hash了，重新刷新页面也要获取hash值;如果有hash截取赋值，没有的话用all
        this.hash=window.location.hash.slice(2) || 'all';
        window.addEventListener('hashchange',()=>{
            //和跳转有关的都在window.location里
            // console.log(window.location);
            //当hash值变化，重新操作记录的数据
            this.hash=window.location.hash.slice(2)
        },false)
    },

```

##### 生命周期
```
<div id="app"></div>
<script src="../node_modules/vue/dist/vue.js"></script>
<script>
    //生命周期（都是函数）：beforeCreate(创建之前)  created（创建之后）
    //                    beforeMount（挂载之前）  mounted（挂载之后）
    //                    beforeUpdate（更新之前）  updated（更新之后）
    //                    beforeDestroy（销毁之前） destroyed（销毁之后）
     let vm=new Vue({ //根实例，初始化时会调用很多方法（钩子函数）
         beforeCreate(){//1.此方法用不到
             // debugger;
         },
         data:{
             a:1,
             b:''
         },
         create(){//2.获取ajax，初始化操作

         },
         template:'<div>{{a}}</div>',//4.如果有template属性会用模板替换掉外部html，只要有此属性app中的内容就没有任何意义了，并且只包含一个根元素，不能是文本节点
         beforeMount(){//没有什么实际意义
             // alert(1)
         },
         mounted(){//真实dom渲染完了，可以操作操作dom了

         },
         beforeUpdate(){//一般用watch来替换掉，因为watch会知道谁更新了
             alert('更新之前')
         },
         update(){//一般用watch来替换掉，因为watch会知道谁更新了
             alert('更新之后')
         },
         beforeDestroy(){//可以清除定时器，或者清除事件绑定
             alert('销毁前')
         },
         destroyed(){
             alert('销毁后')
         },

     })
    // }).$mount('#app');//此方法同下
    vm.$mount('#app');//3.要保证有编译的元素
    vm.$destroy();
</script>
```
  
 ##### mounted，this.$的属性
   - this.$data  vm上的数据  ,
   - this.$watch  监控,
   - this.$el 当前el元素,
   - this.$set,  后加的属性实现响应式变化
   - this.$options  vm上的所有属性
   - this.$nextTick 异步方法，等待渲染dom完成后来获取vm
   - this.$refs  所有refs的集合，取到真实的dom
```
<body>
<div id="app">
    <p ref="myp">{{msg}}</p>
    <div ref="wrap">
        <div v-for="a in arr" ref="mpdiv">{{a}}</div>
    </div>

</div>

let vm=new Vue({
         a:1,
         el:'#app',
         data:{
           msg:'hello',
             arr:[1,2,3]
         },
         mounted(){
           // console.log(document.getElementsByTagName('p')[0].innerHTML )
           //   console.log(this.$options);
            /* this.$nextTick(()=>{//异步方法，等待渲染dom完成后来获取vm
                 console.log(vm)
             });*/

             //如果dom元素不是通过v-for循环出来的，只能获取到一个，通过v-for循环出来的可以获取多个
             console.log(this.$refs.myp);
             console.log(this.$refs.mpdiv);
             this.arr=[1,2,3,4];//dom渲染是异步的
             this.$nextTick(()=>{//如果数据变化后想获取真实dom中的内容，需要等待页面渲染完毕后在去获取，所有的dom操作，最后nextTick中
                 console.log(this.$refs.wrap);
                 console.log(this.$refs.wrap.children.length);
             });
             // console.log(this.$refs.wrap);
             // console.log(this.$refs.wrap.children.length);//3
             // debugger
         }

    });
    
    
    <div id="app">
        <loading ref="load"></loading>
    </div>
    <script src="../node_modules/vue/dist/vue.js"></script>
    <script>
        //父组件调用子组件的方法
        let loading={
            data(){
              return {flag:true}
            },
    
            template:'<div v-show="flag">疯狂加载中...</div>',
            methods:{
                hide(){
                    this.flag=false;
                }
            }
        };
         let vm=new Vue({
             el:'#app',
             data:{
    
             },
             components:{
                loading
             },
             mounted(){//ref 如果放在组件上，获取的是组件的实例，并不是组件的dom元素
                 // console.log(this.$refs.load)
                 // this.$refs.load.hide()
                 //this.$refs.load.$el.style.background='red';
             },
    
        });
    </script>
```  

##### 子组件和父组件同事拥有mounted方法，先加载谁。需要等待子组件挂载完成后在触发父组件的挂载,所以先走child
```
<!--子组件和父组件同事拥有mounted方法，先加载谁-->
<!--需要等待子组件挂载完成后在触发父组件的挂载,所以先走child-->
<div id="app">
    <child ref="child11"></child>
</div>
<template id="child">
    <div>
        <li v-for="a in arr">{{a}}</li>
    </div>
</template>
<script src="../node_modules/vue/dist/vue.js"></script>
<script>
     let vm=new Vue({
         el:'#app',
         mounted(){
             this.$nextTick(()=>{//想操作dmo就加一个nextTick,异步方法，等待渲染dom完成后来获取vm
                 console.log(this.$refs.child11.$el.innerHTML)
             })
             // console.log(this.$refs.child11.$el.innerHTML)
         },
         components:{
             child:{
                 template:'#child',
                 data(){
                   return {arr:[1,2,3]}
                 },
                 mounted(){
                     this.arr=[4,5,6]//此处是异步渲染dom
                 }
             }
         }

    });
</script>
```

 
 ##### 组件化开发
 `
 我们可以很直观的将一个复杂的页面分割成若干个独立组件，每个组件包含自己的逻辑和样式，再将这些独立组件组合完成一个复杂的页面，这样既减少了逻辑复杂度，又实现了代码的重用。页面是组件的容器，组件自由组合形成完整的界面，当不需要某个组件时，或者想要替换某个组件时，可以随时进行替换和删除，而不影响整个应用的运行
 `
  - 组件化开发的好处
   - 提高开发效率
   - 方便重复使用
   - 便于协同开发
   - 更容易被管理和维护
   - 一个自定义标签， vue就会把他看成一个组件类似->div p span a header section...这样的，vue可以给这些标签赋予一定意义
##### vue中的组件
`
 vue中的组件是自定义的标签，可以扩展原生的html元素，封装可重用的代码
`
##### 组件 component ,以及三种命名及使用方法
 - 分类 页面级组件
   1. 一个页面是一个组件
   2. 将可复用的部分抽离出来，基础组件
   
 - 一般写插件的时候，用全局组件多一些，
 - 用法： 
   1. 全局组件  可以声明一次在任何地方使用，放在类上
   2. 局部组件  必须告诉这个组件属于谁，放在实例上
```
//全局组件
<div id="app">
    <!--三种命名法-->
    <!--1.<my-handsome></my-handsome>-->
    <!--2.<Myhandsome></Myhandsome>-->

    <!--3.-->
    <my-handsome></my-handsome>
</div>
<script src="../node_modules/vue/dist/vue.js"></script>
<script>
    //1.组件名不要带有大写，多个单词用  -（中划线）
    //2.只要组件名和定义的名字相同是可以的，尽量中间不要大写，首字母可以大写
    //3.html采用短横线隔开命名法 js中转驼峰也是可以的
    // Vue.component('my-handsome',{//1.
    // Vue.component('Myhandsome',{//2.
    Vue.component('myHandsome',{//3.
        template:'<div>我很英俊</div>',
        data(){//组件中的数据必须是函数类型，返回一个实例作为组件的数据
            return {//这才是真正的数据对象
                msg:'我很漂亮'
            }
        }
    });

     let vm=new Vue({
         el:'#app',
         data:{

         }

    });
</script>


//局部组件
<div id="app">
    <!--3-->
    <handsome></handsome>
    <!--上面是自闭合，下面是半闭合-->
    <!--<component1/>-->

    <component1></component1>
    <component2></component2>
</div>
<script src="../node_modules/vue/dist/vue.js"></script>
<script>
    //局部组件 使用的三部曲 1.创建这个组件，2.注册这个组件 3.引用这个组件
    //组件是相互独立的，不能直接跨作用域，vm实例也是一个组件，组件中拥有生命周期函数
    let obj={school:'qiqi'};//如果组件共用了数据，会导致同时更新（独立性）
    let handsome={//1.
        template:'<div>我很英俊11</div>',
    };
    //子组件不能直接使用父组件的数据（组件之间的数据交互）
    //组件理论上可以无限嵌套
    let component1={
        // template:'<div @click="school=\'hello\'">组件1 {{school}}</div>',
        //或者
        // template:`<div @click="school='hello'">组件1 {{school}}</div>`,
        template:`<div @click="fn">组件1 {{school}}</div>`,
        data(){
            return obj
        },
        methods:{
            fn(){
                // this指的当前的组件也就是 component
                this.school='hello1'//也会同时更新
            }
        }
    };
    let component2={
        template:'<div>组件2{{school}}</div>',
        data(){
            return obj
        }
    };
     let vm=new Vue({
         el:'#app',
         components:{
             handsome,//如果名字和值一样，可以写一个//2.
             component1,
             component2,
         },
         data:{
           a:1
         }

    });
</script>
```

##### props是单向绑定的。父级 prop 的更新会向下流动到子组件中，但是反过来则不行。
```
<div id="app">
    父亲：{{money}}
    <child :m="money"></child>
</div>
<script src="../node_modules/vue/dist/vue.js"></script>
<script>
     let vm=new Vue({
         el:'#app',
         data:{
           money:400
         },
         components:{
             child:{
                 props:{//属性名和data中的名字不能相同，校验时不能阻断代码的指向，只是警告而已
                     m:{//校验属性的类型，如果不带：号得到的肯定是字符串类型：m='1' :m="true"
                         type:[String,Number,Function,Object,Array,Boolean],
                     //    default:0//可以给m赋予默认值，如果不传默认会调用default
                         required:true,//此属性是必须传递，但是不能和default同用
                         validator(val){//第一个参数是当前传递的值，返回true表示通过false就是不通过
                             return val>300;//自定义校验器（用的不是很多）
                         }

                     },
                 },//对象的形式可以进行校验
                 //props:['m'],//this.m=100;会在当前子组件上声明一个m属性是父亲的
                 template:'<div>儿子{{m}} <button @click="m=800">更改价格</button></div>'
             }
         }

    });

</script>

```

##### 发布订阅模式
`父亲绑定一些事件，儿子触发这个事件，将参数传递过去,单向数据流，父亲数据刷新，儿子就刷新`

```
<div id="app">
    父亲：{{money}}
    <!--child.on('child-msg',things)-->
    <child :m="money" @child-msg="things"></child>
</div>
<script src="../node_modules/vue/dist/vue.js"></script>
<!--父亲绑定一些事件，儿子触发这个事件，将参数传递过去,单向数据流，父亲数据刷新，儿子就刷新-->
<script>
     let vm=new Vue({
         el:'#app',
         data:{
             money:400
         },
         methods:{
             things(val){//on('xx',things)
                 this.money=val;
             }
         },
         components:{
           child:{
               props:['m'],
               template:'<div>儿子 {{m}} <button @click="getMoney()">多要钱</button></div>',
               methods:{
                   getMoney(){
                       this.$emit('child-msg',800);//触发自己的自定义事件，让父亲的方法执行（方法是父亲的，属性都是自己的）
                   }
               }
           }
         }

    });
</script>
```

##### sync用法，语法糖 （就是简单写）
```
<div id="app">
    父亲：{{money}}
    <!--<child :m="money" @update:m="val=>this.money=val"></child>-->
    
    <!--写的时候我们还是按照原有的写法即可， 下面是语法糖（就是简单写）-->
    <child :m.sync="money"></child>
</div>
<script src="../node_modules/vue/dist/vue.js"></script>
<script>
     let vm=new Vue({
         el:'#app',
         data:{
             money:400
         },
          //methods:{这里的函数写在了上面的行内函数
          //            things(val){//on('xx',things)
          //                this.money=val;
          //            }
         //},
         components:{
           child:{
               props:['m'],
               template:'<div>儿子 {{m}} <button @click="getMoney()">多要钱</button></div>',
               methods:{
                   getMoney(){
                       this.$emit('update:m',800);
                   }
               }
           }
         }

    });
</script>
```

##### slot中可以放置一些默认的内容，如果传递了内容则替换掉
```
<div id="app">
    <!--这里放的内容均属于父级当前模板的，只有属性名是属于组件的-->
    <!--中间不能写东西,除非有插槽才能渲染-->
    <modal m="1">
        <!--如果没有名字的标签，默认会放置到default中-->
        <a href="http://www.baidu.com">去百度</a>
        <p slot="content" @click="fn">亲确认删除吗</p>
        <h1 slot="title">是否删除？</h1>
        <a href="http://www.baidu.com">去百度</a>
    </modal>
    <!--<modal><span>是否确认？</span></modal>-->
</div>
<!--template放在哪里都行，模板中只能放一个根元素，可以通过元素属性定制模板-->
<template id="modal">
    <div>
        <!--slot作用，定制模板-->
        <!--插槽的作用是为了把模态框组件中保存中间的所有部分不被替换，如果，模态框中间没东西，在slot中可以放默认内容-->
        <!--slot中可以放置一些默认的内容，如果传递了内容则替换掉-->
        <slot name="title">默认标题</slot>
        <slot name="content">默认内容</slot>

        <!--有一个默认的name="default"，如果不写也没事-->
       <slot name="default">这是一个默认标题</slot>


    </div>
</template>
<script src="../node_modules/vue/dist/vue.js"></script>
<script>
    let modal={
        template:'#modal',

    };
     let vm=new Vue({
         el:'#app',
         components:{
           modal
         },
         methods:{
             fn(){alert(1)}
         }

    });
</script>
```
###### component标签，is属性，以及keep-alive标签
```
<div id="app">
    <input type="radio" v-model="radio" value="home">home
    <input type="radio" v-model="radio" value="list">list
    <!--vue自带标签  template,slot,transition,component-->
    <!--必须有is属性-->

    <!--如果只是单独用component标签，每切换一次，都会挂载消耗一次，很浪费性能
     所以需要keep-alive标签，一般用来缓存，为的是后面的路由做准备，如果缓存了就不会在走created  mounted钩子函数
    -->
    <keep-alive>
        <component :is="radio"></component>
    </keep-alive>

</div>
<script src="../node_modules/vue/dist/vue.js"></script>
<script>
    let home={
        template:'<div>home</div>',
        mounted(){alert('挂载')},
        beforeDestroy(){alert('销毁')}
    };
    let list={
        template:'<div>list</div>',
        mounted(){alert('挂载11')},
        beforeDestroy(){alert('销毁11')}
    };
     let vm=new Vue({
         el:'#app',
         components:{
           home,list
         },
         data:{
             radio:'home'
         }

    });
</script>
```
##### 事件车，简单的页面用这个，复杂页面用vuex，一般不太会用到
```
<div id="app">
    <brother1></brother1>
    <brother2></brother2>
</div>
<script src="../node_modules/vue/dist/vue.js"></script>
<!--事件车，简单的页面用这个，不需要用vuex-->
<script>
    let EveneBus=new Vue;
    let brother1={
       template:'<div>{{color}} <button @click="change">变绿</button></button></div>' ,
        data(){
           return {color:'绿色',old:'绿色'}
        },
        created(){
            EveneBus.$on('changeRed',(val)=>{//页面一加载兄弟1长个耳朵听
               this.color=val;
           })
        },
        methods:{
            change(){
                EveneBus.$emit('changeGreen',this.old)
            }
        }
    };
    let brother2={
        template:'<div>{{color}} <button @click="change">变红</button></button></div>',
        created(){
            EveneBus.$on('changeGreen',(val)=>{
                this.color=val;
            })
        },
        data(){
            return {color:'红色',old:'红色'}
        },
        methods:{
            change(){
                EveneBus.$emit('changeRed',this.old)
            }
        }
    };
     let vm=new Vue({
         el:'#app',
         components:{
           brother1,brother2
         },
         data:{

         }

    });
</script>
```
##### 路由 router
- 访问不同的路径，就可以返回不同的结果

##### 多页面（spa)
- single page application
```
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        /*.router-link-active{color:red}*/
        .active{color:red}
    </style>
</head>
<body>
<!--
前端端分离，后端只负责提供接口供前端调用，像跳转都是前端自己处理的
hash模式 # 开发时使用hash  不会导致404 hash的方式不支持seo, h5的history.pushState(上线采用h5的跳转)
-->
<div id="app">
    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/list" tag="button">列表页</router-link>

    <!--router-view是一个全局组件，可以直接使用-->
    <router-view></router-view>
</div>
<script src="../node_modules/vue/dist/vue.js"></script>
<!--必须放在vue的后面-->
<script src="../node_modules/vue-router/dist/vue-router.js"></script>
<script>
    let home={
      template:'<div>首页</div>'
    };
    let list={
        template:'<div>列表页</div>'
    };
    let routes=[//路由的映射表，配置路径和组件的关系
        {path:'/home',component:home},//配置的关系就是页面级组件。路径必须加/
        {path:'/list',component:list},
    ];
    let router=new VueRouter({//引入vue-router自带VueRouter类
         //mode:'history',//h5模式
         routes,
        linkActiveClass:'active',//更改默认样式的类名，默认叫router-link-active
    });
     let vm=new Vue({
         el:'#app',
         router,
         data:{

         }

    });
</script>

```
- this.$router.push('list')//强制跳转路径
- this.$router.replace('list')//路由的替换，将当前的历史替换掉
```
<!--编程式导航，在js跳转页面-->
<div id="app">
    <!--          to:"/home"-->
    <router-link :to="{path:'/home'}">首页</router-link>
    <router-link :to="{path:'/list'}">列表</router-link>
    <router-view></router-view>

</div>
<script src="../node_modules/vue/dist/vue.js"></script>
<script src="../node_modules/vue-router/dist/vue-router.js"></script>
<script>
    let home={
        template:'<div>首页 <button @click="toList">去列表</button></div>',
        methods:{
            toList(){
                // this.$router.push('list')//强制跳转路径
                this.$router.replace('list')//路由的替换，将当前的历史替换掉
            }
        }
    };
    let list={
        template:'<div>列表 <button @click="back">返回</button></div>',
        methods:{
            back(){
                this.$router.go(-1)//返回某一级 go顶替了back
            }
        }
    };
    let routes=[//映射表
        {path:'',component:home},//path为空，默认展示的路由
        {path:'/home',component:home},
        {path:'/list',component:list},
       // {path:'*',component:list},//path为*，表示没有对应的路由，跳到指定的组件
                                  // 这个地方路径不会变，只是切换了组件而已，
        {path:'*',redirect:'/home'}, // 路径变 组件也要切换,redirect:重定向,404的时候用
    ];
    let router=new VueRouter({
       routes,

    });
     let vm=new Vue({
         el:'#app',
         router,//每个组件都会拥有一个名字叫$router的属性（有r的放的都是方法），还有一个名字叫$route（没r的存的都是属性）
         data:{

         }

    });
</script>

```
- //children中的路径永远不带/，如果带/表示是一级路由 day5/10.router.html
```
  let routes=[
        {path:'/home',component:home},
        {
            path:'/detail',component:detail,
            children:[//children中的路径永远不带/，如果带/表示是一级路由
                {path:'profile',component:profile},
                {path:'about',component:about},
            ]
        },

    ];
```

- this.$route.params  获取路由参数
 
```
<div id="app">
    <!--如果用对象作为to的属性，并且使用了参数，必须给路由起名字，通过名字跳转-->
    <router-link :to="{name:'pro',params:{c:1,a:2}}">商品1</router-link>
    <router-link to="/article/2/b">商品2</router-link>
    <router-link to="/article/3/c">商品3</router-link>
    <router-view></router-view>
</div>
<script src="../node_modules/vue/dist/vue.js"></script>
<script src="../node_modules/vue-router/dist/vue-router.js"></script>
<script>
    // #article/2   this可以忽略
    let article={
        template:'<div>第 {{$route.params.c}} 篇文章</div>',
        watch:{//路径参数发生变化，通过监控参数的变化来发生ajax
            $route(){
                alert('来个ajax')
            }
        }
    };
    // /article/2/d
    // /article/:c/:a => {c:2,a:'d'} = this.$route.params
    let routes=[//路径参数  表示值必须要有但是值是随机的
        {path:'/article/:c/:a',component:article,name:'pro'},//:是谁都可以匹配
    ];
    let router=new VueRouter({
        routes
    });
     let vm=new Vue({
         el:'#app',
         router,
         data:{

         }

    });
</script>

```

###### vue-cli
- 下载一个全局生成vue项目的脚手架
```
npm install vue-cli -g

vue init webpack <项目名字>（vue初始化一个webpack项目）
cd 项目名字
npm install
npm run dev
```
###### 模块
- node模块的规范 commonjs
- cmd seajs amd require
- umd 为了做兼容处理的
- esmodule
  - 如何定义模块（一个js就是一个模块）
  - 如何导出模块（export）
  - 如何使用模块 (import)
  
  
  
###
 b.js
```
//导出
export default {
    a:1,
    b:2
}
```  
 main.js
```
//导入
import xxx from './b.js';
console.log(xxx)
``` 


###### 先下载webpack
```
npm init -y
npm install webpack --save-dev

```
> 安装webpack或者less最好不要安装全局的，否则可能导致webpack的版本差异

- 在package.json中配置一个脚本，这个脚本用的命令是webpack.会去当前的node_module下找bin对应的webpack名字让其执行，执行的就是bin/webpack.js,webpack.js需要当前目录下有个名字叫webpack.config.js文件。我们通过npm run build执行的目录是当前文件的目录，所以会去当前目录下查找。

##### babel转义es6 -> es5
- 安装babel
```
npm install babel-core --save-dev
npm install babel-loader --save-dev
```

##### babel-preset-es2015 
- 让翻译官拥有解析es6语法的功能
```
npm install babel-preset-es2015  --save-dev

```

##### babel-preset-stage-0
- 让翻译官拥有解析es7语法的功能
```
npm install babel-preset-stage-0  --save-dev

```
##### 解析样式
- css-loader将css解析成模块，将解析的内容插入到style标签内（style-loader）
```
npm install css-loader style-loader  --save-dev

```
##### less，sass,stylus(预处理语言)
- less-loader  
- sass-loader
- stylus-loader
```
npm install less less-loader  --save-dev

```
##### 解析图片
- file-loader url-loader（是依赖于file-loader的）
```
npm install file-loader url-loader  --save-dev

```
##### 需要解析 html插件
- 插件的作用是以我们自己的html为模板将打包后的结果，自动引入到html中产出到dist目录下
```
npm install html-webpack-plugin  --save-dev

```
##### webpack-dev-server
- webpack的开发服务器，这里面内置了服务，可以帮我们启动一个端口号，当代码更新时，可以自动打包（在内存中打包），代码有变换就重新执行，
```
npm install webpack-dev-server --save-dev

```


##### App.vue固定写法
```
<template>
    <!--里面只能放一个节点-->
    <div>

    </div>
</template>

<script>
    //规定 默认 导出 一个对象
    export default {
        //组件中的data都是函数
        data(){
            return{}
        },
        methods:{},
        computed:{},
        components:{},
    }
</script>
<!-- scoped 作用域自己样式-->
<style scoped>

</style>

```
##### 安装vue-loader vue-template-compiler
- vue-loader解析.vue文件的，vue会自动的调用vue-template-compiler
- vue-template-compiler用来解析vue模板的.(解析组件vue里面的template，和主main里Vue渲染template的没关系)
```
npm install vue-loader vue-template-compiler --save-dev

```

#### 综上运行自己打包，自己创建一个vue-cli项目
1.  npm init -y
2.  npm install webpack webpack-dev-server babel-core babel-loader babel-preset-es2015 babel-preset-stage-0 css-loader style-loader less less-loader file-loader url-loader html-webpack-plugin  --save-dev
3.  npm install vue-loader vue-template-compiler --save-dev
4.  npm install vue-router --save-dev


#### npm install vue-awesome-swiper --save vuede swiper轮播图
https://github.com/surmon-china/vue-awesome-swiper



#### 热门图书的功能
- 先写服务端，确保数据能正常返回
- 增加api方法，实现调取数据的功能
- 在哪个组件中应用这个api，如果是一个基础组件需要用这些数据，在使用这个组件中的父级中调用这个方法，将数据传递给基础组件
- 写一个基础组件
  - 1.创建一个.vue文件
  - 2.在需要使用这个组件的父级中引用这个组件
  - 3.在组件中注册
  - 4.以标签的形式引入
  
##### 路由元信息  
 -e.g router/index.js {path:'/home',component:Home, meta:{keepAlive:true}},

##### 下拉加载 /page
- 默认每次给5条，前端告诉后台现在要从第几条开始给我
- /page?offset=5
- 后台返回还要告诉前端是否有更多的数据 hasMore:true

- vue-pull-refresh 上下拉刷新插件
- vue-lazyload 图片懒加载插件

### coding split 代码分割


- 传到线上直接就可以是把mock直接传上去了。服务器和代码都存在

###### vuex（可以理解为他们统一传到了一个地方，那个地方的状态一改其他地方也会检测到也会更改）
- vuex  平级组件交互，找共同的父级解决，跨组件交互，原来用eventBus(混乱，原理发布订阅)
- vuex主要借鉴了 flux redux，vuex只能在vue中使用（单独为vue开发的）
- vuex为了大型项目主要是 状态 管理，将数据统一管理

```main.js
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import logger from 'vuex/dist/logger.js'//logger是一个日志插件
Vue.use(Vuex);
//容器是惟一的
const state={count:0};
const mutations={
  add(state,count){//state是自动放入的，默认指的就是当前的state
    state.count+=count;
  },
  minus(state,count){
    state.count-=count;
  }
};
let store =new Vuex.Store({
  state,
  plugins:[logger()],//打印出日志
  strict:true,//只能通过mutation（相当于管理员）来更改状态，（如果不用它，数据不能实时更新），但mutation不支持异步
  mutations
});
//计数器
new Vue({
  el:'#app',
  ...App,
  store//store 被注册到了实例上，所有组件都会有一个属性，this.$store
});

```
```Counter.vue
<template>
<div>
  计数器：<button @click="minusJ">-</button>
  <br>
  当前：{{$store.state.count}}
  <br>
  计数器：<button @click="addD">+</button>
</div>
</template>

<script>
    export default {
        data(){
          return {
            count:0
          }
        },
      methods:{
        addD(){
          //提交add的mutation, 方法名  载荷payload
          this.$store.commit('add',2);//找store中的add
        },
        minusJ(){
          //提交add的mutation, 方法名  载荷payload
          this.$store.commit('minus',2);//找store中的add
        }
      }

    }
</script>
```




