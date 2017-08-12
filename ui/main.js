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
              var counter  = request.responsseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
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
    
    //Capture a list  of names and render it as a list
    var names = ['name1', 'name2', 'name3', 'name4'];
    var list = '';
    for (var i = 0; i < names.length; i++) {
        list += '<li>' + names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ui.innerHTML = list;
};
};