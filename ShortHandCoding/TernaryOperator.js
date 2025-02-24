/* //LongHand
const x=20;
let answer;
if(x>8){
  answer = "greater than 8";
} else {
  answer = "less than 8";
} */


//Shorthand
// let x=10;
// const answer = x >=8 ? "greater than 8" : "less than 8";
// console.log(answer);

let x = 10;
const answer = x > 10 ? "greater than 10" : x >= 8 ? "between 8 and 10" : "less than 8";
console.log(answer);
