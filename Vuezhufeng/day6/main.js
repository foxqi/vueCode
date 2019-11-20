//如果是第三方模块不需要加./，如果是文件模块需要加./

//在另一个文件中将内容解构出来即可使用。如果引入文件是对象，则自己也是对象，如果引入文件是一个，自己也是一个
//import拥有声明功能，可以变量提升
//import放到页面的顶部

//第一种写法，解构赋值
// import {str,str2,a} from './a.js'
// console.log(str,str2);
// a()

//第二种写法
// import * as b from './a.js'
// console.log(b.str,b.str2);
// b.a()


//xxx代表的是default后的结果
import xxx from './b.js';
console.log(xxx);

let a=b=>c=>d=>b+c+d;
let obj={school:'qiqiq'};
let obj1={age:8};

let newObj={...obj,...obj1};//es7语法
console.log(newObj);

import './index.css'//引入css
import './style.less';

//在js中引入图片需要import，或者写一个线上路径
import page from './2.jpg';//page就是打包后图片的路径
let img = new Image();
//img.src='./2.jpg';//写了一个字符串  webpack不会进行查找
img.src=page;

document.body.appendChild(img);

