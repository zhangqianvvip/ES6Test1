// let a="lj520";
// window.onload=function () {
//     console.log(a);
// }
// var b=123
// console.log(b);

for(let i=0;i<10;i++){
    console.log("循环体中："+ i)
}
//undefined和null的区别
// let[a,b="sad"] =['sfw',null];
// console.log(a+b);
//2.2对象的结构赋值
// let {foo,bar} = {bar:"qewq",foo:'mymg'};
// console.log(foo+bar);
//圆括号的使用
let foo;
({foo}={foo:'l2'});
console.log(foo);
//对象扩展运算符
function taiji(...arg){
    console.log(arg[0]);
    console.log(arg[1]);
    console.log(arg[2]);
    console.log(arg[3]);
}
taiji(1,2,3);
//声明两个数组arr1和arr2,然后我们把arr1赋值给arr2，然后我们改变arr2的值，
let arr1=['www','taiji','com'];
let arr2=arr1;
// let arr2=[...arr1];
console.log(arr2);
arr2.push('yu');
console.log(arr2);
function taiji(second,a,...arg){
    console.log(arg.length);
}
taiji(0,1,2,3,4,5,6,7,8);
// let li='哈哈';
// let blog ='我是 你的老师'+li;
// document.write(blog);
// let li='哈哈';
// let bolg ='我是你的老师'${li};
// document.write(bolg);

let qq='呵呵';
let bb='开始就发货时间考虑飞洒呵呵';
document.write(bb.indexOf(qq)>0);
document.write(bb.includes(qq));
//判断开头是否存在
document.write(bb.startsWith(qq));
document.write(bb.endsWith(qq));
//6.数字操作
let a = 11/4;
console.log(Number.isFinite(a));//isFinite用来判断是否是一个数字
console.log(Number.isFinite('qq'));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(undefined));
console.log(isNaN(NaN));//isNaN是用来判断是否是数字
console.log(isNaN(undefined));//isNaN是用来判断是否是数字
console.log(isNaN('taiji'));//isNaN是用来判断是否是数字
console.log(isNaN(123));//isNaN是用来判断是否是数字
console.log(isNaN(100+'2a'));//isNaN是用来判断是否是数字
console.log("================");//isNaN是用来判断是否是数字
console.log(Number.isNaN(NaN));//isNaN是用来判断是否是数字
console.log(Number.isNaN(undefined));//isNaN是用来判断是否是数字
console.log(Number.isNaN('taiji'));//isNaN是用来判断是否是数字
console.log("================");//isNaN是用来判断是否是数字
console.log(Number.isNaN(123));//isNaN是用来判断是否是数字
console.log(Number.isNaN(100+'2a'));//isNaN是用来判断是否是数字
console.log("================");//isNaN是用来判断是否是数字
console.log(Number.isNaN(parseInt('abc')));//isNaN是用来判断是否是数字
console.log("================");//isNaN是用来判断是否是数字
console.log("================");//isNaN是用来判断是否是数字
let v=523.9

console.log(Number.isInteger(v));
console.log(Number.parseInt(v));
console.log(Number.parseFloat(v));
//超出范围了就会变成000
// array.of()//把大量的变量或者数组转换成数组’
// function中的参数不能同时输出存在
//fill左闭右开
console.log("================");//isNaN是用来判断是否是数字

//整数取值范围操作
let oo= Math.pow(2,53)-1;//2的53次方这个就是.pow这个方法的意义
console.log(oo);
//最大安全整数
// console.log(Number.MAX_SAFE_INTEGER);
console.log(9007199254740991333);
//最小安全整数
console.log(Number.MIN_SAFE_INTEGER);
//安全整数判断isSafeInteger()
console.log(Number.isSafeInteger(oo));
//ES6新增的数组知识
let json = {
	'0':'oo',
	'1':'哈哈',
	'2':'号发货'，
	length:3
	//length必须写
}
console.log(json);
//把json数组转换成array  Array.from方法
let arr = Array.from(json);
console.log(arr);
//find()实力方法
let arr=[1,2,3,4,5,6,7,8,9];
console.log(arr.find(function(value.index.arr){
return value >5;
}))
//fill左闭右开
let arr =['oo','哈哈','of哈维','回去'];
arr.fill('web',1,4);
console.log(arr);
//数组循环
let arr=['oo','哈哈','护身符'];
for(let item of arr){
console.log(item);
}


//for...of数组索引
//数组循环
let arr=['oo','广发额','gasf'];
for(let index of arr.keys()){
console.log(index);
}
//同时输出数组的内容和索引：我们用entries()这个实例方法，配合我们的for...of循环
let arr=['oo','广发额','gasf'];
for(let [index,val] of arr.entries()){
console.log(index+':'+val);
}

entries方法 切分数组
let arr=['oo','广发额','gasf'];
console.log(list);
console.log(list.next().value);
console.log('***********************');
console.log(list.next().value);
console.log('&&&&&&&&&&&&&&&&&&&&&&&&');
console.log(list.next().value);
console.log('%%%%%%%%%%%%%%%%%%%%%%%%');