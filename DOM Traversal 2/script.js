// DOM Traversal
// preventDefault() dan Event Bubbling

const close = document.body.querySelectorAll('.close')

close.forEach(function(el){
    el.addEventListener('click', function(e){
        e.target.parentElement.style.display = 'none'
        e.preventDefault() //ini untuk preventDefault()
        e.stopPropagation() //ini untuk Event Bubbling
    })
})

const cards = document.querySelectorAll('.card')
cards.forEach(function(card){
    card.addEventListener('click', function(e){
        alert('ok')
    })
})

// Mengambil element parent
const nama = document.querySelector('.nama')
console.log(nama.parentElement.parentElement)

// Mengambil element sibling
console.log(nama.nextElementSibling)
console.log(nama.nextElementSibling.nextElementSibling)
console.log(nama.previousElementSibling)
console.log(nama.previousElementSibling.previousElementSibling)