const test1 = 123
const test2 = '好'
const test3 = true
const test4 = undefined
const test5 = null
const test6 = 12345678n
const test7 = Symbol()

const test8 = {}
const test9 = []
const test10  = new Date()
const test11 = new RegExp()
const test12 = new Map()
const test13 = new WeakMap()
const test14 = new Set()
const test15 = new Function()

console.log(Object.prototype.toString.call(test1))
console.log(Object.prototype.toString.call(test2))
console.log(Object.prototype.toString.call(test3))
console.log(Object.prototype.toString.call(test4))
console.log(Object.prototype.toString.call(test5))
console.log(Object.prototype.toString.call(test6))
console.log(Object.prototype.toString.call(test7))
console.log(Object.prototype.toString.call(test8))
console.log(Object.prototype.toString.call(test9))
console.log(Object.prototype.toString.call(test10))
console.log(Object.prototype.toString.call(test11))
console.log(Object.prototype.toString.call(test12))
console.log(Object.prototype.toString.call(test13))
console.log(Object.prototype.toString.call(test14))
console.log(Object.prototype.toString.call(test15))