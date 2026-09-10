# 变量 vs 常量

a
var a = 1
why var可以访问?
1. TDZ
2. 初始化 undefined

let/const a = 1
- 块级作用域 { }
- TDZ：访问被拒

const a = 1
cosnt arr = [1, 2]

补充：
1. var 全局作用域，全局对象的属性 var a = 1挂在全局下，let
2. 模块作用域

重复声明❌
let a = 1
let a = 2

# 作业
1. ✅Object.freeze()：实现const声明的变量深层无法修改，但若修改不会报错
2.  ✅数组方法对应 mutable vs immutable
sort --- toSorted()
reverse --- toReversed()
splice --- toSpliced()
arr[i] = v --- with(i, v)

push(...x) =====> [...arr, ...x] concat()
pop()  =====> slice(0, -1)
ushift(...x ) =====> [...x, ...arr]
shift() =====> slice(1)
fill()  =====> map(() =>{})

const arr = [1, 2]
const arr = new Array(n)
Nodelist, arguments, Set 类数组, string 1. .length 2. s[i]
Array.from(set)
[...set]