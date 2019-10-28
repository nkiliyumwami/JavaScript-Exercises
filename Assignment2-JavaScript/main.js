//JAVASCRIPT ASSIGNMENT 2

// Q1.Write the function printInt(n) taking one parameter n and print all natural numbers from 1 to n in console.

function printInt(n) {
  for (i = 1; i <= n; i++) {
    console.log(i);
  }
}
printInt(20);

//Q2.Write the function printIntRev(n) taking one parameter n and print all natural numbers in reverse in console (from n to 1).
//Hint: reverse loop in Q1

function printIntRev(n) {
  for (i = n; i >= 1; i--) {
    console.log(i);
  }
}
printIntRev(15);

/* Q3.Write the function checkInput(x) taking one parameter x and return the string ‘number’ if x is a number; return the string ‘string’ if x is a string; and return ‘boolean’ if x is a boolean. Otherwise returns -1. 
Examples:
checkInput(5) ====> ‘number’
checkInput(‘hello’)======> ‘string’
checkInput(‘5’) ======> ‘string’
checkInput(true)=====> boolean
checkInput([1,2,3,4]) =====> -1
Hint: Check JavaScript typeof 
*/

// Please uncomment a function[checkInput()] to test it's result.Thanks.
function checkInput(x) {
  if (typeof x === "string") {
    return "string";
  } else if (typeof x === "number") {
    return "number";
  } else if (typeof x === "boolean") {
    return "boolean";
  } else {
    return -1;
  }
}
//checkInput(20);
//checkInput("boston");
//checkInput([1, 2, 3, 4]);
checkInput(true);

// Other solution with "switch"

switch (typeof x) {
  case "number":
    return "number";
  case "string":
    return "string";
  case "boolean":
    return "boolean";
  default:
    return -1;
}

//Other solution combining the whole "ifs"

if (typeof x === "number" || typeof x === "boolean" || typeof x === "string")
  return typeof x;
else {
  return -1;
}

/* Q4. Write the function simpleEvenAdding(num) taking a number and add up all the even numbers from 1 to num, and return it 
	Examples: simpleEvenAdding(5) ======> 6 (because 2+4 = 6)
	       simpleEvenAdding(10) ======> 30 (because 2+4+6+8+10 = 30)
	       simpleEvenAdding(11) ======> 30 (because 2+4+6+8+10 = 30)
                  simpleEvenAdding(1) ======> 0
	       simpleEvenAdding(0) =======> 0
Hint: loop + if conditional + %
*/

// Solution number 1

function simpleEvenAdding(num) {
  //Creation a storage to store  our answer
  var solution = 0;
  //add all numbers from 1 to num
  for (var i = 1; i <= num; i++) {
    // Sort out all even numbers only.Only add if number is even.
    if (i % 2 === 0) {
      solution += i;
    }
  }
  return solution;
}
console.log(simpleEvenAdding(10));

// Solution no 2

for (var i = 0; i <= num; i += 2) {
  solution += i;
}
return solution;
console.log(simpleEvenAdding(10));

/* Q.5 Write the function letterCapitalize(str) taking a string and capitalize the first letter of each word. The given words will be separated by only one space.
	Examples:
    letterCapitalize(“hello world”) ===========> “Hello World”
letterCapitalize(“you cannot find the answer online”) =====>  “You Cannot Find The Answer Online”

Hint: There is a built-in function in JavaScript that change string into uppercase. There is also a function to separate string into an array of words. (split)
*/

function letterCapitalize(str) {
  //separate words
  var words = str.split(" ");
  // first char of each word
  //capitalize it
  var lenght = words.lenght;
  var solution = 0;
  for (var i = 0; i < lenght; i++) {
    solution += " " + words[i][0].toUpperCase() + words[i].slice(1);
  }
  return solution.join(" ");
}
console.log(letterCapitalize("hello world"));
//Check errors in question number 4 solution 2 and solution for number 5(Check Instructor video for solutions)

/* Q.6. Write the function simpleReverse(str) taking a string and return the string in reversed order. 
	Examples:
		// simpleReverse(‘hello’) ======> ‘olleh’
        // simpleReverse(‘I Love Code’) ======> ‘edoC evoL I’
        Hint: Think of how you can loop through a string or array of characters backwards to produce a new string

*/

function simpleReverse(str) {
  var length = str.length;
  var solution = " ";
  for (var i = 1; i <= lenght; i++) {
    solution += str[length - i];
  }
  return solution;
}
console.log(simpleReverse("Good Morning"));

//Solution no 2

function simpleReverse(str) {
  //transfer str into an array of char
  var charArray = str.split(" ");
  //reverse the array
  var reversedArray = charArray.reverse();
  //change array back to string
  return reversedArray.join(" ");
}
console.log(simpleReverse("Good Morning"));

/*Q.7.Write the function findDiff(arr) taking an array of numbers as parameter and return the difference between the maximum number and the minimum number (max - min). 
	Examples:
	findDiff([1,2,4,6,20, 3]) =======> 19 (Because 20 - 1 = 19)
  Hint: Looking for max, min -> max - min.
*/


function findDiff(numbers) {
  // var numbers = [1,2,3,4,5 ];
  var solution = Math.max(...numbers) - Math.min(...numbers);
  return solution;
}

findDiff([1, 2, 3, 4, 5, 6]);

/* Q.8 Write the function timeConvert(num) taking a number as parameter and return the number of hours and minutes the parameter converts to. Separate the number of hours and minutes with a colon.
	Example:
  timeConvert(61) ======> 1:1
Hint: Dividing(/) and modulo(%) the number 60.
*/

function timeConvert(num) {
  if (num < 60) {
    return 0 + " :" + num;
  } else if (num == 60) {
    return 1 + ":" + 0;
  } else if (num > 60) {
    return (num - (num % 60)) / 60 + ":" + (num % 60);
  }
}

timeConvert(125);

//other solution 1
function timeConvert(num) {
  var hour = (num - (num % 60)) / 60;
  var minutes = num % 60;
  var solution = hour + ":" + minutes;
  return solution;
}
timeConvert(72);

//Best solution
function timeConvert(num) {
  // hours
  var hour = parseInt(num / 60);
  // minutes
  var min = num % 60;
  // combine them
  return hour + ":" + min;
}

// console.log(timeConvert(59));
// Q9 Write the function findStr(str, long) taking two strings as parameters
// and return how many str you can find in long. Assume Str is not empty string.
function findStr(str, long) {
  // Solution 1
  // var longLength = long.length;
  // var strLength = str.length;
  // // counter to count the number of str in long
  // var counter = 0;
  // for (var i = 0; i <= longLength - strLength; i++) {
  //   if (str === long.slice(i, i + str.length)) {
  //     counter++;
  //   }
  // }
  // return counter;

  // Solution 2
  return long.split(str).length - 1;
}

// console.log(findStr("hi", "dasdhidasdahidashi"));

// Q10 Write the function selfDividingNumbers(left, right) taking two number
// bound as parameters and returns an array of every possible self dividing
// number between them, including the bounds.
function selfDividingNumbers(left, right) {
  // loop from left to right
  var solution = [];
  for (var i = left; i <= right; i++) {
    // check if current number is self-dividing number
    if (checkSelfDividing(i)) {
      solution.push(i);
    }
  }

  return solution;
}

// helper function to check if the num is self-dividing
function checkSelfDividing(num) {
  // change number into string foramat
  var numString = num.toString();
  // Split string into array of char
  var numArray = numString.split("");

  var length = numArray.length;
  for (var i = 0; i < length; i++) {
    // if num is not divisible by any digit
    if (num % ParseInt(numArray[i]) !== 0) {
      return false;
    }
  }
  // if num is divisible by all digits
  return true;
}

// 11. Write the function moveZeros(nums) taking an array of numbers and
// move all 0’s to the end of it while maintaining the relative order of the
// non-zero elements.
function moveZeros(nums) {
  var solution = [];
  var counter = 0;
  var length = nums.length;
  // loop through the array
  for (var i = 0; i < length; i++) {
    if (nums[i] === 0) {
      counter++;
    } else {
      solution.push(nums[i]);
    }
  }

  // adding 0s
  while (counter > 0) {
    solution.push(0);
    counter--;
  }

  return solution;
}

// Q12 Create an average(nums) function that calculates
// the average of an array of numbers.
function average(nums) {
  // get the sum
  var sum = 0;
  var length = nums.length;
  for (var i = 0; i < length; i++) {
    sum += nums[i];
  }

  // sum / length
  return sum / length;
}


