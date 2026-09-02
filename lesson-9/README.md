## 隐式类型转换
两个步骤：
机制1:toPrimitive
toPrimitive
机制2:OrdinaryToPrimitive(机制)
王逍遥: valueOf / toString

.call()

reference type
ToPrimitive() Symbol.toPrimitive()
.toString()

[] == ![]
[].toString() ''
'' == false
0 == 0
true

# 作业
1. [Symbol.to](hint) 写完整
2. 了解String({})是[object Object] Number([1])的机制

ToString() =>(对象) ToPrimitive => [Symbol.toPrimitive] => OrdinaryToPrimitve => 查hint === 'string' => toString() => 普通对象 => [object 内置标签]

ToNumber() => ToPrimitive => [Symbol.toPrimitive] => OrdinaryToPrimitve => 查hint === 'number'  => valueOf() => [1] (对象本身) => toString() => "1" => ToNumber("1")  => 1

## 特殊
primitive: null

typeof {} = 'object'
[] = 'object' // 
function

3.  语句&表达式的差异 

### 判断技巧
能否放进 console.log()
###  定义分类
#### 表达式 Expression：
字面量
标志符引用
赋值

算数+模板字符串
比较
逻辑
三元表达式

函数调用 & 成员访问
new

#### 语句 Statement
声明 let/const/age
条件 if switch
循环 for while
跳转 return continue break throw try... catch

块语句 { }
空语句;
标签语句：label: fn (...) {} // todo

#### 同时是表达式和语句
1. ;

### 注意
函数声明，有变量提升；表达式无

function fn () {} 
const fn = () => {}