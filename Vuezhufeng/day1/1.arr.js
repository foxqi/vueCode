//配置npm 和 语法
//file->setting和配置
// console.log('ok');

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

//2)filter(过滤，一般用于删除)  是否操作原数组：不；  返回结果：过滤后的新数组；   回调函数的返回结果：如果返回true表示这一项放到新数组中
//
let newAry=[1,2,3,4,5].filter(function (item,index) {
    //不能写成2<item<5,因为先会比较2<item，不管是大是小都会返回boolean类型，true=1,false=0,那么再和5进行比较，会一直未true
    return item>2&&item<5
});
console.log(newAry);

//3)map （映射，一般用于更新）  将原有的数组映射成一个新数组[1,2,3]   需求<li>1</li><li>2</li><li>3</li>
//是否操作原数组：不；  返回结果：返回新数组；   回调函数的返回结果：回调函数中返回什么这一项就是什么

let arr1=[1,2,3].map(function (item,index) {
    return `<li>${item}</li>`//``是es6中的模板字符串，遇到变量用${}取值
});
console.log(arr1.join(''));


//4)includes 是否包含
let arr3=[1,2,3,4,55,555];
console.log(arr3.includes(5));//返回是boolean,
//5)find (找到具体的某一项) 返回找到的那一项，不会改变原数组 回调函数中返回true表示找到了，找到后就停止循环，找不到返回的是undefined
let result=arr3.find(function (item,index) {
    //找到含5的
  return item.toString().indexOf(5)>-1
});
console.log(result);

//6)some  （找true,找到true后停止，返回true,找不到返回false）
let result1=arr3.some(function (item,index) {
    //找到含5的
    return item.toString().indexOf(5)>-1
});
console.log(result1);
//7)every （找false，找到false后停止，返回false）
let result2=arr3.every(function (item,index) {
    //找到含5的
    return item.toString().indexOf(5)>-1
});
console.log(result2);

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
