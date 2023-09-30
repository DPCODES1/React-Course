// string boolean numbers object array
// let name = "Deepak";
// console.log(name)
// name = 'Sivesh'
// console.log(name)
// const name = 'Deepak';
// console.log(name)
// name = 'Savesh'
const str = 'Deepak';
const num = 3;
const arr = [1, 2, 3, 'Deepak', ['Apple']] // 0 1 2 3 4 5
const obj = { 'name 1': 'Deepak', age: 23 }
const bool = true // false
console.log(arr[4][0])
console.log(obj['name 1'])

// == === <= >= != !== > <
console.log('1' == 1, 1 === '1', 1 < 2, 1 > 2, 1 >= 2, 3 <= 3, '1' == 1)
// == valuecheck === valuecheck,typecheck
if (false) {
    console.log('hi')
} else if (false) {
    console.log('hello all')
} else {
    console.log('Else block is executed')
}
// const data = 1==2 ? 1 : 2 // condition ? true : false
// console.log(data)

// console.log(1!==1 && 2===2)
// console.log(1!==1 || 2===2)

for (let i = 0; i <= 10; i = i + 1) {   // initialization i.e let i = 0,condition i<10, incrementation i++
    if (i == 1) {
        continue;
    }
    console.log(i)
}

const arr2 = ['Deepak', "Sivesh", "Lingesh"]

for (const data of arr2) { // const var_name of arr_name
    console.log(data)
}

const obj2 = { name: 'Deepak', age: '23' }

for (const data in obj2) {
    console.log(data + ':' + obj2[data])
}

let a = 0
// while(a<10) {
//     console.log(a)
//     a++
// }

do {
    console.log(a)
    a++
} while (a < 10);

function namer(name) {
    return 'Your name is ' + name
}

const namer1 = (name) => {return 'Your name is ' + name}
console.log(namer('Deepak'))
console.log(namer('Lingeh'))
console.log(namer1('Lingesh'))

// () => {}
