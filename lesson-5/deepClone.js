//  2.1 引入weakMap
function myDeepClone (obj, map = new WeakMap()) {
    // 1.1递归出口
    if (obj === null || typeof obj !== 'object') {
        return obj
    }
    // 2.2 循环引用
    if (map.has(obj)) {
        return map.get(obj)
    }
    // 1.2其余情况：初始化为数组/对象
    const result = Array.isArray(obj) ? [] : {}

    // 2.3
    map.set(obj, result)

    // 1.3遍历属性
    for (const key in obj) {
        result[key] = myDeepClone(obj[key], map)
    }
    // 1.4 返回结果
    return result
}

// 朴素版测试用例
const obj1 = {
    name : '张三',
    address: {
        city: '北京'
    }
}

const res1 = myDeepClone(obj1)
res1.address.city = '上海'
console.dir(obj1)

// 循环引用版测试用例
const obj2 = {
    name: '李四',
    age: 25
  };
  obj2.self = obj2;  
  
  const res2 = myDeepClone(obj2);
  res2.self.age = 99; 
  