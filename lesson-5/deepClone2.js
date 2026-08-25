// ============================================================
// 增强版深拷贝：支持多种数据类型 + 循环引用
// ============================================================
function myDeepClone(obj, map = new WeakMap()) {

    // ---------- 1. 递归出口：基本类型 & 函数 & null ----------
    // 基本类型（number / string / boolean / undefined / symbol / bigint）
    // 和 null，本身就是"值"，直接返回即可。
    // 函数也直接返回：函数是可执行代码，没有"内部状态"需要复制，
    // 同一个函数引用共享是安全且合理的。
    if (obj === null || typeof obj !== 'object') {
      return obj
    }
  
    // ---------- 2. 循环引用检测 ----------
    // 如果这个对象已经拷贝过，直接返回之前的拷贝结果，避免无限递归。
    if (map.has(obj)) {
      return map.get(obj)
    }
  
    // ---------- 3. 按具体类型分别处理 ----------
    let result
  
    // 3.1 日期对象：用原值重新构造一个新 Date
    if (obj instanceof Date) {
      result = new Date(obj.getTime())
    }
  
    // 3.2 正则对象：保留原正则的 pattern 和 flags
    else if (obj instanceof RegExp) {
      result = new RegExp(obj.source, obj.flags)
    }
  
    // 3.3 Map：需要递归拷贝每一个 value（key 一般是基本类型或引用，这里也递归）
    else if (obj instanceof Map) {
      result = new Map()
      map.set(obj, result) // 先登记，防止循环引用
      obj.forEach((value, key) => {
        result.set(myDeepClone(key, map), myDeepClone(value, map))
      })
      return result
    }
  
    // 3.4 Set：递归拷贝每一个元素
    else if (obj instanceof Set) {
      result = new Set()
      map.set(obj, result) // 先登记
      obj.forEach(value => {
        result.add(myDeepClone(value, map))
      })
      return result
    }
  
    // 3.5 数组：创建空数组
    else if (Array.isArray(obj)) {
      result = []
    }
  
    // 3.6 普通对象：创建空对象，并保留原型链
    else {
      result = Object.create(Object.getPrototypeOf(obj))
    }
  
    // ---------- 4. 登记当前对象（用于循环引用检测）----------
    // 注意：Map / Set 已经在上面提前登记了，这里只处理数组和普通对象。
    map.set(obj, result)
  
    // ---------- 5. 遍历属性，递归拷贝 ----------
    // for...in 会遍历自身和原型链上的可枚举属性。
    // 用 hasOwnProperty 过滤掉继承来的属性，只拷贝自身属性。
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[key] = myDeepClone(obj[key], map)
      }
    }
  
    // ---------- 6. 返回结果 ----------
    return result
  }
  