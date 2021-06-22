/// x = 10,y = 3 , what is x + u
// 1) Variable -
var name ="Amirul";
console.log(name);
// string operation (+)
var message = "Hello "+name;
console.log(message);

// 2) Variable number
var a = 10;
var b = 3;
// Number operation (+,-,*,/)
var sum = a + b;
console.log(sum);
var minus = a - b;
console.log(minus);
var product = a * b;
console.log(product);
var division = a / b;
console.log(division);
var modulo = a % b;
console.log(modulo);

//3) boolean
var hungry = true;
var tired = false;
// OR and AND (boolean operation)
console.log (hungry && tired); // both of it need to be true for it to be true
console.log (hungry || tired); // one of it need to be true for it to be true
console.log (!hungry) // The reverse of the condition

// Condition (if else)

var age = 15

if (age < 18){
  console.log("You cannot watch the movie");
}
else{
  console.log("You may watch the movie");
}

if (age<13){
  console.log("You cannot watch the movie");
}
else if (age<18){
  console.log("You may watch the movie with parents");
}
else{
  console.log("You may watch the movie");
}
var number = 63
if (number & 2 == 0){
  console.log(number+ " is an even number");
} 
else{
  console.log(number+ " is an odd number"); 
}  

var passengerAge = 70;
var oriPrice = 100;

if (passengerAge<18) {
  var finalPrice = 0.5 * oriPrice;
  console.log("Final Price is RM "+finalPrice);
}
else if(passengerAge<40) {
  var finalPrice = oriPrice;
  console.log("Final Price is RM "+finalPrice);
}
else if(passengerAge<65) {
  var finalPrice = 0.75 * oriPrice;
  console.log("Final Price is RM "+finalPrice);
}
else{
  console.log("Final Price is Rm "+0.5*oriPrice);
}

// For loop = Repeat 10 times..
// from... 0 until 10; each iteration add by one
for (var i = 0; i < 10 ; i++){
    // Show the number
  console.log(i);
}

// from 10.... until 0.... each iteration I will minus by one
for (var i = 10; i > 0; i--){
  // Show the number
  console.log(i);
}

for (var i=1; i < 10; i+=2){
  console.log(i)
}
//Multiplication table generator
var multiplier = 4;
var lines = 15;
// in this example <= meaning smaller or equals to 15
for (var i=1; i <= lines; i++){
  console.log(i+ " x " +multiplier+ " = "+ i*multiplier);
}

