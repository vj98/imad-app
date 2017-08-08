console.log('Loaded!');

//Changing text of the main-text div
var element = document.getElementById('main-text');

element.innerHTML = 'New Value';

//Have the image
var img = document.getElementById('madi');

var marginleft = 0;
function moveRight () {
    marginleft = marginleft + 10;
    img.style.marginleft = marginleft + 'px';
}

img.onclick = function() {
    img.style.marginleft = '100px';
};

