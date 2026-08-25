1. GC - reachable
GC roots 比如 window

2 . 循环引用

3. 基本数据类型 (JS)
number
string
boolean
undefined
null
bigInt
Symbol

<!-- 判断方法 typeof -->
typeof 123 number
typeof null object = 000

obj !== null

## String
<!-- 显示转换，！TODO：建议大量显示转换 -->
String() & Object.prototype.toString.call()

String(123) = '123'
String(NaN) not a number = ‘NaN'
'true'

const arr = [1, 2, 3]
String(arr) '1, 2, 3' 
[] => ''

const obj = {
    age: 18
}
String(obj) "age: 18"
浏览器："[object Object]"
node: [object Object] 会漏掉引号

Object.prototype.toString.call([])
String(new Date()) //'Thu Aug 20 2026 15:36:27 GMT+0800 (China Standard Time)'
// '[object Date]'

const obj = {
    age: 18
}
JSON.stringify(obj) //'{"age":18}'

Hello world
.replace()


## number
无法转换是NaN,但能转尽量，便利性 Number([10]) -> 10
Number("123.23.25") // NaN
Number() // NaN
Number([1, 2])

Infinity
-Infinity

NaN === NaN // false
Number.isNaN()
3 / 0 // Infinity
-3 / 0 // -Infinity

## 0.1 + 0.2 !== 0.3
// 0.30000000000000004
number 64bit 
两边取舍转换
金融公司会用：decimal.js

# 作业：
1. Object.prototype.toString.call() 打印其他类型✅

   原理：Symbol.toStringTag，可自定义的符号标签[Symbol.toStringTag]: 'myType'

   基本数据类型：有装箱（Boxing）机制：new Number（123），特殊规范处理undefined和null

   test1 [object Number]
   test2 [object String]
   test3 [object Boolean]
   test4 [object Undefined]
   test5 [object Null]
   test5_1 [object BigInt]
   test5_2 [object Symbol]
   test6 [object Object]
   test7 [object Array]
   test8 [object Set]
   test9 [object Map]
   test10 [object WeakMap]
   test11 [object Function]
   test12 [object Date]
   test13 [object Math]
   test14 [object RegExp]
   test15 [object Error]
   test16 [object JSON]
   test17 [object ArrayBuffer]
   test20 [object global]

2. 双精度浮点数，用decimal.js写几个案例 ✅

   

3. 为什么？**0.1 + 0.2 !== 0.3✅**
1. IEEE 754 双精度浮点数（64位双精度浮点数） 1 + 11 + 52
2. 十 -> 二：无限循环
3. 0.1、0.2略大于本身
4. 0.3近似值略大于其本身
补充：所有IEEE 754双精度浮点数语言都会有，Java、Python、C/C++
解决办法：
1. 放大
2. toFixed()
3. decimal.js
   
4. 隐式类型转换

