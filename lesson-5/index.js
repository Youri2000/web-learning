// function a () {
//     b()
// }

// function b () {
//     c()
// }

// function c () {
//     console.log('hello')
// }

// a()

// function d() {
//     d()
// }

// d() // Stackoverflow

let a = 10
let b = a
b = 30 // a = 1

let obj1 = {
    name: '张三',
    address: {
        city: '北京'
    }
}

// let obj2 = obj1
// obj2.name = '李四'

// 浅拷贝，只有第一层
let obj3 = {...obj1}
obj3.name = '李四'
console.log(obj1)

// 深拷贝：1. structuredClone（内置） 2.自己实现（作业）
let obj4 = structuredClone(obj1)
obj4.address.city = '上海'
console.log(obj1)

function foo() {
    let user = {
        name: '张三'
    }
    console.log(user.name)
}

foo()

// stack： 0x00011101
// heap： {name:'zhangsan'}

// 最底层是 Global，声明提升，但没有执行

