// const dataFeched = fetch('https://swapi.dev/api/films')
// .then((res) => res.json()).then((data)=> {
//     console.log(data)
// })
const span = document.querySelector('span')
const ul = document.querySelector('ul')
let arr = []
let loaded = false
async function dataFetcher() {
    span.classList.add('loader')
    const fetchedData = await fetch('https://swapi.dev/api/films')
    if(!fetchedData.ok) {
        span.classList.remove('loader')
        throw {err:'Could not fetch the data from the resourse'}
    }
    const resData = await fetchedData.json()
    arr.push(...resData.results)
    console.log(arr)
    span.classList.remove('loader')
    arr.forEach((val)=> {
        const li = document.createElement('li')
        li.innerHTML = `<h1>${val.title}</h1>
        <p>${val.opening_crawl}</p>
        `
        ul.append(li)
    })    
}
    dataFetcher().catch((err)=> alert(err.err))

console.log('hi')