try {
  console.log(myVar);   //Throws reference error
} catch (error) {
  console.error("Error: Variable is not defined!", error.message);
}
