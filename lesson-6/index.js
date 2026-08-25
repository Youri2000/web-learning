// let a = {}
// let b = {}

// a.b = b
// b.a = a

// a = null
// b = null


const obj = {}
const arr = []
//  分代价说 Young Generation， 如果多次存活，进入Old Generation
//  譬如闭包，长期引用
//  clearInterval()，事件监听，removeEventListener()

// react处理事件监听
useEffect(()=>{
    window.addEventListener('resize',handler)
    return () => {window.removeEventListener('resize',handler)} // 重点remove，考虑到内存泄漏
}, [])

const obj2 = {
    [Symbol.toStringTag]: 'MyType'
}

// [object MyType]