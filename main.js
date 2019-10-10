window.setTimeout(function() {
 /*

// FOR AND WHILE
//1. WHILE
/* var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
//2.FOR
for (var i = 0; i < 10; i++) {
  console.log(i);
}
var i = 0;
while (i < 5) {
  var j = 0;
  while (j < 3) {
    console.log(i, j);
    j++;
  }
  i++;
}


// NESTED LOOPS
var num = 0;
for (i = 0; i < 4; i++) {
  for (j = 0; j < 4; j++) {
    num++;
  }
}
console.log(num);

// WHILE LOOPS AND FOR LOOPS SAME

console.log("Printing out numbers using both for loop and while loop")
var num = -10;
while(num <= 19){
  console.log(num);
  num++;
}

for(var num = -10 ; num <= 19; num++){
  console.log(num);
}
console.log("Even numbers between 10 and 40")
var num = 10;
while(num <= 40){
  if(num % 2 === 0){
    console.log(num);
  }
  num++;
}

for(var num = 10; num <= 40 ;num++){
  if(num % 2 === 0){
    console.log(num);
  }
}

console.log("Odds numbers between 300 and 333")
var num = 300;
while(num <= 333){
  if(num % 2 !== 0){
    console.log(num);
  }
  num++;
}

for (var num = 300; num <= 333; num++){
  if( num % 2 !== 0){
    console.log(num);
  }
}

console.log("Printing all numbers divisible by 5 and 3; between 5 and 50")
var num = 5;
while(num <= 50){
  if(num % 5 === 0 && num % 3 ===0){
    console.log(num);
  }
  num++;
}

for(var num = 5; num <= 50; num++){
  if(num % 5 === 0 && num % 3 === 0){
    console.log(num);
  }
}

// FUNCTIONS

 A fucntions is container of different code, you declare it and then you call it

//Here I declare a function'divisibleBy5And3' and store in it the code to print out the divisible using for loop and oddNumber using while loop

function divisibleBy5And3(){
  for(var num = 5; num <= 50; num++){
  if(num % 5 === 0 && num % 3 === 0){
    console.log(num);
  }
}
}

function oddNumbers(){
  var num = 300;
while(num <= 333){
  if(num % 2 !== 0){
    console.log(num);
  }
  num++;
}

}

// ARGUMENTS

function sayHello(name){
  console.log("Hello there " + name);
}

function greet(person1, person2, person3){
  console.log("Hello " + person1);
  console.log("Hello " + person2);
  console.log("Hello " + person3);

}

// Exercise on Functions

function test(x,y){
  return y-x;
}

// Here is a trick! When there is return, the function stop there, so the code after return will not execute!!
function test(x){
  return x *2 ;
  console.log(x);
  return x/2;
}
// QUIZ ON IF

var t =60;
while(t>= 0){
  switch(t){
    case 50:
      console.log("Orbiter transferts from gounds to internal power");
      break;
    case 31:
      console.log("Ground...");
      break;
      case 0:
      console.log("Solid rocket booster");
      break;
    default:
    console.log("T -" +t +" seconds");

  }
  t--;

  }
   Write a nested for loop to print out all of the different seat combinations in the theater
 * The first row-seat combination should be 0-0 
 * The last row-seat combination will be 25-99
 * 
 * Things to note: 
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 
  for(var row = 0; row <=25; row++){
    for(var seat = 0; seat <=99; seat++){
      console.log(row + "-" +seat);
    }
  }

  // A function to tell if a number is even(true), otherwise print false.

function isEven(x){
  if(x % 2 ===0){
    return(true)
  }
  else{
    return(false)
  }
}

// Short version solution of the same question

function isEven(x){
  return x % 2 === 0;
}

function laugh (y) {

  var y =("hahahahah!");
  return y ;
console.log(y);
}
laugh();


function add(x, y) {
  return x + y;
}



function divideByTwo(num) {
  return num / 2;
}



var sum = add(5, 7); 
var average = divideByTwo(sum);


// TO DO APP

/*
var todos =["Buy a New Turtle"];
var input = prompt("What would you like to do?");


while (input !== "quit"){

  // HANDLE INPUT
  if (input === "list") {
  console.log(todos);
} else if (input === "new") {
  // ASK FOR NEW TO DO
  var newTodo = prompt("Enter new todo");
  todos.push(newTodo);

  // ASK AGAIN FOR NEW INPUT
}
input = prompt("What would you like to do?");

}
console.log("OK, YOU QUIT THE APP");

*/

// ARRAY ITERATION 
// LOOP INTO IN AN ARRAY USING "FOR"


var colors = [ "red", "orange", "yellow", "green" ];
for(var i = 0; i < colors.length; i++){
  alert(colors[i]);
}

alert("Those two methods give us the same result bu the forEach is much better");

//LOOP INTO IN AN ARRAY USING "FOR EACH"
  var colors = ["blue", "white", "purple", "beige"];
  colors.forEach(function(color){
    alert(color);
  });

// SAME ANSWER USING WHILE LOOP
alert("For while loop, you have to define a variable: here count, make make the conditions, then output and finally increment or decrement the variable");

var colors = ["umutuku", "umuhondo","icyatsi kibisi", "umukara"]
var count = 0;
while (count < colors.length){
  alert(colors[count]);
  count++;
}

// For Loop Array exercise

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14];
for(var i = 1; i <= 14; i++){
  if (i % 3 === 0) {
    alert(i);
  }
}

// This and most of other exercise here are from Udemy course ya Ernest)

























































































































































































































































































































































































































































































































}, 500);


