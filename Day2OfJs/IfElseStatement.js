//making decision.There might be condition if asked about true condiiton then should display block of code where condition is true and if its not true then execute false block of code
/* In real world scenario --->  Lets say Traffic light decision
You decide whether to stop go or slow down based on the traffic light */

let trafficLight = "green";
if(trafficLight === "red"){
  console.log("Stop!");
}else if(trafficLight ==="green"){
  console.log("Go!");
}else if(trafficLight === "yellow"){
  console.log("slow down!");
}else{
  console.log("Invalid traffic light color");
}