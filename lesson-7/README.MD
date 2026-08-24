## 前后端开发中注意undefined尽量避免，因为无法输出，可手动设置为null 
undefined null
undefined == null
声明未赋值
主动设置

typeof undefined === undefined
typeof null === object

前后端联调去除undefined

## bigInt
只能表达整数，不能表达小数
0.1n是否合法 // 否
10 + 5n TypeError: Cannot mix BigInt and other types, use explicit conversions
BigInt()可以转换

## Symbol 绝对不相等，张三只是描述符
const s1 = Symbol('张三')
const s2 = Symbol('张三')
.des
.for
###
Symbol.for()
Symbol.keyFor()

1. 对象中，防止属性名冲突
2. for in没办法便利到Symbol的属性，是内部属性
3. 不能转化，不能和其他类型运算

## 隐式类型转换
// new Boolean(true) 显示类型转换 && 取值
let b = new Boolean(true) // true
console.log(b) // [Boolean: true]
console.log(typeof b) // object
console.log(typeof true)

console.log(b.valueOf()) //取值

a = b = 10


# 作业
1. symbol 与 Boolean string 的转换
2. ✅ Symbol.for() & Symbol.keyFor() 
3. ✅看JS 的 所有的操作符，demo for everyone：https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence