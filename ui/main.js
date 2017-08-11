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