// penggunaan reduce

const array = [1, 1, 2, 2, 3, 3];

// dipakai untuk menjumlah nilai didalam array
// nilai p adalah nilai previous akan diisi oleh 0
// nilai c adalah nilai current
// nilai i adalah index dari array
const reduceVal = array.reduce((p,c,i) => {
  console.log(p,c,i);
  return p+c;
 },0); // nilai yg dipakai sebagai default value untuk previous saat process baru di mulai

 console.log(reduceVal);


// bisa dipakai juga untuk merubah array of object menjadi object baru
 const pokemon = [
   { name: "charmander", type: "fire" },
   { name: "squirtle", type: "water" },
   { name: "bulbasaur", type: "grass" },
 ];

 const getMapFromArray = (data) =>
   data.reduce((acc, item) => {
     // add object key to our object i.e. charmander: { type: 'water' }
     acc[item.name] = { type: item.type };
     return acc;
   }, {});

console.log(getMapFromArray(pokemon));