// 底层节约性能
// console.log("hello" && 123)
console.log(0 && "hello") 
console.log("hello" && false) // false

// 王逍遥: true && true
// 王逍遥: 0 && "hello"
// 王逍遥: "hello" && false
// 王逍遥: 5 && 0
// 王逍遥: "" && "ok"
// 王逍遥: null && 123
// 王逍遥: "hi" && 5
// 王逍遥: true && "x"

let obj = {
    name: '张三'
}
console.log('name' in obj) // true

let score = 0
// 六大假值
score || 2 // 2 // 看六大假值 ""
score ?? 2 // 0 // undefined && null