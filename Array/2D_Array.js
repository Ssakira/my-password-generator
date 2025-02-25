let arr = [
  ["Sakira", "Female", 21],
  ["Luna", "Female", 22],
  ["Sakura", "Female", 23],
  ["Luffy", "Male", 24],
];
/* for (let a = 0; a < arr.length; a++) {
  for (let b = 0; b < arr[a].length; b++) {
    console.log(arr[a][b]);
  }
}
 */

arr.forEach(person => console.log(`Name: ${person[0]}, Gender: ${person[1]}, Age: ${person[2]}`));
