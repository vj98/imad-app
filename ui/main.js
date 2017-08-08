console.log('Loaded!');

//Changing text of the main-text div
var element = document.getElementById('main-text');

element.innerHTML = 'New Value';

//Have the image
var img = document.getElementById('madi');
img.onclick = function() {
    img.style.marginleft = '100px';
};

