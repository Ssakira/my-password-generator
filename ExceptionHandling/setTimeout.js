/* try{
  setTimeout(()=>{
    console.log(animal)  //this gives an error but the catch block is not executed because code is aldready scheduled
  },1000)
}
catch(error){
  console.log('An error occured:', error.message);
} */

setTimeout(() => {
  try {
    console.log(animal);
  } catch (error) {
    console.log("An error occured:", error.message);
  }
}, 1000);
