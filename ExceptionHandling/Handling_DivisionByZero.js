function divide(a, b) {
  try {
      if (b === 0) throw new Error("Cannot divide by zero!"); //custom error
      return a / b;
  } catch (error) {
      console.error("Math Error:", error.message);
  }
}

console.log(divide(10, 2)); 
console.log(divide(10, 0)); 
