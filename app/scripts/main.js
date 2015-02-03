// Created my library
var jasonLib = {
  name: 'Jason',
  greet: function(){
    alert("This is the library for " + jasonLib.name);
  },
  // Created add function
  add: function(x,y){
    return x + y;
  },
  // Created subtract function
  subtract: function(x,y){
    return x - y;
  },
  // Created multiplication function
  multiply: function(x,y){
    return x * y;
  },
  // Created a division function
  divide: function(x,y){
    return x / y;
  },
}
// Created a function to get the current date
var today = new Date();
var day = today.getDate();
var month = today.getMonth()+1;
var year = today.getFullYear();
  if (day < 10){
    day = '0' + day
  }
  if (month < 10){
    month = '0' + month
  }
  today = month+'/'+day+'/'+year;

// Created a function to get the current time
  function currentTime() {

    var h = (today.getHours() < 10?'0':'') + today.getHours(),

        m = (today.getMinutes() < 10?'0':'') + today.getMinutes();

      currentTime.value = h + ':' + m;
  }
// Created a function to get half of the value
 var half = function(x){
   return x/2;
 }
// Created a function to multiply the value by 3
 var triple = function(x) {
   return x + x + x;
 }
 // Created a function to convert fahrenheit to celcius
 function tempConverter(x){
   return (5/9) * (x-32);
 }
