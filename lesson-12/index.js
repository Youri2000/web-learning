// 本质都是集合
// 区别：是否可重复 & 顺序
const set = new Set([1, 2, 3, 4])
// const arr = new Array([1, 2, 3, 4])  
const arr = new Array(1, 2, 3, 4)
// 没有key，有index
// .length
console.log(arr)
console.log(set)

// key-value映射表
// key的类型只允许string和Symbol
const obj = {
    name: '张三'
}
// obj.age
console.log(obj.length) // undefined

// key的类型不限
const map = new Map()

// 数组创建的坑 & 稀疏数组
const arr1 = new Array(2) // [undefined, undefined]
const arr2 = new Array('hello') // ['hello']
console.log(arr1[0]) // 虽然是undefined，但实际是empty
console.log(arr2)


console.log(0 in arr1) // false，没有下标，依存于值
// 如何创建[2]
Array.of()

// fill的问题，用Array.from()解决
const arr3 = new Array(3).fill({}) // 引用类型是同一个，指向同一个堆值
arr3[0].name = '张三'
console.log(arr3[1]) // 竟然也是3

// Array.from(n, () => ({})
{} {} {}
[{}, {}, {}]
Array.from({
    length: 3,
})

// 创建3个互不干扰的{}，用函数
Array.from(3, () =>({}))


const objArr = {
    length: 1,
    0: 'apple',
    1 : 'huawei',
    2: 'sansum',
}
const arr4 = Array.from(objArr) // 只有apple，因为length是1