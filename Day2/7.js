//write a program to print "try again" until the user enters the correct number.
let correctNumber = 5;
let i;
while (i != correctNumber) {
  i = prompt("Enter the number");
  console.log("Try again!!");
}
console.log("you have enterd the number");
