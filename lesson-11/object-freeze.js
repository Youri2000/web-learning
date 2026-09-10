const obj = {
    name: '张三',
    age: 18,
    address: {
        city: '北京'
    }
}

// 浅冻结，无法修改第一层属性
Object.freeze(obj)
obj.name = 'youri' // 浅层搞定
obj.address.city = '上海' // 深层被修改成功
console.log(obj) // { name: '张三', age: 18, address: { city: '北京' } }

// 递归深循环
function deepFreeze(obj, seen = new WeakSet()) {
    if (obj === null && typeof obj !== 'object') return

    if (seen.has(obj)) return
    seen.add(obj)

    Object.freeze(obj)

    for (const key of Reflect.ownKeys(obj)) {
        const value = obj[key]
        if (value !== null && typeof value === 'object') {
            deepFreeze(value)
        }
    }
}

const obj2 = {a: {b: {c: 1}}}
console.log('深拷贝')
deepFreeze(obj2)
obj2.a.b.c = 2
console.log(obj2)

// console.log(obj['name']);