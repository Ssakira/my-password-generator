//Compares two values and return a boolean result (true or false)
/* In real life scenario --> we can apply it on free shipping eligibility 
 customer get free shipping basded on their total order amount
 If the order amount is < and eual to 500, shipping charge is Rs 50
 If order amount s between 500 and 2000, shipping charge is Rs 20
 And if order amount is Rs 2000 or more, shipping is completely free */

function ShippingEligibility(totalAmount) {
  let ShippingCharge;

  if (totalAmount >= 2000) {
    ShippingCharge = 0;
  } else if (totalAmount >= 500) {
    ShippingCharge = 20;
  } else {
    ShippingCharge = 50;
  }
  let finalAmount = totalAmount + ShippingCharge;
  console.log(
    `Total order: ${totalAmount}, Shipping : ${ShippingCharge}, FinalAmount : ${finalAmount}`
  );
}

ShippingEligibility(300);
ShippingEligibility(1500);
ShippingEligibility(3500);
