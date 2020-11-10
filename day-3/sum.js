// membuat function hello tanpa input, dan tidak menghasilkan value karena tidak ada return didalam function

function hello(){
  console.log('hello');
}

hello();

// membuat function sum dengan 2 input, menghasilkan value berupa penjumlahan 2 input
function sum(number1, number2) {
  return number1 + number2; // value yg dihasilkan
}

let total1 = sum(2, 3);
let total2 = sum(5, 10);
let total3 = sum(2, 3);

// untuk melihat value, bisa di console.log()
console.log(total1);
console.log(total2);
console.log(total3);

