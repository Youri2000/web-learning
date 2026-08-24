// ============================================
// 场景 3：实际应用 —— 用字符串配置还原共享 Symbol
// ============================================
// 模拟从配置取到值
const config = {theme: 'theme.dark'}
const themeSym = Symbol.for(config.theme)
const themeSym2 = Symbol.for('theme.dark')
console.log(themeSym === themeSym2)
console.log(Symbol.keyFor(themeSym)) // 通过值找到key

// ============================================
// 场景 4：用 Symbol.for 做共享枚举，避免魔法字符串
// 若用普通字符串类型，会导致字符串散落各处，如果全局替换，容易误伤
// 若用Symbol，虽然解决了魔法字符串，但跨域时无法还原
// ============================================

const STATUS = {
    PENDING: Symbol.for('status.pending'),
    SUCCESS: Symbol.for('status.success'),
    ERROR: Symbol.for('status.error')
}

const handleStatus = (status) => {
    switch (status) {
        case STATUS.PENDING:
            return '加载中'
        case STATUS.SUCCESS:
            return '成功'
        case STATUS.ERROR:
            return '失败'
    }
}

const status1 = Symbol.for('status.pending')
const res = handleStatus(status1)
console.log(res)
// const STATUS = {
//     SUCCESS: Symbol.for('status.success'),
//     PENDING: Symbol.for('status.pending'),
//     ERROR: Symbol.for('status.error'),
// }

// const handleStuatus = (status) => {
//     switch (status) {
//         case STATUS.SUCCESS:
//             return '成功'
//         case STATUS.PENDING:
//             return '加载中'
//         case STATUS.ERROR:
//             return '失败'
//         default:
//             return '未知'
//     }
// }

// const status1 = Symbol.for('status.success')
// const res = handleStuatus(status1)
// console.log(res)