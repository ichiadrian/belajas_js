//menggunakan compare menggunakan if menghasilkan nilai boolean yaitu true, false

function compare(a, b) {
  if (a > b) {
    // jika a>b menghasilkan nilai true, bagian ini akan di jalankan
    return -1; //kembalikan nilai -1, function selesai.
  } else if (a < b) {
    // jika a<b menghasilkan nilai true, bagian ini akan di jalankan
    return 1; // kembalikan nilai 1, function selesai.
  } 
    return 0; // kembalikan nilai 0, function selesai.
}

const val = compare(2,2);
console.log(val);