window.addEventListener("load", function() {
  document.querySelector('#loading').style.display = 'none'
});

const menuList = document.querySelectorAll('#menu .list a');

menuList.forEach(function (item) {
  item.addEventListener('click', function () {
    document.querySelector('#loading').style.display = 'block'
  })
})