const Sales1 = [
  {
    img: './images/筆電.png',
    job: 'A 品牌',
    content: '9吋 4G/64G 平板電腦',
    price1: '原價: 7000 元',
    price2: '特價: 6500 元'
  },
  {
    img: './images/行動電源.png',
    job: 'B 品牌',
    content: '快充行動電源 9600mAh',
    price1: '價格: 900 元',
    price2: ''
  },
  {
    img: './images/藍芽耳機.png',
    job: 'C 品牌',
    content: '無線藍芽耳機',
    price1: '價格: 900 元',
    price2: ''
  },
  {
    img: './images/耳罩式藍芽耳機.png',
    job: 'D 品牌',
    content: '耳罩式藍芽降噪耳機',
    price1: '原價: 2299 元',
    price2: '特價: 1950 元'
  }
]

const Sales2 = [
  {
    img: './images/夾心酥.png',
    job: 'A 品牌',
    content: '手工夾心酥-草莓口味',
    price1: '價格: 125 元',
    price2: '11/30止 打 8 折'
  },
  {
    img: './images/咖啡2.png',
    job: 'B 品牌',
    content: '經典咖啡粉',
    price1: '價格: 299 元',
    price2: '買一送一'
  },
  {
    img: './images/巧克力餅乾.png',
    job: 'C 品牌',
    content: '巧克力餅乾-堅果口味',
    price1: '價格: 89 元',
    price2: ''
  },
  {
    img: './images/堅果.png',
    job: 'D 品牌',
    content: '綜合活力堅果',
    price1: '價格: 350 元',
    price2: ''
  }
]

const Sales3 = [
  {
    img: './images/美白修護霜.png',
    job: 'A 品牌',
    content: '淨白深層美白修護霜',
    price1: '原價: 1080 元',
    price2: '特價: 899 元'
  },
  {
    img: './images/口紅2.png',
    job: 'B 品牌',
    content: '超完美持久唇膏',
    price1: '價格: 960 元',
    price2: ''
  },
  {
    img: './images/BB 霜.png',
    job: 'C 品牌',
    content: '水嫩BB霜',
    price1: '價格: 357 元',
    price2: ''
  },
  {
    img: './images/化妝水.png',
    job: 'D 品牌',
    content: '極水保濕化妝水',
    price1: '價格: 398 元',
    price2: ''
  }
]

const btnHotSalesS = document.querySelector('#btn-hotSales-s')
const btnHotSalesM = document.querySelector('#btn-hotSales-m')
const btnHotSalesL = document.querySelector('#btn-hotSales-l')
const salesImageH = document.querySelectorAll('#hotSales-swiper .swiper-slide .image')
const salesJobH = document.querySelectorAll('#hotSales-swiper .swiper-slide .job')
const salesContentH = document.querySelectorAll('#hotSales-swiper .swiper-slide .content')
const salesPrice1H = document.querySelectorAll('#hotSales-swiper .swiper-slide .price1')
const salesPrice2H = document.querySelectorAll('#hotSales-swiper .swiper-slide .price2')

btnHotSalesS.onclick = () => {
  btnHotSalesS.style.backgroundColor = 'var(--bs-color-pink2)'
  btnHotSalesM.style.backgroundColor = 'var(--bs-color-white)'
  btnHotSalesL.style.backgroundColor = 'var(--bs-color-white)'
  btnHotSalesS.style.color = 'var(--bs-color-white)'
  btnHotSalesM.style.color = 'var(--bs-color-pink2)'
  btnHotSalesL.style.color = 'var(--bs-color-pink2)'
  for (let i=0; i<4; i++) {
    salesImageH[i].src = Sales1[i].img
    salesJobH[i].innerText = Sales1[i].job
    salesContentH[i].innerText = Sales1[i].content
    salesPrice1H[i].innerText = Sales1[i].price1
    salesPrice2H[i].innerText = Sales1[i].price2
  }
}

btnHotSalesM.onclick = () => {
  btnHotSalesS.style.backgroundColor = 'var(--bs-color-white)'
  btnHotSalesM.style.backgroundColor = 'var(--bs-color-pink2)'
  btnHotSalesL.style.backgroundColor = 'var(--bs-color-white)'
  btnHotSalesS.style.color = 'var(--bs-color-pink2)'
  btnHotSalesM.style.color = 'var(--bs-color-white)'
  btnHotSalesL.style.color = 'var(--bs-color-pink2)'
  for (let i=0; i<4; i++) {
    salesImageH[i].src = Sales2[i].img
    salesJobH[i].innerText = Sales2[i].job
    salesContentH[i].innerText = Sales2[i].content
    salesPrice1H[i].innerText = Sales2[i].price1
    salesPrice2H[i].innerText = Sales2[i].price2
  }
}

btnHotSalesL.onclick = () => {
  btnHotSalesS.style.backgroundColor = 'var(--bs-color-white)'
  btnHotSalesM.style.backgroundColor = 'var(--bs-color-white)'
  btnHotSalesL.style.backgroundColor = 'var(--bs-color-pink2)'
  btnHotSalesS.style.color = 'var(--bs-color-pink2)'
  btnHotSalesM.style.color = 'var(--bs-color-pink2)'
  btnHotSalesL.style.color = 'var(--bs-color-white)'
  for (let i=0; i<4; i++) {
    salesImageH[i].src = Sales3[i].img
    salesJobH[i].innerText = Sales3[i].job
    salesContentH[i].innerText = Sales3[i].content
    salesPrice1H[i].innerText = Sales3[i].price1
    salesPrice2H[i].innerText = Sales3[i].price2
  }
}

const btnNewSalesS = document.querySelector('#btn-newSales-s')
const btnNewSalesM = document.querySelector('#btn-newSales-m')
const btnNewSalesL = document.querySelector('#btn-newSales-l')
const salesImageN = document.querySelectorAll('#newSales-swiper .swiper-slide .image')
const salesJobN = document.querySelectorAll('#newSales-swiper .swiper-slide .job')
const salesContentN = document.querySelectorAll('#newSales-swiper .swiper-slide .content')
const salesPrice1N = document.querySelectorAll('#newSales-swiper .swiper-slide .price1')
const salesPrice2N = document.querySelectorAll('#newSales-swiper .swiper-slide .price2')

btnNewSalesS.onclick = () => {
  btnNewSalesS.style.backgroundColor = 'var(--bs-color-pink2)'
  btnNewSalesM.style.backgroundColor = 'var(--bs-color-white)'
  btnNewSalesL.style.backgroundColor = 'var(--bs-color-white)'
  btnNewSalesS.style.color = 'var(--bs-color-white)'
  btnNewSalesM.style.color = 'var(--bs-color-pink2)'
  btnNewSalesL.style.color = 'var(--bs-color-pink2)'
  for (let i=3; i>=0; i--) {
    salesImageN[i].src = Sales1[i].img
    salesJobN[i].innerText = Sales1[i].job
    salesContentN[i].innerText = Sales1[i].content
    salesPrice1N[i].innerText = Sales1[i].price1
    salesPrice2N[i].innerText = Sales1[i].price2
  }
}

btnNewSalesM.onclick = () => {
  btnNewSalesS.style.backgroundColor = 'var(--bs-color-white)'
  btnNewSalesM.style.backgroundColor = 'var(--bs-color-pink2)'
  btnNewSalesL.style.backgroundColor = 'var(--bs-color-white)'
  btnNewSalesS.style.color = 'var(--bs-color-pink2)'
  btnNewSalesM.style.color = 'var(--bs-color-white)'
  btnNewSalesL.style.color = 'var(--bs-color-pink2)'
  for (let i=3; i>=0; i--) {
    salesImageN[i].src = Sales2[i].img
    salesJobN[i].innerText = Sales2[i].job
    salesContentN[i].innerText = Sales2[i].content
    salesPrice1N[i].innerText = Sales2[i].price1
    salesPrice2N[i].innerText = Sales2[i].price2
  }
}

btnNewSalesL.onclick = () => {
  btnNewSalesS.style.backgroundColor = 'var(--bs-color-white)'
  btnNewSalesM.style.backgroundColor = 'var(--bs-color-white)'
  btnNewSalesL.style.backgroundColor = 'var(--bs-color-pink2)'
  btnNewSalesS.style.color = 'var(--bs-color-pink2)'
  btnNewSalesM.style.color = 'var(--bs-color-pink2)'
  btnNewSalesL.style.color = 'var(--bs-color-white)'
  for (let i=3; i>=0; i--) {
    salesImageN[i].src = Sales3[i].img
    salesJobN[i].innerText = Sales3[i].job
    salesContentN[i].innerText = Sales3[i].content
    salesPrice1N[i].innerText = Sales3[i].price1
    salesPrice2N[i].innerText = Sales3[i].price2
  }
}