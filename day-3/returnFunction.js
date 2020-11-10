// membuat library function yg akan di manfaatkan oleh function lain

// terdapat 2 function yaitu rpToDollar, dan rpToDollar2 
function dollarToRP(dollarValue) {
  return dollarValue * 14000;
};
function euoToRP(euoValue) {
  return euoValue * 16000;
};

// console.log(dollarToRP(2));
// console.log(euoToRP(2));

// export function sehingga bisa di pakai oleh function lain
module.exports = { dollarToRP, euoToRP };