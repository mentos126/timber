document.querySelector('#loading').style.display = 'block'
window.addEventListener("load", function () {
  document.querySelector('#loading').style.display = 'none'
});

const menuList = document.querySelectorAll('.need-loader');

for (let i = 0; i < menuList.length; i++) {
  menuList[i].addEventListener('click', function () {
    document.querySelector('#loading').style.display = 'block'
  })
}