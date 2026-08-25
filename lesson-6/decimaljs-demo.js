const Decimal = require('decimal.js')

//  案例1: 0.1 + 0.2
const a = new Decimal('0.1')
const b = new Decimal('0.2')
const res = a.plus(b)
console.log('0.1 + 0.2 =', res)

// 案例2: minus、times、div，链式运算
const res2 = new Decimal('0.1').times(new Decimal('0.3'))
console.log(res2)

// 案例3: toFixed
console.log('JS原生 toFixed', 1.005.toFixed(2)) // 1.00
console.log('Decimal toFixed', new Decimal('1.005').toFixed(2)) // 1.01

// 案例4: 比较大小
console.log('大于', new Decimal('0.5').gt(new Decimal('0.3'))) // true  
