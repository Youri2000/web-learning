// sort v.s. toSorted
console.log('sort')
const arr1 = [1, 21, 8]
const newArr1 = arr1.sort((a, b) => a - b)
console.log(arr1)
console.log(newArr1)

console.log('toSorted')
const arr2 = [1, 21, 8]
const newArr2 = arr2.toSorted((a, b) => a - b)
console.log(arr2)
console.log(newArr2)

// reverse v.s. toReversed