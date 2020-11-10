// filter dipakai untuk mencari semua kategori yg sesuai
const array = [1,1,2,2,3,3];

// akan menghasilkan array [1, 1]
console.log(array.filter((x) => {
 return x === 1;
}));
