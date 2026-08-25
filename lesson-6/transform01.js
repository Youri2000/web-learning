// 1: 0, NaN
Number(null)
Number(undefined)

// 2: 0, NaN
Number("")
Number("123abc")

//3: 'null', '{}'
String(null)
String({})

//4: false, true
Boolean([])
Boolean("0")

//5: 1
Number(true) + String(false)

//6: false, false
Boolean(NaN)
Boolean(-0)
