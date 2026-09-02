// 跳过外层循环
// break 还可以跳出代码块，跳出循环后还要继续执行代码
const twoDArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let found = null
outer: for (let i = 0; i < twoDArr.length; i++) {
    for (let j = 0; j < twoDArr[i].length; j++) {
        if (twoDArr[i][j] === 5) {
            found = {i, j}
            break outer
        }
    }
}
console.log(found)

// 代码块
outerBlock: {
    console.log('执行')
    break outerBlock
    console.log('不执行')
}


// continue只能在循环中使用
outer: for (let i = 0; i < twoDArr.length; i++) {
    for (let j = 0; j < twoDArr[i].length; j++) {
        if (twoDArr[i][j] === 5) continue outer
        console.log(twoDArr[i][j] )
    }
}
