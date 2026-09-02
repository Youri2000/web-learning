// 作业1
let obj = {
    // 流程1: [Symbol.toPrimitive] 
    //  hint: 偏向，default
    [Symbol.toPrimitive](hint) {
       if (hint === 'string') return 'hello'
       if (hint === 'number') return 42
       return 'default'
    },


    // 流程2: OrdinaryToPrimitive
    // valueOf / toString
    valueOf(hint) {
        // console.log(hint) // 此处无hint
        return { name: '张三' }
    },

    toString(hint) {
        // console.log(hint)// 此处无hint
        // return '50'
        return { name: '李四' }
    }
}


// console.log(obj + 1)
console.log(Number(obj))// 0
// console.log(String(obj) )// hello world
// 希望obj + 1= 2

// Number(obj)