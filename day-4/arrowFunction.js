// create arrow function
const v = () => console.log('test arrow function'); // function tanpa input, tanpa return, ditulis satu baris

// bisa di buat seperti ini
const f = () => {
  console.log('test arrow function'); // function tanpa input, tanpa nilai return
}

// execute function
f();


// deklarasi constant, tidak bisa diubat stelah di isi data
// const a = 1;
// const b = 'data';
// a = 2; // akan muncul error
// b='test'; // akan muncul error

// deklarasi object
const a = {
  key: 1
};

// isi object bisa berubah
a.key = 2; // merubah key dengan value 2
a.key2 = 3; // menambah key baru dengan nama key2 dengan value 3

// delete a.key; // constant data dari object bisa dihapus

// tapi tidak bisa dirubah ke object yg lain, menggunakan kurung {}
// a = {test : 1}; // akan muncul error

// cara lain merubah/menambah key value object dengan [string]
a['key2'] = 6;

console.log(a);