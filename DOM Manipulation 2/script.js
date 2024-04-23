// Buat elemen baru
const pBaru = document.createElement('p')

// Buat text yang ingin dimasukkan ke elemen yang baru
const teksPBaru = document.createTextNode('ini paragraf baru')

// Masukkan text ke elemen baru
pBaru.appendChild(teksPBaru);

// Masukkan elemen baru ke akhir section 4
const sectionA = document.getElementById('a')
sectionA.appendChild(pBaru)

// Masukkan elemen baru ke section#b ul li:nth-child(2) menggunakan insertBefore()
const liBaru = document.createElement('li')
const teksLiBaru = document.createTextNode('ini li baru')
liBaru.appendChild(teksLiBaru)

const ul = document.querySelector('section#b ul')
const li2 = ul.querySelector('section#b ul li:nth-child(2)')

ul.insertBefore(liBaru, li2)

// Menggunakan method parentNode.removeChild()
const link = document.getElementsByTagName('a')[0]
sectionA.removeChild(link)

// Menggunakan method parentNode.replaceChild()
const sectionB = document.getElementById('b')
const p4 = sectionB.querySelector('p')
const h2Baru = document.createElement('h2')
const textH2Baru = document.createTextNode('ini h2 baru')
h2Baru.appendChild(textH2Baru)

sectionB.replaceChild(h2Baru, p4)

// iseng
pBaru.style.backgroundColor = 'lightgreen'