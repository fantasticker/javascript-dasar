// DOM Selection
// document.getElementById() -> return element
const judul = document.getElementById('judul')

// document.getElementsByTagName() -> return HTMLCollection
const allP = document.getElementsByTagName('p')
for(let i = 0; i < allP.length; i++){
    allP[i].style.backgroundColor = 'red'
}

const h1 = document.getElementsByTagName('h1')[0]
console.log(h1)

// document.getElementsByClassName -> reutrn HTMLCollection
const p1 = document.getElementsByClassName('p1')
p1[0].innerHTML = 'ini diubah melalui javascript'

// document.querySelector() -> return element

// const p4 = document.querySelector('#b p')
// p4.style.color = 'green'
// p4.style.fontSize = '30px'

const li2 = document.querySelector('section#b ul li:nth-child(2)')
li2.style.backgroundColor = 'orange'


// querySelector yang kurang spesifik akan mengambil element teratas
const pajah = document.querySelector('p')
pajah.innerHTML = 'ini diubah melalui javascript'

// document.querySelectorAll() -> return NodeList
const p = document.querySelectorAll('p')

for( let i = 0; i < p.length; i++){
    p[i].style.backgroundColor = 'lightblue'
}

// Node Root
const sectionB = document.getElementById('b')
const p4 = sectionB.querySelector('p')
p4.style.backgroundColor = 'aqua'

// Kesimpulan
// document.querySelector() -> return element
// document.querySelectorAll() -> return NodeList