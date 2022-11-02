// (1) 漢堡清單按鈕功能設定
const btnList = document.querySelector('#btn-list')
const menu = document.querySelector('#menu')
btnList.onclick = () => {
  if (window.innerWidth < 1200) {
    if (btnList.dataset.key === '0') {
      menu.style.left = '0'
      document.querySelector('#btn-list i').classList.replace('fa-bars', 'fa-xmark')
      btnList.dataset.key = '1'
    } else {
      menu.style.left = '-100%'
      document.querySelector('#btn-list i').classList.replace('fa-xmark', 'fa-bars')
      if (btnMenuChild.dataset.key === '1') {
        menuChild.style.display = 'none'
        menuIcon.classList.replace('fa-chevron-up', 'fa-chevron-down')
        btnMenuChild.dataset.key = '0'
      }
      btnList.dataset.key = '0'
    }
  }
}

// (2) 導覽列裡的菜單相關功能設定
const btnMenuChild = document.querySelector('#btn-menuChild')
const menuChild = document.querySelector('#menu > li ul')
const menuIcon = document.querySelector('#btn-menuChild .menuIcon')
btnMenuChild.onclick = () => {
  if (btnMenuChild.dataset.key === '0') {
    menuChild.style.display = 'block'
    menuIcon.classList.replace('fa-chevron-down', 'fa-chevron-up')
    btnMenuChild.dataset.key = '1'
  } else {
    menuChild.style.display = 'none'
    menuIcon.classList.replace('fa-chevron-up', 'fa-chevron-down')
    btnMenuChild.dataset.key = '0'
  }
}
btnMenuChild.onmouseenter = () => {
  if (window.innerWidth >= 1200) {
    menuChild.style.display = 'block'
    menuIcon.classList.replace('fa-chevron-down', 'fa-chevron-up')
  }
}
btnMenuChild.onmouseleave = () => {
  if (window.innerWidth >= 1200) {
    menuChild.style.display = 'none'
    menuIcon.classList.replace('fa-chevron-up', 'fa-chevron-down')
  }
}

// (3) 會員登入/註冊相關按鈕設定
const btnUser = document.querySelector('#btn-user')
const user = document.querySelector('#user')
const btnClose = document.querySelector('#btn-close')
const btnSignIn = document.querySelector('#btn-signIn')
const btnSignUp = document.querySelector('#btn-signUp')
const signIn = document.querySelector('#signIn')
const signUp = document.querySelector('#signUp')
const formClear = document.querySelectorAll('#user form .formClear')
btnUser.onclick = () => {
  user.style.display = 'block'
}
btnClose.onclick = () => {
  user.style.display = 'none'
  for (const v of formClear) {
    v.value = ''
  }
  signIn.style.display = 'block'
  signUp.style.display = 'none'
  btnSignIn.style.borderBottom = '5px double var(--bs-color-pink2)'
  btnSignUp.style.borderBottom = 'none'
}
btnSignIn.onclick = () => {
  signIn.style.display = 'block'
  signUp.style.display = 'none'
  btnSignIn.style.borderBottom = '5px double var(--bs-color-pink2)'
  btnSignUp.style.borderBottom = 'none'
  for (const v of formClear) {
    v.value = ''
  }
}
btnSignUp.onclick = () => {
  signUp.style.display = 'block'
  signIn.style.display = 'none'
  btnSignUp.style.borderBottom = '5px double var(--bs-color-pink2)'
  btnSignIn.style.borderBottom = 'none'
  for (const v of formClear) {
    v.value = ''
  }
}
