/* let a = "What is your age?";
a = Number.parseInt(a);   //changed string into number
console.log(typeof a);    //output:number
 */

let age = 18;
if (age < 16) {
  console.log("You cannot drive");
} else if (age < 18 && age >= 16) {
  console.log("liscence upcomming...");
} else {
  console.log("You can drive");
}

//ternary Operator
console.log( age<18 ? "You cannot" : "drive");
//(condition? "yes" : "No")
