// 易错1：对象、数组的 String() ：外面直接加引号
String([])
String([1,2])
String({a:1})

// 易错2：Boolean 坑，牢记只有6个假值：true, true, true, true
Boolean({})
Boolean(" ")
Boolean([])
Boolean(0.0)

// 易错3：Number 数组、特殊字符串: NaN, 1, NaN, 0
Number([])
Number([1])
Number("   ")
Number(null)

// 易错4：+ 一边字符串触发拼接（高频坑）:‘1true’，‘12’
1 + String(true) 
Number(true) + "2"

// 易错5：混合显示转换连环计算：‘0null’，100
Number(false) + String(null)
Boolean(NaN) + 100

// 易错6：容易搞混 JSON.stringify vs String() '{}', '{}'
String({})
JSON.stringify({})
