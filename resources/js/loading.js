window.addEventListener("load", function () {
  document.querySelector('#loading').style.display = 'none'
});

const menuList = document.querySelectorAll('.need-loader');

menuList.forEach(function (item) {
  item.addEventListener('click', function () {
    document.querySelector('#loading').style.display = 'block'
  })
})