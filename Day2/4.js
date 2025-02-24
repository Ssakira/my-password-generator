//Factorial
let factorial = 1;
for (let i = 1; i <= 5; i++) {
  factorial *= i;
}
console.log(factorial);


/*
    value of i    (factorial*=i)   (Updated)
    1st	1	         1 * 1	          1
    2nd	2	         1 * 2  	        2
    3rd	3	         2 * 3	          6
    4th	4	         6 * 4	          24
    5th	5	         24 * 5	          120 */