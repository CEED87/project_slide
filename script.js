var container = document.querySelector('.container');
var activeFoto = document.querySelector('.photo');

container.addEventListener('click',function(event) {
    var slideImg = event.target;
    if (slideImg.parentNode.className === 'image') {
        slideImg.classList.add('active-image');
    }
    console.log(slideImg.parentNode);
});


