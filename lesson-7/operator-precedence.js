/// ============================================================
// JavaScript Operator Precedence Demos (18 → 1, high → low)
// 每个优先级 1-2 行简短示例，可直接 node 运行
// ============================================================

// ---------- 18: Grouping (分组括号) ----------
// 最高优先级，强制先算括号内
console.log(2 * (3 + 4)); // 14，先算 3+4
console.log((1 + 2) * 3); // 9

// ---------- 17: Member access / call / new with args ----------
const obj = { a: { b: 42 }, arr: [10, 20] };
console.log(obj.a.b);        // 42，点访问左结合
console.log(obj.arr[1]);     // 20，方括号访问
console.log(obj?.a?.b);      // 42，可选链
console.log(new Date(2024, 0).getFullYear()); // 2024，new 带参 + 方法调用
console.log([1, 2, 3].map(n => n * 2)); // [2,4,6]，函数调用

// ---------- 16: new (无参数列表) ----------
// new 无参优先级低于成员访问，所以 new Date().getTime() 是合法的
console.log(new Date);       // 当前日期对象（无参 new）
console.log(new Date().getTime()); // 先 new Date() 再 .getTime()

// ---------- 15: Postfix increment / decrement (后置自增/自减) ----------
let p = 5;
console.log(p++);  // 5（返回旧值，然后 p 变 6）
console.log(p--);  // 6（返回旧值，然后 p 变 5）

// ---------- 14: Prefix operators (前置一元运算符) ----------
let q = 5;
console.log(++q);       // 6（先增后返回）
console.log(--q);       // 5
console.log(!false);    // true，逻辑非
console.log(~5);        // -6，按位取反 ~x = -(x+1)
console.log(+"42");     // 42，一元加号转数字
console.log(-5);        // -5，一元负号
console.log(typeof 42); // "number"
console.log(void 0);    // undefined
delete obj.nonexistent; // true，删除不存在的属性也返回 true

// ---------- 13: Exponentiation (幂运算，右结合) ----------
console.log(2 ** 3);       // 8
console.log(2 ** 3 ** 2);  // 512，右结合 = 2 ** (3 ** 2) = 2^9

// ---------- 12: Multiplicative (乘除模，左结合) ----------
console.log(2 * 3);    // 6
console.log(10 / 4);   // 2.5
console.log(10 % 3);   // 1
console.log(2 * 3 / 4); // 1.5，左结合 = (2*3)/4

// ---------- 11: Additive (加减，左结合) ----------
console.log(1 + 2);    // 3
console.log(5 - 2);    // 3
console.log("a" + "b" + "c"); // "abc"，左结合
console.log(10 - 3 + 2); // 9，左结合 = (10-3)+2

// ---------- 10: Bitwise shift (按位位移，左结合) ----------
console.log(1 << 3);   // 8，左移 3 位 = 1*2^3
console.log(8 >> 1);   // 4，有符号右移
console.log(-8 >>> 1); // 2147483644，无符号右移（补 0）

// ---------- 9: Relational (关系运算符，左结合) ----------
console.log(3 < 5);    // true
console.log(5 <= 5);   // true
console.log(5 > 3);    // true
console.log(5 >= 6);   // false
console.log("a" in { a: 1 }); // true
console.log([] instanceof Array); // true

// ---------- 8: Equality (相等运算符，左结合) ----------
console.log(1 == "1");   // true，宽松相等（类型转换）
console.log(1 != "1");   // false
console.log(1 === "1");  // false，严格相等（不转换）
console.log(1 !== "1");  // true

// ---------- 7: Bitwise AND (按位与，左结合) ----------
console.log(5 & 3); // 1，0101 & 0011 = 0001

// ---------- 6: Bitwise XOR (按位异或，左结合) ----------
console.log(5 ^ 3); // 6，0101 ^ 0011 = 0110

// ---------- 5: Bitwise OR (按位或，左结合) ----------
console.log(5 | 3); // 7，0101 | 0011 = 0111

// ---------- 4: Logical AND (逻辑与，左结合，短路) ----------
console.log(true && false); // false
console.log(0 && "hello");  // 0（短路，返回第一个 falsy）
console.log("a" && "b");    // "b"（都 truthy，返回最后一个）

// ---------- 3: Logical OR / Nullish coalescing (逻辑或 / 空值合并，左结合) ----------
console.log(false || "fallback"); // "fallback"
console.log(0 || "default");      // "default"（0 是 falsy）
console.log(null ?? "default");   // "default"（仅 null/undefined 触发）
console.log(0 ?? "default");      // 0（0 不是 null/undefined）

// ---------- 2: Assignment / Conditional / Arrow / yield / spread (赋值及杂项，右结合) ----------
let a = 1, b = 2, c = 3;
a = b = c = 10;            // 右结合，a=b=c=10
console.log(a, b, c);       // 10 10 10
a += 5; console.log(a);     // 15
a -= 3; console.log(a);     // 12
a *= 2; console.log(a);     // 24
a /= 4; console.log(a);     // 6
a %= 4; console.log(a);     // 2
a **= 3; console.log(a);    // 8
a <<= 1; console.log(a);    // 16
a >>= 2; console.log(a);    // 4
a >>>= 1; console.log(a);   // 2
a &= 3; console.log(a);     // 2
a ^= 1; console.log(a);     // 3
a |= 4; console.log(a);     // 7
let x = null; x &&= "no";  console.log(x); // null（短路赋值）
let y = 0;    y ||= 5;     console.log(y); // 5（0 是 falsy）
let z = null; z ??= "def"; console.log(z); // "def"

// 三元运算符（右结合）
const score = 85;
const grade = score >= 90 ? "A" : score >= 60 ? "B" : "C";
console.log(grade); // "B"，右结合 = score>=90 ? "A" : (score>=60 ? "B" : "C")

// 箭头函数
const double = n => n * 2;
console.log(double(4)); // 8

// yield（在 generator 中）
function* gen() { yield 1; yield* [2, 3]; }
console.log([...gen()]); // [1, 2, 3]

// 展开运算符
console.log([...[1, 2], 3]); // [1, 2, 3]

// ---------- 1: Comma (逗号运算符，左结合，优先级最低) ----------
// 依次求值每个表达式，返回最后一个的值
let i = 0;
console.log((i++, i++, i)); // 2，执行了两次 i++，返回最后的 i
const val = (1 + 2, 3 + 4, 5 + 6);
console.log(val); // 11，返回最后一个表达式的值

// ============================================================
// 综合对比：优先级不同导致结果不同
// ============================================================
console.log(2 + 3 * 4);    // 14，* 优先于 +
console.log((2 + 3) * 4);  // 20，括号改变优先级
console.log(2 ** 3 * 4);   // 32，** 优先于 *
console.log(true || false && false); // true，&& 优先于 ||
console.log(1 < 2 == true);          // true，< 优先于 ==
