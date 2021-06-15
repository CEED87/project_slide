var container = document.querySelector('.container');
var activeFoto = document.querySelector('.photo');
// var foto = activeFoto

container.addEventListener('click',function(event) {
    var slideImg = event.target;
    var active = container.querySelector('.active-image');
      activeFoto.lastChild.remove();
    if (slideImg.parentNode.className === 'image') {
        var clone = slideImg.cloneNode();
        activeFoto.replaceChild(clone, activeFoto.lastChild)
        //  activeFoto.lastChild.remove();
        active.classList.remove('active-image');
        slideImg.parentNode.classList.add('active-image');
       
        // activeFoto.lastChild.remove();
 console.log(activeFoto.firstChild)
    }
       
    });
    // if (slideImg.parentNode.className === 'active-image') {
        
    // console.log(slideImg.parentNode);
// });

// if ()


