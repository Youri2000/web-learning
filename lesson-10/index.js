// const obj = {
//     age: 13,
//     // [first name]:
//     [first-name]:
// }

// obj.age // 访问固定标识符的
// obj[age] // 访问特殊属性名: 1. 空格 2. 短号

// [] 可以运算
// const obj2 = {
//     name1: 'jack',
//     name2: 'tom'
// }

// let i = 2
// console.log(obj2['name' + i])


// let obj3 = {
//     a: 10,
//     b: 20
// }
// // property key底层只有两种类型 1. string 2. Symbol

// const key = 'a'

// obj3.key // undefined
// obj3[key] // 10
// obj3['a']


// const id = Symbol('id')
// const user = {
//     [id] : 10
// }
// console.log(user[id])

// const arr = ['a', 1, ()=>{console.log('hello')}]
// arr[2]() // hello


// // js parser，看到function,期待声明语句function declaration，关注上下文解析的结果。因为函数声明 => 必须有名字。
// function() {
//     console.log('hello')
// }

// // ()创建了表达式上下文，期待里面是expression，可以匿名
// (function() {
//     console.log('hello')
// })
// // why报错

// const result = if (a > 10) {1 else 2} // 期待expression
// const result2 = (a > 10 ? 1 : 2)

// const result3 = (() => {
//     if (a > 10) {
//         return 1
//     } else return 2
// })

const fn1 = () => {
    value: 2 // js标签语句不报错
}
console.log(fn1())// undefined {}函数体 -> statement
//  {
//     value:
//     2;

// }

const fn2 = () => ({
    value: 2
})

const fn2 = () => {
    return {
        value: 2
    }
}
console.log(fn2() )// {value: 2} ()=> expression

// ast

// js标签语句
start:
    for(let i = 0; i < 10; i++) {
        console.log(i)
    }

let obj = {
    name: 1,
    say() {}

}