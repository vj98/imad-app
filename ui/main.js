//Counter Code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function() {
  
  //Create a request object
  var request = new XMLhttpRequest();
  
  //Capture response and store it in a variable
  request.onreadystatechange = function() {
      if (request.readystate === XMLHttpRequest.DONE) {
        if (request.status === 200) {
            //Capture a list  of names and render it as a list
            var names = ['name1', 'name2', 'name3', 'name4'];
            var list = '';
            for (var i = 0; i < names.length; i++) {
                list += '<li>' + names[i] + '</li>';
            }
         }
      }
  }
  
  //Make the request
  request.open('GET', 'http://bhativijay17.imad.hasura-app.io/counter', true);
  request.send(null);
};

//submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    //Make requesst to the server and send the name
     //Create a request object
  var request = new XMLhttpRequest();
  
  //Capture response and store it in a variable
  request.onreadystatechange = function() {
      if (request.readystate === XMLHttpRequest.DONE) {
        if (request.status === 200) {
            //Capture a list  of names and render it as a list
           var names = request.responseText;
           names = JSON.parse(names);
            var list = '';
            for (var i = 0; i < names.length; i++) {
                list += '<li>' + names[i] + '</li>';
            }
         }
      }
  }
  
  //Make the request
  request.open('GET', 'http://bhativijay17.imad.hasura-app.io/submit-name?name=' + name, true);
  request.send(null);
   
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
};
};