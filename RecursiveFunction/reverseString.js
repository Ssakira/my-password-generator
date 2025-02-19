function reverseString(str){
  if (str === ""){
    return "";
  }else return reverseString(str.substr(1))+str.charAt(0);
}
console.log(reverseString("technology"));


 //reverseString("technology") --> reverseString("echnology")+t
 //reverseString("echnology") --> reverseString("chnology")+e
 //reverseString("chnology") --> reverseString("hnology")+c
 //reverseString("hnology") --> reverseString("nology")+h
 //reverseString("nology") --> reverseString("ology")+n
 //reverseString("ology") --> reverseString("logy")+o
  //reverseString("logy") --> reverseString("ogy")+l
   //reverseString("ogy") --> reverseString("gy")+o
    //reverseString("gy") --> reverseString("y")+g
        //reverseString("y") --> reverseString("")+y
            //reverseString("") --> ""