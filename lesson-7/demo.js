// const obj = {
//     name: '张三',
//     age: undefined, // 被JSON.stringify去除
//     address: null // key会保留
// }

// console.log('demo')
// console.log(JSON.stringify(obj))

// Number.MAX_SAFE_INTEGER
// console.log(Number.MAX_SAFE_INTEGER)

// console.log(10 + Number(5n))

// // 不可变性，immutable 不可以部分修改
// let  s1 = 'Hello' 
// const arr1 = Array.from(s1)

// const num1 = 5
// Number(num1) // 调用完后销毁

// let s2 = 'hello' // 没有原型链


// let b = new Boolean(true) // true
// console.log(b) // [Boolean: true]
// console.log(typeof b) // object
// console.log(typeof true)

// console.log(b.valueOf()) //取值

// =赋值操作执行，!有返回值
let x
console.log(x = 5)
console.log(x = 5)