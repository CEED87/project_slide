var container = document.querySelector('.container');
var photo = document.querySelector('img');

container.addEventListener('click', function (event) {
  var slideImg = event.target;
  var active = container.querySelector('.active-image');

  if (slideImg.parentNode.className === 'image') {
    var attribute = slideImg.getAttribute('src');
    active.classList.remove('active-image');
    slideImg.parentNode.classList.add('active-image');
    photo.setAttribute('src', attribute);
  }
});