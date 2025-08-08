//loop statemnets

//A looping statement is a programming instruction that repeats a block of code as long as a certain condition is true.

// There are three types of looping statement 
//1.while
//2.do while
//3.for

// While loop:- The while loop in JavaScript is used to repeat a block of code as long as a given condition is true.

// while syntax

// while(condition){
// statements
// update the condition)
// }

// example:-

// print even number from 1 t0 100 using while loop

  let num = 1;
  while (num <= 100) {
    if (num % 2 == 0) {
        console.log(num)
     }
     num++;
 }

// print odd number from 1 to 50 using while loop

let number = 1;
 while (number >= 50) {
    if (number % 2 != 0) {
        console.log(number)
    }
 }

 // factorials

// if a variable is involve in multiplication/division then initilize with 1
// if add/sub then 0

// let fact = 1;
// let number = 10;
// while (number > 0) {
//     fact = fact * number;
//     number--;
// }
// console.log("Factorial: " + fact);


// let num1 = 1;
// while (num1 <= 10) {
//     let fact = 1;
//     let i = 1;

//     while (i <= num1) {
//         fact *= i;
//         i++;
//     }

//     console.log("Factorial of " + num1 + " is: " + fact);
//     num++;
// }


// Sum Of digits of a number using while loop

let num1 = 1402;
let sum = 0;
let digit = 0;

while(num1 > 0){
    digit = num1 % 10; // last digit
    sum  = sum + digit; //add the digit to sum
    num1 = parseInt(num1 / 10); // remove the last digit
}
console.log("Sum of digits: " + sum);


// Armstrong Number using while loop

let start = 1;
let end = 2000;
while(start <= end){
    let num2 = start;
    let sum = 0;
    let digit = 0;
    while(num > 0){
        digit = num2 % 10;
        sum = sum + (digit * digit * digit); // for 3 digit armstrong number
        num2 = parseInt(num / 10);
    }
    if(sum === start){
        console.log(start + " is an Armstrong number");
    }
    start++;
}