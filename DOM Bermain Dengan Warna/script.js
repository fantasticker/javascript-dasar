const tUbahWarna = document.getElementById('tUbahWarna')

tUbahWarna.addEventListener('click', function(){
    // document.body.style.backgroundColor = 'lightblue'
    // document.body.setAttribute('class' ,'biru-muda')
    document.body.classList.toggle('biru-muda')
})

const tAcakWarna = document.createElement('button')
const teksTAcakWarna = document.createTextNode('Acak Warna')
tAcakWarna.appendChild(teksTAcakWarna)
tAcakWarna.setAttribute('type', 'button')

tUbahWarna.after(tAcakWarna)

tAcakWarna.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 + 0)
    const g = Math.round(Math.random() * 255 + 0)
    const b = Math.round(Math.random() * 255 + 0)
    console.log(r)
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`
})

const sMerah = document.querySelector('input[name=sMerah]')
const sHijau = document.querySelector('input[name=sHijau]')
const sBiru = document.querySelector('input[name=sBiru]')

sMerah.addEventListener('input', () => {
    const r = sMerah.value
    const g = sHijau.value
    const b = sBiru.value
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`
})

sHijau.addEventListener('input', () => {
    const r = sMerah.value
    const g = sHijau.value
    const b = sBiru.value
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`
})

sBiru.addEventListener('input', () => {
    const r = sMerah.value
    const g = sHijau.value
    const b = sBiru.value
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`
})

document.body.addEventListener('mousemove', (event) => {
    // ide-nya adalah dengan membuat 2 variabel yang berisi bilangan bulat antara 0-255 yang merepresentasikan 2 warna (misal hijau dan biru)
    // 1. mengambil nilai koordinat mouse dengan event.clientX
    // 2. mengambil nilai lebar window dengan window.innerWidth
    const xPos = Math.round((event.clientX / window.innerWidth)*255)
    const yPos = Math.round((event.clientY / window.innerHeight)*255)
    document.body.style.backgroundColor = `rgb(${xPos},${yPos},0)`
})