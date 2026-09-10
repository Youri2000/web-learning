## Array & Set 都是数据集合
1. index
2. .length
3. value

### sparse array
1. 分配空间✅
2. 分配对应值

const arr1 = new Array(2) // [ <2 empty items> ] 
等价于 => [,]
不等于 => [undeinfed,undefined]

## Object & Map

# 作业
1. ✅Array.of() 填入一个数字2: => [2]
2. ✅// 实现一个函数，平铺List转Tree结构，子节点parent字段对应父节点id

//     ```js
// ## 输入
// const list = [
// { id: 2, content: 'CORS', parent: 1 },
// { id: 3, content: 'Axios', parent: 1 },
// { id: 5, content: '~', parent: 6 },
// { id: 1, content: 'JSContext' },
// { id: 6, content: 'Event Loop' },
// { id: 9, content: 'webpack/rollup', parent: 5 },
// { id: 7, content: 'Serverless', parent: 3 }
// ]

// ## 输出
// const tree = [
//     {
//         'id': 1,
//         'content': 'JSContext',
//         'children': [
//             { 'id': 2, 'content': 'CORS', 'parent': 1 },
//             { 'id': 3, 'content': 'Axios', 'parent': 1, 'children': [{ 'id': 7, 'content': 'Serverless', 'parent': 3 }] }，
//         ]
//     },
//     {
//         'id': 6,
//         'content': 'Event Loop',
//         'children': [
//             {
//                 'id': 5, 'content': '~', 'parent': 6,
//                 'children': [{ 'id': 9, 'content': 'webpack/rollup', 'parent': 5 }]
//             }
//         ]
//     }
// ]
3. cs50