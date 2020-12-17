const covers = document.querySelectorAll('#main .cover')
const coversSize = covers.length
let increment = 0

window.setInterval(function () {
  for(let i = 0; i < coversSize; i++) {
    const index = increment % coversSize
    if (i === index) {
      covers[i].classList.add('active')
    } else {
      covers[i].classList.remove('active')
    }
  }
  increment++
}, 3000)