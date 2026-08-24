// ============================================================
// JavaScript 运算符优先级 —— 自测练习
// ============================================================
//
// 【任务要求】
//   1. 按优先级从 18 到 1 的顺序，在每个 "// TODO:" 下方
//      写出 1-2 行 console.log 示例代码。
//   2. 运行 `node operator-precedence-exercise.js`，确认你的
//      输出与注释中的预期输出一致。
//   3. 重点关注：结合性（左/右）、短路行为、类型转换。
//
// 【提示】每个区块都给了该优先级的核心知识点和预期输出，
//          参考提示自己写，不要直接抄答案。
//
// ============================================================


// ---------- 18: Grouping (分组括号) ----------
// 提示：最高优先级，用 () 强制改变运算顺序
console.log(2 * (3 + 4))


// ---------- 17: Member access / call / new with args ----------
// 提示：点访问 obj.a.b、方括号 obj.arr[1]、可选链 obj?.a?.b、
//       new 带参 + 方法调用、数组方法调用
// 预期输出：42, 20, 42, 2024, [ 2, 4, 6 ]
const obj = { a: { b: 42 }, arr: [10, 20] };
// TODO: 依次写出上面 5 个示例
console.log(obj.a.b)
console.log(obj.arr[1])
console.log(obj?.a?.b)
console.log(new Date(2024, 0).getFullYear())
console.log([1, 2, 3].map(n => n  * 2))

// ---------- 16: new (无参数列表) ----------
// 提示：new 无参时优先级低于成员访问，所以 new Date().getTime() 合法
// 预期输出：当前日期对象, 当前时间戳(数字)
// TODO: 写 new Date 和 new Date().getTime()
console.log(new Date)
console.log(new Date().getTime())

// ---------- 15: Postfix increment / decrement (后置自增/自减) ----------
// 提示：x++ 先返回旧值再自增；x-- 同理
// 预期输出：5, 6
let p = 5;
// TODO: 写 p++ 和 p--（注意顺序，p++ 后 p=6，p-- 返回 6）
console.log(p++)
console.log(p--)


// ---------- 14: Prefix operators (前置一元运算符) ----------
// 提示：++x 先自增再返回；!x 逻辑非；~x 按位取反=-(x+1)；
//       +x 转数字；-x 负号；typeof；void；delete
// 预期输出：6, 5, true, -6, 42, -5, number, undefined
let q = 5;
// TODO: 写出 ++q, --q, !false, ~5, +"42", -5, typeof 42, void 0
// TODO（额外）: delete obj.nonexistent
console.log(++q)
console.log(--q)
console.log(!false)
console.log(~5)
console.log(+"42")
console.log(-5)
console.log(typeof 42)
console.log(void 0)
console.log(void 1 + 2)   // NaN？注意：void 优先级很高，等价于 (void 1) + 2 = undefined + 2 = NaN
console.log(delete obj.nonexistent + 1)
// ---------- 13: Exponentiation (幂运算) ----------
// 提示：右结合！2 ** 3 ** 2 = 2 ** (3 ** 2) = 512
// 预期输出：8, 512
// TODO: 写 2 ** 3 和 2 ** 3 ** 2
console.log(2 ** 3)
console.log(2 ** 3  ** 2)

// ---------- 12: Multiplicative (乘除模) ----------
// 提示：左结合，2 * 3 / 4 = (2 * 3) / 4
// 预期输出：6, 2.5, 1, 1.5
// TODO: 写 2 * 3, 10 / 4, 10 % 3, 2 * 3 / 4
console.log(2 * 3)
console.log(10 / 4)
console.log(10 % 3)
console.log(2 * 3 / 4)

// ---------- 11: Additive (加减) ----------
// 提示：左结合；字符串拼接也是 +
// 预期输出：3, 3, abc, 9
// TODO: 写 1 + 2, 5 - 2, "a"+"b"+"c", 10 - 3 + 2
console.log(1 + 2)

// ---------- 10: Bitwise shift (按位位移) ----------
// 提示：<< 左移补0；>> 有符号右移（补符号位）；>>> 无符号右移（补0）
// 预期输出：8, 4, 2147483644
// TODO: 写 1 << 3, 8 >> 1, -8 >>> 1
console.log(1 << 3)

// ---------- 9: Relational (关系运算符) ----------
// 提示：< <= > >=, in 检查属性, instanceof 检查原型链
// 预期输出：true, true, true, false, true, true
// TODO: 写 3<5, 5<=5, 5>3, 5>=6, "a" in {a:1}, [] instanceof Array
console.log(3 < 4)
console.log("a" in {a: 1})
console.log([] instanceof Array)


// ---------- 8: Equality (相等运算符) ----------
// 提示：== 宽松相等(类型转换)，=== 严格相等(不转换)
// 预期输出：true, false, false, true
// TODO: 写 1=="1", 1!="1", 1==="1", 1!=="1"
console.log(1 == "1")

// ---------- 7: Bitwise AND (按与) ----------
// 提示：5 & 3 = 0101 & 0011 = 0001 = 1
// 预期输出：1
// TODO: 写 5 & 3
console.log(5 & 3)

// ---------- 6: Bitwise XOR (按位异或) ----------
// 提示：5 ^ 3 = 0101 ^ 0011 = 0110 = 6
// 预期输出：6
// TODO: 写 5 ^ 3
console.log(5 ^ 3)

// ---------- 5: Bitwise OR (按位或) ----------
// 提示：5 | 3 = 0101 | 0011 = 0111 = 7
// 预期输出：7
// TODO: 写 5 | 3
console.log(5 | 3)

// ---------- 4: Logical AND (逻辑与) ----------
// 提示：短路！遇到第一个 falsy 就返回它；全 truthy 返回最后一个
// 预期输出：false, 0, b
// TODO: 写 true && false, 0 && "hello", "a" && "b"
console.log(true && false)

// ---------- 3: Logical OR / Nullish coalescing ----------
// 提示：|| 遇到第一个 truthy 返回；?? 只对 null/undefined 生效
// 预期输出：fallback, default, default, 0
// TODO: 写 false || "fallback", 0 || "default", null ?? "default", 0 ?? "default"
console.log(false || "fallback") //"fallback"

// ---------- 2: Assignment / Conditional / Arrow / yield / spread ----------
// 提示：赋值右结合 a=b=c=10；复合赋值 += -= *= 等；
//       三元右结合嵌套；箭头函数；generator yield/yield*；展开 ...
//
// --- 2a: 赋值链与复合赋值 ---
// 预期输出：10 10 10, 然后 15,12,24,6,2,8,16,4,2,2,3,7
let a = 1, b = 2, c = 3;
// TODO: a = b = c = 10; 然后依次 a+=5, a-=3, a*=2, a/=4, a%=4,
//       a**=3, a<<=1, a>>=2, a>>>=1, a&=3, a^=1, a|=4
//       每个后面跟 console.log(a)
console.log(a = b = c = 10)
// --- 2b: 逻辑赋值（短路赋值）---
// 预期输出：null, 5, def
// TODO: let x=null; x&&="no"; let y=0; y||=5; let z=null; z??="def"
let x = null
console.log(x&&="no")
console.log()
// --- 2c: 三元运算符（右结合嵌套）---
// 预期输出：B
// TODO: score=85, grade = score>=90?"A":score>=60?"B":"C"

// --- 2d: 箭头函数 ---
// 预期输出：8
// TODO: const double = n => n*2; console.log(double(4))

// --- 2e: yield / yield* ---
// 预期输出：[ 1, 2, 3 ]
// TODO: function* gen(){ yield 1; yield* [2,3]; } console.log([...gen()])
function* gen () {
    yield 1
    yield* [2,3]
}
console.log([...gen()])
// --- 2f: 展开运算符 ---
// 预期输出：[ 1, 2, 3 ]位
// TODO: console.log([...[1,2], 3])
console.log([...[1,2], 3])

// ---------- 1: Comma (逗号运算符，
const val = (1 + 2, 3 + 4, 5 + 6);
console.log(val); // 11，返回最后一个表达式的值      