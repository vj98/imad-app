//Counter Code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function() {
  
  //Make a repeat to the counter endpoint
  
  //Capture response and store it in a variable
  
  //Render the variable in correct span
  counter = counter + 1;
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
};