// // 1个全局内存空间
// for (var i = 0;  i < 5; i++) {
//     (
//         function(j) {
//             setTimeout(() => {
//                 console.log(j)
//             }, 1000)
//         }
//     )(i)
// }  

// // 5个块级作用域，回调记住对应内存空间。i将上一次结果拷贝再执行 
// for (let i = 0;  i < 5; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 1000)
// }

//  异步、闭包

// 
// console.log('setTimeout')
// for (var i = 0;  i < 5; i++) {
//     setTimeout((val) => {
//         console.log(val)
//     }, 1000, i) // 入参
// }

// // 题目1
// var shadowing = 'hello'
// function shadowingFn() {
//     // var shadowing = undefined
//     console.log('variable shadowing:',shadowing);
//     var shadowing = 'world'
// }
// shadowingFn();

// // 题目2
// var shadowing = 'hello'
// function shadowingFn() {
//     console.log('variable shadowing:',shadowing); // hello
// }
// shadowingFn();

// 题目3
var shadowing = 'hello'
function shadowingFn() {
    console.log('variable shadowing:',shadowing); // hello
    shadowing = 'world'
}
shadowingFn();

// 题目4
var shadowing = 'hello'
function shadowingFn() {
    // let shadowing 
    console.log('variable shadowing:',shadowing); // TDZ报错
    let shadowing = 'world'
}
shadowingFn();

// 题目5
let a = 10;

{
  console.log(a); // TDZ报错

  let a = 20;
}