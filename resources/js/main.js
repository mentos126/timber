const covers = document.querySelectorAll('#main .cover')
const coversSize = covers.length

if (( window.innerWidth > 800 ) && ( window.innerHeight > 600 )) {
  window.setInterval(function () {
    const time = new Date().getTime()
    covers[(time - 1) % coversSize].classList.remove('active')
    covers[(time) % coversSize].classList.add('active')
  }, 4999)
}