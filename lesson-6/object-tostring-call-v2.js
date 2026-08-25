const tests = {
    test1: 123,
    test2: 'hk',
    test3: false,
    test4: undefined,
    test5: null,
    test5_1: 1123n,
    test5_2: Symbol(),

    test6: {},
    test7: [],
    test8: new Set(),
    test9: new Map(),
    test10: new WeakMap(),

    test11: new Function(),

    test12: new Date(),

    test13: Math,

    test14: new RegExp(),

    test15: new Error(),

    test16: JSON,

    test17: new ArrayBuffer(),

    // test18: document,

    // test19: window,

    test20: global
}

Object.entries(tests).forEach(([key, value]) => {
    console.log(key, Object.prototype.toString.call(value))
})

const obj1 = {
    [Symbol.toStringTag]: 'MyType'
}

console.log(Object.prototype.toString.call(obj1))
console.log(Object.prototype.toString(obj1))