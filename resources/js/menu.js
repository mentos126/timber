const menu = document.querySelector('nav#menu')
const listMenu = document.querySelector('nav#menu .list')
const contactMenu = document.querySelector('nav#menu .contact')
const actionMenu = document.querySelector('#action-menu .burger-menu')

actionMenu.addEventListener('click', function () {
  if (actionMenu.classList.contains('close')) {
    actionMenu.classList.remove('close')
    actionMenu.classList.add('open')
    actionMenu.children[2].classList.remove('bar')
    menu.classList.add('active')
    listMenu.style.display = 'block'
    contactMenu.style.display = 'block'
  } else {
    actionMenu.classList.remove('open')
    actionMenu.classList.add('close')
    actionMenu.children[2].classList.add('bar')
    menu.classList.remove('active')
    setTimeout(function () {
      listMenu.style.display = 'none'
      contactMenu.style.display = 'none'
    }, 600)
  }
})

window.addEventListener('scroll', function () {
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

  if (window.scrollY + 50 >= vh) {
    actionMenu.classList.add('scroll-color')
  } else {
    actionMenu.classList.remove('scroll-color')
  }
})