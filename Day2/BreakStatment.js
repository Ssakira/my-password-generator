//Break statemnt is sttament where you are searching for a specific item and you encountered it then it stops
/* resl life scenario --> suppose you are checking a list of a customer to see If a customer name Sita exist.
As soon as you find customer Sita you break out of that loop */

const customer =["Ram","Hari","Sita","Rita","Shyam"];
for(let i =0; i<customer.length; i++)
{
  if(customer[i] ==="Sita"){
    break;
  }
    console.log(customer[i]);
  
  }

