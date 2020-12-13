const main = document.querySelector('#main')
const coverWrapper = document.querySelector('#main .cover-wrapper')
const slogan = document.querySelector('#main .slogan')
const sloganAlt = document.querySelector('#items .slogan-alt')

const resizeHandler = () => {
  main.classList.remove('min')
  slogan.style.display = 'block'
  sloganAlt.style.display = 'none'

  if (slogan.clientHeight > 500) {
    main.classList.add('min')
  }

  if ((main.clientHeight / 2) - 20 <= slogan.clientHeight) {
    main.classList.add('min')

    // check after minify display
    if ((main.clientHeight / 2) - 20 <= slogan.clientHeight) {
      slogan.style.display = 'none'
      sloganAlt.style.display = 'flex'
    }
  }
}

resizeHandler()
window.addEventListener('resize', resizeHandler)
