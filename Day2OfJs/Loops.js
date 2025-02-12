// Loops are used to repeat block of codes multiple times
//three types of loops : for, while, do while 
/* In real world scenario --> suppose you count your steps while walking to reach a goal of 5000 steps*/

/* //while loop
let steps = 0;
while (steps<5000){
  steps += 1000;
  console.log(`steps taken: ${steps}`);
}
console.log("Goal reached!"); */

/* //for loop --> sending invitations to a list of guest for party
let guests = ["Luffy", "Zoro", "Nami", "Robin"];
for(let i=0; i< guests.length; i++){
console.log(`Sending invitation to ${guests[i]}...`);
}
 */

//doWhile --> imagine ATM withdrawal where user must enter the correct PIN code before withdrawing cash.The ATM will keep asking for the PIN at least once and will continue looping until the  correct PIN is entered.

let correctPIN ="3456";
let userPIN;
do{
  userPIN = prompt("Enter your 4-digit ATM pin:");
  if(userPIN !==correctPIN){
    console.log("Incorrect PIN.Try again");
  }
}while(userPIN !== correctPIN);
console.log("PIN accepted! You cannow withdraw cash.");
