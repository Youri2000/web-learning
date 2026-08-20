1. v8
js source -> 执行


e.g. let x = 1 + 2

阶段1: -> ast
词法分析 lexical tokenization：拆词，比如关键字、括号
语法分析 syntax：for、=、+、...、class: e.g. let {..., obj} = object

VariableDeclaration
 └ let x
      └BinaryExpression +
           ├ 1
           └ 2

** 补充
var，let，const都有变量提升hoisting!

阶段2: -> 字节码（中间状态）ignition
生成后马上执行，消失得很快

└BinaryExpression +
           ├ 1
           └ 2
先加载 ‘2’，再加载‘1’，执行‘+’，再赋值，再变量声明

JIT：边编译边运行，边优化（监控体系，监控字节码 -> Turbofan）
过去解析器，效率很低，启动更快。
字节码可以直接运行，不直接需要CPU
function fn1(){
    return 1+2
}
字节码伪代码：
start  0
collection  1
2
add
return .

动态类型 vs 类型反馈 Type Feedback
function add (a, b) {
    return a + b
}
add(1, 2)
add("Hello", "World")
若经常/绝大多次参数都是number类型，v8就给了a:number，b:number（Turbofan的观察机制）

反优化机制：类型假设失效。TS类型校验，避免触发返优化机制 ？
偶尔推翻

作业：
1. v8两个memory：Stack / Heap
Call Stack 后进先出
存储、管理执行上下文，执行同步代码
压入一帧

Heap 存储引用数据类型

2. GC 垃圾回收机制
是否仍然可达 Roots，三色标记法 白 =》 灰 =》 黑

分代回收策略：
新生代 Scavenge：from/to 
老生代 Sweep/Compact



课后参考：
王爽 =》 编译原理