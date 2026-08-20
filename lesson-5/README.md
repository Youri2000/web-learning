1.Stack：1.执行 2.轻量储存,放函数的调用，引用 // 面试时，基本数据类型在栈
Call 
Heap：1.真正的对象数据

e.g.
stack： 0x00011101
heap： {name:'zhangsan'}
<!--  -->
浅拷贝 & 深拷贝
拷贝的本质：赋值

GC（Heap）:内置free()处理断联的heap变量（标记）
Reachability：Roots
GC Roots 全局对象，譬如window，最根本的活着的起点（宿主环境环境对象）

user = null // "断联"

obj = {
    a: 123,
    obj2: {

    }
}

2. stack & call stack
// 
let age = 18
let user = {}

function fn1(){
    ///
}

function

课后
1. Mutable & immutable： 数组方法可变不可变
2. GC -》 data type
3. 深拷贝自己实现