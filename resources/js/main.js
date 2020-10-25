const covers = document.querySelectorAll('#main .cover')
let mainIndex = 1

window.setInterval(function () {
  covers[(mainIndex - 1) % covers.length].classList.remove('active')
  covers[(mainIndex) % covers.length].classList.add('active')
  mainIndex++
}, 5000)