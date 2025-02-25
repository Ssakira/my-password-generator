let arr = [
  ["Sakira", "Female", 21],
  ["Luna", "Female", 24],
];
arr.push(["Luffy", "Male", 27]); //Adding a new row
arr[2].push("Javascript"); //Adding element to an existing row
for (let a = 0; a < arr.length; a++) {
  arr[a].push("Latest");   //Adding elements using loop
}
arr[1][1]= 100;  //Adding at a specific position
console.log(arr);
