// contoh process syncronous
// console.log('Hello');
// console.log('Javascript');
// console.log('Coder');
// baris program di eksekusi secara urutan


//-------------------------------------------------------------
// contoh process ayncronous
// function asyncFunction(){
//   console.log("Hello");

// // setTimeout adalah fungsi internal js untuk menunda proses selama waktu yg di tentukan (miliseconds)
// setTimeout(() => {
//     console.log("Javascript");
//   }, 100); // tunda selama 100 miliseconds
//   console.log("Coder");
// }

// asyncFunction();

// agar berjalan berurutan, bisa menggunakan callback
// ------------------------------------------------------------
function p1() {
  console.log("Hello");
}

// function p2 memiliki input berupa function yg nanti akan di eksekusi jika proses utama sudah selesai
function p2(callback) {
  setTimeout(function () {
    console.log("Javascript");
    callback(); // jalankan function input yaitu p3
  }, 100);
}

// function yg akan di eksekusi function p2 sebagai callback
function p3() {
  console.log("Coder");
}


p1();   // jalankan p1
p2(p3); // jalankan p2, kemudian eksekusi p3 didalam p2


// const fs = require('fs');

// function readFileCallback(err, data) {
//   if (err) {
//     console.log("Error Read File :" + err);
//   } else {
//     console.log(data.toString());
//   }
// }
// let data = fs.readFile("filter.js", readFileCallback);
