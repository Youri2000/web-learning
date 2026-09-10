function listToTree(list) {
    // 空间换时间
    const map = new Map()

    for (const item of list) {
        map.set(item.id, {...item})
    }

    const roots = []

    for (const item of map.values()) {
        // const node = {...item}
        if (item.parent === undefined) { // ❌ 不能写null
            roots.push(item) 
        } else {
            (map.get(item.parent).children ??= []).push(item)
        }

        
    }

    return roots

    // const map = new Map()

    // // 遍历一次，放入map
    // for(const item of list) {
    //     map.set(item.id, {...item})
    // }

    // // 第二次遍历构建，看parent的id是否在映射表
    // const res = []
    // for (const item of list) {
    //     if (item.parent === undefined) {
    //         // 如果没有 parent属性, 则为为一级节点
    //         res.push({...item})
    //     } else {
    //         // 构建children
    //         (map.get(item.parent).children ??= []).push({...item})
    //     }
    // }
    // return res
}

const list = [
{ id: 2, content: 'CORS', parent: 1 },
{ id: 3, content: 'Axios', parent: 1 },
{ id: 5, content: '~', parent: 6 },
{ id: 1, content: 'JSContext' },
{ id: 6, content: 'Event Loop' },
{ id: 9, content: 'webpack/rollup', parent: 5 },
{ id: 7, content: 'Serverless', parent: 3 }
]

console.log(JSON.stringify(listToTree(list)))

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
