## []
Array是Object特殊类型，所以可用[]

## 表达式 & 语句

匿名function

## 作业
1. 写下面两个箭头函数的ast，举例：
ArrowFunctionExpression
└body: statement

1️⃣const fn1= () => ({
    value: 2
})
ArrowFunctionExpression
- params: []
- body: ObjectExpression
-- properties: [Property]
--- key: Identifier (value)
--- value: Literal (2)

<!-- 补充 -->
ObjectExpression
└─ properties: [Property, Property]     ← 两个元素
   ├─ Property (key: a, value: 1)
   └─ Property (key: b, value: 2)


2️⃣const fn2 = () => {
    return {
        value: 2
    }
}
ArrowFunctionExpression
- params: []
- body: BlockStatement // 语句块
-- body: ReturnStatement
--- argument: ObjectExpression
---- properties: [Property]
----- key: Identifier (value)
--- --value: Literal (

2. js标签语句 一般配合break，continue

3. 预习数组

创建
- 字面量
- new
- from

* 类数组
1. .length
2. 数字索引[i]

增删改 mutable
1. push/pop
2. shift)/unshift
3. splice
4. sort(字典序/数字大小序)

immutable
1. slice

遍历处理 
1. map
2. filter
3. reduce

查找判断
1. indexOf/includes