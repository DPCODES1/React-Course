const data = ['hi', 'students', 'hello']
console.log(typeof ([]))
const len = data.push(3)
console.log(data, len)
const data2 = data.pop()
console.log(data, data2)
data.unshift(3)
console.log(data)
data.shift()
console.log(data)
const concatArray = data.concat([0, 2, 1])
console.log(concatArray)

const destructuredData = Array.from('hi')
console.log(destructuredData)

const slicedData = data.slice(0, 3) // start n-1
console.log(slicedData)
data.splice(1, 2, 2)
console.log(data)

const dataFind = data.findIndex((value, index, array) => {
    return value === 2
})

const forEachData = data.forEach((val, index, array) => {
    if (val == 2) {
        console.log('data')
    }
})

const mapedVal = data.map((val, idx, arr) => {
    return { data: val, idx: idx }
})
const numbers = [1, 2, 3, 4, 5, 6, 7]

const reducedData = numbers.reduce((preVal, curVal, curIdx) => {
    console.log(preVal, curVal)
    return preVal + curVal
}, 0)

const filteredData = numbers.filter((val, idx, arr) => val > 2)

console.log(dataFind, mapedVal, reducedData, filteredData)



